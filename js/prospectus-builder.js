/* TerraFin AI — Prospectus Builder (Adoption 4, Crexi Vault/Create pattern).
 * Ingest pasted OM / rent-roll / financial text → rule-based extraction
 * (TF.extractDealData) → editable structured data → auto-generated
 * offering document (HTML + text download). Extraction is NOT verification:
 * every generated figure must be checked against source documents.
 */
(function () {
    'use strict';

    var extracted = null;
    var sampleText = 'Portfolio of hotel properties and development projects. 2025 results: revenue €340M, record EBITDA €108M (~31.8% margin). ' +
        'Indicative, non-binding acquisition value €3.6B. Group portfolio spans 34 properties and 4,500+ rooms across Italy, London, Paris and New York. ' +
        '2024 revenue €314.8M, EBITDA €102.7M. Flagship assets in Florence, Rome, Milan and Tuscany.';

    function fieldRow(label, id, value) {
        return '<div class="tf-field"><label for="' + id + '">' + TF.esc(label) + '</label>' +
            '<input id="' + id + '" type="text" value="' + TF.esc(value) + '"></div>';
    }

    function renderStructured(ex) {
        var money = ex.money.map(function (m) { return m.currency + m.amount + (m.scale ? m.scale.toUpperCase() : ''); }).join(', ') || '— none found';
        var keys = ex.keys.map(function (k) { return k.count + ' ' + k.unit; }).join(', ') || '— none found';
        var pct = ex.percents.length ? ex.percents.join('%, ') + '%' : '— none found';
        var years = ex.years.length ? ex.years.join(', ') : '— none found';
        var types = ex.types.length ? ex.types.join(', ') : '— none found';

        document.getElementById('pb-structured').innerHTML =
            '<div class="tf-terminal" style="max-height: 220px; margin-bottom: 1rem;">' +
            '&gt; RULE-BASED EXTRACTION — ' + ex.rawLength + ' characters scanned\n' +
            '&gt; Money amounts: ' + TF.esc(money) + '\n' +
            '&gt; Keys / rooms: ' + TF.esc(keys) + '\n' +
            '&gt; Percentages: ' + TF.esc(pct) + '\n' +
            '&gt; Years: ' + TF.esc(years) + '\n' +
            '&gt; Asset types detected: ' + TF.esc(types) + '</div>' +
            '<p class="tf-dim" style="font-size: 0.75rem; margin-bottom: 1rem; line-height: 1.6;">Review and correct every field. Extraction finds candidates; it does not verify them. ' +
            'A figure that is wrong here becomes a wrong figure in the generated document.</p>' +
            fieldRow('Headline value (confirmed)', 'pb-f-value', document.getElementById('pb-value').value || (ex.money[0] ? ex.money[0].currency + ex.money[0].amount + (ex.money[0].scale ? ex.money[0].scale.toUpperCase() : '') : '')) +
            fieldRow('Revenue (confirmed)', 'pb-f-revenue', '') +
            fieldRow('EBITDA (confirmed)', 'pb-f-ebitda', '') +
            fieldRow('Keys / rooms (confirmed)', 'pb-f-keys', ex.keys[0] ? ex.keys[0].count + ' ' + ex.keys[0].unit : '') +
            fieldRow('Margin % (confirmed)', 'pb-f-margin', ex.percents[0] != null ? String(ex.percents[0]) : '') +
            '<div class="tf-field"><label for="pb-f-notes">Verification notes</label><textarea id="pb-f-notes" rows="2" placeholder="e.g. Revenue/EBITDA cross-checked against public reports; headline value is indicative, non-binding."></textarea></div>';
        document.getElementById('pb-generate-btn').disabled = false;
    }

    function buildDocument() {
        var asset = document.getElementById('pb-asset').value.trim() || 'Unnamed Asset';
        var type = document.getElementById('pb-type').value;
        var geo = document.getElementById('pb-geo').value.trim();
        var value = (document.getElementById('pb-f-value') || {}).value || '';
        var revenue = (document.getElementById('pb-f-revenue') || {}).value || '';
        var ebitda = (document.getElementById('pb-f-ebitda') || {}).value || '';
        var keys = (document.getElementById('pb-f-keys') || {}).value || '';
        var margin = (document.getElementById('pb-f-margin') || {}).value || '';
        var notes = (document.getElementById('pb-f-notes') || {}).value || '';
        var date = new Date().toISOString().slice(0, 10);

        var facts = [];
        if (value) facts.push(['Headline value', value]);
        if (revenue) facts.push(['Revenue', revenue]);
        if (ebitda) facts.push(['EBITDA', ebitda]);
        if (margin) facts.push(['EBITDA margin', margin + '%']);
        if (keys) facts.push(['Keys / rooms', keys]);
        if (geo) facts.push(['Geography', geo]);
        facts.push(['Asset type', type]);

        var rows = facts.map(function (f) {
            return '<tr><td style="width:30%;"><strong style="color:#fff;">' + TF.esc(f[0]) + '</strong></td><td>' + TF.esc(f[1]) + '</td></tr>';
        }).join('');

        var html = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Offering Document — ' + TF.esc(asset) + '</title></head>' +
            '<body style="font-family: Georgia, serif; max-width: 760px; margin: 2rem auto; color: #111; line-height: 1.6;">' +
            '<p style="font-size: 0.7rem; letter-spacing: 2px; color: #666;">TERRAFIN AI — OFF-MARKET · NDA-GATED · ' + date + '</p>' +
            '<h1>' + TF.esc(asset) + '</h1>' +
            '<p><em>Draft offering document — generated by the Prospectus Builder. Every figure must be verified against source documents before buyer reliance.</em></p>' +
            '<h2>Key facts</h2><table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">' + rows + '</table>' +
            '<h2>Verification checklist</h2><ul><li>Headline value: ' + (value ? 'stated — verify against mandate documentation' : 'not stated') + '</li>' +
            '<li>Financials: ' + (revenue || ebitda ? 'stated — cross-check against public reports' : 'not stated') + '</li>' +
            '<li>Ownership chain: not yet established</li><li>Comparable transactions: not yet on file</li><li>Title documents: not yet received</li></ul>' +
            (notes ? '<h2>Verification notes</h2><p>' + TF.esc(notes) + '</p>' : '') +
            '<h2>Process</h2><p>NDA → due diligence → introduction to the seller. Financials are provided to buyers only after NDA. Contact: terrafinai.com.</p>' +
            '</body></html>';

        var text = 'TERRAFIN AI — OFFERING DOCUMENT (DRAFT) — ' + date + '\n' +
            'Asset: ' + asset + '\n' +
            facts.map(function (f) { return f[0] + ': ' + f[1]; }).join('\n') +
            '\n\nVerification checklist:\n- Headline value: ' + (value ? 'stated — verify against mandate documentation' : 'not stated') +
            '\n- Financials: ' + (revenue || ebitda ? 'stated — cross-check against public reports' : 'not stated') +
            '\n- Ownership chain: not yet established\n- Comparable transactions: not yet on file\n- Title documents: not yet received' +
            (notes ? '\n\nVerification notes: ' + notes : '') +
            '\n\nProcess: NDA → due diligence → introduction to the seller. Contact: terrafinai.com.';

        document.getElementById('pb-output').innerHTML =
            '<div class="tf-terminal" style="max-height: 420px; white-space: pre-wrap; color: var(--text-muted);">' + TF.esc(text) + '</div>';

        var dlHtml = document.getElementById('pb-download-html');
        var dlTxt = document.getElementById('pb-download-txt');
        dlHtml.disabled = false;
        dlTxt.disabled = false;
        dlHtml.onclick = function () { downloadBlob(html, 'offering-document.html', 'text/html'); };
        dlTxt.onclick = function () { downloadBlob(text, 'offering-document.txt', 'text/plain'); };
        TF.logActivity('site', 'prospectus-generated', asset);
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

    document.getElementById('pb-extract-btn').addEventListener('click', function () {
        var text = document.getElementById('pb-text').value;
        if (!text.trim()) {
            document.getElementById('pb-structured').innerHTML = '<p style="color:#f87171; font-size:0.85rem;">Paste source text first — or load the sample text.</p>';
            return;
        }
        extracted = TF.extractDealData(text);
        renderStructured(extracted);
    });

    document.getElementById('pb-sample-btn').addEventListener('click', function () {
        document.getElementById('pb-text').value = sampleText;
        document.getElementById('pb-asset').value = 'Starhotels — Italian Hotel Portfolio';
        document.getElementById('pb-type').value = 'Hospitality';
        document.getElementById('pb-geo').value = 'Italy · Europe';
        document.getElementById('pb-value').value = '€3.6B indicative';
    });

    document.getElementById('pb-generate-btn').addEventListener('click', buildDocument);
})();
