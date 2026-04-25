// rituelJour.js — 3 cartes par jour (facile + moyen + difficile), ordre fixe.
// But : creer une habitude (1 min / jour). Lecture passive : tap = flip Q->R.
// Deterministe par date Paris : memes cartes toute la journee, renouvelees a
// minuit.
(function() {
    'use strict';

    var LS_KEY = 'studflow_rituel_v1';

    // ==================== DATE / SEED ====================
    function parisToday() {
        var p = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
        return p.getFullYear() + '-' + String(p.getMonth() + 1).padStart(2, '0') + '-' + String(p.getDate()).padStart(2, '0');
    }

    function seed(s) {
        var h = 2166136261;
        for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
        return (h >>> 0);
    }

    function pickFromBucket(bucket, s, offset) {
        if (!bucket.length) return null;
        var idx = (s + offset * 2654435761) % bucket.length;
        if (idx < 0) idx += bucket.length;
        return bucket[idx];
    }

    // ==================== BUILD (1 facile + 1 moyen + 1 difficile) ====================
    function buildDailyCards() {
        var pool = [];
        try {
            if (window.StudFlow.subjects) {
                pool = window.StudFlow.subjects.getAllFlashcards() || [];
            }
        } catch (e) {}
        if (!pool.length) return [];

        var sr = window.StudFlow.spacedRepetition;
        var buckets = { easy: [], medium: [], hard: [] };

        for (var i = 0; i < pool.length; i++) {
            var c = pool[i];
            if (!c || !c.question) continue;
            var reps = 0, interval = 0;
            if (sr && sr.cardId) {
                var id = sr.cardId(c.question, c.answer);
                // Accede via getMasteredCardIds pour reps >= 1
                // Pour le detail, on inspecte via la config SR si expose
            }
            // Heuristique simple : on utilise getMasteredCardIds pour "easy",
            // le reste est "medium" par defaut. "hard" = nouvelles cartes.
            buckets.medium.push(c); // defaut
        }

        // Affiner : re-classifier via SR mastered set
        if (sr && sr.getMasteredCardIds) {
            var masteredIds = sr.getMasteredCardIds();
            var easy = [], med = [], hard = [];
            for (var j = 0; j < pool.length; j++) {
                var card = pool[j];
                if (!card || !card.question) continue;
                var cid = sr.cardId(card.question, card.answer);
                if (masteredIds[cid]) easy.push(card);
                else hard.push(card);            }
            // "Medium" = melange des deux si l'un est vide
            if (easy.length > 2) med = easy.slice(Math.floor(easy.length / 2));
            else med = hard.slice(0, Math.min(hard.length, 10));
            buckets.easy = easy;
            buckets.medium = med.length ? med : pool;
            buckets.hard = hard;
        } else {
            buckets.easy = pool;
            buckets.hard = pool;
        }

        var s = seed(parisToday());
        var picks = [
            { level: 'facile',    icon: '☀️', card: pickFromBucket(buckets.easy.length   ? buckets.easy   : pool, s, 1) },
            { level: 'moyen',     icon: '⭐', card: pickFromBucket(buckets.medium.length ? buckets.medium : pool, s, 2) },
            { level: 'difficile', icon: '🔥', card: pickFromBucket(buckets.hard.length   ? buckets.hard   : pool, s, 3) }
        ];

        return picks.filter(function(p) { return p.card && p.card.question; });
    }

    // ==================== STATE ====================
    function getState() {
        try {
            var raw = JSON.parse(localStorage.getItem(LS_KEY) || 'null');
            var today = parisToday();
            if (!raw || raw.date !== today) return { date: today, flipped: [] };
            if (!Array.isArray(raw.flipped)) raw.flipped = [];
            return raw;
        } catch (e) { return { date: parisToday(), flipped: [] }; }
    }

    function markFlipped(index) {
        var s = getState();
        if (s.flipped.indexOf(index) === -1) s.flipped.push(index);
        try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch (e) {}
    }

    // ==================== UI ====================
    function escapeHtml(s) {
        return String(s || '').replace(/[&<>"']/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function renderCard() {
        var picks = buildDailyCards();
        if (!picks.length) return '';
        var state = getState();
        var flipped = state.flipped || [];
        var doneCount = flipped.length;
        var total = picks.length;
        var allDone = doneCount >= total;

        var html = ''
          + '<div class="dash-section" style="background:linear-gradient(135deg,rgba(59,130,246,0.10),rgba(14,165,233,0.10));border:1px solid rgba(59,130,246,0.25);border-radius:16px;padding:14px 16px;">'
          +   '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">'
          +     '<h4 style="margin:0;font-size:1rem;">🌅 Rituel du jour</h4>'
          +     '<span style="font-size:0.82rem;color:var(--text-muted);">' + doneCount + ' / ' + total + '</span>'
          +   '</div>'
          +   '<p style="color:var(--text-muted);font-size:0.78rem;margin:0 0 10px;">1 min. 3 cartes. Tape pour retourner.</p>'
          +   '<div style="display:flex;flex-direction:column;gap:8px;">';

        for (var i = 0; i < picks.length; i++) {
            var p = picks[i];
            var isFlipped = flipped.indexOf(i) !== -1;
            html += ''
              + '<button data-action="rituelJour.flip" data-param="' + i + '" '
              +   'style="text-align:left;padding:10px 12px;background:var(--bg-glass);border:1px solid rgba(255,255,255,0.08);border-radius:10px;color:inherit;cursor:pointer;font:inherit;">'
              +   '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">'
              +     '<span style="font-size:1rem;">' + p.icon + '</span>'
              +     '<span style="font-size:0.72rem;text-transform:uppercase;color:var(--text-muted);letter-spacing:0.05em;">' + p.level + '</span>'
              +     (isFlipped ? '<span style="margin-left:auto;color:#22c55e;font-size:0.85rem;">✓</span>' : '')
              +   '</div>'
              +   '<div style="font-size:0.92rem;font-weight:500;line-height:1.35;">' + escapeHtml(p.card.question) + '</div>'
              +   (isFlipped
                    ? '<div style="margin-top:6px;padding-top:6px;border-top:1px dashed rgba(255,255,255,0.12);font-size:0.85rem;color:var(--text-muted);line-height:1.4;">' + escapeHtml(p.card.answer) + '</div>'
                    : '<div style="margin-top:4px;font-size:0.75rem;color:var(--text-muted);font-style:italic;">Tape pour voir la reponse</div>')
              + '</button>';
        }

        if (allDone) {
            html += '<p style="margin:10px 0 0;color:#22c55e;font-size:0.85rem;text-align:center;">Rituel termine. A demain !</p>';
        }
        html += '</div></div>';
        return html;
    }

    function flip(index) {
        markFlipped(index);
        // Award XP discret la 1ere fois
        var state = getState();
        if (state.flipped.length === 3 && window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('conseil_lu'); // 3 XP, non-intrusif
        }
        // Re-render dashboard pour refleter le flip
        if (window.StudFlow.app && window.StudFlow.app.updateDashboard) {
            window.StudFlow.app.updateDashboard();
        }
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.rituelJour = {
        renderCard: renderCard,
        flip: flip,
        buildDailyCards: buildDailyCards
    };
})();
