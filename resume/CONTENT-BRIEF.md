# Content brief — résumé source of truth

For the session building the site. `resume/resume.html` is the canonical copy of Ziad's
professional history; mirror it rather than re-deriving facts from memory or from the old PDF.

## Assets

| Path | What it is |
|---|---|
| `resume/resume.html` | **Source of truth.** Edit this, never the PDF |
| `resume/Ziad Alzarka - Resume.pdf` | 2-page A4 render (link this for download) |
| `resume/resume-ats-text.txt` | Plain-text extraction — handy for copying prose |
| `resume/build.sh` | Re-renders the PDF and re-runs the ATS check |
| `resume/backups/2026-09-15-detailed/` | Unchanged backup of the detailed version, with checksums |
| `src/pages/resume.astro` | HTML preview of the canonical source at `/resume`, with hot reload |

The old PDF in iCloud (`Heap/Work/resumes/`) is **stale** — it ends at Ankor and predates
the Light role. Do not use it as a source.

## Positioning — how Ziad wants to be described

In his words: expert in the **financial and medical domains**, in **software architecture**,
in **building data-intensive systems**, and in **automating with AI agents / building AI workflows**.

Two rules he corrected me on, both worth carrying into site copy:

1. **Do not make the story Light-specific.** He is not "the guy from Light." Employers are
   evidence for the expertise; they are not the identity. The résumé summary was rewritten
   for exactly this reason — read it before writing any hero or about copy.
2. **Both domains carry equal weight.** Fintech (Light, Ankor) and medical (Adia Health)
   are a deliberate pair, not a main thread plus a footnote.

On 2026-09-15, Ziad requested a mix of senior engineering, AI and platform positioning,
also suitable for general engineering and consulting. The résumé headline is now
**Senior Software Engineer | Platform, Product & AI**. Kin.app leads the projects section
with solo product ownership; peel follows as an open-source developer tool, then iCloud Image
Labeler. Magmooty was removed from projects at Ziad's request, then added back on 2026-09-15 as one
line in Earlier Experience: a tutoring-centre management platform he started in 2016 as Coretrix. Use the numeral **10 years** throughout the résumé and website.

Ziad found the detailed version too dense. The current version uses 10pt body text, 1.4 line
spacing and wider margins, with two-line achievement bullets and one compact skills section.
The original detailed summary is retained at Ziad's request. Light and Ankor are on page 1;
Adia Health starts page 2, followed by projects, earlier experience, skills and education.
Keep the detailed backup unchanged when editing the current version.

Keep product contributions prominent alongside platform achievements. For Ankor, omit the
settlement tracking / audit trail / refund accrual forecast bullet (Ziad removed it on 2026-09-15)
and the customer-count launch bullet. Adia Health should cover clinical recommendations, claims and lab-data integration.
Light should name concrete features, incidents and numbers, following the rules below.

Later on 2026-09-15 Ziad said the capability-only copy for Light, Ankor and Adia Health was far
too simple, and asked for the specifics back on both the résumé and the site. Use the detailed
backup for Ankor, Adia Health and older roles. The source for Light is his Notion page
"Ziad at Light" (https://app.notion.com/p/uselight/Ziad-at-Light-2fcf9bd84c8c807eacfceaa39f7855e8,
last edited 2026-09-14). Name concrete features, production incidents and numbers from it. Still leave out:

- customer, partner and colleague names, until Ziad approves naming them
- internal names such as Jarvis and AMC; say what the thing does instead. Lucid, the docs and
  ADR system, can be named (Ziad asked on 2026-09-15)
- the March security incident, the bank-detail exposure, and incident dates
- PR and commit counts
- the SQL `CASCADE` ban (Ziad asked on 2026-09-15 not to mention it)

The three Light incidents are: a platform outage,
database connection-pool exhaustion from ledger pagination (cursor pagination and a 10k offset cap),
and out-of-memory pod crashes from a 15.4M-row load. Only one was caused by pagination, so do not
reuse the old backup's "took production down twice" wording.
Do not include the Anthropic API/AWS Bedrock migration in the résumé or website copy;
Ziad considers it irrelevant to this positioning.

Kin.app is available on **iOS and Android**, confirmed by Ziad on 2026-09-15, but copy should just
say "app", not "iOS and Android" (Ziad asked on 2026-09-15). Link both stores:
[App Store](https://apps.apple.com/app/id6763578086) and
[Google Play](https://play.google.com/store/apps/details?id=app.kinsplit.mobile).
Kin's AI features, checked in the Kin repo on 2026-09-15: an AI receipt reader (~0.8¢ and ~9s per scan; escalates
to a stronger model when OCR and the small model disagree; 97% accuracy on 500 receipts across scripts,
languages, tax rules and formats, per Ziad on 2026-09-15), a voice assistant with live transcription,
and an MCP server that lets personal AI agents read receipts and balances. Don't mention OAuth
(Ziad asked on 2026-09-15). Don't mention the
70-receipt eval set. The receipt reader now runs in the Kotlin backend, not a Python service.
Kin's 150+ architecture rules are fitness functions (Ziad took the idea from *Software Architecture:
The Hard Parts*) that govern how AI changes the codebase; describe them that way.

