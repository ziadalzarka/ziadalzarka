---
group: ship
file: Kin.app
order: 0
kind: project
title: Kin.app
tagline: My bill-splitting app. Designed, built and shipped solo.
status: private
period: Jan 2026 — present
treeMeta: kotlin · react native
site: "https://www.kin-split.app"
stack: [Kotlin, Ktor, Exposed, PostgreSQL, React Native, Expo, TypeScript, Python, FastAPI, k6, Fly.io]
links:
  - { label: "App Store", href: "https://apps.apple.com/app/id6763578086" }
  - { label: "Google Play", href: "https://play.google.com/store/apps/details?id=app.kinsplit.mobile" }
---

Kin.app lets everyone claim what they ordered on a shared receipt. Tax and service charges follow
the items, so nobody pays for a coffee they didn't drink.

I designed the product, built the Kotlin backend, React Native app and AI features,
and shipped it to the [App Store](https://apps.apple.com/app/id6763578086) and
[Google Play](https://play.google.com/store/apps/details?id=app.kinsplit.mobile).

### What I built

- **Balances you can trace.** A double-entry ledger records who owes whom and which debts each
  payment settles. Corrections reverse and repost transactions, preserving the history.
- **An AI receipt reader at about 0.8¢ a scan.** A small model reads the photo in a tool loop that
  crops, calculates and checks its own arithmetic, and a stronger model takes over when OCR and the
  small model disagree. It reaches 97% accuracy on 500 receipts in Latin and non-Latin scripts,
  across languages, tax rules and formats. Scans take about 9 seconds.
- **A voice assistant.** Live transcription turns what you say into a receipt, using the same
  permission-checked tools as the app.
- **An MCP server for personal agents.** Personal AI agents can read your receipts and balances.
- **Fast item claiming.** Reposting a receipt's ledger transaction measured 104 ms p95 in k6
  load tests against the real HTTP API.
- **Fitness functions that govern AI-written code.** More than 150 executable rules, an idea I took
  from *Software Architecture: The Hard Parts*, check source code, database schema, API routes and UI
  consistency, and fail the build when a change breaks one. They're a big part of why code written with
  AI agents stays consistent. End-to-end tests exercise the app against a real backend.

Built with coding agents and reviewed line by line. I own the product decisions, architecture
and release process.
