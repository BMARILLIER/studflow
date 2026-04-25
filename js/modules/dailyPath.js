// dailyPath.js — "Parcours du jour" : 3 actions max basees sur les faiblesses
// de l'eleve (topics adaptive < 70%, cartes SR dues). Le but : guider sans
// reflechir. Reutilise la data adaptive + spacedRepetition existante.
(function() {
    'use strict';

    var LS_KEY = 'studflow_daily_path_v1';

    function parisToday() {
        var p = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
        return p.getFullYear() + '-' + String(p.getMonth() + 1).padStart(2, '0') + '-' + String(p.getDate()).padStart(2, '0');
    }

    function getState() {
        try {
            var raw = JSON.parse(localStorage.getItem(LS_KEY) || 'null');
            var today = parisToday();
            if (!raw || raw.date !== today) return { date: today, doneIds: [] };
            if (!Array.isArray(raw.doneIds)) raw.doneIds = [];
            return raw;
        } catch (e) { return { date: parisToday(), doneIds: [] }; }
    }

    function markDone(id) {
        var s = getState();
        if (s.doneIds.indexOf(id) === -1) s.doneIds.push(id);
        try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch (e) {}
    }

    // ==================== BUILD 3 ACTIONS ====================
    function buildActions() {
        var actions = [];
        var seen = {};

        // 1. Cartes SR dues → prioritaire (espace repete, vraie dette cognitive)
        try {
            if (window.StudFlow && window.StudFlow.spacedRepetition) {
                var due = window.StudFlow.spacedRepetition.getDueCount();
                if (due > 0) {
                    actions.push({
                        id: 'sr_due',
                        icon: '🔁',
                        label: due + ' carte' + (due > 1 ? 's' : '') + ' a revoir',
                        subtitle: 'Repetition espacee',
                        kind: 'sr'
                    });
                }
            }
        } catch (e) {}

        // 2. Topics faibles (mastery < 70%)
        try {
            if (window.StudFlow && window.StudFlow.adaptive) {
                var topics = window.StudFlow.adaptive.getAllTopics();
                for (var i = 0; i < topics.length && actions.length < 3; i++) {
                    var t = topics[i];
                    var mastery = (t.topic && typeof t.topic.mastery === 'number') ? t.topic.mastery : 0;
                    if (mastery >= 0.70) continue;
                    var id = 'topic_' + t.topicId;
                    if (seen[id]) continue;
                    seen[id] = 1;
                    actions.push({
                        id: id,
                        icon: '🎯',
                        label: 'Revoir ' + ((t.topic && t.topic.label) || t.topicId),
                        subtitle: Math.round(mastery * 100) + '% de maitrise',
                        kind: 'topic',
                        topicId: t.topicId
                    });
                }
            }
        } catch (e) {}

        // 3. Fallbacks si < 3
        var fallbacks = [
            { id: 'daily_session', icon: '🚀', label: 'Session du jour', subtitle: 'Mix flashcards + quiz', kind: 'daily' },
            { id: 'flashcards',    icon: '🎴', label: 'Reviser des flashcards', subtitle: 'Au hasard',       kind: 'flashcard' },
            { id: 'quiz',          icon: '🧠', label: 'Un quiz rapide',         subtitle: '5 questions',      kind: 'quiz' }
        ];
        for (var j = 0; j < fallbacks.length && actions.length < 3; j++) {
            if (!seen[fallbacks[j].id]) { seen[fallbacks[j].id] = 1; actions.push(fallbacks[j]); }
        }

        return actions.slice(0, 3);
    }

    // ==================== ACTIONS ====================
    function launch(index) {
        var actions = buildActions();
        var a = actions[index];
        if (!a) return;
        markDone(a.id);

        if (a.kind === 'sr' && window.StudFlow.spacedRepetition) {
            window.StudFlow.app.showScreen('dashboard');
            window.StudFlow.spacedRepetition.startSession();
        } else if (a.kind === 'topic' && a.topicId && window.StudFlow.adaptive) {
            window.StudFlow.adaptive.reviewTopic(a.topicId);
        } else if (a.kind === 'daily' && window.StudFlow.dailySession) {
            window.StudFlow.dailySession.show();
        } else if (a.kind === 'flashcard') {
            window.StudFlow.app.showScreen('flashcard');
        } else if (a.kind === 'quiz' && window.StudFlow.quiz) {
            window.StudFlow.quiz.start('all');
        }
    }

    // ==================== UI ====================
    function escapeHtml(s) {
        return String(s || '').replace(/[&<>"']/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function renderCard() {
        var actions = buildActions();
        if (!actions.length) return '';

        var state = getState();
        var done = state.doneIds;
        var doneCount = 0;
        for (var i = 0; i < actions.length; i++) if (done.indexOf(actions[i].id) !== -1) doneCount++;

        var allDone = doneCount === actions.length;

        var html = ''
          + '<div class="dash-section" style="background:linear-gradient(135deg,rgba(251,191,36,0.10),rgba(245,158,11,0.10));border:1px solid rgba(251,191,36,0.25);border-radius:16px;padding:14px 16px;">'
          +   '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">'
          +     '<h4 style="margin:0;font-size:1rem;">🗺️ Parcours du jour</h4>'
          +     '<span style="font-size:0.82rem;color:var(--text-muted);">' + doneCount + ' / ' + actions.length + '</span>'
          +   '</div>';

        if (allDone) {
            html += '<p style="margin:0.25rem 0 0.5rem;color:var(--text-muted);font-size:0.88rem;">Parcours termine. Repos ou session libre !</p>';
        }

        html += '<div style="display:flex;flex-direction:column;gap:6px;">';
        for (var j = 0; j < actions.length; j++) {
            var a = actions[j];
            var isDone = done.indexOf(a.id) !== -1;
            var opacity = isDone ? 'opacity:0.55;' : '';
            var badge = isDone ? '✅' : a.icon;
            var sub = a.subtitle
                ? '<span style="display:block;color:var(--text-muted);font-size:0.75rem;margin-top:1px;">' + escapeHtml(a.subtitle) + '</span>'
                : '';
            html += ''
              + '<button data-action="dailyPath.launch" data-param="' + j + '" '
              +   'style="display:flex;align-items:center;gap:10px;text-align:left;padding:10px 12px;background:var(--bg-glass);border:1px solid rgba(255,255,255,0.06);border-radius:10px;color:inherit;cursor:pointer;font:inherit;width:100%;' + opacity + '">'
              +   '<span style="font-size:1.2rem;width:1.6rem;text-align:center;flex-shrink:0;">' + badge + '</span>'
              +   '<span style="flex:1;min-width:0;font-size:0.9rem;">' + escapeHtml(a.label) + sub + '</span>'
              +   '<span style="color:var(--text-muted);font-size:1.1rem;flex-shrink:0;">›</span>'
              + '</button>';
        }
        html += '</div></div>';
        return html;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dailyPath = {
        renderCard: renderCard,
        launch: launch,
        buildActions: buildActions,
        markDone: markDone
    };
})();
