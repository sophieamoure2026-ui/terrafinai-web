# Decisions — Competitor Adoption Build (Nov 10, 2026)

Branch: `adopt-competitor-recommendations`. Static site, no backend. This file records
what was built on the static site, what genuinely needs a backend or paid service,
and what Gary must decide before anything goes live. Nothing here is signed up for,
paid for, or connected — no accounts were created.

## What was built (static, working in the browser)

| Adoption | Files | Status |
|---|---|---|
| 1. Tiered data room (LoopNet model) | `data-room.html`, `js/data-room.js` | Public teaser → registration (corporate email, generic domains refused) → e-NDA (type-to-sign + checkbox, template text, not legal advice) → Tier 3 approval request → full diligence. Shortlist tier sees the deep pack. Activity is logged locally; new-diligence banner alerts registered buyers. |
| 2. Virtual deal room per mandate (RCM model) | `deal-room.html`, `js/deal-room.js` | One room per mandate (8 live mandates from `data/mandates.json`): teaser, offering materials, tiered document library, bidder instructions, engagement panel. Engagement reporting feeds the back-office seller dashboard. |
| 3. Verification dossier (PropertyShark model) | `dossier.html`, `js/dossier.js`, `data/dossier-template.json`, `data/dossiers/starhotels.json` | 7-section template (ownership, public records, comps, zoning/permits, sales history, title, financials) with a computed verification score (never hardcoded). First real dossier: Starhotels — only figures already verified on file (2025 revenue €340M, EBITDA €108M, cross-checked Nov 4). Everything else labeled UNVERIFIED or PER MANDATE DOCUMENTATION. Nothing invented. |
| 4. Prospectus builder (Crexi Vault/Create pattern) | `prospectus-builder.html`, `js/prospectus-builder.js` | Paste OM/rent-roll/financial text → rule-based extraction (currency, keys, percentages, years, asset types) → editable structured data → auto-generated offering document (HTML + text download). Labeled rule-based, not AI. Extraction is not verification. |
| 5. Private qualified-buyer CRM + gated alerts | `back-office.html` (reworked), `js/back-office.js`, `data/buyers-template.json` | CRM table (add/edit/delete, tags: type / geography / check size / engagement / status, search/filter, export/import JSON). Gated-alerts composer: pick mandate → matching buyers → alert text → copy to clipboard (sending stays manual, by design). Seller engagement dashboard per mandate + copyable seller report. Pending Tier 3 approvals can be approved / shortlisted. Post-new-diligence flag alerts registered buyers. |
| Shared plumbing | `js/terrafin.js`, `data/mandates.json` | Tier model (0 Public Teaser / 1 Registered / 2 NDA Signed / 3 Approved), corporate-email check, activity log, access state, pure extraction + verification-score functions (unit-tested in Node). |
| Wiring | `index.html` (additive only) | Nav link "Deal Rooms"; "Enter Deal Room →" on the four new mandate cards (Starhotels, Germany, Ibiza, Brazil). No mandate figure or listing copy changed. |
| Anonymity fix | `back-office.html` | The existing IDL naming (title, header, footer, `#idl-deal-progress`) was removed — that page is served publicly by GitHub Pages and named the broker. Replaced with neutral "Internal Operations / Mandate Desk" wording. No broker or source is named on any public-facing page; terrafinai.com is the CTA. |

## What needs a backend or paid service (Gary decisions)

These pieces have a working front-end flow on the static site, but the real capability
needs a service or backend. Nothing below has been signed up for.

1. **e-NDA signing (legally binding).** The data room's e-NDA is a type-to-sign form
   with template text — a real workflow, but not a binding signature or legal advice.
   Options: **DocuSign**, **PandaDoc**, **Dropbox Sign**. Decision: which vendor, and
   counsel reviews the NDA template first (governing law is currently "[To be set
   by counsel]").
2. **Identity verification.** The data room collects a LinkedIn URL and attestation;
   real verification needs a service. Options: **Persona**, **Veriff**, **TransUnion**.
   Decision: which vendor, and what level (document check vs. full KYC) applies to
   Tier 3 approval.
3. **CRM persistence.** The CRM lives in the browser's localStorage and seeds from a
   fictional sample file. It is not shared, not backed up, and not team-accessible.
   Options: **Airtable** (fastest), **HubSpot** (heavier, sales-grade), or a custom
   backend. Decision: which, and who owns the real buyer list (it must never be
   committed to the repository).
4. **Transactional email for alerts.** Gated alerts are composed and copied by hand.
   Automated "new matching deal" alerts need an email service. Options: the existing
   Namecheap Private Email webmail (manual, current route), **Resend**, **Postmark**,
   or **SendGrid**. Decision: manual stays, or automate — and which service.
