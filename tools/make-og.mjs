/**
 * Renders public/og.png once, locally, and it gets committed — generating it in CI
 * would pick up whatever fonts the runner happens to have.
 *
 *   node tools/make-og.mjs
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const W = 1200;
const H = 630;

const bg = '#0a100f';
const raise = '#0e1615';
const sunk = '#070c0b';
const line = '#1b2b28';
const lineLit = '#2b423d';
const text = '#d3dcd8';
const dim = '#7c918b';
const faint = '#4c5e59';
const amber = '#e9a13b';
const jade = '#58b79b';

const mono = 'Menlo, DejaVu Sans Mono, Consolas, monospace';

const files = [
  ['readme.md', true],
  ['whoami.md', true],
  ['light.md', true],
  ['ankor.md', false],
  ['adia-health.md', false],
  ['peel.go', false],
  ['magmooty.rs', false],
];

const rows = files
  .map(([name, read], i) => {
    const y = 150 + i * 34;
    const mark = read
      ? `<path d="M64 ${y - 5} l5 5 l9 -10" fill="none" stroke="${jade}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<circle cx="70" cy="${y - 4}" r="4.2" fill="none" stroke="${faint}" stroke-width="1.6"/>`;
    return `${mark}<text x="92" y="${y}" font-family="${mono}" font-size="17" fill="${
      read ? text : dim
    }">${name}</text>`;
  })
  .join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${bg}"/>

  <rect x="0" y="0" width="${W}" height="52" fill="${sunk}"/>
  <line x1="0" y1="52" x2="${W}" y2="52" stroke="${line}" stroke-width="1"/>
  <text x="40" y="33" font-family="${mono}" font-size="18" fill="${dim}">
    <tspan fill="${amber}">ziad</tspan>@prod
  </text>
  <text x="${W - 40}" y="33" text-anchor="end" font-family="${mono}" font-size="14"
        fill="${faint}" letter-spacing="2">README.MD</text>

  <rect x="0" y="52" width="320" height="${H - 104}" fill="${raise}"/>
  <line x1="320" y1="52" x2="320" y2="${H - 52}" stroke="${line}" stroke-width="1"/>
  <rect x="0" y="128" width="3" height="30" fill="${amber}"/>
  ${rows}

  <text x="380" y="268" font-family="${mono}" font-size="60" font-weight="700"
        fill="${text}" letter-spacing="-3">I make hard</text>
  <text x="380" y="340" font-family="${mono}" font-size="60" font-weight="700"
        fill="${text}" letter-spacing="-3">systems <tspan fill="${amber}">boring</tspan>.</text>

  <text x="380" y="400" font-family="${mono}" font-size="20" fill="${dim}">
    Ziad Alzarka — senior software engineer
  </text>
  <text x="380" y="430" font-family="${mono}" font-size="20" fill="${faint}">
    ledgers · medical AI · agents that ship code
  </text>

  <rect x="380" y="462" width="238" height="44" fill="${amber}"/>
  <text x="499" y="490" text-anchor="middle" font-family="${mono}" font-size="16"
        font-weight="700" fill="${bg}">Book a 30-min call</text>
  <rect x="632" y="462" width="152" height="44" fill="none" stroke="${lineLit}" stroke-width="1"/>
  <text x="708" y="490" text-anchor="middle" font-family="${mono}" font-size="16"
        fill="${text}">Résumé ↓</text>

  <rect x="0" y="${H - 52}" width="${W}" height="52" fill="${sunk}"/>
  <line x1="0" y1="${H - 52}" x2="${W}" y2="${H - 52}" stroke="${line}" stroke-width="1"/>
  <text x="40" y="${H - 19}" font-family="${mono}" font-size="14" fill="${faint}" letter-spacing="2">
    ziadalzarka.dev
  </text>
  <text x="${W - 40}" y="${H - 19}" text-anchor="end" font-family="${mono}" font-size="14"
        fill="${jade}" letter-spacing="2">3/14 REVIEWED</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(new URL('../public/og.png', import.meta.url), png);
console.log(`og.png written — ${(png.length / 1024).toFixed(1)}kB`);
