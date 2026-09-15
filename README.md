# Ziad Alzarka

**Senior software engineer and systems architect.** 9 years building data-intensive
platforms in two domains where a wrong number is somebody's real problem — **finance**
(double-entry ledgers, reconciliation, AP automation) and **medicine** (AI diagnosis, claims,
lab data pipelines).

Lately a lot of my work is automating engineering itself: agents that take a ticket to a
reviewed pull request, and a fleet of independent reviewers that reads every backend PR before
a human does.

[**ziadalzarka.dev**](https://ziadalzarka.dev) · [Résumé](https://ziadalzarka.dev/resume.pdf) ·
[LinkedIn](https://linkedin.com/in/ziadalzarka) · [Medium](https://medium.com/@ziadalzarka) ·
[ziadalzarka@gmail.com](mailto:ziadalzarka@gmail.com)

---

## What I work on

| | |
|---|---|
| **Distributed & offline-first** | Sync engines, replication topologies, conflict resolution, clock design — and reconstructing state from event logs when a datastore is gone |
| **Fintech data** | Payment-provider integrations, transaction matching, double-entry ledger design, and the pipelines underneath them |
| **AI in the engineering loop** | Ticket-to-PR agent workflows, multi-agent code review, MCP server access, and the skill layer that makes agents useful on a large codebase |
| **Architecture & product** | Zero-to-production builds and second opinions. Kotlin/JVM, TypeScript, React, NestJS, Postgres, AWS, GCP |

## Experience

**[Light](https://light.inc)** — Senior Software Engineer, Procure-to-Pay & Record-to-Report ·
*Dec 2025 – present*
Own financial software from discovery to production across backend, web and infrastructure.
Improve platform reliability, engineering feedback and AI-assisted development workflows.

**Ankor.app** — Senior Software Engineer · *Jul – Nov 2025*
Led a financial reconciliation platform from inception to production — 5+ payment providers at
98%+ match accuracy, settlement tracking, audit trails and refund accrual forecasting.

**Adia Health** (formerly Flow Health) — Senior Software Engineer · *Jan 2021 – Jun 2025*
Built clinical recommendations, insurance claim-filing and lab-data workflows for an AI medical
assistant. Recovered a completely lost production database of ~1.5 billion records by replaying
events out of Kafka, CloudWatch and S3.

**CoatConnect** · *2019 – 2020* — web performance and SSR.
**BirdCloud** · *2017 – 2018* — first job, client software across legal, medical and laundry.

## Things I've built in the open

**[Kin.app](https://www.kin-split.app)** *(source private)* — a bill-splitting app on the
[App Store](https://apps.apple.com/app/id6763578086) and
[Google Play](https://play.google.com/store/apps/details?id=app.kinsplit.mobile) that splits per item
instead of per head, so nobody pays for a coffee they didn't drink.
Designed, built and shipped solo. A double-entry ledger under every balance, with payments that
record which debts they settle or offset; a receipt scanner that costs about 0.8¢ a page and scores
0.96 on a 70-receipt eval board; and 150+ executable architecture rules that fail the build, which
is what makes "written with coding agents, reviewed line by line" mean something.

**[peel](https://github.com/ziadalzarka/peel)** — a terminal diff reviewer that stages what you
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
shared publicly, so this profile is the small public edge of it — the full picture lives at
**[ziadalzarka.dev](https://ziadalzarka.dev)**.

I take on consulting and advisory work alongside my day job. If you have a system that has to be
right and currently isn't, [get in touch](mailto:ziadalzarka@gmail.com).
