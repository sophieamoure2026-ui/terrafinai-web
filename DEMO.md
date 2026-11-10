# TerraFin AI — Demo Walkthrough

Branch: `adopt-competitor-recommendations`. Zero-cost build: static HTML/CSS/JS +
browser localStorage only. No paid services, no sign-ups, no hosting spend, no
new accounts. The demo is a local branch — **not deployed anywhere**.

Start at [demo.html](demo.html) — the full click-through guide. Short version:

1. **Deal rooms** ([deal-room.html](deal-room.html)) — one room per mandate:
   teaser, tiered document library, bidder instructions, engagement panel.
   Real verified figures now show in the Tier 2 financials document.
2. **Tiered data room** ([data-room.html](data-room.html)) — register (corporate
   email; Gmail refused) → e-NDA (simulated type-to-sign) → approval request.
   Each tier unlocks real sample diligence content (key figures, full
   verified-figures table, diligence checklist, shortlist deep pack).
3. **Back office** ([back-office.html](back-office.html)) — approve / shortlist
   pending Tier 3 requests, post new diligence (registered buyers see the
   banner in the data room).
4. **Verification dossiers** ([dossier.html](dossier.html)) — Starhotels 7/15
   core verified (47%); Germany 0/15 (0%) — the Germany memorandum is
   price-only, and the score stays honest instead of inventing values.
5. **Prospectus builder** ([prospectus-builder.html](prospectus-builder.html))
   — two sample OMs (Starhotels, Germany Hotels): extract → review/correct →
   generate → download. Rule-based extraction, not AI.
6. **Buyer CRM + gated alerts + engagement dashboard** (back office) — 6
   fictional sample buyers, search/filter/add/edit/export/import; alert
   composer matches buyers by mandate type; engagement dashboard with a
   clearly-labeled SIMULATE DEMO ACTIVITY button and a copyable seller report.

Reset the demo any time: the RESET DEMO DATA button (demo.html or back
office) clears access tiers, the activity log, CRM edits, and diligence
flags in the browser.

## What is simulated vs live

| Piece | Status |
|---|---|
| Tier flow, deal rooms, dossiers, prospectus builder, CRM | Live in the browser |
| e-NDA signature | Simulated (type-to-sign) — binding signature needs a service (DECISIONS.md #1) |
| Identity verification | Simulated (corporate-email check + LinkedIn URL) — needs a service (DECISIONS.md #2) |
| CRM persistence, automated alerts, server-side engagement log | Browser-only — need services (DECISIONS.md #3, #4, #6) |
| Hosting | None — demo is branch-only, not deployed |

## Retired in this build-out

- The old `TF2026` demo access code in the index-page data-room gate is
  retired — the tiered data room supersedes it. `app.js` functions
  `requestAccessCode`, `validateAccess`, `resetAccessFlow`, and
  `simulateDownload` are removed; the modal now links to the tiered data room.
- The two `david.lempert@idlglobal.net` mailto links in the old `docs/`
  teaser files now point to the tiered data room
  (https://terrafinai.com/data-room.html). No broker is named in any
  public-facing page.

## Fixes in this build-out

- Back-office engagement dashboard: it called `TF.engagementSummary` with
  the wrong arguments and read `s.nda` / `s.docviews` / `s.calls`, which do
  not exist — the dashboard showed zeros/undefined. Fixed.
- Gated-alert composer: mandates had no `type` field, so no buyer could
  ever match. Mandates now carry a `type` (hospitality / banking /
  private-markets / gaming / energy) and the CRM demo set covers all of them.
- Deal-room shortlist document: it unlocked for any Tier 3 buyer; it now
  requires the shortlist flag, with a distinct SHORTLIST ONLY lock state.
