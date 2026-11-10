/* TerraFin AI — Back office: private qualified-buyer CRM, gated alerts,
 * engagement dashboard, approval workflow (Adoption 5).
 * All data lives in localStorage (this browser only). The CRM seeds from
 * data/buyers-template.json (fictional sample rows) on first load.
 * Engagement counts come from the activity log (TF.getActivity) — this
 * browser only, labeled as such in the UI. Production needs a server log.
 */
(function () {
    'use strict';

    var buyers = [];
    var editingId = null;

    function loadBuyers() {
        var stored = TF.loadJSON('tf_buyers_v1', null);
        if (stored && stored.length) {
            buyers = stored;
            renderCRM();
            return;
        }
        TF.fetchJSON('data/buyers-template.json').then(function (tpl) {
            buyers = (tpl.buyers || []).filter(function (b) { return b.name !== 'SAMPLE — ...'; });
            saveBuyers();
            renderCRM();
        }).catch(function () {
            buyers = [];
            renderCRM();
        });
    }

    function saveBuyers() {
        try { localStorage.setItem('tf_buyers_v1', JSON.stringify(buyers)); } catch (e) { /* storage unavailable */ }
    }

    function renderCRM() {
        var q = (document.getElementById('crm-search').value || '').toLowerCase();
        var typeF = document.getElementById('crm-filter-type').value;
        var statusF = document.getElementById('crm-filter-status').value;
        var rows = buyers.filter(function (b) {
            if (typeF && b.type !== typeF) return false;
            if (statusF && b.status !== statusF) return false;
            if (q && !(b.name + ' ' + b.firm + ' ' + b.email).toLowerCase().includes(q)) return false;
            return true;
        }).map(function (b) {
            return '<tr><td><strong style="color:#fff;">' + TF.esc(b.name) + '</strong><br><span class="tf-dim" style="font-size:0.75rem;">' + TF.esc(b.firm) + ' · ' + TF.esc(b.email) + '</span></td>' +
                '<td>' + TF.esc(b.type) + '</td><td>' + TF.esc(b.geography) + '</td><td>' + TF.esc(b.check_size) + '</td>' +
                '<td>' + (b.mandates || []).map(function (m) { return '<span class="tf-chip">' + TF.esc(m) + '</span>'; }).join(' ') + '</td>' +
                '<td><span class="tf-chip">' + TF.esc(b.status) + '</span></td>' +
                '<td>' + TF.esc(b.engagement) + '</td>' +
                '<td style="white-space:nowrap;"><button class="tf-btn small" data-edit="' + TF.esc(b.id) + '">EDIT</button> <button class="tf-btn ghost small" data-del="' + TF.esc(b.id) + '">DELETE</button></td></tr>';
        }).join('');
        document.getElementById('crm-tbody').innerHTML = rows || '<tr><td colspan="8" class="tf-muted">No buyers match. Add one below, or import a JSON export.</td></tr>';
    }

    function fillForm(b) {
        document.getElementById('crm-id').value = b.id;
        document.getElementById('crm-name').value = b.name;
        document.getElementById('crm-firm').value = b.firm;
        document.getElementById('crm-email').value = b.email;
        document.getElementById('crm-check').value = b.check_size;
        document.getElementById('crm-type').value = b.type;
        document.getElementById('crm-geo').value = b.geography;
        document.getElementById('crm-status').value = b.status;
        document.getElementById('crm-engagement').value = b.engagement;
        document.getElementById('crm-notes').value = b.notes || '';
        document.querySelectorAll('#crm-mandates input[type=checkbox]').forEach(function (cb) {
            cb.checked = (b.mandates || []).indexOf(cb.value) !== -1;
        });
    }

    function clearForm() {
        document.getElementById('crm-form').reset();
        document.getElementById('crm-id').value = '';
        document.getElementById('crm-error').textContent = '';
    }

    function downloadBlob(content, filename, mime) {
        var blob = new Blob([content], { type: mime + ';charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    }

    function copyText(text, noteEl, note) {
        function done() { if (noteEl) noteEl.textContent = note; }
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done).catch(function () { fallback(); });
        } else { fallback(); }
        function fallback() {
            var ta = document.createElement('textarea');
            ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
            document.body.appendChild(ta); ta.select();
            try { document.execCommand('copy'); done(); } catch (e) { /* copy failed */ }
            ta.remove();
        }
    }

    /* --- CRM events --- */
    document.getElementById('crm-search').addEventListener('input', renderCRM);
    document.getElementById('crm-filter-type').addEventListener('change', renderCRM);
    document.getElementById('crm-filter-status').addEventListener('change', renderCRM);
    document.getElementById('crm-clear').addEventListener('click', clearForm);

    document.getElementById('crm-tbody').addEventListener('click', function (e) {
        var editBtn = e.target.closest('[data-edit]');
        var delBtn = e.target.closest('[data-del]');
        if (editBtn) {
            var b = null;
            buyers.forEach(function (x) { if (x.id === editBtn.dataset.edit) b = x; });
            if (b) fillForm(b);
            document.getElementById('crm-form').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (delBtn) {
            var target = null;
            buyers.forEach(function (x) { if (x.id === delBtn.dataset.del) target = x; });
            if (target && confirm('Delete ' + target.name + ' (' + target.firm + ') from the CRM?')) {
                buyers = buyers.filter(function (x) { return x.id !== target.id; });
                saveBuyers();
                renderCRM();
            }
        }
    });

    document.getElementById('crm-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var err = document.getElementById('crm-error');
        var name = document.getElementById('crm-name').value.trim();
        var firm = document.getElementById('crm-firm').value.trim();
        var email = document.getElementById('crm-email').value.trim();
        if (!name || !firm) { err.textContent = 'Name and firm are required.'; return; }
        if (!TF.isCorporateEmail(email)) { err.textContent = 'Use a corporate email — generic webmail addresses are not accepted for qualified buyers.'; return; }
        err.textContent = '';
        var mandates = [];
        document.querySelectorAll('#crm-mandates input[type=checkbox]:checked').forEach(function (cb) { mandates.push(cb.value); });
        var id = document.getElementById('crm-id').value || ('b' + Date.now());
        var rec = {
            id: id, name: name, firm: firm, email: email,
            type: document.getElementById('crm-type').value,
            geography: document.getElementById('crm-geo').value.trim(),
            check_size: document.getElementById('crm-check').value,
            mandates: mandates,
            status: document.getElementById('crm-status').value,
            engagement: document.getElementById('crm-engagement').value,
            notes: document.getElementById('crm-notes').value.trim()
        };
        var i = buyers.findIndex(function (x) { return x.id === id; });
        if (i >= 0) buyers[i] = rec; else buyers.push(rec);
        saveBuyers();
        renderCRM();
        clearForm();
    });

    document.getElementById('crm-export').addEventListener('click', function () {
        downloadBlob(JSON.stringify(buyers, null, 2), 'terrafin-buyers-export.json', 'application/json');
    });
    document.getElementById('crm-import-btn').addEventListener('click', function () {
        document.getElementById('crm-import').click();
    });
    document.getElementById('crm-import').addEventListener('change', function (e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
            try {
                var data = JSON.parse(reader.result);
                var list = Array.isArray(data) ? data : data.buyers;
                if (!Array.isArray(list) || !list.length) throw new Error('no buyer array found');
                if (!list.every(function (b) { return b.name && b.firm && b.email; })) throw new Error('each buyer needs name, firm, email');
                buyers = list;
                saveBuyers();
                renderCRM();
            } catch (err) {
                alert('Import failed: ' + err.message);
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    });

    /* --- Alerts composer --- */
    function composeAlert() {
        var sel = document.getElementById('alert-mandate');
        var mandate = sel.options[sel.selectedIndex];
        var note = document.getElementById('alert-note').value.trim();
        var out = document.getElementById('alert-output');
        if (!mandate) { out.innerHTML = '<p class="tf-muted">No mandates loaded.</p>'; return; }
        var match = buyers.filter(function (b) {
            return (b.mandates || []).includes(mandate.dataset.type) && b.status !== 'passed';
        });
        var text = 'Subject: New matching opportunity — ' + mandate.text + '\n\n' +
            'A new off-market opportunity matches your mandate profile.\n\n' +
            mandate.dataset.teaser + '\n' +
            'Value: ' + mandate.dataset.value + '\n' +
            (note ? '\n' + note + '\n' : '') +
            '\nTo receive the diligence pack, reply to this message and we will send the NDA. Contact: terrafinai.com.';
        out.innerHTML =
            '<p style="font-size: 0.85rem; margin-bottom: 0.75rem;">Matching buyers (' + match.length + '): ' +
            (match.length ? match.map(function (b) { return '<span class="tf-chip">' + TF.esc(b.name) + ' — ' + TF.esc(b.firm) + '</span>'; }).join(' ') : '<span class="tf-muted">none in the CRM for this mandate type</span>') + '</p>' +
            '<div class="tf-terminal" style="white-space: pre-wrap;">' + TF.esc(text) + '</div>' +
            '<button class="tf-btn" id="alert-copy" style="margin-top: 0.75rem;">COPY ALERT TEXT</button> ' +
            '<span class="tf-dim" style="font-size: 0.75rem;">Sending stays manual — paste into your email and send to each buyer individually (discretion rule).</span>';
        document.getElementById('alert-copy').addEventListener('click', function () {
            copyText(text, null, null);
            this.textContent = 'COPIED ✓';
        });
    }
    document.getElementById('alert-compose').addEventListener('click', composeAlert);

    /* --- Engagement dashboard --- */
    function renderEngagement(mandates) {
        var rows = mandates.map(function (m) {
            var s = TF.engagementSummary(m.id);
            return '<tr><td><strong style="color:#fff;">' + TF.esc(m.name) + '</strong><br><span class="tf-dim" style="font-size:0.75rem;">' + TF.esc(m.value) + '</span></td>' +
                '<td>' + s.views + '</td><td>' + s.registrations + '</td><td>' + s.ndaRequests + '</td><td>' + s.docViews + '</td><td>' + s.callsRequested + '</td>' +
                '<td><a class="tf-btn small" href="deal-room.html?mandate=' + m.id + '">ROOM →</a></td></tr>';
        }).join('');
        document.getElementById('eng-tbody').innerHTML = rows;
    }

    function renderApprovals() {
        var access = TF.getAllAccess();
        var pending = [];
        var approved = [];
        Object.keys(access).forEach(function (mandateId) {
            var a = access[mandateId];
            if (a && a.approvalRequested && !a.approved) pending.push({ id: mandateId, a: a });
            else if (a && a.approved) approved.push({ id: mandateId, a: a });
        });
        function row(p, showApprove) {
            return '<div class="tf-doc-row"><div><strong style="color:#fff;">' + TF.esc(p.a.name) + ' — ' + TF.esc(p.a.firm) + '</strong> <span class="tf-chip">' + TF.esc(p.id) + '</span>' + (p.a.approved ? ' <span class="tf-badge tf-badge-verified">APPROVED</span>' : '') + '<br>' +
                '<span class="tf-dim" style="font-size:0.75rem;">' + TF.esc(p.a.email) + ' · ticket ' + TF.esc(p.a.ticket || '—') + ' · requested ' + TF.esc(p.a.approvalRequestedAt || '') + (p.a.approvedAt ? ' · approved ' + TF.esc(p.a.approvedAt) : '') + (p.a.approvalNote ? ' · “' + TF.esc(p.a.approvalNote) + '”' : '') + '</span></div>' +
                '<div style="display:flex; gap:0.5rem; flex-wrap:wrap;">' +
                (showApprove ? '<button class="tf-btn small" data-approve="' + TF.esc(p.id) + '">APPROVE → TIER 3</button>' : '') +
                '<button class="tf-btn ghost small" data-shortlist="' + TF.esc(p.id) + '">' + (p.a.shortlist ? 'REMOVE FROM SHORTLIST' : 'ADD TO SHORTLIST') + '</button></div></div>';
        }
        var el = document.getElementById('approvals-list');
        var html = '';
        if (pending.length) html += pending.map(function (p) { return row(p, true); }).join('');
        if (approved.length) {
            html += '<h5 style="color:#fff; margin: 1.25rem 0 0.75rem; font-size: 0.85rem;">Approved — shortlist management</h5>' +
                approved.map(function (p) { return row(p, false); }).join('');
        }
        if (!pending.length && !approved.length) {
            html = '<p class="tf-muted" style="font-size: 0.85rem;">No pending Tier 3 approval requests. Requests appear here when a buyer asks for full diligence in the data room.</p>';
        }
        el.innerHTML = html;
    }

    document.getElementById('approvals-list').addEventListener('click', function (e) {
        var approveBtn = e.target.closest('[data-approve]');
        var shortBtn = e.target.closest('[data-shortlist]');
        if (approveBtn) {
            TF.setAccess(approveBtn.dataset.approve, { tier: 3, approved: true, approvedAt: new Date().toISOString().slice(0, 10) });
            TF.logActivity(approveBtn.dataset.approve, 'approval-granted', approveBtn.dataset.approve);
            renderApprovals();
        }
        if (shortBtn) {
            var a = TF.getAccess(shortBtn.dataset.shortlist);
            TF.setAccess(shortBtn.dataset.shortlist, { shortlist: !a.shortlist });
            renderApprovals();
        }
    });

    /* --- Post new diligence --- */
    document.getElementById('dd-post').addEventListener('click', function () {
        var sel = document.getElementById('dd-mandate');
        var mandateId = sel.value;
        var note = document.getElementById('dd-note').value.trim();
        var flags = TF.loadJSON('tf_new_dd_v1', {});
        flags[mandateId] = { date: new Date().toISOString().slice(0, 10), note: note || 'New diligence posted.' };
        try { localStorage.setItem('tf_new_dd_v1', JSON.stringify(flags)); } catch (e) { /* storage unavailable */ }
        document.getElementById('dd-status').textContent = 'Posted. Registered buyers for this mandate now see the new-diligence banner in the data room.';
        document.getElementById('dd-note').value = '';
    });
    document.getElementById('dd-clear').addEventListener('click', function () {
        var mandateId = document.getElementById('dd-mandate').value;
        var flags = TF.loadJSON('tf_new_dd_v1', {});
        delete flags[mandateId];
        try { localStorage.setItem('tf_new_dd_v1', JSON.stringify(flags)); } catch (e) { /* storage unavailable */ }
        document.getElementById('dd-status').textContent = 'Flag cleared for ' + mandateId + '.';
    });

    document.getElementById('eng-copy').addEventListener('click', function () {
        var lines = ['TERRAFIN AI — ENGAGEMENT REPORT (this browser only, all time)'];
        TF.loadMandates().then(function (data) {
            (data.mandates || []).forEach(function (m) {
                var s = TF.engagementSummary(m.id);
                lines.push(m.name + ' — ' + s.views + ' room views, ' + s.registrations + ' registrations, ' + s.ndaRequests + ' NDA requests, ' + s.docViews + ' doc views, ' + s.callsRequested + ' calls requested');
            });
            copyText(lines.join('\n'), document.getElementById('eng-copy-note'), 'Seller report copied ✓');
        });
    });

    /* --- Demo helpers: simulate activity + reset demo data --- */
    // Simulated activity is for the walkthrough only: every simulated event
    // is tagged DEMO SIMULATION in the activity log, and the seller report
    // header already says counts are this-browser only. Never present
    // simulated counts to a seller as real buyer activity.
    document.getElementById('eng-simulate').addEventListener('click', function () {
        var mandateId = document.getElementById('dd-mandate').value;
        var tag = 'DEMO SIMULATION — not real buyer activity';
        TF.logActivity(mandateId, 'room-view', tag);
        TF.logActivity(mandateId, 'room-view', tag);
        TF.logActivity(mandateId, 'register', tag);
        TF.logActivity(mandateId, 'nda-signed', tag);
        TF.logActivity(mandateId, 'doc-view', tag);
        TF.logActivity(mandateId, 'call-requested', tag);
        TF.loadMandates().then(function (data) {
            renderEngagement(data.mandates || []);
        });
        document.getElementById('eng-sim-note').textContent = 'Simulated 6 events for ' + mandateId + ' (2 views, 1 registration, 1 NDA, 1 doc view, 1 call). Tagged DEMO SIMULATION in the activity log.';
    });

    document.getElementById('eng-reset-demo').addEventListener('click', function () {
        if (!confirm('Reset all demo data in this browser? Access tiers, activity log, CRM edits, and new-diligence flags will be cleared.')) return;
        ['tf_access_v1', 'tf_activity_v1', 'tf_buyers_v1', 'tf_new_dd_v1'].forEach(function (k) {
            try { localStorage.removeItem(k); } catch (e) { /* storage unavailable */ }
        });
        window.location.reload();
    });

    /* --- Init --- */
    loadBuyers();
    TF.loadMandates().then(function (data) {
        var mandates = data.mandates || [];
        var opts = mandates.map(function (m) {
            return '<option value="' + m.id + '" data-type="' + TF.esc(m.type) + '" data-teaser="' + TF.esc(m.teaser || m.name) + '" data-value="' + TF.esc(m.value) + '">' + TF.esc(m.name) + ' — ' + TF.esc(m.value) + '</option>';
        }).join('');
        document.getElementById('alert-mandate').innerHTML = opts;
        document.getElementById('dd-mandate').innerHTML = opts;
        renderEngagement(mandates);
        renderApprovals();
    });
})();
