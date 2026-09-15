---
group: ship
file: Kin.app
order: 0
kind: project
title: Kin.app
tagline: My bill-splitting app. Designed, built and shipped solo on iOS and Android.
status: private
period: Jan 2026 — present
treeMeta: kotlin · react native
stack: [Kotlin, Ktor, Exposed, PostgreSQL, React Native, Expo, TypeScript, Python, FastAPI, k6, Fly.io]
links:
  - { label: "App Store", href: "https://apps.apple.com/app/id6763578086" }
  - { label: "Google Play", href: "https://play.google.com/store/apps/details?id=app.kinsplit.mobile" }
  - { label: "kin-split.app", href: "https://www.kin-split.app" }
---

Kin.app lets everyone claim what they ordered on a shared receipt. Tax and service charges follow
the items, so nobody pays for a coffee they didn't drink.

I designed the product, built the Kotlin backend, React Native app and Python receipt scanner,
and shipped it to the [App Store](https://apps.apple.com/app/id6763578086) and
[Google Play](https://play.google.com/store/apps/details?id=app.kinsplit.mobile).

### What I built

- **Balances you can trace.** A double-entry ledger records who owes whom and which debts each
  payment settles. Corrections reverse and repost transactions, preserving the history.
- **Receipt scanning at about 0.8¢ a scan.** A small model uses OCR, image cropping and arithmetic
  tools, followed by deterministic corrections. Scans take about 9 seconds, evaluated against
  a set of 70 receipts.
- **Fast item claiming.** Reposting a receipt's ledger transaction measured 104 ms p95 in k6
  load tests against the real HTTP API.
- **Architecture enforced by tests.** More than 150 automated rules check source code, database
  schema, API routes and UI consistency. End-to-end tests exercise the app against a real backend.

Built with coding agents and reviewed line by line. I own the product decisions, architecture
and release process.
