/* TerraFin AI — Virtual Deal Room (Adoption 2, RCM model).
 * One branded room per mandate: teaser, offering materials, document
 * library (tiered), bidder instructions, engagement reporting.
 * Data: data/mandates.json. Access state + activity log: js/terrafin.js.
 * No document link is ever faked: entries without a file on record render
 * as locked / "provided after" states, never as downloads.
 */
(function () {
    'use strict';

    var root = document.getElementById('room-root');
    if (!root) return;

    function param(name) {
        var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return m ? decodeURIComponent(m[1]) : null;
    }

    function tierBadge(tier) {
        var cls = 'tf-badge-tier' + tier;
        return '<span class="tf-badge ' + cls + '">YOUR ACCESS: ' + TF.tierName(tier) + '</span>';
    }

    function lockNote(tierNeeded, label) {
        if (tierNeeded === 1) return '<span class="tf-badge tf-badge-locked">LOCKED — REGISTER TO UNLOCK</span>';
        if (tierNeeded === 2) return '<span class="tf-badge tf-badge-locked">LOCKED — E-NDA REQUIRED</span>';
        return '<span class="tf-badge tf-badge-locked">LOCKED — APPROVAL REQUIRED</span>';
    }

    function docRow(m, doc, accessTier, shortlisted) {
        var unlocked = accessTier >= doc.tier && (!doc.shortlistOnly || shortlisted);
        var status;
        if (unlocked) {
            status = '<span class="tf-badge tf-badge-verified">UNLOCKED</span>';
        } else if (doc.shortlistOnly && accessTier >= doc.tier) {
            status = '<span class="tf-badge tf-badge-locked">LOCKED — SHORTLIST ONLY</span>';
        } else {
            status = lockNote(doc.tier);
        }
        var action = '';
        if (unlocked && doc.detailKey) {
            action = '<button class="tf-btn ghost small" data-doc-view="' + TF.esc(doc.detailKey) + '" data-mandate="' + TF.esc(m.id) + '" data-label="' + TF.esc(doc.label) + '">VIEW</button>';
        } else if (unlocked) {
            action = '<span class="tf-dim" style="font-size:0.7rem;">Provided after NDA — see instructions</span>';
        } else if (doc.shortlistOnly && accessTier >= doc.tier) {
            action = '<span class="tf-dim" style="font-size:0.7rem;">Shortlisted buyers only — the deal team shortlists after approval</span>';
        } else {
            action = '<a class="tf-btn small" href="data-room.html?mandate=' + m.id + '">REQUEST ACCESS →</a>';
        }
        var detail = '';
        if (doc.detailKey) {
            detail = '<div class="tf-doc-detail" id="doc-detail-' + TF.esc(doc.detailKey) + '" style="display:none; margin-top:0.6rem; padding:0.75rem; background:rgba(0,0,0,0.3); border-radius:6px; font-size:0.8rem; color:var(--text-muted); line-height:1.6;">' + TF.esc(doc.detailText || '') + '</div>';
        }
        return '<div class="tf-doc-row" style="display:block;"><div style="display:flex; justify-content:space-between; align-items:center; gap:1rem;"><div><div style="color:#fff; font-size:0.85rem; font-weight:600;">' + TF.esc(doc.label) + '</div>' +
            '<div class="tf-dim" style="font-size:0.72rem; margin-top:0.2rem;">' + TF.esc(doc.note) + '</div></div>' +
            '<div style="display:flex; gap:0.5rem; align-items:center; flex-shrink:0;">' + status + action + '</div></div>' + detail + '</div>';
    }

    // Delegated handler: VIEW buttons log the doc view and expand the detail.
    root.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('[data-doc-view]') : null;
        if (!btn) return;
        var key = btn.getAttribute('data-doc-view');
        TF.logActivity(btn.getAttribute('data-mandate'), 'doc-view', btn.getAttribute('data-label'));
        var panel = document.getElementById('doc-detail-' + key);
        if (panel) {
            var open = panel.style.display !== 'none';
            panel.style.display = open ? 'none' : 'block';
            btn.textContent = open ? 'VIEW' : 'HIDE';
        }
    });

    function renderIndex(mandates) {
        var cards = mandates.map(function (m) {
            var sum = TF.engagementSummary(m.id);
            return '<div class="glass-panel" style="padding: 1.25rem; border-radius: 12px;">' +
                '<div class="mono" style="font-size:0.6rem; color: var(--accent-cyan); letter-spacing: 1px; margin-bottom: 0.4rem;">' + TF.esc(m.tag) + '</div>' +
                '<div style="font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.3rem;">' + TF.esc(m.name) + '</div>' +
                '<div class="mono" style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: bold;">' + TF.esc(m.value) + '</div>' +
                '<div class="mono" style="font-size: 0.6rem; color: var(--accent-violet); margin: 0.4rem 0 0.75rem;">' + TF.esc(m.nda) + '</div>' +
                '<div class="tf-dim" style="font-size: 0.72rem; margin-bottom: 0.9rem;">Engagement: ' + sum.views + ' room views · ' + sum.ndaRequests + ' NDA requests · ' + sum.callsRequested + ' calls requested</div>' +
                '<a class="tf-btn" href="deal-room.html?mandate=' + m.id + '">ENTER DEAL ROOM →</a>' +
                '</div>';
        }).join('');
        root.innerHTML =
            '<p class="tf-kicker mono">VIRTUAL DEAL ROOMS — ONE ROOM PER MANDATE</p>' +
            '<h1 class="tf-h1">Deal Rooms</h1>' +
            '<p class="tf-lede">Each live mandate has one branded room: teaser, offering materials, document library, and bidder instructions — with tiered security. ' +
            'Rooms are NDA-gated by design: the public sees the teaser; diligence opens only to registered, NDA-signed, approved buyers. ' +
            'Modeled on Real Capital Markets’ Virtual Deal Room® — adopted for the off-market, minimum-exposure model.</p>' +
            '<div class="tf-room-grid" style="margin-top: 2rem;">' + cards + '</div>' +
            '<div class="tf-callout info"><strong>How access works:</strong> Tier 0 — public teaser. Tier 1 — register with corporate contact information. ' +
            'Tier 2 — sign the electronic NDA. Tier 3 — approved by the deal team for full diligence. Shortlisted buyers see deeper material. ' +
            'Continue in the <a href="data-room.html" style="color: var(--accent-cyan);">tiered data room</a>.</div>';
    }

    function renderRoom(m) {
        var access = TF.getAccess(m.id);
        var tier = access.tier || 0;
        TF.logActivity(m.id, 'room-view', 'tier ' + tier);

        // Real figures on file (data/mandates.json) — shown in the Tier 2
        // financials document. Statuses travel with the figures.
        var figuresText = (m.figures || []).map(function (f) {
            var s = f.status === 'verified' ? 'VERIFIED' : (f.status === 'per-mandate-doc' ? 'PER MANDATE DOCUMENTATION' : 'UNVERIFIED');
            return f.label + ': ' + f.value + ' [' + s + ']' + (f.note ? ' — ' + f.note : '');
        }).join('\n');

        var docs = [
            { label: 'Executive Teaser (public)', note: 'The public summary — visible to everyone.', tier: 0, detailKey: 'teaser', detailText: m.teaser },
            { label: 'Mandate Summary — registered buyers', note: 'Full public summary + process, for registered buyers.', tier: 1, detailKey: 'summary', detailText: m.teaser + ' Process: ' + m.process.join(' → ') + '.' },
            { label: 'Offering Memorandum', note: 'Provided after e-NDA. No file is published on the public site.', tier: 2 },
            { label: 'Financials — P&L, revenue, EBITDA', note: 'Verified figures on file; full set after approval.', tier: 2, detailKey: 'financials', detailText: figuresText || 'No figures on file yet.' },
            { label: 'Full diligence set — legal, title, permits', note: 'Available after deal-team approval (Tier 3).', tier: 3 },
            { label: 'Shortlist — deep diligence pack', note: 'Shortlisted buyers only. Deeper material, direct deal-team access.', tier: 3, shortlistOnly: true }
        ];

        var steps = m.process.map(function (s, i) {
            return '<div style="display:flex; gap:0.75rem; margin-bottom:0.6rem;"><span class="mono" style="color: var(--accent-cyan); font-size:0.75rem;">' + String(i + 1).padStart(2, '0') + '</span><span style="font-size:0.85rem; color: var(--text-muted);">' + TF.esc(s) + '</span></div>';
        }).join('');

        var sum = TF.engagementSummary(m.id);
        var dossierLink = m.dossier
            ? '<a class="tf-btn ghost" href="dossier.html?mandate=' + m.id + '">VERIFICATION DOSSIER →</a>'
            : '<span class="tf-dim" style="font-size:0.75rem;">Verification dossier: not yet prepared for this mandate.</span>';

        root.innerHTML =
            '<p class="tf-kicker mono">VIRTUAL DEAL ROOM · ' + TF.esc(m.tag) + '</p>' +
            '<div style="display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center; justify-content:space-between;">' +
            '<h1 class="tf-h1" style="margin-bottom:0;">' + TF.esc(m.name) + '</h1>' + tierBadge(tier) + '</div>' +
            '<p class="mono" style="font-size: 0.9rem; color: var(--accent-cyan); font-weight: bold; margin: 0.75rem 0;">' + TF.esc(m.value) + ' &nbsp;·&nbsp; ' + TF.esc(m.nda) + '</p>' +

            '<div class="tf-steps">' + TF.TIERS.map(function (t) {
                var cls = t.id === tier ? 'active' : (t.id < tier ? 'done' : '');
                return '<div class="tf-step ' + cls + '"><div class="tf-step-num mono">TIER ' + t.id + (t.id === tier ? ' — YOU ARE HERE' : '') + '</div><div class="tf-step-name">' + t.name + '</div><div class="tf-step-desc">' + t.desc + '</div></div>';
            }).join('') + '</div>' +

            '<div class="tf-room-grid">' +
            '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px;">' +
            '<div class="section-title" style="margin-bottom: 1rem;"><span>01</span> Teaser, offering materials &amp; documents</div>' +
            '<p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.25rem;">' + TF.esc(m.teaser) + '</p>' +
            docs.map(function (d) { return docRow(m, d, tier, !!access.shortlist); }).join('') +
            '<div style="margin-top: 1.25rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">' +
            '<a class="tf-btn" href="data-room.html?mandate=' + m.id + '">CONTINUE TO DATA ROOM →</a>' + dossierLink +
            '</div></div>' +

            '<div>' +
            '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
            '<div class="section-title" style="margin-bottom: 1rem;"><span>02</span> Bidder instructions</div>' + steps +
            '<p class="tf-dim" style="font-size: 0.75rem; margin-top: 1rem; line-height: 1.6;">All communications are strictly confidential. Financials are provided to buyers only after NDA. ' +
            'To request a call with the deal team, continue to the data room and complete Tier 1 registration.</p>' +
            '<a class="tf-btn ghost" href="data-room.html?mandate=' + m.id + '">REQUEST A CALL →</a>' +
            '</div>' +

            '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px;">' +
            '<div class="section-title" style="margin-bottom: 1rem;"><span>03</span> Engagement — this mandate</div>' +
            '<div class="mono" style="font-size: 0.78rem; color: var(--text-muted); line-height: 2;">' +
            'ROOM VIEWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + sum.views + '<br>' +
            'REGISTRATIONS&nbsp;&nbsp;&nbsp;&nbsp;' + sum.registrations + '<br>' +
            'NDA REQUESTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + sum.ndaRequests + '<br>' +
            'DOC VIEWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + sum.docViews + '<br>' +
            'CALLS REQUESTED&nbsp;&nbsp;' + sum.callsRequested + '</div>' +
            '<p class="tf-dim" style="font-size: 0.72rem; margin-top: 0.75rem; line-height: 1.6;">Counts come from this browser’s activity log (static-site build). ' +
            'The seller-side report — views, NDA requests, calls per mandate — lives in the back office and is the proof-of-work for the seller.</p>' +
            '<a class="tf-btn ghost small" href="back-office.html">OPEN ENGAGEMENT DASHBOARD →</a>' +
            '</div>' +
            '</div></div>';
    }

    TF.loadMandates().then(function (data) {
        var mandates = data.mandates || [];
        var id = param('mandate');
        if (!id) { renderIndex(mandates); return; }
        var m = null;
        for (var i = 0; i < mandates.length; i++) { if (mandates[i].id === id) m = mandates[i]; }
        if (!m) {
            root.innerHTML = '<p class="tf-kicker mono">DEAL ROOM</p><h1 class="tf-h1">Mandate not found</h1>' +
                '<p class="tf-lede">No live mandate matches “' + TF.esc(id) + '”. <a href="deal-room.html" style="color: var(--accent-cyan);">See all deal rooms →</a></p>';
            return;
        }
        renderRoom(m);
    }).catch(function (err) {
        root.innerHTML = '<p class="tf-kicker mono">DEAL ROOM</p><h1 class="tf-h1">Could not load mandates</h1>' +
            '<p class="tf-lede">The mandate data file (data/mandates.json) did not load: ' + TF.esc(err.message) + '</p>';
    });
})();
