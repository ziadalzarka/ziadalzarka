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

[Light](https://light.inc) is an agentic accounting platform — an AI-native general ledger for
companies operating across entities, countries and currencies. I'm a backend engineer on the team
that owns AP automation, procurement, the approval engine and the ledger.

### ai engineering tooling

- Built an autonomous Claude Code agent that turns a GitHub issue or Linear ticket into a reviewed
  pull request, with MCP access to Slack, Linear and Datadog.
- Built a multi-agent PR review fleet — architecture, security, product-logic and code-standards
  reviewers posting inline findings — now running on every backend PR.
- Wrote the framework the org develops against: reusable planning and debugging skills, ADRs and
  documentation, and per-module instruction files that cut agent context overhead.

### ledger and platform work

- Migrated the ledger's hottest endpoints from offset to keyset pagination over multi-million-row
  tables, with the covering indexes and read-replica routing to match.
- Designed a durable resumable CSV export pipeline on checkpointed S3 multipart uploads, so
  multi-million-row exports stopped exhausting the connection pool.
- Built the bill-to-purchase-order matching and goods-receipt flow behind three-way matching,
  including PO extraction from invoice OCR and interactive Slack confirmations.
- Instrumented the domain in Datadog, turning silent data-correctness failures into alertable
  signals, and extracted a reusable idempotency module now used across four domains.
