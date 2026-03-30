// errorLog.js — Local-first error logging (rolling localStorage, max 200 entries)
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_error_log';
    var MAX_ENTRIES = 200;

    // ==================== REMOTE TYPES ====================
    // Errors worth sending to Supabase for production visibility
    var REMOTE_TYPES = {
        js_error: true, promise_rejection: true, pdf_error: true,
        ai_error: true, auth: true, storage_error: true, network_error: true
    };

    // ==================== LOG ====================
    function log(type, message, extra) {
        var entry = {
            ts: new Date().toISOString(),
            type: type,
            message: String(message || '').substring(0, 300),
            stack: extra && extra.stack ? String(extra.stack).substring(0, 500) : null,
            url: extra && extra.url ? String(extra.url).split('/').pop() : null,
            ua: navigator.userAgent.substring(0, 120)
        };

        var entries = readLog();
        entries.push(entry);

        // Rolling: keep last MAX_ENTRIES
        if (entries.length > MAX_ENTRIES) {
            entries = entries.slice(-MAX_ENTRIES);
        }

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
        } catch (e) {
            // localStorage full — drop oldest half
            entries = entries.slice(Math.floor(entries.length / 2));
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
            } catch (e2) { /* give up silently */ }
        }

        // Push critical errors to Supabase via analytics pipeline
        if (REMOTE_TYPES[type] && window.StudFlow && window.StudFlow.analytics) {
            window.StudFlow.analytics.track('error_' + type, {
                message: entry.message,
                stack: entry.stack,
                url: entry.url
            });
        }

        // Forward to Sentry
        if (REMOTE_TYPES[type] && window.StudFlow && window.StudFlow.sentry) {
            if (extra && extra.stack) {
                var err = new Error(message);
                err.stack = extra.stack;
                window.StudFlow.sentry.captureException(err, { type: type, url: entry.url });
            } else {
                window.StudFlow.sentry.captureMessage(type + ': ' + message, 'error', { type: type, url: entry.url });
            }
        }
    }

    // ==================== READ ====================
    function readLog() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) { /* corrupted — reset */ }
        return [];
    }

    // ==================== EXPORT ====================
    function exportLog() {
        var entries = readLog();
        var blob = new Blob(
            [JSON.stringify(entries, null, 2)],
            { type: 'application/json' }
        );
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'studflow-diagnostic-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // ==================== REPORT CONTENT ISSUE ====================
    function logReport(contentType, excerpt) {
        log('content_report', 'Contenu signale: ' + (contentType || 'unknown'), {
            url: window.location.hash || window.location.pathname
        });

        // Also store structured report for export
        var reports = [];
        try {
            var raw = localStorage.getItem('studflow_content_reports');
            if (raw) reports = JSON.parse(raw);
        } catch (e) { /* ignore */ }

        reports.push({
            ts: new Date().toISOString(),
            type: contentType,
            excerpt: String(excerpt || '').substring(0, 200),
            url: window.location.hash || window.location.pathname,
            ua: navigator.userAgent.substring(0, 120)
        });

        // Keep last 50 reports
        if (reports.length > 50) reports = reports.slice(-50);
        try {
            localStorage.setItem('studflow_content_reports', JSON.stringify(reports));
        } catch (e) { /* ignore */ }
    }

    // ==================== CLEAR ====================
    function clearLog() {
        localStorage.removeItem(STORAGE_KEY);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.errorLog = {
        log: log,
        readLog: readLog,
        exportLog: exportLog,
        clearLog: clearLog,
        logReport: logReport
    };
})();
