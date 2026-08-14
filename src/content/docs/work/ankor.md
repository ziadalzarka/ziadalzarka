---
group: work
file: ankor.md
order: 1
kind: role
title: Ankor.app
role: Senior Software Engineer
period: Jul — Nov 2025
place: Malmö, Sweden · remote
treeMeta: reconciliation · dbt
stack: [TypeScript, React, NestJS, GraphQL, PostgreSQL, BigQuery, MotherDuck, dbt, "Python (dlt)", Airflow, GCP, Auth0]
---

I led technical development of a financial reconciliation platform for e-commerce businesses,
from inception to production.

- Architected a multi-tenant SaaS platform processing millions of transactions monthly at 98%+
  reconciliation accuracy, integrating 5+ payment providers — Shopify, Klarna, PayPal, Plaid and
  Adyen.
- Built a four-tier data pipeline (raw → staging → fact → app) with dbt and Python ETL, enabling
  transaction matching, multi-currency support and automated double-entry journal generation.
- Delivered the full product surface: React/TypeScript frontend, GraphQL API and NestJS backend,
  with settlement tracking, audit trail and Excel financial reporting including an ML-based
  refunds accrual forecast.
- Established the engineering foundations — monorepo tooling, test framework, CI/CD to GCP, and a
  split transactional (PostgreSQL) / analytical (BigQuery, MotherDuck) data architecture.

We took it to production and 4 paying customers in 3 months, then wound the company down in
November when the funding didn't come together.
