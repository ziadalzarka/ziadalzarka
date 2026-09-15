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

- Built settlement tracking, audit trails and Excel financial reporting, including an ML-based
  refund accrual forecast to help merchants track payouts and account for expected refunds.
- Architected a multi-tenant platform processing millions of transactions monthly at 98%+
  reconciliation accuracy across 5+ payment providers — Shopify, Klarna, PayPal, Plaid, Adyen.
- Built a four-tier dbt and Python pipeline (raw → staging → fact → app) behind transaction
  matching, multi-currency support and automated double-entry journals.
- Delivered the product across the React frontend, GraphQL API and NestJS backend.
- Established the engineering foundations — monorepo tooling, CI/CD to GCP, and a split
  transactional (PostgreSQL) / analytical (BigQuery) data architecture.
