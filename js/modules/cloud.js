// cloud.js — Sync localStorage <-> Supabase user_state (local-first)
// Sprint A hardening: beforeunload, anti-double-pull, backoff, debug logs, sync status UI
(function() {

    var PUSH_DEBOUNCE = 30000; // 30s
    var RETRY_BASE_MS = 5000;  // backoff base
    var RETRY_MAX_MS = 120000; // backoff cap 2min
    var RECONNECT_COOLDOWN = 3000; // ms before pushing after reconnect
    var _dirty = false;
    var _pushTimer = null;
    var _syncing = false;
    var _lastSyncAt = null;
    var _originalSave = null;
    var _started = false;
    var _pulled = false;        // anti double-pull
    var _retryCount = 0;        // backoff counter
    var _syncDisabled = false;  // true after max retries, reset on reconnect
    var _syncState = 'idle';    // idle | syncing | ok | error | waiting
    var _DEBUG = false;

    // Keys to sync (everything meaningful, not temp/PDF/admin)
    var SYNC_KEYS = [
        'profile', 'onboarding_done',
        'gamification', 'scores', 'focusStats',
        'badges', 'missions', 'spacedRep', 'subjectProgress',
        'planBac', 'coachChat', 'coachMsgCount', 'dailyGoal',
        'customFlashcards', 'customQuiz',
        'userPlan', 'subscription'
    ];

    // ==================== DEBUG LOG ====================

    function log() {
        if (!_DEBUG) return;
        var args = ['[Cloud]'].concat(Array.prototype.slice.call(arguments));
        console.debug.apply(console, args);
    }

    function setDebug(v) { _DEBUG = !!v; }

    // ==================== INIT ====================

    function init() {
        _lastSyncAt = StudFlow.storage.loadData('_cloud_lastSync', null);
        _dirty = StudFlow.storage.loadData('_cloud_dirty', false);
        _DEBUG = StudFlow.storage.loadData('studflow_debug', false);

        // Hook into storage.saveData
        if (!_originalSave) {
            _originalSave = StudFlow.storage.saveData;
            StudFlow.storage.saveData = function(key, data) {
                _originalSave(key, data);
                if (SYNC_KEYS.indexOf(key) !== -1) {
                    markDirty();
                }
            };
        }

        // Flush dirty on reconnect — reset retry state, use cooldown to avoid spam
        window.addEventListener('online', function() {
            log('online event, dirty=' + _dirty + ', disabled=' + _syncDisabled + ', pulled=' + _pulled);
            _retryCount = 0;
            _syncing = false; // force-reset in case stuck from failed request
            if (_syncDisabled) {
                _syncDisabled = false;
                log('sync re-enabled after reconnect');
            }
            // Allow pull retry if previous pull failed
            if (!_pulled && isEnabled()) {
                log('pull retry after reconnect');
                try { pull(); } catch(e) { log('pull retry error:', e.message); }
            }
            if (_dirty && isEnabled()) {
                setSyncState('waiting');
                clearTimeout(_pushTimer);
                _pushTimer = setTimeout(function() {
                    if (_dirty && isEnabled() && navigator.onLine) pushNow();
                }, RECONNECT_COOLDOWN);
            }
        });

        // P0: beforeunload push (best-effort)
        window.addEventListener('beforeunload', function() {
            if (!_dirty || !isEnabled()) return;
            flushBeforeUnload();
        });

        if (_dirty) setSyncState('waiting');
        _started = true;
        log('init, dirty=' + _dirty, 'lastSync=' + _lastSyncAt);
    }

    function stop() {
        clearTimeout(_pushTimer);
        _dirty = false;
        _pulled = false;
        _retryCount = 0;
        _syncDisabled = false;
        saveMeta();
        setSyncState('idle');
        log('stop');
    }

    // ==================== STATUS ====================

    function isEnabled() {
        return !!(StudFlow.sb && StudFlow.sb.isAvailable() && StudFlow.auth && StudFlow.auth.getUser());
    }

    function getSyncStatus() {
        return { lastSyncAt: _lastSyncAt, dirty: _dirty, syncing: _syncing, state: _syncState };
    }

    // ==================== SYNC STATE + UI ====================

    function setSyncState(state) {
        _syncState = state;
        updateSyncUI();
        if (StudFlow.events) StudFlow.events.emit('cloud:stateChange', { state: state });
    }

    function updateSyncUI() {
        var el = document.getElementById('cloud-sync-indicator');
        if (!el) return;
        // Hide sync errors from non-connected users
        var user = StudFlow.auth && StudFlow.auth.getUser ? StudFlow.auth.getUser() : null;
        if (!user) {
            el.textContent = '';
            el.className = 'cloud-sync-indicator';
            return;
        }
        var labels = {
            idle: '',
            syncing: '⟳ Sync...',
            ok: '✓ Sync',
            error: '',
            waiting: ''
        };
        el.textContent = labels[_syncState] || '';
        el.className = 'cloud-sync-indicator cloud-sync-' + (_syncState === 'error' ? 'idle' : _syncState);
    }

    // ==================== MARK DIRTY + DEBOUNCE ====================

    function markDirty() {
        _dirty = true;
        saveMeta();
        setSyncState('waiting');
        if (!isEnabled() || !navigator.onLine) return;
        clearTimeout(_pushTimer);
        _pushTimer = setTimeout(pushNow, PUSH_DEBOUNCE);
    }

    // ==================== BUILD STATE SNAPSHOT ====================

    function buildSnapshot() {
        var snap = {};
        for (var i = 0; i < SYNC_KEYS.length; i++) {
            var val = StudFlow.storage.loadData(SYNC_KEYS[i], undefined);
            if (val !== undefined && val !== null) {
                snap[SYNC_KEYS[i]] = val;
            }
        }
        snap._ts = new Date().toISOString();
        return snap;
    }

    // ==================== PUSH ====================

    function push() {
        if (_dirty) return pushNow();
        return Promise.resolve();
    }

    function pushNow() {
        if (_syncing || !isEnabled() || _syncDisabled) return Promise.resolve();
        _syncing = true;
        setSyncState('syncing');
        log('push start');

        var sb = StudFlow.sb.getClient();
        var userId = StudFlow.auth.getUser().id;
        var snapshot = buildSnapshot();

        var promise = sb.from('user_state')
            .upsert({ id: userId, data: snapshot }, { onConflict: 'id' });

        return StudFlow.sb.withTimeout(promise, 10000)
            .then(function(r) {
                _syncing = false;
                if (r.error) {
                    log('push error:', r.error.message);
                    setSyncState('error');
                    scheduleRetry();
                    return;
                }
                _dirty = false;
                _retryCount = 0;
                _lastSyncAt = new Date().toISOString();
                saveMeta();
                setSyncState('ok');
                emitEvent('cloud:pushed');
                log('push ok');
            })
            .catch(function(err) {
                _syncing = false;
                setSyncState('error');
                log('push failed:', err.message);
                scheduleRetry();
            });
    }

    // ==================== PULL (anti double-pull) ====================

    function pull() {
        if (!isEnabled()) return Promise.resolve();
        // Anti double-pull: skip if already pulled successfully this session
        if (_pulled) {
            log('pull skipped (already pulled)');
            return Promise.resolve();
        }
        if (_syncing) {
            log('pull skipped (sync in progress)');
            return Promise.resolve();
        }
        _syncing = true;
        setSyncState('syncing');
        log('pull start');

        var sb = StudFlow.sb.getClient();
        var userId = StudFlow.auth.getUser().id;

        var promise = sb.from('user_state')
            .select('data, updated_at')
            .eq('id', userId)
            .single();

        return StudFlow.sb.withTimeout(promise, 10000)
            .then(function(r) {
                _syncing = false;
                if (r.error) {
                    // No row yet = first login, push local state
                    if (r.error.code === 'PGRST116') {
                        _pulled = true;
                        log('no server row, pushing local');
                        return pushNow();
                    }
                    log('pull error:', r.error.message);
                    setSyncState('error');
                    // Don't set _pulled — allow retry on reconnect
                    return;
                }
                var serverData = r.data.data;
                var serverTs = r.data.updated_at;

                if (!serverData || typeof serverData !== 'object') {
                    // Server empty, push local
                    _pulled = true;
                    _dirty = true;
                    log('server data empty, pushing');
                    return pushNow();
                }

                merge(serverData, serverTs);
                _pulled = true;
                _lastSyncAt = new Date().toISOString();
                saveMeta();
                setSyncState('ok');
                emitEvent('cloud:pulled');
                log('pull ok, merged');

                // If local has pending changes, push after merge
                if (_dirty) {
                    return pushNow();
                }
            })
            .catch(function(err) {
                _syncing = false;
                log('pull failed:', err.message);
                setSyncState('error');
                // Don't set _pulled — allow retry on reconnect
            });
    }

    // ==================== RETRY WITH BACKOFF ====================

    function scheduleRetry() {
        if (!navigator.onLine) {
            setSyncState('waiting');
            log('offline, waiting for reconnect');
            return; // will retry via 'online' event
        }
        _retryCount++;
        // Stop retrying after 3 attempts — wait for network change to re-enable
        if (_retryCount > 3) {
            _syncDisabled = true;
            setSyncState('error');
            log('max retries reached, sync paused until reconnect');
            return;
        }
        var delay = Math.min(RETRY_BASE_MS * Math.pow(2, _retryCount - 1), RETRY_MAX_MS);
        setSyncState('error');
        log('retry #' + _retryCount + ' in ' + delay + 'ms');
        clearTimeout(_pushTimer);
        _pushTimer = setTimeout(function() {
            if (_dirty && isEnabled() && navigator.onLine && !_syncDisabled) pushNow();
        }, delay);
    }

    // ==================== BEFOREUNLOAD PUSH ====================

    function flushBeforeUnload() {
        log('beforeunload flush');
        var user = StudFlow.auth.getUser();
        if (!user) return;

        var snapshot = buildSnapshot();
        var payload = JSON.stringify({ id: user.id, data: snapshot });

        // Try sendBeacon (Supabase REST endpoint)
        if (navigator.sendBeacon) {
            var sb = StudFlow.sb.getClient();
            if (!sb) return;
            // Build the REST URL for upsert (use centralized config)
            var url = StudFlow.sb.URL + '/rest/v1/user_state?on_conflict=id';
            // Get current session token (derive storage key from URL)
            var projectRef = StudFlow.sb.URL.replace('https://', '').split('.')[0];
            var storageKey = 'sb-' + projectRef + '-auth-token';
            var sessionRaw = localStorage.getItem(storageKey);
            var accessToken = null;
            if (sessionRaw) {
                try {
                    var session = JSON.parse(sessionRaw);
                    accessToken = session.access_token || (session.currentSession && session.currentSession.access_token);
                } catch(e) {}
            }
            if (!accessToken) return;

            var blob = new Blob([payload], { type: 'application/json' });
            // sendBeacon can't set custom headers, use fetch keepalive instead
            try {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + accessToken,
                        'apikey': StudFlow.sb.KEY,
                        'Prefer': 'resolution=merge-duplicates'
                    },
                    body: payload,
                    keepalive: true
                });
            } catch(e) {
                // Best-effort, fail silently
            }
        }
        // _dirty stays true in localStorage so next session retries if this failed
    }

    // ==================== MERGE ====================

    function merge(serverData, serverTs) {
        var localTs = _lastSyncAt || '1970-01-01T00:00:00Z';
        var serverNewer = serverTs && serverTs > localTs;

        for (var i = 0; i < SYNC_KEYS.length; i++) {
            var key = SYNC_KEYS[i];
            if (!(key in serverData)) continue;

            var sv = serverData[key];
            var lv = StudFlow.storage.loadData(key, undefined);

            var merged = mergeKey(key, lv, sv, serverNewer);
            if (merged !== undefined) {
                _originalSave(key, merged); // Direct save, no re-trigger
            }
        }
    }

    function mergeKey(key, local, server, serverNewer) {
        if (server === undefined || server === null) return undefined;
        if (local === undefined || local === null) return server;

        // Gamification / scores : max wins
        if (key === 'gamification') {
            return maxMerge(local, server, ['xp', 'level', 'totalActions', 'streak']);
        }
        if (key === 'scores') {
            return maxMerge(local, server, ['masteredCards', 'streak', 'quizScore', 'flashcardScore']);
        }

        // Custom content : union
        if (key === 'customFlashcards' || key === 'customQuiz') {
            return unionMerge(local, server, 'question');
        }

        // Subscription : server always wins
        if (key === 'subscription' || key === 'userPlan') {
            return server;
        }

        // Everything else : most recent wins
        return serverNewer ? server : local;
    }

    function maxMerge(local, server, fields) {
        if (typeof local !== 'object') local = {};
        if (typeof server !== 'object') server = {};
        var r = {};
        var k;
        for (k in local) r[k] = local[k];
        for (k in server) if (!(k in r)) r[k] = server[k];
        for (var i = 0; i < fields.length; i++) {
            var f = fields[i];
            var lv = typeof local[f] === 'number' ? local[f] : 0;
            var sv = typeof server[f] === 'number' ? server[f] : 0;
            r[f] = Math.max(lv, sv);
        }
        return r;
    }

    function unionMerge(localArr, serverArr, dedupeKey) {
        if (!Array.isArray(localArr)) localArr = [];
        if (!Array.isArray(serverArr)) serverArr = [];
        var seen = {};
        var result = [];
        var i, k;
        for (i = 0; i < localArr.length; i++) {
            k = localArr[i][dedupeKey] || JSON.stringify(localArr[i]);
            if (!seen[k]) { seen[k] = true; result.push(localArr[i]); }
        }
        for (i = 0; i < serverArr.length; i++) {
            k = serverArr[i][dedupeKey] || JSON.stringify(serverArr[i]);
            if (!seen[k]) { seen[k] = true; result.push(serverArr[i]); }
        }
        return result;
    }

    // ==================== HELPERS ====================

    function saveMeta() {
        if (_originalSave) {
            _originalSave('_cloud_lastSync', _lastSyncAt);
            _originalSave('_cloud_dirty', _dirty);
        }
    }

    function emitEvent(name) {
        if (StudFlow.events) StudFlow.events.emit(name, { ts: _lastSyncAt });
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.cloud = {
        init: init,
        stop: stop,
        isEnabled: isEnabled,
        pull: pull,
        push: push,
        markDirty: markDirty,
        getSyncStatus: getSyncStatus,
        _debug: setDebug,
        _getRetryState: function() { return { retryCount: _retryCount, disabled: _syncDisabled }; }
    };
})();
