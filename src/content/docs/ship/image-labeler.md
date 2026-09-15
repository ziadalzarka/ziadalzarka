---
group: ship
file: image-labeler.py
order: 3
kind: project
title: iCloud Image Labeler
tagline: Auto-label an Apple Photos library with any OpenAI-compatible LLM.
status: public
repo: ziadalzarka/icloud-image-labeler
treeMeta: python · local llm
stack: [Python, osxphotos, PhotoScript, Pillow, ffmpeg, LM Studio, Ollama]
links:
  - { label: "github.com/ziadalzarka/icloud-image-labeler", href: "https://github.com/ziadalzarka/icloud-image-labeler" }
---

Generates keywords, titles, descriptions and OCR text for photos and videos, then writes the
metadata back into Photos.app so the library becomes searchable. Built for a local model in
LM Studio — your photos never leave the machine — but it speaks to any OpenAI-compatible API.

```
Photos.app ──▶ Discovery ──▶ Export ──▶ LLM ──▶ Writer ──▶ Photos.app
               osxphotos     Pillow     API     PhotoScript
```

Discovery finds media with no keywords. Export handles JPEG with HEIC and iCloud fallbacks, and
pulls frames out of video via ffmpeg. The writer goes back in through AppleScript.
