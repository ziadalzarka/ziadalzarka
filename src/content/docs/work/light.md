---
group: work
file: light.md
order: 0
kind: role
title: Light
role: Senior Software Engineer — Procure-to-Pay & Record-to-Report
period: Dec 2025 — present
place: Remote
treeMeta: ledger · AP · incidents · agents
stack: [Kotlin, Java 17, Gradle, PostgreSQL, Exposed, Guice, JAX-RS, AWS, Kubernetes, Terraform, Datadog, JobRunr, Claude Agent SDK, MCP]
links:
  - { label: "light.inc", href: "https://light.inc" }
---

[Light](https://light.inc) is an agentic accounting platform — an AI-native general ledger for
companies operating across entities, countries and currencies. I work on the ledger's reliability
and the finance features built on it, and own work end to end, from customer conversations to production.

### finance products

- Led intercompany invoicing end to end, from domain research and design to building every layer.
- Built three-way matching, with automatic bill-to-purchase-order matching and goods-receipt
  confirmation, designed with the customers who needed it.
- Shipped aged AP/AR reports, EU Sales List VAT reporting and non-calendar fiscal years.
- Cut failed bank payments from about 3% to near zero with automatic retries.

### reliability and performance

- Root-caused and fixed three production incidents — a platform outage, connection-pool exhaustion
  and out-of-memory pod crashes — then added platform-wide safeguards so they don't happen again.
- Reclaimed about 17.5 GB of unused indexes, moved heavy ledger reads to the read replica, and made
  large exports resumable background jobs.
- Made the integration test suite about 10x faster.

### observability and AI engineering

- Set the team's standards for AI tooling.
- Built an autonomous AI coding agent, including a code reviewer that reviewed 1,700+ PRs and
  prevented 45+ bugs, and a security agent that prevented 5+ vulnerabilities.
- Built Lucid, the repo's docs and architecture decision record system, to spread knowledge beyond
  a few engineers, which helped new engineers onboard faster.
- Made Datadog metrics and alerts the team's default in every PR.
