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
the same diff: you read it in a viewer, then walk the whole thing again in the terminal,
re-deciding what you decided five minutes ago.

`peel` is one pass. Read a file, press <kbd>s</kbd>, and it's staged, folded away, and the next
file is in front of you — what's left open is what's left to review.

- **Staging is the review.** Whole files only, so nothing can write the wrong lines into your
  index.
- **Notes keep up with the code.** Each comment freezes the file it was written against as a git
  object, so when an agent edits above it the note moves with its line instead of staying on a
  number. Code rewritten out from under a note isn't guessed at — the note says `outdated` and
  shows where it was.
- **Notes an agent can read.** Comments go to JSON that Claude Code reads through a bundled
  skill, so "address my review comments" needs no copy-paste.
- **Read-only bases.** `--rev` reviews further back than HEAD; `--pr` reviews a GitHub pull
  request from any checkout, or none at all. A PR's notes, folds and narrative are filed under
  the PR rather than inside one clone, so you can pick the pass back up anywhere.

```sh
brew install ziadalzarka/tap/peel
```

This site borrows its interaction from `peel` — the tree on the left is a review queue, and
reading a file marks it off.
