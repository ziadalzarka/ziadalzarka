---
group: work
file: light.md
order: 0
kind: role
title: Light
role: Senior Software Engineer — Procure-to-Pay & Record-to-Report
period: Dec 2025 — present
place: Remote
treeMeta: ledgers · AP · agents
stack: [Kotlin, Java 17, Gradle, PostgreSQL, Exposed, Guice, JAX-RS, AWS, Kubernetes, Terraform, Datadog, JobRunr, Claude Agent SDK, MCP]
links:
  - { label: "light.inc", href: "https://light.inc" }
---

[Light](https://light.inc) is an agentic accounting platform — an AI-native general ledger that
closes the books for companies operating across entities, countries and currencies. I'm a backend
engineer on the team that owns AP automation, procurement, the approval engine and the accounting
ledger, in a Kotlin modular monolith.

### ai engineering platform

I founded and led it. The core is an autonomous Claude Code agent that turns a GitHub issue or
Linear ticket into a reviewed pull request — phased planning and execution workflows, MCP access
to Slack, Linear and Datadog, and a migration from the Anthropic API to AWS Bedrock for
compliance.

On top of that runs a multi-agent PR review fleet, now on every backend PR: independent
architecture, security, product-logic and code-standards reviewers posting inline findings,
rolled out from a pilot allowlist to the whole backend org.

I also wrote the tooling layer the org develops against — reusable planning, debugging and
documentation skills, an automated PR-authoring and release workflow, and per-module instruction
files that cut agent context overhead on a large codebase.

### ledger and platform work

- Migrated the ledger's hottest endpoints from offset to keyset pagination over multi-million-row
  tables — index-seekable row comparison, capped offset depth, read-replica routing and the
  covering indexes to match.
- Designed a durable resumable CSV export pipeline: checkpointed S3 multipart uploads with a
  72-hour resume window and hybrid sync/async delivery, so multi-million-row exports stopped
  exhausting the connection pool.
- Built the bill-to-purchase-order matching and goods-receipt flow at the core of three-way
  matching — PO number extraction from invoice OCR, automatic matching with outcome metrics, and
  interactive Slack confirmations that let requesters confirm delivery without entering the app.
- Instrumented the domain in Datadog — orphaned-approval gauges, query-shape and pagination-depth
  distributions — turning silent data-correctness failures into alertable signals, and extracted
  a reusable idempotency module now used across four domains.
