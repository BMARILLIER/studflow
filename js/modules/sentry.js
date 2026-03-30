// sentry.js — Error monitoring via Sentry
// Must be imported FIRST in main.js so it captures all errors from the start.
import * as Sentry from '@sentry/browser';

(function() {
    'use strict';

    var DSN = import.meta.env.VITE_SENTRY_DSN || '';
    if (!DSN) {
        console.log('[Sentry] DSN non configure — monitoring desactive');
        return;
    }

    // ==================== ANONYMOUS USER ID ====================
    // Stable per-device, no PII
    var ANON_KEY = 'studflow_anon_id';
    var anonId = localStorage.getItem(ANON_KEY);
    if (!anonId) {
        anonId = 'anon-' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
        localStorage.setItem(ANON_KEY, anonId);
    }

    // ==================== INIT ====================
    Sentry.init({
        dsn: DSN,
        environment: location.hostname.includes('localhost') ? 'development' : 'production',
        release: 'studflow@1.0.0',

        // Sample 100% of errors (low traffic beta)
        sampleRate: 1.0,

        // No performance tracing (keep it light)
        tracesSampleRate: 0,

        // ==================== NOISE FILTER ====================
        beforeSend: function(event) {
            var msg = (event.message || '').toLowerCase();
            var exception = event.exception && event.exception.values && event.exception.values[0];
            var errMsg = exception ? (exception.value || '').toLowerCase() : '';
            var combined = msg + ' ' + errMsg;

            // Browser extensions & third-party noise
            if (combined.indexOf('extension') !== -1) return null;
            if (combined.indexOf('chrome-extension') !== -1) return null;
            if (combined.indexOf('moz-extension') !== -1) return null;
            if (combined.indexOf('safari-extension') !== -1) return null;

            // ResizeObserver spam (benign browser quirk)
            if (combined.indexOf('resizeobserver') !== -1) return null;

            // Network errors from ad blockers / tracking blockers
            if (combined.indexOf('blocked') !== -1 && combined.indexOf('csp') !== -1) return null;

            // Service worker lifecycle (not actionable)
            if (combined.indexOf('service worker') !== -1 && combined.indexOf('redundant') !== -1) return null;

            // Tag with current screen
            var screen = 'unknown';
            if (window.StudFlow && window.StudFlow.app && window.StudFlow.app.getState) {
                screen = window.StudFlow.app.getState().currentScreen || 'unknown';
            } else {
                screen = location.hash.replace('#', '') || 'dashboard';
            }
            event.tags = event.tags || {};
            event.tags.screen = screen;

            return event;
        },

        // ==================== BREADCRUMBS ====================
        // Keep default (console, clicks, XHR/fetch, navigation)
        maxBreadcrumbs: 30
    });

    // ==================== USER CONTEXT ====================
    Sentry.setUser({ id: anonId });

    // ==================== DEVICE & APP CONTEXT ====================
    Sentry.setTags({
        app_version: '1.0.0',
        pwa_standalone: window.matchMedia('(display-mode: standalone)').matches ? 'yes' : 'no',
        device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
        platform: navigator.platform || 'unknown'
    });

    // ==================== SCREEN NAVIGATION BREADCRUMBS ====================
    // Hook into StudFlow's showScreen after app loads
    var _hooked = false;
    function hookNavigation() {
        if (_hooked) return;
        if (!window.StudFlow || !window.StudFlow.events) return;
        _hooked = true;

        // Listen to screen changes via event bus if available
        window.StudFlow.events.on('screen:changed', function(data) {
            Sentry.addBreadcrumb({
                category: 'navigation',
                message: 'Screen: ' + (data && data.screen || 'unknown'),
                level: 'info'
            });
        });
    }

    // Try hooking after DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { setTimeout(hookNavigation, 500); });
    } else {
        setTimeout(hookNavigation, 500);
    }

    // ==================== PUBLIC API ====================
    // Used by errorLog.js to forward critical errors
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.sentry = {
        captureException: function(error, context) {
            Sentry.captureException(error, { extra: context });
        },
        captureMessage: function(message, level, context) {
            Sentry.captureMessage(message, {
                level: level || 'error',
                extra: context
            });
        },
        setUser: function(userData) {
            Sentry.setUser(userData);
        },
        addBreadcrumb: function(category, message) {
            Sentry.addBreadcrumb({ category: category, message: message, level: 'info' });
        }
    };

    console.log('[Sentry] Monitoring actif');
})();
