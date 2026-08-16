---
group: ship
file: peel.go
order: 0
kind: project
title: peel
tagline: A terminal diff reviewer that stages what you just reviewed.
status: public
repo: ziadalzarka/peel
treeMeta: go · tui
stack: [Go, Bubble Tea, git, Homebrew]
links:
  - { label: "github.com/ziadalzarka/peel", href: "https://github.com/ziadalzarka/peel" }
---

Every local diff-review tool is read-only, so reviewing and `git add` end up as two passes over
the same diff — you re-decide in the terminal what you decided five minutes ago in the viewer.

`peel` is one pass. Read a file, press <kbd>s</kbd>, and it's staged, folded away, and the next
file is in front of you.

- **Staging is the review.** Whole files only, so nothing writes the wrong lines into your index.
- **Notes keep up with the code.** Each comment freezes the file it was written against as a git
  object, so an edit above it moves the note with its line instead of stranding it on a number.
- **Notes an agent can read.** Comments go to JSON that Claude Code reads through a bundled skill.
- **Read-only bases.** `--rev` reviews further back than HEAD; `--pr` reviews a GitHub pull
  request from any checkout.

```sh
brew install ziadalzarka/tap/peel
```

This site borrows its interaction from `peel` — reading a file marks it off.
