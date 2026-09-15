# Local development

This repository is permanently excluded from the global `rt` rules. Run its builds,
checks and preview server locally. Do not create or use a devbox runner for this repo.

- `npm run dev -- --host 127.0.0.1` starts the site with hot reload.
- `npm run build` validates and builds the site locally.
- `/resume` previews the canonical `resume/resume.html` with hot reload.
- `resume/build.sh` renders the PDF locally with Chrome and checks text extraction.

Keep dated backups in `resume/backups/` unchanged when editing the current resume.
