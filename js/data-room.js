/* TerraFin AI — Tiered Data Room (Adoption 1, LoopNet Data Room model).
 * Tiers: 0 public teaser → 1 registration → 2 e-NDA → 3 approval-required
 * full diligence. Shortlist tier sees deeper material. Identity verification
 * and financial-capability screening are front-end attestations here;
 * production uses the services in DECISIONS.md.
 * State: localStorage via js/terrafin.js (tf_access_v1, tf_activity_v1).
 * New-diligence alerts: the back office posts material (tf_new_dd_v1);
 * registered buyers see the alert banner on their next visit.
 */
(function () {
    'use strict';

    var root = document.getElementById('dataroom-root');
    if (!root) return;

    function param(name) {
        var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return m ? decodeURIComponent(m[1]) : null;
    }

    var NDA_TEXT =
        'MUTUAL NON-DISCLOSURE AGREEMENT — TEMPLATE (not legal advice)\n\n' +
        '1. Purpose. The parties wish to discuss a potential acquisition of the mandate identified in this data room. ' +
        'Confidential Information means all non-public information disclosed for that purpose, including financials, legal and title documents, and the existence of the discussions.\n\n' +
        '2. Obligations. The receiving party will (a) hold Confidential Information in strict confidence, (b) use it only to evaluate the mandate, ' +
        '(c) disclose it only to representatives who need to know and who are bound by confidentiality, and (d) not disclose the existence of the mandate or the discussions to any third party.\n\n' +
        '3. Exclusions. Confidential Information excludes information that is or becomes public through no breach, was already known, is independently developed, or is received from a third party without breach.\n\n' +
        '4. Term. Obligations survive for two (2) years from disclosure. On request, the receiving party will return or destroy Confidential Information.\n\n' +
        '5. No obligation. Neither party is obliged to proceed with any transaction. No license or commitment is granted by this agreement.\n\n' +
        '6. Governing law. [To be set by counsel — see DECISIONS.md.]\n\n' +
        'By typing your full legal name and checking the agreement box, you sign this NDA on behalf of the firm named in your registration. ' +
        'In production, execution uses an e-signature service (DocuSign / PandaDoc / Dropbox Sign — see DECISIONS.md); this static build records the signature in the browser and notifies the deal team.';

    function tierStepper(tier) {
        return '<div class="tf-steps">' + TF.TIERS.map(function (t) {
            var cls = t.id === tier ? 'active' : (t.id < tier ? 'done' : '');
            return '<div class="tf-step ' + cls + '"><div class="tf-step-num mono">TIER ' + t.id + (t.id === tier ? ' — YOU ARE HERE' : '') + '</div><div class="tf-step-name">' + t.name + '</div><div class="tf-step-desc">' + t.desc + '</div></div>';
        }).join('') + '</div>';
    }

    function newDdBanner(m) {
        var flags = TF.loadJSON('tf_new_dd_v1', {});
        var flag = flags[m.id];
        if (!flag) return '';
        return '<div class="tf-callout info"><strong>NEW DILIGENCE POSTED — ' + TF.esc(flag.date) + ':</strong> ' + TF.esc(flag.note) +
            ' <span class="tf-dim">Registered buyers are alerted when new diligence posts for a mandate they follow.</span></div>';
    }

    function renderPicker(mandates) {
        var cards = mandates.map(function (m) {
            var a = TF.getAccess(m.id);
            return '<div class="glass-panel" style="padding: 1.25rem; border-radius: 12px;">' +
                '<div class="mono" style="font-size:0.6rem; color: var(--accent-cyan); letter-spacing: 1px; margin-bottom: 0.4rem;">' + TF.esc(m.tag) + '</div>' +
                '<div style="font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.3rem;">' + TF.esc(m.name) + '</div>' +
                '<div class="mono" style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: bold; margin-bottom: 0.75rem;">' + TF.esc(m.value) + '</div>' +
                '<span class="tf-badge tf-badge-tier' + (a.tier || 0) + '">YOUR ACCESS: ' + TF.tierName(a.tier || 0) + '</span>' +
                '<div style="margin-top: 0.9rem;"><a class="tf-btn" href="data-room.html?mandate=' + m.id + '">ENTER DATA ROOM →</a></div></div>';
        }).join('');
        root.innerHTML =
            '<p class="tf-kicker mono">TIERED DATA ROOM — LOOPNET DATA ROOM MODEL</p>' +
            '<h1 class="tf-h1">Data Room</h1>' +
            '<p class="tf-lede">Four access tiers, modeled on the LoopNet Data Room: <strong style="color:#fff;">0 — Public teaser</strong>, ' +
            '<strong style="color:#fff;">1 — Registration</strong> (corporate contact information), <strong style="color:#fff;">2 — Electronic NDA</strong>, ' +
            '<strong style="color:#fff;">3 — Approval-required full diligence</strong>. Shortlisted buyers see deeper material. ' +
            'Identity verification and financial-capability screening sit at Tiers 2–3. Choose a mandate to begin.</p>' +
            '<div class="tf-room-grid" style="margin-top: 2rem;">' + cards + '</div>';
    }

    function renderRoom(m) {
        var access = TF.getAccess(m.id);
        var tier = access.tier || 0;
        TF.logActivity(m.id, 'room-view', 'data-room tier ' + tier);

        var head =
            '<p class="tf-kicker mono">TIERED DATA ROOM · ' + TF.esc(m.tag) + '</p>' +
            '<div style="display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center; justify-content:space-between;">' +
            '<h1 class="tf-h1" style="margin-bottom:0;">' + TF.esc(m.name) + '</h1>' +
            '<span class="tf-badge tf-badge-tier' + tier + '">YOUR ACCESS: ' + TF.tierName(tier) + '</span></div>' +
            '<p class="mono" style="font-size: 0.9rem; color: var(--accent-cyan); font-weight: bold; margin: 0.75rem 0;">' + TF.esc(m.value) + ' &nbsp;·&nbsp; ' + TF.esc(m.nda) + '</p>' +
            newDdBanner(m) + tierStepper(tier);

        var body = '';

        /* ---- Tier 1: registration ---- */
        if (tier < 1) {
            body += '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
                '<div class="section-title" style="margin-bottom: 1rem;"><span>01</span> Tier 1 — Register to continue</div>' +
                '<p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.25rem;">Registration shares your contact information with the deal team as a lead — the same mechanic as the LoopNet Data Room’s Registration tier. ' +
                'A corporate email domain is required; personal email providers are refused.</p>' +
                '<form id="tf-register-form" novalidate>' +
                '<div class="tf-field-row"><div class="tf-field"><label for="rg-name">Full name</label><input id="rg-name" type="text" autocomplete="name" required></div>' +
                '<div class="tf-field"><label for="rg-firm">Firm / fund</label><input id="rg-firm" type="text" autocomplete="organization" required></div></div>' +
                '<div class="tf-field-row"><div class="tf-field"><label for="rg-email">Corporate email</label><input id="rg-email" type="email" autocomplete="email" required><div class="tf-hint">Corporate domain required — Gmail, Yahoo, Outlook and other personal providers are refused.</div></div>' +
                '<div class="tf-field"><label for="rg-role">Role</label><select id="rg-role"><option>Investment Committee</option><option>Acquisitions</option><option>Family Office Principal</option><option>Fund Manager</option><option>Advisor / Intermediary</option></select></div></div>' +
                '<div class="tf-field"><label for="rg-ticket">Ticket size you can deploy on this mandate</label><select id="rg-ticket"><option>€10M – €50M</option><option>€50M – €100M</option><option>€100M – €500M</option><option>€500M+</option></select></div>' +
                '<div class="tf-field"><label><input type="checkbox" id="rg-alerts" checked style="width:auto;"> Alert me when new diligence posts for this mandate</label></div>' +
                '<div class="tf-error" id="rg-error"></div>' +
                '<button class="tf-btn" type="submit">REGISTER &amp; CONTINUE →</button></form></div>';
        } else {
            body += '<div class="tf-callout green"><strong>Registered:</strong> ' + TF.esc(access.name || '') + ' · ' + TF.esc(access.firm || '') + ' · ' + TF.esc(access.email || '') + ' — Tier 1 complete. ' +
                (access.alerts ? 'New-diligence alerts are ON for this mandate.' : 'New-diligence alerts are off.') + '</div>';
        }

        /* ---- Tier 2: e-NDA + identity verification ---- */
        if (tier >= 1 && tier < 2) {
            body += '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
                '<div class="section-title" style="margin-bottom: 1rem;"><span>02</span> Tier 2 — Electronic NDA &amp; identity verification</div>' +
                '<p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1rem;">Sign the mutual NDA to unlock offering materials. ' +
                'Identity verification: in production this step is completed by a verification service (Persona / Veriff / TransUnion — see DECISIONS.md). ' +
                'In this static build, verification is a corporate-email check plus a LinkedIn profile on file.</p>' +
                '<div class="tf-terminal" style="max-height: 260px; white-space: pre-wrap;">' + TF.esc(NDA_TEXT) + '</div>' +
                '<form id="tf-nda-form" novalidate style="margin-top: 1.25rem;">' +
                '<div class="tf-field"><label for="nda-linkedin">LinkedIn profile URL (identity verification)</label><input id="nda-linkedin" type="url" placeholder="https://www.linkedin.com/in/…" required><div class="tf-hint">Used by the deal team to verify you are who you claim to be. Production: automated identity verification — see DECISIONS.md.</div></div>' +
                '<div class="tf-field"><label for="nda-sign">Type your full legal name to sign</label><input id="nda-sign" type="text" placeholder="Full legal name" required></div>' +
                '<div class="tf-field"><label><input type="checkbox" id="nda-agree" style="width:auto;"> I agree to the NDA above on behalf of ' + TF.esc(access.firm || 'my firm') + '.</label></div>' +
                '<div class="tf-error" id="nda-error"></div>' +
                '<button class="tf-btn" type="submit">SIGN NDA &amp; CONTINUE →</button></form></div>';
        } else if (tier >= 2) {
            body += '<div class="tf-callout green"><strong>NDA signed:</strong> ' + TF.esc(access.signName || '') + ' · ' + TF.esc(access.ndaSignedAt || '') + ' — Tier 2 complete. Offering materials unlocked below.</div>';
        }

        /* ---- Tier 2 unlocked materials ---- */
        if (tier >= 2) {
            body += '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
                '<div class="section-title" style="margin-bottom: 1rem;"><span>03</span> Offering materials (Tier 2 unlocked)</div>' +
                '<div class="tf-doc-row"><div><div style="color:#fff; font-size:0.85rem; font-weight:600;">Offering Memorandum — ' + TF.esc(m.name) + '</div><div class="tf-dim" style="font-size:0.72rem;">Provided by the deal team after NDA. No file is published on the public site.</div></div><span class="tf-badge tf-badge-verified">UNLOCKED</span></div>' +
                '<div class="tf-doc-row"><div><div style="color:#fff; font-size:0.85rem; font-weight:600;">Financial summary</div><div class="tf-dim" style="font-size:0.72rem;">Revenue, EBITDA and key figures as verified in the dossier.</div></div><span class="tf-badge tf-badge-verified">UNLOCKED</span></div>' +
                (m.dossier ? '<div class="tf-doc-row"><div><div style="color:#fff; font-size:0.85rem; font-weight:600;">Verification dossier</div><div class="tf-dim" style="font-size:0.72rem;">Ownership chain, public-record cross-checks, comps discipline, verification score.</div></div><a class="tf-btn ghost small" href="dossier.html?mandate=' + m.id + '">OPEN DOSSIER →</a></div>' : '') +
                '<p class="tf-dim" style="font-size: 0.75rem; margin-top: 1rem;">Documents are delivered by the deal team — this static build records your clearance and notifies the team. In production, documents are served from the room itself.</p></div>';
        }

        /* ---- Tier 3: approval + capability screening ---- */
        if (tier === 2) {
            body += '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
                '<div class="section-title" style="margin-bottom: 1rem;"><span>04</span> Tier 3 — Approval &amp; financial-capability screening</div>' +
                '<p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1rem;">Full diligence opens only after deal-team approval — the LoopNet “Approval Required” tier. ' +
                'Some listings also require financial-capability documentation before access: a bank or brokerage statement, or a verification letter. ' +
                'Confirm you can provide it, then request approval.</p>' +
                '<form id="tf-approval-form" novalidate>' +
                '<div class="tf-field"><label><input type="checkbox" id="ap-capability" style="width:auto;"> I can provide proof of funds / financial-capability documentation (bank or brokerage statement, or verification letter) on request.</label></div>' +
                '<div class="tf-field"><label for="ap-note">Anything the deal team should know? (optional)</label><input id="ap-note" type="text" placeholder="e.g. mandate fit, timeline, co-investors"></div>' +
                '<div class="tf-error" id="ap-error"></div>' +
                '<button class="tf-btn" type="submit">REQUEST APPROVAL →</button></form>' +
                '<p class="tf-dim" style="font-size: 0.72rem; margin-top: 0.75rem;">Approval is granted by the deal team in the back office. You will be notified by email; your access updates on your next visit.</p></div>';
        }
        if (tier === 3) {
            body += '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
                '<div class="section-title" style="margin-bottom: 1rem;"><span>04</span> Tier 3 — Full diligence (approved)</div>' +
                '<div class="tf-callout green"><strong>Approved.</strong> Full diligence is open. ' + (access.shortlist ? 'You are on the <strong>shortlist</strong> — deeper material is open below.' : 'Shortlist status: not shortlisted.') + '</div>' +
                '<div class="tf-doc-row"><div><div style="color:#fff; font-size:0.85rem; font-weight:600;">Full diligence set — legal, title, permits</div><div class="tf-dim" style="font-size:0.72rem;">Delivered by the deal team on approval.</div></div><span class="tf-badge tf-badge-verified">UNLOCKED</span></div>' +
                (access.shortlist ? '<div class="tf-doc-row"><div><div style="color:#fff; font-size:0.85rem; font-weight:600;">Shortlist — deep diligence pack</div><div class="tf-dim" style="font-size:0.72rem;">Deeper material + direct deal-team access for shortlisted buyers.</div></div><span class="tf-badge tf-badge-verified">UNLOCKED — SHORTLIST</span></div>' : '') +
                '<div style="margin-top: 1.25rem;"><button class="tf-btn" id="tf-call-btn">REQUEST A VIDEO / PHONE CALL →</button> <span class="tf-dim" style="font-size:0.75rem;" id="tf-call-note"></span></div></div>';
        }
        if (access.approvalRequested && tier < 3) {
            body += '<div class="tf-callout"><strong>Approval pending:</strong> your request was submitted ' + TF.esc(access.approvalRequestedAt || '') + '. The deal team reviews within 1 business day; your access updates on your next visit.</div>';
        }

        root.innerHTML = head + body;

        /* ---- wire forms ---- */
        var regForm = document.getElementById('tf-register-form');
        if (regForm) {
            regForm.addEventListener('submit', function (e) {
                e.preventDefault();
                var name = document.getElementById('rg-name').value.trim();
                var firm = document.getElementById('rg-firm').value.trim();
                var email = document.getElementById('rg-email').value.trim();
                var err = document.getElementById('rg-error');
                if (!name || !firm || !email) { err.textContent = '> PLEASE COMPLETE ALL FIELDS.'; err.style.display = 'block'; return; }
                if (!TF.isCorporateEmail(email)) {
                    err.textContent = '> ACCESS REFUSED: CORPORATE DOMAIN REQUIRED FOR ACCREDITED CLEARANCE.';
                    err.style.display = 'block';
                    return;
                }
                TF.setAccess(m.id, {
                    tier: 1,
                    name: name, firm: firm, email: email,
                    role: document.getElementById('rg-role').value,
                    ticket: document.getElementById('rg-ticket').value,
                    alerts: document.getElementById('rg-alerts').checked
                });
                TF.logActivity(m.id, 'register', firm + ' — ' + email);
                renderRoom(m);
                window.scrollTo(0, 0);
            });
        }

        var ndaForm = document.getElementById('tf-nda-form');
        if (ndaForm) {
            ndaForm.addEventListener('submit', function (e) {
                e.preventDefault();
                var li = document.getElementById('nda-linkedin').value.trim();
                var sign = document.getElementById('nda-sign').value.trim();
                var agree = document.getElementById('nda-agree').checked;
                var err = document.getElementById('nda-error');
                if (!li || li.indexOf('linkedin.com') < 0) { err.textContent = '> PLEASE PROVIDE A LINKEDIN PROFILE URL FOR IDENTITY VERIFICATION.'; err.style.display = 'block'; return; }
                if (!sign) { err.textContent = '> TYPE YOUR FULL LEGAL NAME TO SIGN.'; err.style.display = 'block'; return; }
                if (!agree) { err.textContent = '> PLEASE CHECK THE AGREEMENT BOX TO SIGN.'; err.style.display = 'block'; return; }
                TF.setAccess(m.id, {
                    tier: 2,
                    linkedin: li,
                    signName: sign,
                    ndaSignedAt: new Date().toISOString().slice(0, 10)
                });
                TF.logActivity(m.id, 'nda-signed', sign);
                renderRoom(m);
                window.scrollTo(0, 0);
            });
        }

        var apForm = document.getElementById('tf-approval-form');
        if (apForm) {
            apForm.addEventListener('submit', function (e) {
                e.preventDefault();
                var cap = document.getElementById('ap-capability').checked;
                var err = document.getElementById('ap-error');
                if (!cap) { err.textContent = '> PLEASE CONFIRM YOU CAN PROVIDE FINANCIAL-CAPABILITY DOCUMENTATION.'; err.style.display = 'block'; return; }
                TF.setAccess(m.id, {
                    approvalRequested: true,
                    approvalRequestedAt: new Date().toISOString().slice(0, 10),
                    approvalNote: document.getElementById('ap-note').value.trim(),
                    capability: true
                });
                TF.logActivity(m.id, 'approval-requested', document.getElementById('ap-note').value.trim());
                renderRoom(m);
                window.scrollTo(0, 0);
            });
        }

        var callBtn = document.getElementById('tf-call-btn');
        if (callBtn) {
            callBtn.addEventListener('click', function () {
                TF.logActivity(m.id, 'call-requested', 'video/phone call');
                document.getElementById('tf-call-note').textContent = 'Call requested — the deal team will confirm a time by email. You can also write directly: gary@terrafinai.com.';
            });
        }
    }

    TF.loadMandates().then(function (data) {
        var mandates = data.mandates || [];
        var id = param('mandate');
        if (!id) { renderPicker(mandates); return; }
        var m = null;
        for (var i = 0; i < mandates.length; i++) { if (mandates[i].id === id) m = mandates[i]; }
        if (!m) {
            root.innerHTML = '<p class="tf-kicker mono">DATA ROOM</p><h1 class="tf-h1">Mandate not found</h1>' +
                '<p class="tf-lede">No live mandate matches “' + TF.esc(id) + '”. <a href="data-room.html" style="color: var(--accent-cyan);">See all data rooms →</a></p>';
            return;
        }
        renderRoom(m);
    }).catch(function (err) {
        root.innerHTML = '<p class="tf-kicker mono">DATA ROOM</p><h1 class="tf-h1">Could not load mandates</h1>' +
            '<p class="tf-lede">The mandate data file (data/mandates.json) did not load: ' + TF.esc(err.message) + '</p>';
    });
})();
