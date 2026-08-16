import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const bg = '#0a100f';
const amber = '#e9a13b';

const CURSOR_W = 0.34;
const CURSOR_H = 0.52;

const even = (n) => 2 * Math.round(n / 2);

function tile(size) {
  const w = even(size * CURSOR_W);
  const h = even(size * CURSOR_H);
  const x = (size - w) / 2;
  const y = (size - h) / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${bg}"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${amber}"/>
</svg>`;
}

const png = (size) =>
  sharp(Buffer.from(tile(size))).png({ compressionLevel: 9 }).toBuffer();

function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = 6 + images.length * 16;

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const out = (name, data) => {
  writeFileSync(new URL(`../public/${name}`, import.meta.url), data);
  console.log(`${name} — ${(data.length / 1024).toFixed(1)}kB`);
};

const PNGS = [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192x192.png', 192],
  ['android-chrome-512x512.png', 512],
  ['mstile-150x150.png', 150],
];

for (const [name, size] of PNGS) {
  out(name, await png(size));
}

const icoSizes = [16, 32, 48];
out(
  'favicon.ico',
  ico(await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(size) }))))
);

const w = even(16 * CURSOR_W);
const h = even(16 * CURSOR_H);
out(
  'safari-pinned-tab.svg',
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <rect x="${(16 - w) / 2}" y="${(16 - h) / 2}" width="${w}" height="${h}" fill="black"/>
</svg>
`
  )
);
