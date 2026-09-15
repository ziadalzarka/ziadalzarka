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

### clinical and insurance products

- Built AI-assisted diagnosis and test recommendations, connecting medical knowledge with the
  clinical workflows physicians use.
- Delivered insurance claim-filing and fee-schedule workflows alongside the medical assistant.
- Integrated vector search into the medical knowledge graph and normalised unstructured medical
  histories, making clinical information searchable and usable in the product.
- Connected Sysmex lab analysers to the platform through software that streams their results.

### data platforms and reliability

- Recovered a completely lost production database — on the order of 1.5 billion records — by
  replaying events reconstructed from Kafka, CloudWatch and S3.
- Migrated the primary datastore from Cassandra to DynamoDB, improving availability while cutting
  maintenance and cost substantially.
- Introduced a graph database for relationship-heavy queries and improved the data services
  supporting the product.
- Set the team's CI, code-standards and RFC practices.
