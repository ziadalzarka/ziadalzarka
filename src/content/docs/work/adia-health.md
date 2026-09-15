---
group: work
file: adia-health.md
order: 2
kind: role
title: Adia Health
role: Senior Software Engineer
period: Jan 2021 — Jun 2025
place: Los Angeles, US · remote
treeMeta: medical AI · data recovery
stack: [TypeScript, React, NestJS, Cassandra, DynamoDB, AWS Neptune, PostgreSQL, Python, OpenSearch, SageMaker, Kafka]
---

Formerly Flow Health. I led technical development of an AI-powered medical assistant for
laboratories, physicians and insurers.

### clinical and insurance products

- Built AI-assisted diagnosis and test recommendations, connecting medical knowledge with the
  clinical workflows physicians use.
- Delivered insurance claim-filing and fee-schedule workflows alongside the medical assistant.
- Integrated vector search into the medical knowledge graph on AWS OpenSearch, and built ingestion
  pipelines normalising unstructured medical histories so clinical information is searchable and
  usable in the product.
- Wrote embedded software streaming results off Sysmex lab analysers into the platform.

### data platforms and reliability

- Recovered a completely lost production database — on the order of 1.5 billion records — by
  replaying events reconstructed from Kafka, CloudWatch and S3.
- Migrated the primary datastore from Cassandra to DynamoDB, improving availability and
  performance while cutting maintenance and cost by 90%.
- Introduced a graph database for relationship-heavy queries, cutting aggregation latency by 35%.
- Reworked data services to remove race conditions and ACL overhead, cutting latency a further 20%.
- Built real-time replication across databases.
- Set the team's CI, code-standards and RFC practices.
