// progressCompare.js — Affiche "Avant X% -> Maintenant Y%" sur l'ecran de
// resultats, base sur la fenetre glissante 3-7 jours (adaptive.history).
// Auto-injecte via l'event bus, aucune modif des modules flashcards/quiz.
(function() {
    'use strict';

    function renderBadge(cmp) {
        if (!cmp) return '';
        var color = cmp.delta > 0 ? '#22c55e' : (cmp.delta < 0 ? '#f59e0b' : 'var(--text-muted)');
        var arrow = cmp.delta > 0 ? '↗' : (cmp.delta < 0 ? '↘' : '→');
        var sign  = cmp.delta > 0 ? '+' : '';
        return ''
          + '<div style="margin-top:1rem;padding:12px 16px;background:var(--bg-glass);border:1px solid rgba(255,255,255,0.08);border-radius:12px;text-align:center;">'
          +   '<div style="font-size:0.76rem;color:var(--text-muted);margin-bottom:4px;letter-spacing:0.03em;text-transform:uppercase;">Ta progression cette semaine</div>'
          +   '<div style="font-size:1rem;font-weight:600;line-height:1.4;">'
          +     'Avant <strong>' + cmp.before + '%</strong> '
          +     '<span style="color:' + color + ';font-size:1.1rem;margin:0 4px;">' + arrow + '</span> '
          +     'Maintenant <strong>' + cmp.now + '%</strong>'
          +   '</div>'
          +   '<div style="margin-top:4px;color:' + color + ';font-size:0.85rem;font-weight:500;">' + sign + cmp.delta + ' pts</div>'
          + '</div>';
    }

    function inject(deck, currentPct) {
        if (!window.StudFlow.adaptive || !window.StudFlow.adaptive.getProgressComparison) return;
        var cmp = window.StudFlow.adaptive.getProgressComparison(deck, currentPct);
        if (!cmp) return;

        var existing = document.getElementById('sf-progress-compare');
        if (existing) existing.remove();

        var wrap = document.createElement('div');
        wrap.id = 'sf-progress-compare';
        wrap.innerHTML = renderBadge(cmp);

        var scoreEl = document.getElementById('results-score');
        var parent = scoreEl && scoreEl.parentNode;
        if (parent) parent.appendChild(wrap);
    }

    function init() {
        if (!window.StudFlow || !window.StudFlow.events) return;
        window.StudFlow.events.on('flashcard:completed', function(data) {
            if (data && data.deck && typeof data.percent === 'number') inject(data.deck, data.percent);
        });
        window.StudFlow.events.on('quiz:completed', function(data) {
            if (data && data.deck && typeof data.percent === 'number') inject(data.deck, data.percent);
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.progressCompare = { renderBadge: renderBadge, inject: inject };
})();
