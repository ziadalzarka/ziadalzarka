#!/usr/bin/env bash
# Regenerate the resume PDF from resume.html and verify it stays ATS-parseable.
set -euo pipefail

cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PDF="Ziad Alzarka - Resume.pdf"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PDF" "file://$PWD/resume.html" >/dev/null 2>&1

pages=$(python3 -c "d=open('$PDF','rb').read(); print(d.count(b'/Type /Page') - d.count(b'/Type /Pages'))")
echo "pages: $pages"
[ "$pages" -eq 2 ] || echo "  WARNING: expected 2 pages"

if command -v pdftotext >/dev/null; then
  pdftotext -layout "$PDF" resume-ats-text.txt
  for h in SUMMARY "WORK EXPERIENCE" PROJECTS SKILLS EDUCATION; do
    grep -q "^$h$" resume-ats-text.txt \
      && echo "  ok      $h" \
      || echo "  BROKEN  $h  (letter-spacing on h2 is fragmenting it)"
  done
else
  echo "  (install poppler for the ATS check: brew install poppler)"
fi
