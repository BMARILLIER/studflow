// analytics.js — Tracking RGPD-compliant via Supabase analytics_events
// Offline queue + batch push + auto-flush
(function() {
    'use strict';

    var QUEUE_KEY = 'studflow_analytics_queue';
    var LS_FIRST_OPEN = 'studflow_first_open_date';
    var LS_LAST_OPEN  = 'studflow_last_open_date';
    var LS_D1_RETURN  = 'studflow_d1_return';
    var BATCH_SIZE = 10;
    var MAX_QUEUE = 500;
    var FLUSH_INTERVAL_MS = 30000;
    var LOCAL_FLUSH_MS = 30000;
    var DEBOUNCE_MS = 3000;
    var _flushing = false;
    var _flushTimer = null;
    var _debounceTimer = null;
    var _localFlushTimer = null;
    var _lastFlushTime = null;
    var _lastError = null;
    var _memoryBuffer = [];

    // ==================== INIT ====================
    function init() {
        // Flush any queued events from previous offline session
        flush();

        // Auto-flush to Supabase every 30s
        _flushTimer = setInterval(function() {
            flush();
        }, FLUSH_INTERVAL_MS);

        // Flush memory buffer to localStorage every 30s
        _localFlushTimer = setInterval(function() {
            flushMemoryBuffer();
        }, LOCAL_FLUSH_MS);

        // Flush when coming back online
        window.addEventListener('online', function() {
            flush();
        });

        // Flush memory buffer before page unload
        window.addEventListener('beforeunload', function() {
            flushMemoryBuffer();
        });

        // Track app open + D1 retention
        track('app_open');
        trackRetention();
    }

    // ==================== D1 RETENTION ====================

    function todayStr() {
        return new Date().toISOString().slice(0, 10);
    }

    function nextDayStr(dateStr) {
        var d = new Date(dateStr + 'T12:00:00Z');
        d.setUTCDate(d.getUTCDate() + 1);
        return d.toISOString().slice(0, 10);
    }

    function trackRetention() {
        var today = todayStr();

        // Set first open if not yet stored
        if (!localStorage.getItem(LS_FIRST_OPEN)) {
            localStorage.setItem(LS_FIRST_OPEN, today);
        }

        // Always update last open
        localStorage.setItem(LS_LAST_OPEN, today);

        // Check D1: user returned the day after first open
        if (localStorage.getItem(LS_D1_RETURN) !== 'true') {
            var firstOpen = localStorage.getItem(LS_FIRST_OPEN);
            if (firstOpen && today === nextDayStr(firstOpen)) {
                localStorage.setItem(LS_D1_RETURN, 'true');
            }
        }
    }

    function getRetentionData() {
        return {
            firstOpen: localStorage.getItem(LS_FIRST_OPEN) || null,
            lastOpen: localStorage.getItem(LS_LAST_OPEN) || null,
            d1Return: localStorage.getItem(LS_D1_RETURN) === 'true'
        };
    }

    // ==================== CONSENT ====================
    var CONSENT_KEY = 'studflow_analytics_consent';

    function hasConsent() {
        // Default: analytics enabled (can be opted out)
        return localStorage.getItem(CONSENT_KEY) !== 'refused';
    }

    function setConsent(accepted) {
        localStorage.setItem(CONSENT_KEY, accepted ? 'accepted' : 'refused');
        if (!accepted) {
            // Clear pending queue when user refuses
            saveQueue([]);
        }
    }

    // ==================== TRACK ====================
    function track(eventName, metadata) {
        // Respect user consent
        if (!hasConsent()) return;

        var userId = null;
        if (window.StudFlow.auth && window.StudFlow.auth.getUser()) {
            userId = window.StudFlow.auth.getUser().id;
        }

        // Sanitize: never include email or PII
        var safeMeta = metadata || {};
        if (safeMeta.email) delete safeMeta.email;
        if (safeMeta.password) delete safeMeta.password;
        if (safeMeta.name) delete safeMeta.name;

        var row = {
            user_id: userId,
            event_name: eventName,
            metadata: safeMeta,
            created_at: new Date().toISOString()
        };

        enqueue(row);
        debouncedFlush();
    }

    // ==================== LOCAL QUEUE ====================
    function enqueue(row) {
        _memoryBuffer.push(row);
        // Safety: flush buffer if it gets large
        if (_memoryBuffer.length >= 50) {
            flushMemoryBuffer();
        }
    }

    function flushMemoryBuffer() {
        if (_memoryBuffer.length === 0) return;
        var queue = loadQueue();
        queue = queue.concat(_memoryBuffer);
        _memoryBuffer = [];
        if (queue.length > MAX_QUEUE) {
            queue = queue.slice(-MAX_QUEUE);
        }
        saveQueue(queue);
    }

    function loadQueue() {
        try {
            var raw = localStorage.getItem(QUEUE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch(e) { return []; }
    }

    function saveQueue(queue) {
        try {
            localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
        } catch(e) {}
    }

    function getQueueSize() {
        return loadQueue().length + _memoryBuffer.length;
    }

    // ==================== FLUSH (batch push + debounce) ====================
    function debouncedFlush() {
        if (_debounceTimer) clearTimeout(_debounceTimer);
        _debounceTimer = setTimeout(function() {
            flush();
        }, DEBOUNCE_MS);
    }

    function flush() {
        if (_flushing) return;

        // Always flush memory buffer to localStorage first
        flushMemoryBuffer();

        var sb = window.StudFlow.sb && window.StudFlow.sb.getClient();
        if (!sb || !navigator.onLine) return;

        var queue = loadQueue();
        if (queue.length === 0) return;

        _flushing = true;
        var batch = queue.splice(0, BATCH_SIZE);
        saveQueue(queue);

        sb.from('analytics_events').insert(batch).then(function(r) {
            _flushing = false;
            if (r.error) {
                _lastError = { time: new Date().toISOString(), message: r.error.message || 'Insert error' };
                // Re-queue failed batch
                var current = loadQueue();
                if (current.length + batch.length <= MAX_QUEUE) {
                    saveQueue(batch.concat(current));
                }
                return;
            }
            _lastFlushTime = new Date().toISOString();
            _lastError = null;
            // Continue flushing if more remain
            if (loadQueue().length > 0) flush();
        }).catch(function(e) {
            _flushing = false;
            _lastError = { time: new Date().toISOString(), message: e.message || 'Network error' };
            var current = loadQueue();
            if (current.length + batch.length <= MAX_QUEUE) {
                saveQueue(batch.concat(current));
            }
        });
    }

    // ==================== ADMIN: READ EVENTS ====================
    function getRecentEvents(limit, eventFilter) {
        var sb = window.StudFlow.sb && window.StudFlow.sb.getClient();
        if (!sb) return Promise.resolve([]);

        var query = sb.from('analytics_events')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(limit || 50);

        if (eventFilter && eventFilter !== 'all') {
            query = query.eq('event_name', eventFilter);
        }

        return query.then(function(r) {
            return (r.data || []);
        }).catch(function() { return []; });
    }

    // ==================== BETA STATS (local-only) ====================

    function getBetaStats(events) {
        if (!events) {
            flushMemoryBuffer();
            events = loadQueue();
        }
        var stats = {
            total_events: events.length,
            app_opens: 0,
            dashboard_views: 0,
            focus_starts: 0,
            focus_completions: 0,
            flashcard_reviews: 0,
            quiz_starts: 0,
            quiz_completions: 0,
            pdf_imports: 0,
            diagnostic_completions: 0,
            invite_links_generated: 0
        };
        for (var i = 0; i < events.length; i++) {
            var name = events[i].event_name;
            if (name === 'app_open') stats.app_opens++;
            else if (name === 'dashboard_view') stats.dashboard_views++;
            else if (name === 'focus_session_start') stats.focus_starts++;
            else if (name === 'focus_session_complete') stats.focus_completions++;
            else if (name === 'flashcard_review') stats.flashcard_reviews++;
            else if (name === 'quiz_start') stats.quiz_starts++;
            else if (name === 'quiz_completed') stats.quiz_completions++;
            else if (name === 'pdf_import') stats.pdf_imports++;
            else if (name === 'diagnostic_complete') stats.diagnostic_completions++;
            else if (name === 'invite_link_generated') stats.invite_links_generated++;
        }
        return stats;
    }

    function exportEvents() {
        flushMemoryBuffer();
        var events = loadQueue();
        var blob = new Blob([JSON.stringify(events, null, 2)], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'studflow_analytics_' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function renderBetaPanel() {
        var container = document.getElementById('beta-analytics-panel');
        if (!container) return;
        container.style.display = '';

        var stats = getBetaStats();
        var retention = getRetentionData();
        var d1Label = retention.d1Return ? 'OUI' : 'NON';
        var d1Class = retention.d1Return ? 'beta-retention-yes' : 'beta-retention-no';

        container.innerHTML =
            '<h3>Beta Analytics</h3>' +
            '<p style="color:var(--text-dim);font-size:0.78rem;margin-bottom:12px;">' +
                'Les donn\u00e9es d\u2019utilisation restent sur ton appareil et servent uniquement \u00e0 am\u00e9liorer StudFlow.' +
            '</p>' +
            '<div class="beta-retention-row">' +
                '<div class="beta-retention-item">' +
                    '<span class="beta-retention-label">Premi\u00e8re ouverture</span>' +
                    '<span class="beta-retention-value">' + (retention.firstOpen || '\u2014') + '</span>' +
                '</div>' +
                '<div class="beta-retention-item">' +
                    '<span class="beta-retention-label">Derni\u00e8re ouverture</span>' +
                    '<span class="beta-retention-value">' + (retention.lastOpen || '\u2014') + '</span>' +
                '</div>' +
                '<div class="beta-retention-item">' +
                    '<span class="beta-retention-label">R\u00e9tention D1</span>' +
                    '<span class="beta-retention-value ' + d1Class + '">' + d1Label + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="beta-stats-grid">' +
                statCard('Sessions', stats.app_opens, '📱') +
                statCard('Dashboard', stats.dashboard_views, '🏠') +
                statCard('Focus', stats.focus_completions, '🎯') +
                statCard('Quiz', stats.quiz_completions, '⚡') +
                statCard('Flashcards', stats.flashcard_reviews, '🎴') +
                statCard('PDF imports', stats.pdf_imports, '📄') +
                statCard('Diagnostics', stats.diagnostic_completions, '🧠') +
                statCard('Invitations', stats.invite_links_generated, '🎟️') +
            '</div>' +
            '<button class="breathing-btn secondary" id="beta-analytics-export" style="margin-top:12px;font-size:0.85rem;">' +
                '📥 Exporter les donn\u00e9es' +
            '</button>' +
            '<p style="color:var(--text-dim);font-size:0.72rem;margin-top:6px;">' +
                stats.total_events + ' \u00e9v\u00e9nements enregistr\u00e9s (max ' + MAX_QUEUE + ')' +
            '</p>';

        var exportBtn = document.getElementById('beta-analytics-export');
        if (exportBtn) {
            exportBtn.addEventListener('click', exportEvents);
        }
    }

    function statCard(label, value, icon) {
        return '<div class="beta-stat-card">' +
            '<span class="beta-stat-icon">' + icon + '</span>' +
            '<span class="beta-stat-value">' + value + '</span>' +
            '<span class="beta-stat-label">' + label + '</span>' +
        '</div>';
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    function getFlushStatus() {
        return {
            lastFlushTime: _lastFlushTime,
            lastError: _lastError,
            queueSize: getQueueSize(),
            flushing: _flushing,
            config: { MAX_QUEUE: MAX_QUEUE, BATCH_SIZE: BATCH_SIZE, DEBOUNCE_MS: DEBOUNCE_MS, FLUSH_INTERVAL_MS: FLUSH_INTERVAL_MS }
        };
    }

    window.StudFlow.analytics = {
        init: init,
        track: track,
        flush: flush,
        flushMemoryBuffer: flushMemoryBuffer,
        getQueueSize: getQueueSize,
        getFlushStatus: getFlushStatus,
        getRecentEvents: getRecentEvents,
        hasConsent: hasConsent,
        setConsent: setConsent,
        getBetaStats: getBetaStats,
        exportEvents: exportEvents,
        renderBetaPanel: renderBetaPanel,
        getRetentionData: getRetentionData,
        // Pure helpers exposed for testing
        nextDayStr: nextDayStr
    };

})();
