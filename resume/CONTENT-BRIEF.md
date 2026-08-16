# Content brief — résumé source of truth

For the session building the site. `resume/resume.html` is the canonical copy of Ziad's
professional history; mirror it rather than re-deriving facts from memory or from the old PDF.

## Assets

| Path | What it is |
|---|---|
| `resume/resume.html` | **Source of truth.** Edit this, never the PDF |
| `resume/Ziad Alzarka - Resume.pdf` | 2-page A4 render (link this for download) |
| `resume/resume-ats-text.txt` | Plain-text extraction — handy for copying prose |
| `resume/build.sh` | Re-renders the PDF and re-runs the ATS check |

The old PDF in iCloud (`Heap/Work/resumes/`) is **stale** — it ends at Ankor and predates
the Light role. Do not use it as a source.

## Positioning — how Ziad wants to be described

In his words: expert in the **financial and medical domains**, in **software architecture**,
in **building data-intensive systems**, and in **automating with AI agents / building AI workflows**.

Two rules he corrected me on, both worth carrying into site copy:

1. **Do not make the story Light-specific.** He is not "the guy from Light." Employers are
   evidence for the expertise; they are not the identity. The résumé summary was rewritten
   for exactly this reason — read it before writing any hero or about copy.
2. **Both domains carry equal weight.** Fintech (Light, Ankor) and medical (Adia Health)
   are a deliberate pair, not a main thread plus a footnote.

## Hard factual constraints

These are corrections Ziad made to my first draft. Repeating any of them on the site would
reintroduce an error he has already caught.

| ❌ Do not say | ✅ Reality |
|---|---|
| "Built MCP tools for procurement / journal-entry writes" | He **extended existing** MCP tools (`AttachFilesTool`, `CreateJournalEntryTool`). He did not author them. MCP is safe to claim only as: wired MCP server access (Slack, Linear, Datadog, GitHub) into agents, and modified existing tools |
| "229 merged pull requests" | **Confidential and irrelevant.** Never publish a commit or PR count |
| Ankor.app "July 2025 – Present" | Ankor ended **November 2025**. Light began **December 2025**. No overlap |
| "Bechelor" | *Bachelor* of Science, Computer Science |

He did **not** found or lead the AI platform — never claim either. What he *did* author,
and can be claimed fully: the autonomous
Claude Code agent (GitHub/Linear issue → reviewed PR), the multi-agent PR review fleet
(architecture, security, product-logic, code-standards reviewers), an independent security
reviewer, the reusable skill library (planning, debugging, docs, PR authoring, release),
and per-module agent instruction files. Also the Anthropic API → AWS Bedrock migration.

## Verified facts

Roles, in order. Dates are confirmed:

| Employer | Title | Dates | Location |
|---|---|---|---|
| Light | Senior Software Engineer, Procure-to-Pay & Record-to-Report | Dec 2025 – Present | Copenhagen, Denmark (Remote) |
| Ankor.app | Senior Software Engineer | Jul 2025 – Nov 2025 | Malmö, Sweden (Remote) |
| Adia Health (formerly Flow Health) | Senior Software Engineer | Jan 2021 – Jun 2025 | Remote |
| CoatConnect | Software Engineer | Jan 2019 – Dec 2020 | Cairo, Egypt |
| BirdCloud | Software Engineer | Jan 2017 – Dec 2018 | Cairo, Egypt |

Project: **Magmooty**, Mar 2025 – Present, `github.com/magmooty/monorepo` — offline-first
distributed system in Rust/Go/Tauri.

Contact and links:

- ziadalzarka@gmail.com · +20 109 670 7442 · **Cairo, Egypt** (remote) — use Cairo, never Damanhur
- linkedin.com/in/ziadalzarka · github.com/ziadalzarka · medium.com/@ziadalzarka
- Education: BSc Computer Science, 2018–2022 (institution omitted by choice)
- Languages: English (bilingual), Arabic (native)

## Metrics — confirmed accurate

Ziad confirmed all of these on 2026-08-14. Use them at full strength; they are strong enough
to carry a hero stat, and they are already stated unhedged in `resume.html`:

- Adia Health: ~1.5B records recovered · 90% cost reduction · 35% and 20% latency reductions
- CoatConnect: 1.7s LCP
- BirdCloud: 20% more clients, 30% revenue increase

Ankor's "4 paying customers in 3 months" and the Light engineering work are his own recent
accounts and are equally solid.

## Design tokens used in the PDF

Match these if you want the site and résumé to read as one system:

| Token | Value |
|---|---|
| Accent | `#0d7a63` (deep teal) |
| Ink | `#14181d` |
| Muted body | `#4a5560` |
| Faint / meta | `#6b7680` |
| Rule | `#d8dee3` |
| Type | Helvetica Neue / system sans; tight tracking on the display name |

Headings are uppercase with `letter-spacing: 1px`. **Do not raise that above 1px in the PDF** —
at 1.3px the PDF text layer fragments (`E D U C AT I O N`) and ATS parsers stop recognising the
section. `build.sh` guards this. Irrelevant for HTML, which has a real DOM.

## Open questions Ziad hasn't answered yet

Affects both résumé and site:

1. Exact job title at Light — is "Procure-to-Pay & Record-to-Report" right, or plain Senior Software Engineer?
   LinkedIn currently says plain "Senior Software Engineer"
2. ~~Light's location/HQ~~ — answered: **Copenhagen, Capital Region of Denmark · Remote**
3. Is the job search public? Whether Light can be named, and how frankly its incidents are described
4. Is the Medium blog still active? A dead link costs more than a missing one
5. The résumé headline still reads "Senior Software Engineer — Backend, Platform & AI Systems",
   which predates the repositioning above and now sits slightly at odds with the summary.
   Worth aligning headline, site hero and LinkedIn in one pass