## Hard factual constraints

These are corrections Ziad made to my first draft. Repeating any of them on the site would
reintroduce an error he has already caught.

| ❌ Do not say | ✅ Reality |
|---|---|
| "Built MCP tools for procurement / journal-entry writes" | He **extended existing** MCP tools (`AttachFilesTool`, `CreateJournalEntryTool`). He did not author them. MCP is safe to claim only as: wired MCP server access (Slack, Linear, Datadog, GitHub) into agents, and modified existing tools |
| "229 merged pull requests" | **Confidential and irrelevant.** Never publish a commit or PR count |
| Ankor.app "July 2025 – Present" | Ankor ended **November 2025**. Light began **December 2025**. No overlap |
| "Bechelor" | *Bachelor* of Science, Computer Science |

He did **not** found or lead the AI platform — never claim either. What he did build can be
named: an autonomous AI coding agent whose reviewers became the team's PR review tooling, a security
reviewer on every PR, and the docs and architecture decision record system with the skills that write it.

## Verified facts

Roles, in order. Dates are confirmed:

| Employer | Title | Dates | Location |
|---|---|---|---|
| Light | Senior Software Engineer, Procure-to-Pay & Record-to-Report | Dec 2025 – Present | Copenhagen, Denmark (Remote) |
| Ankor.app | Senior Software Engineer | Jul 2025 – Nov 2025 | Malmö, Sweden (Remote) |
| Adia Health (formerly Flow Health) | Senior Software Engineer | Jan 2021 – Jun 2025 | Los Angeles, US (Remote) |
| CoatConnect | Software Engineer | Jan 2019 – Dec 2020 | Cairo, Egypt |
| BirdCloud | Software Engineer | Jan 2017 – Dec 2018 | Cairo, Egypt |

Contact and links:

- ziadalzarka@gmail.com · +20 109 670 7442 · **Cairo, Egypt** (remote) — use Cairo, never Damanhur
- linkedin.com/in/ziadalzarka · github.com/ziadalzarka · medium.com/@ziadalzarka
- Education: BSc Computer Science, 2018–2022 (institution omitted by choice)
- Languages: English (bilingual), Arabic (native)

## Metrics — confirmed accurate

Ziad confirmed all of these on 2026-08-14. Use them at full strength; they are strong enough
to carry a hero stat, and they are already stated unhedged in `resume.html`:

- Adia Health: ~1.5B records recovered · 90% cost reduction · 35% and 20% latency reductions
- CoatConnect: 1.7s LCP
- BirdCloud: 20% more clients, 30% revenue increase
- Light, from Ziad's Notion page: ~17.5 GB of indexes reclaimed · ~10x faster integration tests ·
  failed bank payments ~3% to near zero · 15.4M-row out-of-memory root cause
- Light AI reviewers, from a GitHub review of Dec 2025 – Sep 2026: code reviewer on 1,708 PRs with
  47 findings the PR author confirmed as real · security agent on 3,151 PRs with 6 confirmed findings,
  one of them deferred. Publish as 1,700+ PRs, 45+ bugs and 5+ vulnerabilities; these are lower bounds.
  Only a couple of the security findings are clearly severe, so don't call all of them severe. Ziad built and maintains the
  review workflows, but another engineer improved the reviewer prompts, so don't say he wrote all of them

Ankor's product work is documented in the detailed backup.

## Design tokens used in the PDF

Match these if you want the site and résumé to read as one system:

| Token | Value |
|---|---|
| Accent | `#0d7a63` (deep teal) |
| Ink | `#14181d` |
| Muted body | `#4a5560` |
| Faint / meta | `#6b7680` |
| Rule | `#d8dee3` |
| Type | Helvetica Neue / system sans; tight tracking on the display name |

Headings are uppercase with `letter-spacing: 1px`. **Do not raise that above 1px in the PDF** —
at 1.3px the PDF text layer fragments (`E D U C AT I O N`) and ATS parsers stop recognising the
section. `build.sh` guards this. Irrelevant for HTML, which has a real DOM.

## Open questions Ziad hasn't answered yet

Affects both résumé and site:

1. Exact job title at Light — is "Procure-to-Pay & Record-to-Report" right, or plain Senior Software Engineer?
   LinkedIn currently says plain "Senior Software Engineer"
2. ~~Light's location/HQ~~ — answered: **Copenhagen, Capital Region of Denmark · Remote**
3. Is the job search public? Customer names stay out of the Light copy until Ziad says otherwise.
4. Is the Medium blog still active? A dead link costs more than a missing one
5. The résumé headline and summary were aligned on 2026-09-15. Site and LinkedIn headline
   alignment remains a separate task.
