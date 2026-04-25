// miniSujet.js — Mini-sujets type examen (DNB/Bac).
// Reutilise le systeme de sections existant : une section peut declarer
// un champ `miniSujet: { title, intro, questions: [{type,text,answer,options,correctIndex}] }`
// Ce module lance un ecran de lecture/auto-test sans scoring (usage simple).
(function() {
    'use strict';

    var _currentDeckId = null;
    var _revealed = {};

    function escapeHtml(s) {
        return String(s || '').replace(/[&<>"']/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function openForDeck(deckId) {
        if (!deckId) return;
        var sujet = (window.StudFlow.subjects && window.StudFlow.subjects.getMiniSujet)
            ? window.StudFlow.subjects.getMiniSujet(deckId) : null;
        if (!sujet) {
            if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                window.StudFlow.gamification.showToast('Pas de mini-sujet pour cette section.', 'xp', '📄');
            }
            return;
        }
        _currentDeckId = deckId;
        _revealed = {};
        window.StudFlow.app.showScreen('minisujet');
        render(sujet);
    }

    function render(sujet) {
        var root = document.getElementById('minisujet-content');
        if (!root) return;

        var html = ''
          + '<button class="back-btn" data-action="screen:dashboard">&larr; Retour</button>'
          + '<div style="max-width:680px;margin:0 auto;padding:1rem 1.25rem;">'
          +   '<h1 style="font-family:\'Fraunces\',serif;margin:0 0 0.25rem;">📄 ' + escapeHtml(sujet.title || 'Mini-sujet') + '</h1>'
          +   (sujet.duration ? '<p style="color:var(--text-muted);margin:0 0 0.75rem;font-size:0.85rem;">⏱️ ' + escapeHtml(sujet.duration) + '</p>' : '')
          +   (sujet.intro ? '<div style="background:var(--bg-glass);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:12px 14px;margin-bottom:1rem;font-size:0.92rem;line-height:1.5;">' + escapeHtml(sujet.intro) + '</div>' : '')
          +   '<ol style="padding-left:1.25rem;display:flex;flex-direction:column;gap:14px;">';

        var questions = (sujet.questions || []);
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            var revealed = !!_revealed[i];
            html += '<li style="background:var(--bg-glass);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:12px 14px;">'
                 + '<div style="font-size:0.95rem;font-weight:500;margin-bottom:8px;line-height:1.4;">' + escapeHtml(q.text) + '</div>';

            if (q.type === 'qcm' && Array.isArray(q.options)) {
                html += '<ul style="list-style:none;padding:0;margin:0 0 8px;display:flex;flex-direction:column;gap:4px;">';
                for (var oi = 0; oi < q.options.length; oi++) {
                    var isCorrect = revealed && oi === q.correctIndex;
                    html += '<li style="padding:6px 10px;border-radius:8px;background:' + (isCorrect ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.03)') + ';font-size:0.88rem;">'
                         + (revealed && isCorrect ? '✅ ' : (revealed ? '◦ ' : '◦ '))
                         + escapeHtml(q.options[oi])
                         + '</li>';
                }
                html += '</ul>';
            }

            if (revealed) {
                html += '<div style="margin-top:6px;padding:8px 10px;border-left:3px solid #22c55e;background:rgba(34,197,94,0.08);border-radius:4px;font-size:0.88rem;line-height:1.45;"><strong>Reponse :</strong> ' + escapeHtml(q.answer || '(non renseignee)') + '</div>';
            } else {
                html += '<button data-action="miniSujet.reveal" data-param="' + i + '" style="padding:6px 12px;background:var(--bg-glass);border:1px solid rgba(255,255,255,0.15);border-radius:8px;color:inherit;cursor:pointer;font-size:0.82rem;">Voir la reponse</button>';
            }
            html += '</li>';
        }

        html += '</ol>';

        var doneCount = Object.keys(_revealed).length;
        if (doneCount === questions.length && questions.length > 0) {
            html += '<p style="margin-top:1rem;color:#22c55e;text-align:center;font-size:0.9rem;">Sujet termine. Bon reflexe !</p>';
        }

        html += '</div>';
        root.innerHTML = html;
    }

    function reveal(index) {
        _revealed[index] = true;
        if (!_currentDeckId) return;
        var sujet = window.StudFlow.subjects.getMiniSujet(_currentDeckId);
        if (sujet) render(sujet);
    }

    // Hub : liste tous les mini-sujets dispo pour le user courant (track filtre).
    function renderHub() {
        var root = document.getElementById('minisujet-content');
        if (!root) return;
        var all = (window.StudFlow.subjects && window.StudFlow.subjects.getAllMiniSujets)
            ? window.StudFlow.subjects.getAllMiniSujets() : [];

        var html = ''
          + '<button class="back-btn" data-action="screen:dashboard">&larr; Retour</button>'
          + '<div style="max-width:640px;margin:0 auto;padding:1rem 1.25rem;">'
          +   '<h1 style="font-family:\'Fraunces\',serif;margin:0 0 0.25rem;">📄 Mini-sujets type DNB</h1>'
          +   '<p style="color:var(--text-muted);margin:0 0 1rem;font-size:0.88rem;">Entrainement reel : 5-10 min par sujet, questions melangees.</p>';

        if (!all.length) {
            html += '<div style="padding:1.5rem;text-align:center;color:var(--text-muted);border:1px dashed rgba(255,255,255,0.12);border-radius:12px;">Pas encore de mini-sujet disponible.</div>';
        } else {
            html += '<div style="display:flex;flex-direction:column;gap:10px;">';
            for (var i = 0; i < all.length; i++) {
                var s = all[i];
                html += ''
                  + '<button data-action="miniSujet.open" data-param="' + escapeHtml(s.deckId) + '" '
                  +   'style="display:flex;align-items:center;gap:10px;text-align:left;padding:12px 14px;background:var(--bg-glass);border:1px solid rgba(255,255,255,0.08);border-radius:12px;color:inherit;cursor:pointer;font:inherit;width:100%;">'
                  +   '<span style="font-size:1.3rem;flex-shrink:0;">' + escapeHtml(s.subjectIcon || '📄') + '</span>'
                  +   '<span style="flex:1;min-width:0;">'
                  +     '<span style="display:block;font-weight:600;font-size:0.95rem;">' + escapeHtml(s.miniSujet.title || s.sectionTitle) + '</span>'
                  +     '<span style="display:block;color:var(--text-muted);font-size:0.78rem;margin-top:1px;">' + escapeHtml(s.subjectName) + ' · ' + escapeHtml(s.sectionTitle) + (s.miniSujet.duration ? ' · ' + escapeHtml(s.miniSujet.duration) : '') + '</span>'
                  +   '</span>'
                  +   '<span style="color:var(--text-muted);font-size:1.1rem;flex-shrink:0;">›</span>'
                  + '</button>';
            }
            html += '</div>';
        }
        html += '</div>';
        root.innerHTML = html;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.miniSujet = {
        openForDeck: openForDeck,
        reveal: reveal,
        renderHub: renderHub
    };
})();
