---
group: ship
file: magmooty.rs
order: 1
kind: project
title: Magmooty
tagline: An offline-first distributed system for regions with unreliable connectivity.
status: private
period: Mar 2025 — present
treeMeta: rust · go · tauri
stack: [Rust, Axum, Tauri, Go, SurrealDB, RocksDB, SQLite, TypeScript, Svelte, Docker]
links:
  - { label: "github.com/magmooty/monorepo", href: "https://github.com/magmooty/monorepo" }
---

An education management platform for private tutoring centres in Egypt, where the network is
not a given. Everything works offline first and reconciles later.

- **Sync engine in Rust** on SurrealDB/RocksDB: master-replica replication over the LAN, and
  chunked last-write-wins batching with a hybrid logical clock for online sync — authenticated
  with RSA-2048/RS256 JWTs for zero data loss and MITM resistance.
- **A Go-to-Rust FFI bridge**, compiling a WhatsApp bot to a C static library (CGO `c-archive`)
  that exposes an async C ABI consumed through Rust unsafe bindings. I wrote up how that works
  in [an article](https://medium.com/@ziadalzarka/linking-a-go-static-library-to-rust-and-handling-asynchronous-calls-5672932a966b).
- **A UDP broadcast auto-discovery protocol** with subnet calculation and multi-NIC handling,
  plus a BLE peripheral scanner for proximity-based attendance.
- **An Axum REST API** with record-level permissions and time-bound 2FA, behind a Docker
  cross-compilation pipeline targeting 6 architectures with signed auto-updates and RTL Arabic
  PDF generation.
