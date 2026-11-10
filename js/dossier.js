/* TerraFin AI — Verification Dossier (Adoption 3, PropertyShark model).
 * Renders the dossier template (data/dossier-template.json) with a
 * mandate's dossier data (data/dossiers/<id>.json). Every field carries a
 * status: verified | per-mandate-doc | unverified. The verification score
 * is computed from core-field statuses (TF.computeVerificationScore) —
 * never hardcoded, never invented.
 */
(function () {
    'use strict';

    var root = document.getElementById('dossier-root');
    if (!root) return;

    function param(name) {
        var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return m ? decodeURIComponent(m[1]) : null;
    }

    var STATUS_CLASS = {
        'verified': 'tf-badge-verified',
        'per-mandate-doc': 'tf-badge-doc',
        'unverified': 'tf-badge-unverified'
    };
    var STATUS_LABEL = {
        'verified': 'VERIFIED',
        'per-mandate-doc': 'PER MANDATE DOCUMENTATION',
        'unverified': 'UNVERIFIED'
    };

    function renderDossier(mandate, template, dossier) {
        var score = TF.computeVerificationScore(dossier, template);
        TF.logActivity(mandate.id, 'dossier-view', mandate.id);

        var sections = template.sections.map(function (section) {
            var rows = section.fields.map(function (field) {
                var f = (dossier[section.id] || {})[field.key] || { status: 'unverified', value: 'Not yet recorded', note: 'No value on file.' };
                var badge = '<span class="tf-badge ' + (STATUS_CLASS[f.status] || 'tf-badge-unverified') + '">' + (STATUS_LABEL[f.status] || 'UNVERIFIED') + '</span>';
                return '<tr><td style="width: 26%;"><strong style="color:#fff;">' + TF.esc(field.label) + '</strong>' + (field.core ? ' <span class="tf-chip">CORE</span>' : '') + '</td>' +
                    '<td style="width: 34%;">' + TF.esc(f.value) + '</td>' +
                    '<td>' + badge + '<div class="tf-dim" style="font-size:0.72rem; margin-top:0.35rem; line-height:1.5;">' + TF.esc(f.note || '') + '</div></td></tr>';
            }).join('');
            return '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
                '<div class="section-title" style="margin-bottom: 1rem;">' + TF.esc(section.title) + '</div>' +
                '<div style="overflow-x:auto;"><table class="tf-table"><thead><tr><th>Field</th><th>Value</th><th>Status &amp; source</th></tr></thead><tbody>' + rows + '</tbody></table></div></div>';
        }).join('');

        root.innerHTML =
            '<p class="tf-kicker mono">VERIFICATION DOSSIER · CERTIFIED PROSPECTUS — TRUTH MATRIX</p>' +
            '<h1 class="tf-h1">' + TF.esc(dossier.asset || mandate.name) + '</h1>' +
            '<p class="tf-lede">Prepared ' + TF.esc(dossier.prepared || '—') + ' · ' + TF.esc(dossier.prepared_by || '') + '<br>' +
            '<span class="tf-dim">Sources: ' + TF.esc(dossier.sources || '—') + '</span></p>' +

            '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0;">' +
            '<div style="display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:0.5rem;">' +
            '<div><span class="mono" style="font-size:0.65rem; letter-spacing:2px; color: var(--text-dim);">VERIFICATION SCORE</span>' +
            '<div style="font-size: 1.8rem; font-weight: 800; color: #fff;">' + score.verified + ' of ' + score.total + ' core fields independently verified <span style="color: var(--accent-cyan);">(' + score.pct + '%)</span></div></div>' +
            '<span class="tf-badge ' + (score.pct >= 50 ? 'tf-badge-verified' : 'tf-badge-doc') + '">' + (score.pct >= 50 ? 'SUBSTANTIALLY VERIFIED' : 'PARTIALLY VERIFIED') + '</span></div>' +
            '<div class="tf-score-bar"><div class="tf-score-fill" style="width:' + score.pct + '%;"></div></div>' +
            '<p class="tf-dim" style="font-size: 0.75rem; margin-top: 0.75rem; line-height: 1.6;">The score counts only core fields whose value was independently verified against a public record or public report. ' +
            '“Per mandate documentation” means the value comes from the mandate’s own documents and has not been independently verified. ' +
            '“Unverified” means no value is on file — nothing is invented to fill the gap.</p></div>' +

            sections +

            '<div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top: 0.5rem;">' +
            '<a class="tf-btn" href="deal-room.html?mandate=' + mandate.id + '">OPEN DEAL ROOM →</a>' +
            '<a class="tf-btn ghost" href="data-room.html?mandate=' + mandate.id + '">REQUEST FULL DILIGENCE →</a></div>';
    }

    function renderTemplateOnly(mandate, template) {
        var sections = template.sections.map(function (section) {
            var items = section.fields.map(function (field) {
                return '<tr><td style="width: 26%;"><strong style="color:#fff;">' + TF.esc(field.label) + '</strong>' + (field.core ? ' <span class="tf-chip">CORE</span>' : '') + '</td>' +
                    '<td><span class="tf-badge tf-badge-unverified">NOT YET PREPARED</span></td></tr>';
            }).join('');
            return '<div class="glass-panel" style="padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">' +
                '<div class="section-title" style="margin-bottom: 1rem;">' + TF.esc(section.title) + '</div>' +
                '<div style="overflow-x:auto;"><table class="tf-table"><thead><tr><th>Field</th><th>Status</th></tr></thead><tbody>' + items + '</tbody></table></div></div>';
        }).join('');

        root.innerHTML =
            '<p class="tf-kicker mono">VERIFICATION DOSSIER · TEMPLATE</p>' +
            '<h1 class="tf-h1">' + TF.esc(mandate.name) + '</h1>' +
            '<p class="tf-lede">No verification dossier has been prepared for this mandate yet. Below is the dossier template — the checklist every mandate is measured against. ' +
            'The first completed dossier is the <a href="dossier.html?mandate=starhotels" style="color: var(--accent-cyan);">Starhotels dossier →</a></p>' +
            sections;
    }

    var id = param('mandate');
    Promise.all([
        TF.loadMandates(),
        TF.fetchJSON('data/dossier-template.json')
    ]).then(function (results) {
        var mandates = results[0].mandates || [];
        var template = results[1];
        if (!id) {
            var list = mandates.filter(function (m) { return m.dossier; }).map(function (m) {
                return '<div class="glass-panel" style="padding: 1.25rem; border-radius: 12px;"><div style="font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.3rem;">' + TF.esc(m.name) + '</div>' +
                    '<div class="mono" style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: bold; margin-bottom: 0.75rem;">' + TF.esc(m.value) + '</div>' +
                    '<a class="tf-btn" href="dossier.html?mandate=' + m.id + '">OPEN DOSSIER →</a></div>';
            }).join('');
            root.innerHTML =
                '<p class="tf-kicker mono">VERIFICATION DOSSIERS — CERTIFIED PROSPECTUS</p>' +
                '<h1 class="tf-h1">Verification Dossiers</h1>' +
                '<p class="tf-lede">One standardized dossier per mandate — ownership chain, public-record cross-checks, comparable transactions, verification score. ' +
                'Modeled on the PropertyShark 180-point Property Report; the structure transfers, the data source does not. ' +
                'Only dossiers with verified content are published; the rest show the template, not invented values.</p>' +
                '<div class="tf-room-grid" style="margin-top: 2rem;">' + (list || '<p class="tf-muted">No dossiers prepared yet.</p>') + '</div>';
            return;
        }
        var m = null;
        for (var i = 0; i < mandates.length; i++) { if (mandates[i].id === id) m = mandates[i]; }
        if (!m) {
            root.innerHTML = '<p class="tf-kicker mono">VERIFICATION DOSSIER</p><h1 class="tf-h1">Mandate not found</h1>' +
                '<p class="tf-lede">No live mandate matches “' + TF.esc(id) + '”. <a href="dossier.html" style="color: var(--accent-cyan);">See all dossiers →</a></p>';
            return;
        }
        if (!m.dossier) { renderTemplateOnly(m, template); return; }
        TF.fetchJSON('data/dossiers/' + m.dossier + '.json').then(function (dossier) {
            renderDossier(m, template, dossier);
        }).catch(function (err) {
            root.innerHTML = '<p class="tf-kicker mono">VERIFICATION DOSSIER</p><h1 class="tf-h1">Dossier could not load</h1>' +
                '<p class="tf-lede">The dossier file for ' + TF.esc(m.name) + ' did not load: ' + TF.esc(err.message) + '</p>';
        });
    }).catch(function (err) {
        root.innerHTML = '<p class="tf-kicker mono">VERIFICATION DOSSIER</p><h1 class="tf-h1">Could not load dossier template</h1>' +
            '<p class="tf-lede">' + TF.esc(err.message) + '</p>';
    });
})();
