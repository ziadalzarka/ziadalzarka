const nodes = Array.from(document.querySelectorAll<HTMLAnchorElement>('.node'));
const docs = Array.from(document.querySelectorAll<HTMLElement>('.doc'));
const pane = document.getElementById('pane')!;
const crumb = document.getElementById('crumb')!;
const readCount = document.getElementById('read-count')!;
const help = document.getElementById('help')!;
const search = document.getElementById('search') as HTMLFormElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const noMatch = document.getElementById('no-match')!;
const post = document.getElementById('post') as HTMLAnchorElement;
const book = document.getElementById('cta-book') as HTMLAnchorElement | null;
const resume = document.getElementById('cta-resume') as HTMLAnchorElement | null;

const byId = new Map(nodes.map((n) => [n.dataset.node!, n]));
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const compact = matchMedia('(max-width: 56rem)');

/** How long a file has to hold your attention before it counts as reviewed. */
const DWELL = 1100;

let cursor = 0;
let programmatic = 0;
const read = new Set<string>();

const visibleNodes = () => nodes.filter((n) => !n.hidden);

/* ── scrolling ─────────────────────────────────────────────────────────────── */

/** How much of the top of the viewport sticky chrome covers on mobile. */
function stickyOffset() {
  const bar = document.querySelector<HTMLElement>('.bar--top');
  const rail = document.querySelector<HTMLElement>('.rail');
  return (bar?.offsetHeight ?? 0) + (rail?.offsetHeight ?? 0);
}

let glideFrame = 0;

function stopGlide() {
  cancelAnimationFrame(glideFrame);
}

function glide(from: number, to: number, apply: (top: number) => void) {
  stopGlide();
  const distance = to - from;
  if (reduced.matches || Math.abs(distance) < 2) {
    apply(to);
    return;
  }

  const duration = Math.min(420, 160 + Math.sqrt(Math.abs(distance)) * 6);
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    apply(from + distance * (1 - (1 - t) ** 3));
    programmatic = Date.now();
    if (t < 1) glideFrame = requestAnimationFrame(step);
  };
  glideFrame = requestAnimationFrame(step);
}

/**
 * The pane is the scroll container on desktop; the document scrolls on mobile.
 * scrollIntoView is not used — it no-ops against the pane — and neither is
 * `behavior: 'smooth'`, which Chrome also no-ops here, so the offset is
 * measured and applied directly.
 */
function scrollToDoc(doc: HTMLElement, { smooth = false } = {}) {
  stopGlide();

  if (compact.matches) {
    const from = window.scrollY;
    const to = from + doc.getBoundingClientRect().top - stickyOffset();
    if (smooth) glide(from, to, (top) => window.scrollTo(0, top));
    else window.scrollTo(0, to);
  } else {
    const from = pane.scrollTop;
    const to = from + doc.getBoundingClientRect().top - pane.getBoundingClientRect().top;
    if (smooth) glide(from, to, (top) => (pane.scrollTop = top));
    else pane.scrollTop = to;
  }
}

for (const input of ['wheel', 'touchstart', 'mousedown'] as const) {
  window.addEventListener(input, stopGlide, { passive: true });
}

/** Keep the selected row inside the rail without dragging the page around. */
function keepVisible(node: HTMLElement) {
  const rail = node.closest<HTMLElement>('.rail');
  if (!rail || compact.matches) return;

  const row = node.getBoundingClientRect();
  const box = rail.getBoundingClientRect();

  if (row.top < box.top) rail.scrollTop += row.top - box.top - 8;
  else if (row.bottom > box.bottom) rail.scrollTop += row.bottom - box.bottom + 8;
}

/* ── the review pass ───────────────────────────────────────────────────────── */

function markRead(id: string) {
  if (read.has(id)) return;
  read.add(id);
  byId.get(id)?.classList.add('is-read');
  readCount.textContent = String(read.size);
}

/** Whichever file you are on marks itself off once you have stayed on it. */
let dwellTimer: number | undefined;

function beginDwell(id: string) {
  clearTimeout(dwellTimer);
  if (read.has(id)) return;
  dwellTimer = window.setTimeout(() => markRead(id), DWELL);
}

/** Anything scrolled fully past counts too — a short file never fills the pane. */
function sweepPassed() {
  const floor = (compact.matches ? window.innerHeight : pane.clientHeight) * 0.5;
  for (const doc of docs) {
    if (doc.getBoundingClientRect().bottom < floor) markRead(doc.dataset.doc!);
  }
}

/* ── selection ─────────────────────────────────────────────────────────────── */

function setCurrent(node: HTMLAnchorElement) {
  for (const n of nodes) n.removeAttribute('aria-current');
  node.setAttribute('aria-current', 'true');
  cursor = nodes.indexOf(node);
  crumb.textContent = node.querySelector('.node__name')?.textContent ?? '';
  keepVisible(node);
  beginDwell(node.dataset.node!);
}

function select(index: number, { scroll = true, smooth = false } = {}) {
  const list = visibleNodes();
  if (list.length === 0) return;

  const node = list[Math.max(0, Math.min(index, list.length - 1))];
  setCurrent(node);

  if (!scroll) return;
  const doc = document.getElementById(node.dataset.node!);
  if (doc) {
    programmatic = Date.now();
    scrollToDoc(doc, { smooth });
  }
}

/* ── scroll spy ────────────────────────────────────────────────────────────── */

let queued = false;

/* A timeout rather than requestAnimationFrame: rAF is suspended while the tab is
   hidden, which would strand the review marks for anyone who scrolls away. */
