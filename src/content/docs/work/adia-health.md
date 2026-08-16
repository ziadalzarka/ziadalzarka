---
group: work
file: adia-health.md
order: 2
kind: role
title: Adia Health
role: Senior Software Engineer
period: Jan 2021 — Jun 2025
place: Remote
treeMeta: medical AI · data recovery
stack: [TypeScript, React, NestJS, Cassandra, DynamoDB, AWS Neptune, PostgreSQL, Python, OpenSearch, SageMaker, Kafka]
---

Formerly Flow Health. I led technical development of an AI-powered medical assistant for
laboratories, physicians and insurers.

- Recovered a completely lost production database — on the order of 1.5 billion records — by
  replaying events reconstructed from Kafka, CloudWatch and S3.
- Migrated the primary datastore from Cassandra to DynamoDB, improving availability while cutting
  maintenance and cost substantially.
- Integrated vector search into the medical knowledge graph on AWS OpenSearch, and introduced a
  graph database for relationship-heavy queries.
- Built ingestion pipelines normalising unstructured medical history, and embedded software
  streaming results off Sysmex lab analysers.
- Set the team's CI, code-standards and RFC practices.
