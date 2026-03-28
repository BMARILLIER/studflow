// feedback.js — Feedback utilisateur (local + Supabase sync + offline queue)
(function() {

    var storage = function() { return window.StudFlow.storage; };
    var FEEDBACK_QUEUE_KEY = 'studflow_feedback_queue';
    var MAX_FB_QUEUE = 100;
    var APP_VERSION = '1.0.0';
    var _fbLastFlushTime = null;
    var _fbLastError = null;

    // ==================== DATA ====================
    function loadHistory() {
        return storage().loadData('feedbackHistory', { entries: [], total: 0 });
    }

    function saveHistory(data) {
        storage().saveData('feedbackHistory', data);
    }

    // ==================== OFFLINE QUEUE ====================
    function loadFbQueue() {
        try {
            var raw = localStorage.getItem(FEEDBACK_QUEUE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch(e) { return []; }
    }

    function saveFbQueue(queue) {
        try {
            localStorage.setItem(FEEDBACK_QUEUE_KEY, JSON.stringify(queue));
        } catch(e) {}
    }

    function enqueueFeedback(row) {
        var queue = loadFbQueue();
        queue.push(row);
        if (queue.length > MAX_FB_QUEUE) queue = queue.slice(-MAX_FB_QUEUE);
        saveFbQueue(queue);
    }

    function flushFeedbackQueue() {
        var sb = window.StudFlow.sb && window.StudFlow.sb.getClient();
        if (!sb || !navigator.onLine) return;

        var queue = loadFbQueue();
        if (queue.length === 0) return;

        var batch = queue.splice(0, 10);
        saveFbQueue(queue);

        sb.from('user_feedback').insert(batch).then(function(r) {
            if (r.error) {
                _fbLastError = { time: new Date().toISOString(), message: r.error.message || 'Insert error' };
                var current = loadFbQueue();
                saveFbQueue(batch.concat(current));
                return;
            }
            _fbLastFlushTime = new Date().toISOString();
            _fbLastError = null;
            if (loadFbQueue().length > 0) flushFeedbackQueue();
        }).catch(function(e) {
            _fbLastError = { time: new Date().toISOString(), message: e.message || 'Network error' };
            var current = loadFbQueue();
            saveFbQueue(batch.concat(current));
        });
    }

    // ==================== INIT ====================
    function init() {
        flushFeedbackQueue();
        window.addEventListener('online', function() {
            flushFeedbackQueue();
        });
    }

    // ==================== RENDER ====================
    function show() {
        window.StudFlow.app.showScreen('feedback');
        render();
    }

    function render() {
        var container = document.getElementById('feedback-content');
        if (!container) return;

        var history = loadHistory();
        var hasRecent = false;
        if (history.entries.length > 0) {
            var last = history.entries[history.entries.length - 1];
            var daysSince = (Date.now() - new Date(last.date).getTime()) / 86400000;
            hasRecent = daysSince < 1;
        }

        if (hasRecent) {
            renderThankYou(container, history);
            return;
        }

        // Quick feedback at top
        var quickHTML =
            '<div class="fb-quick">'
            +   '<h3>Feedback rapide</h3>'
            +   '<div class="fb-quick-row">'
            +       '<button class="fb-quick-btn fb-quick-error" data-action="feedback.showQuickForm" data-param="bug">'
            +           '&#9888;&#65039; Signaler une erreur'
            +       '</button>'
            +       '<button class="fb-quick-btn fb-quick-suggest" data-action="feedback.showQuickForm" data-param="idee">'
            +           '&#128161; Suggestion'
            +       '</button>'
            +   '</div>'
            +   '<div id="fb-quick-form"></div>'
            + '</div>'
            + '<hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:1.5rem 0;">';

        container.innerHTML = quickHTML
            + '<div class="fb-form">'
            +   '<div class="fb-header">'
            +       '<h2>Ton avis detaille</h2>'
            +       '<p class="fb-subtitle">100% anonyme. Aide a ameliorer StudFlow.</p>'
            +   '</div>'
            +   '<div class="fb-question">'
            +       '<label class="fb-label">StudFlow t\'aide-t-il ?</label>'
            +       '<div class="fb-stars" id="fb-stars">' + renderStars(0) + '</div>'
            +   '</div>'
            +   '<div class="fb-question">'
            +       '<label class="fb-label">Qu\'est-ce que tu preferes ?</label>'
            +       '<textarea id="fb-likes" class="fb-textarea" placeholder="Ex : le timer Focus, les fiches, le diagnostic..." rows="2"></textarea>'
            +   '</div>'
            +   '<div class="fb-question">'
            +       '<label class="fb-label">Qu\'est-ce qui manque ?</label>'
            +       '<textarea id="fb-missing" class="fb-textarea" placeholder="Une fonctionnalite, un contenu, une amelioration..." rows="2"></textarea>'
            +   '</div>'
            +   '<div class="fb-question">'
            +       '<label class="fb-label">Recommanderais-tu StudFlow a un ami ?</label>'
            +       '<div class="fb-nps" id="fb-nps">' + renderNPS(-1) + '</div>'
            +       '<div class="fb-nps-labels"><span>Pas du tout</span><span>Absolument</span></div>'
            +   '</div>'
            +   '<button class="fb-submit" id="fb-submit" data-action="feedback.submit" disabled>Envoyer mon avis</button>'
            +   '<p class="fb-reassurance">Ton avis est anonyme. Il peut etre synchronise pour ameliorer StudFlow.</p>'
            + '</div>';

        bindStars();
        bindNPS();
    }

    function renderStars(selected) {
        var html = '';
        for (var i = 1; i <= 5; i++) {
            var cls = i <= selected ? 'fb-star selected' : 'fb-star';
            html += '<button class="' + cls + '" data-value="' + i + '">'
                + (i <= selected ? '&#9733;' : '&#9734;')
                + '</button>';
        }
        return html;
    }

    function renderNPS(selected) {
        var html = '';
        for (var i = 0; i <= 10; i++) {
            var cls = 'fb-nps-btn';
            if (i === selected) cls += ' selected';
            if (i <= 6) cls += ' detractor';
            else if (i <= 8) cls += ' passive';
            else cls += ' promoter';
            html += '<button class="' + cls + '" data-value="' + i + '">' + i + '</button>';
        }
        return html;
    }

    // ==================== BINDINGS ====================
    var currentRating = 0;
    var currentNPS = -1;

    function bindStars() {
        var starsEl = document.getElementById('fb-stars');
        if (!starsEl) return;
        starsEl.addEventListener('click', function(e) {
            var btn = e.target.closest('.fb-star');
            if (!btn) return;
            currentRating = parseInt(btn.getAttribute('data-value'));
            starsEl.innerHTML = renderStars(currentRating);
            bindStars();
            checkSubmitReady();
        });
    }

    function bindNPS() {
        var npsEl = document.getElementById('fb-nps');
        if (!npsEl) return;
        npsEl.addEventListener('click', function(e) {
            var btn = e.target.closest('.fb-nps-btn');
            if (!btn) return;
            currentNPS = parseInt(btn.getAttribute('data-value'));
            npsEl.innerHTML = renderNPS(currentNPS);
            bindNPS();
            checkSubmitReady();
        });
    }

    function checkSubmitReady() {
        var btn = document.getElementById('fb-submit');
        if (!btn) return;
        btn.disabled = !(currentRating > 0 && currentNPS >= 0);
    }

    // ==================== SUBMIT (detailed) ====================
    function submit() {
        var likesEl = document.getElementById('fb-likes');
        var missingEl = document.getElementById('fb-missing');

        var entry = {
            date: new Date().toISOString(),
            type: 'general',
            rating: currentRating,
            likes: likesEl ? likesEl.value.trim() : '',
            missing: missingEl ? missingEl.value.trim() : '',
            nps: currentNPS
        };

        // Save locally
        var history = loadHistory();
        history.entries.push(entry);
        history.total = history.entries.length;
        if (history.entries.length > 50) {
            history.entries = history.entries.slice(-50);
        }
        saveHistory(history);

        // Push to Supabase (queued if offline)
        pushToSupabase(entry);

        // XP reward
        if (window.StudFlow.gamification && window.StudFlow.gamification.addXP) {
            window.StudFlow.gamification.addXP('feedback');
        }

        currentRating = 0;
        currentNPS = -1;

        var container = document.getElementById('feedback-content');
        if (container) renderThankYou(container, history);
    }

    // ==================== QUICK FEEDBACK (bug / idee) ====================
    function showQuickForm(type) {
        var formEl = document.getElementById('fb-quick-form');
        if (!formEl) return;
        var placeholder = type === 'bug'
            ? 'Decris le probleme rencontre (min 10 car.)...'
            : 'Ta suggestion pour ameliorer StudFlow (min 10 car.)...';
        formEl.innerHTML =
            '<div class="fb-quick-input" style="margin-top:10px;">'
            +   '<textarea id="fb-quick-msg" class="fb-textarea" placeholder="' + placeholder + '" rows="3"></textarea>'
            +   '<label style="display:flex;align-items:center;gap:6px;margin-top:6px;font-size:0.8rem;color:var(--text-muted);">'
            +       '<input type="checkbox" id="fb-include-context" checked>'
            +       'Inclure le contexte (ecran actuel, online/offline)'
            +   '</label>'
            +   '<button class="fb-submit" style="margin-top:8px;" data-action="feedback.submitQuick" data-param="' + type + '">'
            +       'Envoyer'
            +   '</button>'
            +   '<div id="fb-quick-error" style="color:#ef4444;font-size:0.8rem;margin-top:4px;display:none;"></div>'
            + '</div>';
    }

    function submitQuick(type) {
        var msgEl = document.getElementById('fb-quick-msg');
        var message = msgEl ? msgEl.value.trim() : '';

        // Min 10 chars
        if (message.length < 10) {
            var errEl = document.getElementById('fb-quick-error');
            if (errEl) {
                errEl.textContent = '10 caracteres minimum.';
                errEl.style.display = 'block';
            }
            return;
        }

        // Build context
        var context = {};
        var includeCtx = document.getElementById('fb-include-context');
        if (includeCtx && includeCtx.checked) {
            context.screen = window.StudFlow.app ? window.StudFlow.app.getState().currentScreen : null;
            context.online = navigator.onLine;
            context.version = APP_VERSION;
            // activeSubject if available
            var subj = window.StudFlow.storage.loadData('activeSubject', null);
            if (subj) context.subject = subj;
        }

        var entry = {
            date: new Date().toISOString(),
            type: type,
            message: message,
            context: context
        };

        // Save locally
        var history = loadHistory();
        history.entries.push(entry);
        history.total = history.entries.length;
        if (history.entries.length > 50) {
            history.entries = history.entries.slice(-50);
        }
        saveHistory(history);

        // Push to Supabase
        pushToSupabase(entry);

        // Toast
        var isOffline = !navigator.onLine;
        if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            window.StudFlow.gamification.showToast(
                isOffline
                    ? 'Enregistre, envoi automatique au retour en ligne.'
                    : (type === 'bug' ? 'Erreur signalee, merci !' : 'Suggestion envoyee, merci !'),
                'xp', '✓'
            );
        }

        // Clear form
        var formEl = document.getElementById('fb-quick-form');
        if (formEl) formEl.innerHTML = '';
    }

    // ==================== SUPABASE PUSH (with offline queue) ====================
    function pushToSupabase(entry) {
        var userId = null;
        if (window.StudFlow.auth && window.StudFlow.auth.getUser()) {
            userId = window.StudFlow.auth.getUser().id;
        }

        var row = {
            user_id: userId,
            type: entry.type || 'general',
            message: entry.message || buildFeedbackMessage(entry),
            metadata: {
                rating: entry.rating || null,
                nps: entry.nps !== undefined ? entry.nps : null,
                likes: entry.likes || null,
                missing: entry.missing || null,
                context: entry.context || null
            }
        };

        var sb = window.StudFlow.sb && window.StudFlow.sb.getClient();
        if (!sb || !navigator.onLine) {
            // Queue for later
            enqueueFeedback(row);
            return;
        }

        sb.from('user_feedback').insert([row]).then(function(r) {
            if (r.error) {
                enqueueFeedback(row);
            }
        }).catch(function() {
            enqueueFeedback(row);
        });
    }

    function buildFeedbackMessage(entry) {
        var parts = [];
        if (entry.rating) parts.push('Note: ' + entry.rating + '/5');
        if (entry.nps >= 0) parts.push('NPS: ' + entry.nps + '/10');
        if (entry.likes) parts.push('Prefere: ' + entry.likes);
        if (entry.missing) parts.push('Manque: ' + entry.missing);
        return parts.join(' | ') || 'Feedback';
    }

    // ==================== THANK YOU ====================
    function renderThankYou(container, history) {
        var last = history.entries[history.entries.length - 1];

        // Handle quick feedback (no rating/nps)
        if (!last.rating && !last.nps && last.nps !== 0) {
            container.innerHTML =
                '<div class="fb-thankyou">'
                +   '<div class="fb-thankyou-icon">&#9989;</div>'
                +   '<h2>Merci !</h2>'
                +   '<p class="fb-thankyou-sub">Ton feedback a ete enregistre.</p>'
                +   '<div class="fb-actions">'
                +       '<button class="fb-btn-secondary" data-action="feedback.renderNew">Envoyer un autre avis</button>'
                +   '</div>'
                + '</div>';
            return;
        }

        var npsEmoji = last.nps >= 9 ? '&#128525;' : last.nps >= 7 ? '&#128522;' : last.nps >= 4 ? '&#128528;' : '&#128546;';

        container.innerHTML =
            '<div class="fb-thankyou">'
            +   '<div class="fb-thankyou-icon">&#9989;</div>'
            +   '<h2>Merci pour ton avis !</h2>'
            +   '<p class="fb-thankyou-sub">Ca nous aide enormement a ameliorer StudFlow.</p>'
            +   '<div class="fb-summary">'
            +       '<div class="fb-summary-row"><span>Note</span><span>' + '&#9733;'.repeat(last.rating) + '&#9734;'.repeat(5 - last.rating) + '</span></div>'
            +       '<div class="fb-summary-row"><span>Recommandation</span><span>' + last.nps + '/10 ' + npsEmoji + '</span></div>'
            +       (last.likes ? '<div class="fb-summary-row"><span>Prefere</span><span class="fb-summary-text">' + escapeHTML(last.likes) + '</span></div>' : '')
            +       (last.missing ? '<div class="fb-summary-row"><span>Manque</span><span class="fb-summary-text">' + escapeHTML(last.missing) + '</span></div>' : '')
            +   '</div>'
            +   '<div class="fb-actions">'
            +       '<button class="fb-btn-secondary" data-action="feedback.exportJSON">Exporter feedback JSON</button>'
            +       '<button class="fb-btn-secondary" data-action="feedback.renderNew">Donner un nouvel avis</button>'
            +   '</div>'
            +   '<p class="fb-history-count">' + history.total + ' avis enregistre' + (history.total > 1 ? 's' : '') + '</p>'
            + '</div>';
    }

    // ==================== EXPORT ====================
    function exportJSON() {
        var history = loadHistory();
        if (!history.entries || history.entries.length === 0) {
            if (window.StudFlow.gamification) window.StudFlow.gamification.showToast('Aucun feedback a exporter');
            return;
        }
        if (window.StudFlow.exporter) {
            window.StudFlow.exporter.downloadFile(
                JSON.stringify(history, null, 2),
                'studflow_feedback.json',
                'application/json'
            );
        }
    }

    // ==================== FORCE NEW ====================
    function renderNew() {
        currentRating = 0;
        currentNPS = -1;
        render();
    }

    // ==================== ADMIN: READ FEEDBACK ====================
    function getRecentFeedback(limit, typeFilter) {
        var sb = window.StudFlow.sb && window.StudFlow.sb.getClient();
        if (!sb) return Promise.resolve([]);

        var query = sb.from('user_feedback')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(limit || 50);

        if (typeFilter && typeFilter !== 'all') {
            query = query.eq('type', typeFilter);
        }

        return query.then(function(r) {
            return (r.data || []);
        }).catch(function() { return []; });
    }

    // ==================== QUEUE STATUS ====================
    function getFbQueueSize() {
        return loadFbQueue().length;
    }

    function getFbFlushStatus() {
        return {
            lastFlushTime: _fbLastFlushTime,
            lastError: _fbLastError,
            queueSize: getFbQueueSize(),
            config: { MAX_QUEUE: MAX_FB_QUEUE }
        };
    }

    // ==================== HELPERS ====================
    function escapeHTML(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.feedback = {
        init: init,
        show: show,
        render: render,
        submit: submit,
        submitQuick: submitQuick,
        showQuickForm: showQuickForm,
        exportJSON: exportJSON,
        renderNew: renderNew,
        flushQueue: flushFeedbackQueue,
        getQueueSize: getFbQueueSize,
        getFlushStatus: getFbFlushStatus,
        getRecentFeedback: getRecentFeedback
    };
})();
