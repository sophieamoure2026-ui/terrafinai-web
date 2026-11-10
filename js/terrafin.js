/* TerraFin AI — shared module for the adopted deal-room features.
 * Static-site implementation: all state lives in the browser (localStorage)
 * until a backend exists. See DECISIONS.md for what needs a backend.
 *
 * Pure functions (extractDealData, computeVerificationScore) have no DOM
 * dependency and are unit-tested in node. Everything else guards for the
 * browser environment.
 */
(function (global) {
    'use strict';

    var TF = {};

    /* ---------- constants ---------- */

    // Generic (non-corporate) email domains — same list as the existing
    // data-room gate in app.js. Corporate domain required for clearance.
    TF.GENERIC_DOMAINS = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com'];

    // Access tiers — LoopNet Data Room model, adapted to TerraFin's gate:
    // 0 = public teaser, 1 = registered (contact info), 2 = e-NDA signed,
    // 3 = approved (full diligence). Shortlist is a flag on tier 3.
    TF.TIERS = [
        { id: 0, name: 'PUBLIC TEASER', desc: 'Everything publicly available. No registration.' },
        { id: 1, name: 'REGISTERED', desc: 'Contact information on file. Teaser + summary materials.' },
        { id: 2, name: 'NDA SIGNED', desc: 'Electronic NDA executed. Offering materials unlocked; approval pending.' },
        { id: 3, name: 'APPROVED — FULL DILIGENCE', desc: 'Approved by the deal team. Full data room. Shortlisted buyers see deeper material.' }
    ];

    TF.tierName = function (tier) {
        var t = TF.TIERS[tier];
        return t ? t.name : 'UNKNOWN';
    };

    /* ---------- helpers ---------- */

    TF.esc = function (s) {
        return String(s == null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    };

    TF.isCorporateEmail = function (email) {
        if (!email || email.indexOf('@') < 0) return false;
        var domain = email.split('@')[1].toLowerCase();
        return domain.indexOf('.') > 0 && TF.GENERIC_DOMAINS.indexOf(domain) < 0;
    };

    TF.store = function (key) {
        try {
            if (typeof localStorage === 'undefined') return null;
            return localStorage;
        } catch (e) { return null; }
    };

    TF.loadJSON = function (key, fallback) {
        var s = TF.store(key);
        if (!s) return fallback;
        try {
            var v = s.getItem(key);
            return v ? JSON.parse(v) : fallback;
        } catch (e) { return fallback; }
    };

    TF.saveJSON = function (key, value) {
        var s = TF.store(key);
        if (!s) return false;
        try { s.setItem(key, JSON.stringify(value)); return true; }
        catch (e) { return false; }
    };

    /* ---------- activity log (buyer-activity tracking) ---------- */

    // One event per row: { ts, mandate, action, tier, detail }
    // Actions: room-view, register, nda-signed, approval-requested,
    // approval-granted, doc-view, dossier-view, call-requested,
    // alert-subscribed, prospectus-generated.
    TF.logActivity = function (mandateId, action, detail) {
        var log = TF.loadJSON('tf_activity_v1', []);
        log.push({
            ts: new Date().toISOString(),
            mandate: mandateId || 'site',
            action: action,
            detail: detail || ''
        });
        if (log.length > 500) log = log.slice(-500);
        TF.saveJSON('tf_activity_v1', log);
        return log.length;
    };

    TF.getActivity = function () {
        return TF.loadJSON('tf_activity_v1', []);
    };

    TF.activityByMandate = function (mandateId) {
        return TF.getActivity().filter(function (e) { return e.mandate === mandateId; });
    };

    TF.engagementSummary = function (mandateId) {
        var events = TF.activityByMandate(mandateId);
        var count = function (a) { return events.filter(function (e) { return e.action === a; }).length; };
        return {
            views: count('room-view'),
            registrations: count('register'),
            ndaRequests: count('nda-signed') + count('approval-requested'),
            ndaSigned: count('nda-signed'),
            approvals: count('approval-granted'),
            docViews: count('doc-view'),
            dossierViews: count('dossier-view'),
            callsRequested: count('call-requested'),
            total: events.length
        };
    };

    /* ---------- access state (per-mandate tier) ---------- */

    // { [mandateId]: { tier, name, email, firm, role, ndaSignedAt,
    //   approved, shortlist, capability, updatedAt } }
    TF.getAccess = function (mandateId) {
        var all = TF.loadJSON('tf_access_v1', {});
        return all[mandateId] || { tier: 0 };
    };

    TF.setAccess = function (mandateId, record) {
        var all = TF.loadJSON('tf_access_v1', {});
        var prev = all[mandateId] || { tier: 0 };
        var next = {};
        Object.keys(prev).forEach(function (k) { next[k] = prev[k]; });
        Object.keys(record).forEach(function (k) { next[k] = record[k]; });
        next.updatedAt = new Date().toISOString();
        all[mandateId] = next;
        TF.saveJSON('tf_access_v1', all);
        return next;
    };

    TF.getAllAccess = function () {
        return TF.loadJSON('tf_access_v1', {});
    };

    /* ---------- buyer store (private qualified-buyer CRM) ---------- */

    // Records live in the browser only. Seed = the template file (sample
    // rows, clearly fictional). Real buyer records must never be committed
    // to this public repository. Export/import is file-based.
    TF.getBuyers = function () {
        return TF.loadJSON('tf_buyers_v1', null);
    };

    TF.saveBuyers = function (buyers) {
        return TF.saveJSON('tf_buyers_v1', buyers);
    };

    TF.upsertBuyer = function (buyer) {
        var buyers = TF.getBuyers() || [];
        var idx = -1;
        for (var i = 0; i < buyers.length; i++) {
            if (buyers[i].email && buyer.email && buyers[i].email.toLowerCase() === buyer.email.toLowerCase()) { idx = i; break; }
        }
        if (idx >= 0) {
            var merged = {};
            Object.keys(buyers[idx]).forEach(function (k) { merged[k] = buyers[idx][k]; });
            Object.keys(buyer).forEach(function (k) { merged[k] = buyer[k]; });
            buyers[idx] = merged;
        } else {
            buyer.id = buyer.id || ('b-' + Date.now().toString(36) + Math.floor(Math.random() * 1000));
            buyers.push(buyer);
        }
        TF.saveBuyers(buyers);
        return buyers;
    };

    TF.deleteBuyer = function (id) {
        var buyers = (TF.getBuyers() || []).filter(function (b) { return b.id !== id; });
        TF.saveBuyers(buyers);
        return buyers;
    };

    /* ---------- pure function: rule-based document extraction ----------
     * Crexi Vault pattern, static-site edition: regex extraction from pasted
     * OM / rent-roll / financial text. This is NOT AI extraction — it is a
     * transparent rule-based pass, clearly labeled in the UI. Production AI
     * extraction needs a backend service (see DECISIONS.md).
     */
    TF.extractDealData = function (text) {
        var src = String(text || '');
        var out = { money: [], keys: [], percents: [], years: [], types: [], rawLength: src.length };

        var moneyRe = /(€|\$|£|¥)\s?([\d,]+(?:\.\d+)?)\s?(billion|million|bn|m|B|M)?/g;
        var m;
        while ((m = moneyRe.exec(src)) !== null) {
            out.money.push({
                currency: m[1],
                amount: m[2].replace(/,/g, ''),
                scale: (m[3] || '').toLowerCase()
            });
        }

        var keysRe = /(\d[\d,]*)\s*(keys|rooms|units|suites)/gi;
        while ((m = keysRe.exec(src)) !== null) {
            out.keys.push({ count: m[1].replace(/,/g, ''), unit: m[2].toLowerCase() });
        }

        var pctRe = /(\d+(?:\.\d+)?)\s*%/g;
        while ((m = pctRe.exec(src)) !== null) {
            out.percents.push(parseFloat(m[1]));
        }

        var yearRe = /\b(19|20)\d{2}\b/g;
        var seenYears = {};
        while ((m = yearRe.exec(src)) !== null) {
            if (!seenYears[m[0]]) { seenYears[m[0]] = true; out.years.push(parseInt(m[0], 10)); }
        }

        var typeWords = ['hotel', 'data center', 'datacenter', 'bank', 'casino', 'energy', 'office', 'retail', 'industrial', 'resort', 'palace', 'hospital', 'solar', 'mining', 'logistics'];
        var lower = src.toLowerCase();
        typeWords.forEach(function (t) {
            if (lower.indexOf(t) >= 0) out.types.push(t);
        });

        return out;
    };

    /* ---------- pure function: verification score ----------
     * Counts core template fields whose dossier value is status 'verified'.
     * Returns { verified, total, pct }. Computed from the data, never
     * hardcoded, so the score stays honest as the dossier changes.
     */
    TF.computeVerificationScore = function (dossier, template) {
        var verified = 0, total = 0;
        (template.sections || []).forEach(function (section) {
            (section.fields || []).forEach(function (field) {
                if (!field.core) return;
                total += 1;
                var sec = dossier[section.id] || {};
                var f = sec[field.key];
                if (f && f.status === 'verified') verified += 1;
            });
        });
        return {
            verified: verified,
            total: total,
            pct: total ? Math.round((verified / total) * 100) : 0
        };
    };

    /* ---------- data loading (browser) ---------- */

    TF.fetchJSON = function (path) {
        if (typeof fetch === 'undefined') return Promise.reject(new Error('fetch unavailable'));
        return fetch(path).then(function (r) {
            if (!r.ok) throw new Error('HTTP ' + r.status + ' for ' + path);
            return r.json();
        });
    };

    TF.loadMandates = function () {
        return TF.fetchJSON('data/mandates.json');
    };

    /* ---------- export ---------- */

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = TF;
    }
    global.TF = TF;

})(typeof window !== 'undefined' ? window : globalThis);
