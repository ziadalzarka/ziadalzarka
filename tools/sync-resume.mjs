/**
 * The résumé is authored in resume/ and rendered to a PDF there. The site serves a
 * copy at /resume.pdf, so refresh it before every build rather than letting the two
 * drift. Missing source is not an error — the committed copy stays.
 */
import { copyFileSync, existsSync } from 'node:fs';

const src = new URL('../resume/Ziad Alzarka - Resume.pdf', import.meta.url);
const dest = new URL('../public/resume.pdf', import.meta.url);

if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log('[resume] public/resume.pdf refreshed from resume/');
} else {
  console.warn('[resume] no resume/ PDF found — keeping the committed public/resume.pdf');
}
