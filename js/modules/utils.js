// utils.js — shared helpers used across multiple modules.
// Loaded early in main.js so any module attaching to window.StudFlow
// can call window.StudFlow.utils.* in its IIFE body.
(function() {
    'use strict';

    // Escape the 5 HTML-significant characters (& < > " ').
    // Use this everywhere we inject untrusted strings into innerHTML.
    function escapeHtml(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    // Today's date in Europe/Paris timezone, formatted YYYY-MM-DD.
    // Used by daily-* modules to key state to the local civil day.
    function parisToday() {
        var p = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
        return p.getFullYear() + '-' + String(p.getMonth() + 1).padStart(2, '0') + '-' + String(p.getDate()).padStart(2, '0');
    }

    // FNV-1a 32-bit hash. Deterministic seed from a string (e.g. a date)
    // for picking daily content reproducibly across reloads.
    function seed(s) {
        var h = 2166136261;
        for (var i = 0; i < s.length; i++) {
            h ^= s.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        return (h >>> 0);
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.utils = {
        escapeHtml: escapeHtml,
        parisToday: parisToday,
        seed: seed
    };
})();
