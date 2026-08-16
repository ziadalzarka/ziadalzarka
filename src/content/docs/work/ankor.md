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

- Architected a multi-tenant platform processing millions of transactions monthly at 98%+
  reconciliation accuracy across 5+ payment providers — Shopify, Klarna, PayPal, Plaid, Adyen.
- Built a four-tier dbt and Python pipeline (raw → staging → fact → app) behind transaction
  matching, multi-currency support and automated double-entry journals.
- Delivered the full product surface: React frontend, GraphQL API and NestJS backend, with
  settlement tracking, audit trail and an ML-based refunds accrual forecast.
- Established the engineering foundations — monorepo tooling, CI/CD to GCP, and a split
  transactional (PostgreSQL) / analytical (BigQuery) data architecture.

We reached production and 4 paying customers in 3 months, then wound the company down in November
when the funding didn't come together.