function spy() {
  if (queued) return;
  queued = true;
  setTimeout(() => {
    queued = false;
    sweepPassed();

    if (Date.now() - programmatic < 400) return;

    const top = compact.matches ? stickyOffset() + 8 : 40;
    let current = docs[0];
    let nearestTop = -Infinity;
    for (const doc of docs) {
      const docTop = doc.getBoundingClientRect().top;
      if (docTop <= top && docTop > nearestTop) {
        current = doc;
        nearestTop = docTop;
      }
    }

    const node = byId.get(current.dataset.doc!);
    if (node && node.getAttribute('aria-current') !== 'true') setCurrent(node);
  }, 80);
}

pane.addEventListener('scroll', spy, { passive: true });
window.addEventListener('scroll', spy, { passive: true });
window.addEventListener('resize', spy, { passive: true });

/* A file large enough to hold the viewport marks itself off while you sit on it,
   even if you never scroll past its end. */
const observer = new IntersectionObserver(
  (entries) => {
    if (Date.now() - programmatic < 400) return;
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        beginDwell((entry.target as HTMLElement).dataset.doc!);
      }
    }
  },
  { threshold: [0, 0.5] }
);

for (const doc of docs) observer.observe(doc);

/* ── search ────────────────────────────────────────────────────────────────── */

function openSearch() {
  search.hidden = false;
  searchInput.value = '';
  filter('');
  searchInput.focus();
}

function closeSearch() {
  search.hidden = true;
  filter('');
  pane.focus({ preventScroll: true });
}

function filter(term: string) {
  const q = term.trim().toLowerCase();
  let hits = 0;

  for (const node of nodes) {
    const doc = document.getElementById(node.dataset.node!);
    const haystack = `${node.textContent} ${doc?.textContent ?? ''}`.toLowerCase();
    const match = q === '' || haystack.includes(q);
    node.hidden = !match;
    (node.parentElement as HTMLElement).hidden = !match;
    if (match) hits++;
  }

  for (const group of document.querySelectorAll<HTMLElement>('.tree__group')) {
    group.hidden = !group.querySelector('.node:not([hidden])');
  }

  noMatch.hidden = hits > 0;
}

searchInput.addEventListener('input', () => filter(searchInput.value));

search.addEventListener('submit', (e) => {
  e.preventDefault();
  if (visibleNodes().length > 0) {
    select(0);
    closeSearch();
  }
});

/* ── post review ───────────────────────────────────────────────────────────── */

function postReview() {
  const id = post.getAttribute('href')?.slice(1);
  const doc = id ? document.getElementById(id) : docs[docs.length - 1];
  if (!doc) return;

  programmatic = Date.now();
  scrollToDoc(doc);

  const node = byId.get(doc.dataset.doc!);
  if (node) setCurrent(node);

  if (!reduced.matches) {
    doc.classList.remove('is-flash');
    void doc.offsetWidth;
    doc.classList.add('is-flash');
  }
}

post.addEventListener('click', (e) => {
  e.preventDefault();
  postReview();
});

/* ── keys ──────────────────────────────────────────────────────────────────── */

const typing = (el: EventTarget | null) =>
  el instanceof HTMLElement &&
  (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);

document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  if (e.key === 'Escape') {
    if (!help.hidden) help.hidden = true;
    else if (!search.hidden) closeSearch();
    return;
  }

  if (typing(e.target)) return;

  const list = visibleNodes();
  const at = Math.max(0, list.indexOf(nodes[cursor]));

  switch (e.key) {
    case 'j':
    case 'ArrowDown':
      e.preventDefault();
      select(at + 1, { smooth: true });
      break;
    case 'k':
    case 'ArrowUp':
      e.preventDefault();
      select(at - 1, { smooth: true });
      break;
    case 'Enter':
      e.preventDefault();
      select(at);
      break;
    case 'g':
      e.preventDefault();
      select(0);
      break;
    case 'G':
      e.preventDefault();
      select(list.length - 1);
      break;
    case '/':
      e.preventDefault();
      openSearch();
      break;
    case '?':
      e.preventDefault();
      help.hidden = !help.hidden;
      break;
    case 'P':
    case 'p':
      e.preventDefault();
      postReview();
      break;
    case 'B':
    case 'b':
      e.preventDefault();
      book?.click();
      break;
    case 'R':
    case 'r':
      e.preventDefault();
      resume?.click();
      break;
  }
});

help.addEventListener('click', (e) => {
  if (e.target === help) help.hidden = true;
});

/* ── tree clicks keep the pane as the scroll container ─────────────────────── */

for (const node of nodes) {
  node.addEventListener('click', (e) => {
    e.preventDefault();
    select(visibleNodes().indexOf(node));
    history.replaceState(null, '', `#${node.dataset.node}`);
  });
}

/* Hero shortcuts into a file. A bare hash would not move the pane, which is the
   scroll container on desktop, so they go through the same selection path. */
for (const jump of document.querySelectorAll<HTMLAnchorElement>('[data-jump]')) {
  jump.addEventListener('click', (e) => {
    const id = jump.dataset.jump!;
    const node = byId.get(id);
    if (!node) return;

    e.preventDefault();
    select(visibleNodes().indexOf(node));
    history.replaceState(null, '', `#${id}`);
  });
}

/* ── boot ──────────────────────────────────────────────────────────────────── */

const fromHash = decodeURIComponent(location.hash.slice(1));
const start = fromHash && byId.has(fromHash) ? nodes.indexOf(byId.get(fromHash)!) : 0;

select(start, { scroll: Boolean(fromHash) });
spy();
