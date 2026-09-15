# Ziad Alzarka

**Senior software engineer and systems architect.** 10 years building data-intensive
platforms in two domains where a wrong number is somebody's real problem — **finance**
(double-entry ledgers, reconciliation, AP automation) and **medicine** (AI diagnosis, claims,
lab data pipelines).

Lately a lot of my work is AI in engineering: I set my team's standards for AI tooling, and built
AI reviewers that have checked 1,700+ pull requests, caught 45+ bugs and stopped 5+ security
vulnerabilities before merge.

[**ziadalzarka.dev**](https://ziadalzarka.dev) · [Résumé](https://ziadalzarka.dev/resume.pdf) ·
[LinkedIn](https://linkedin.com/in/ziadalzarka) · [Medium](https://medium.com/@ziadalzarka) ·
[ziadalzarka@gmail.com](mailto:ziadalzarka@gmail.com)

---

## What I work on

| | |
|---|---|
| **Distributed & offline-first** | Sync engines, replication topologies, conflict resolution, clock design — and reconstructing state from event logs when a datastore is gone |
| **Fintech data** | Payment-provider integrations, transaction matching, double-entry ledger design, and the pipelines underneath them |
| **AI in the engineering loop** | AI code and security reviewers, ticket-to-PR agent workflows, MCP servers, and fitness functions that keep AI-written code consistent |
| **Architecture & product** | Zero-to-production builds and second opinions. Kotlin/JVM, TypeScript, React, NestJS, Postgres, AWS, GCP |

## Experience

**[Light](https://light.inc)** — Senior Software Engineer, Procure-to-Pay & Record-to-Report ·
*Dec 2025 – present*
Led intercompany invoicing end to end and built three-way matching. Root-caused and fixed three
production incidents, including a platform outage; cut failed bank payments from ~3% to near zero
and made the integration test suite ~10x faster. Built the team's AI code and security reviewers
and Lucid, its docs and architecture decision record system.

**Ankor.app** — Senior Software Engineer · *Jul – Nov 2025*
Led a financial reconciliation platform from inception to production — millions of transactions a
month at 98%+ reconciliation accuracy across 5+ payment providers, with dbt pipelines behind
transaction matching and automated double-entry journals.

**[Adia Health](https://www.adia.ai/)** (formerly Flow Health) — Senior Software Engineer ·
*Jan 2021 – Jun 2025*
Led development of an AI medical assistant for laboratories, physicians and insurers. Recovered a
completely lost production database of ~1.5 billion records by replaying events out of Kafka,
CloudWatch and S3, moved Cassandra to DynamoDB for 90% lower cost, and cut latency by 35% and a
further 20%.

**CoatConnect** · *2019 – 2020* — developed a medical events platform, refactored it end to end
and got it to a 1.7s Largest Contentful Paint.
**BirdCloud** · *2017 – 2018* — sped up delivery with a reusable component library and ERP modules,
growing client capacity 20% and revenue 30%.
**Magmooty** (formerly Coretrix) · *2016 – present* — a platform for tutoring centres in Egypt,
later rebuilt as an offline-first Rust app.

## Things I've built

**[Kin.app](https://kin-split.app)** *(source private)* — a bill-splitting app on the
[App Store](https://apps.apple.com/app/id6763578086) and
[Google Play](https://play.google.com/store/apps/details?id=app.kinsplit.mobile) that splits per item
instead of per head, so nobody pays for a coffee they didn't drink.
Designed, built and shipped solo. An AI receipt reader at about 0.8¢ a scan, a voice assistant that
turns live speech into receipts, an MCP server for personal AI agents, and a double-entry ledger
under every balance. 150+ fitness functions fail the build when a change breaks an architecture
rule, which is what makes "written with coding agents, reviewed line by line" mean something.

**[peel](https://github.com/ziadalzarka/peel)** — a TUI diff reviewer that stages what you
just reviewed. Every local diff tool is read-only, so reviewing and `git add` end up as two
passes over the same diff. `peel` is one pass: read a file, press `s`, and it's staged, folded
away, and the next file is in front of you.

```sh
brew install ziadalzarka/tap/peel
```

**[icloud-image-labeler](https://github.com/ziadalzarka/icloud-image-labeler)** — auto-labels an
Apple Photos library with any OpenAI-compatible LLM, writing keywords, titles, descriptions and
OCR text back into Photos.app. Built for a local model in LM Studio, so the photos never have to
leave the machine.

## Writing

<!-- BLOG-POST-LIST:START -->
- [Linking a Go static library to Rust and handling asynchronous calls](https://medium.com/@ziadalzarka/linking-a-go-static-library-to-rust-and-handling-asynchronous-calls-5672932a966b)
- [Optimizing website performance](https://medium.com/@ziadalzarka/dramatically-optimize-the-performance-of-a-website-def4b8f8aece)
<!-- BLOG-POST-LIST:END -->

## Talks and videos

- [8 projects to experiment with as a software engineer](https://www.youtube.com/watch?v=IJtH-e84iVQ)
- [Writing a reverse proxy using the Nim programming language](https://www.youtube.com/watch?v=1F_GmilUsFQ)
- [How video calls work — P2P, SFU, MCU](https://www.youtube.com/watch?v=qwtS_EOavzI)

---

I started coding at 12 and took my first paid job at 16. Most of what I write at work can't be
shared publicly, so this profile shows only a small part of it — the full picture is at
**[ziadalzarka.dev](https://ziadalzarka.dev)**.

I take on consulting and advisory work alongside my day job. If you have a system that has to be
right and currently isn't, [get in touch](mailto:ziadalzarka@gmail.com).