5. **AI document extraction.** The prospectus builder is rule-based (regex + keyword
   patterns). Real AI extraction — parsing an OM PDF into structured data — needs a
   backend service. Options: **OpenAI / Anthropic document APIs** behind a small
   backend, or a specialist such as **Affinda** / **Rossum**. Decision: which, and
   who pays the per-document cost.
6. **Engagement reporting (server-side).** Views/NDA requests/calls are counted in
   the visitor's own browser (localStorage). Seller reporting is only meaningful
   when events are recorded server-side. Decision: which analytics/event store
   (options: **Plausible** for views, a lightweight backend event log for the rest).
7. **Dossier data sources.** PropertyShark is US-focused — its data source does not
   transfer. Each mandate needs its own public-record source: Italy — Italian
   business register / land registry (Starhotels: Partita IVA 03360930154 to be
   re-confirmed); Germany — land registry (Grundbuch) + commercial register;
   Spain — Registro de la Propiedad; Brazil — Cartório de Registro de Imóveis.
   Comparable transactions (3–5 verified comps) are still unverified for every
   mandate. Decision: which record services to use, and who runs the per-mandate
   dossier research.

## Existing follow-ups (not part of this build, noted for completeness)

- The demo access code `TF2026` in `app.js` should be retired once the tiered data
  room is live — the tiered room replaces it. `app.js` was NOT changed in this build.
- A hardcoded RentCast API key in `app.js` is a pre-existing security issue — Gary
  should rotate it (known, not this task).
- The 48-hour Certified Prospectus is operational only when the extraction +
  verification pipeline runs end-to-end (Adoptions 3 + 4 together, with a human
  check on every figure).

## Demo build-out (Nov 10, 2026 — Gary: "build the demo out", zero-cost)

Gary reviewed the first build, understands it is a demo (not a live site) and that
hosting would be needed to go live. His order: build the demo out, with a HARD
zero-cost constraint — no paid services, no sign-ups, no hosting spend, no new
accounts, no subscriptions. Everything stays static HTML/CSS/JS + browser
localStorage; simulated flows stay clearly labeled as demo. The demo is a local
branch only — nothing deployed.

| What was added / polished | Files |
|---|---|
| Real sample diligence content at every data-room tier: Tier 1 registered buyer pack (key figures), Tier 2 full verified-figures table, Tier 3 full-diligence checklist (received vs pending), shortlist deep pack (direct deal-team access + priority updates) | `data/mandates.json` (new `figures` + `diligence` per mandate), `js/data-room.js` |
| Deal rooms: Tier 2 financials document now shows the real figures on file; shortlist document now requires the shortlist flag (distinct SHORTLIST ONLY lock state) | `js/deal-room.js` |
| Second verification dossier: Germany — 0 of 15 core fields verified (0%). Honest, not a bug: the memorandum is price-only (no operating figures, no named seller entity, Waldorf 152 vs 232 keys unresolved). The score stays honest when the file is thin. | `data/dossiers/germany-hotels.json`, `data/mandates.json` |
| Second prospectus sample: Germany Hotels OM (extract finds €677.35M / €400M / €2.75M, 12.5%, 152 keys, 232 rooms) | `js/prospectus-builder.js`, `prospectus-builder.html` |
| Back-office fixes: engagement dashboard called `TF.engagementSummary` with the wrong arguments and read `s.nda` / `s.docviews` / `s.calls` (none exist) — it showed zeros/undefined; fixed. Alert composer could never match buyers (mandates had no `type`); mandates now carry `type` and the CRM demo set (6 fictional buyers) covers all types. Added SIMULATE DEMO ACTIVITY (events tagged DEMO SIMULATION) + RESET DEMO DATA. | `js/back-office.js`, `back-office.html`, `data/buyers-template.json` |
| Demo walkthrough page + repo doc | `demo.html`, `DEMO.md`; Demo link added to the nav on all new pages + index.html |
| Anonymity cleanup: the two `david.lempert@idlglobal.net` mailto links in old `docs/` teaser files now point to the tiered data room (https://terrafinai.com/data-room.html) | `docs/project_nyc_pitchdeck.html`, `docs/project_reston_teaser.html` |
| TF2026 retired: `requestAccessCode`, `validateAccess`, `resetAccessFlow`, `simulateDownload` removed from `app.js`; `closeDD` simplified; the index-page gate is now a CTA to the tiered data room | `app.js`, `index.html` |

Decisions 1–7 above still stand and are unchanged — no new paid-service decision
was needed for this build-out, and none was made. The only open question the demo
leaves for Gary is the hosting decision itself (when/if to deploy the branch),
which he has already deferred under the zero-cost constraint. The hardcoded
RentCast key in `app.js` was NOT touched (live-site rotation, out of scope).

## Privacy note

No real buyer personally identifiable information is in this repository. The CRM
seed is fictional sample data (`.invalid` emails). Buyer records entered in the
back office live in the local browser only. Any real buyer list must stay in the
private workspace, never in a commit.
