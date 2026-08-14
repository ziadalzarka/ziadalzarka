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
    <tspan fill="${amber}">ziad</tspan>@ziadalzarka.dev
  </text>
  <text x="${W - 40}" y="33" text-anchor="end" font-family="${mono}" font-size="14"
        fill="${faint}" letter-spacing="2">README.MD</text>

  <rect x="0" y="52" width="320" height="${H - 104}" fill="${raise}"/>
  <line x1="320" y1="52" x2="320" y2="${H - 52}" stroke="${line}" stroke-width="1"/>
  <rect x="0" y="128" width="3" height="30" fill="${amber}"/>
  ${rows}

  <text x="380" y="250" font-family="${mono}" font-size="60" font-weight="700"
        fill="${text}" letter-spacing="-3">Data that</text>
  <text x="380" y="322" font-family="${mono}" font-size="60" font-weight="700"
        fill="${text}" letter-spacing="-3">isn't allowed</text>
  <text x="380" y="394" font-family="${mono}" font-size="60" font-weight="700"
        fill="${text}" letter-spacing="-3">to be <tspan fill="${amber}">wrong</tspan>.</text>

  <text x="380" y="452" font-family="${mono}" font-size="20" fill="${dim}">
    Ziad Alzarka — senior software engineer
  </text>
  <text x="380" y="482" font-family="${mono}" font-size="20" fill="${faint}">
    ledgers · sync engines · reconciliation · AI agents
  </text>

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
