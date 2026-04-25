// radarMastery.js — Radar de maitrise : % par theme/matiere via barres.
// Reutilise adaptive.getAllTopics() (mastery 0-1 basee sur historique bonnes/
// mauvaises reponses). Affiche les 6 premiers themes, faibles en tete, pour
// rendre les faiblesses visibles.
(function() {
    'use strict';

    var MAX_ROWS = 6;

    function colorFor(pct) {
        if (pct >= 70) return '#22c55e';   // vert — maitrise
        if (pct >= 40) return '#f59e0b';   // orange — en cours
        return '#ef4444';                   // rouge doux — a renforcer
    }

    function escapeHtml(s) {
        return String(s || '').replace(/[&<>"']/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function renderCard() {
        if (!window.StudFlow.adaptive || !window.StudFlow.adaptive.getAllTopics) return '';
        var topics = window.StudFlow.adaptive.getAllTopics();
        if (!topics || topics.length < 2) return ''; // pas assez de donnees

        // Faibles en tete (getAllTopics renvoie deja trie par mastery asc)
        var rows = topics.slice(0, MAX_ROWS);

        // Moyenne globale
        var sum = 0, cnt = 0;
        for (var i = 0; i < topics.length; i++) {
            if (topics[i] && topics[i].topic && typeof topics[i].topic.mastery === 'number') {
                sum += topics[i].topic.mastery;
                cnt++;
            }
        }
        var avgPct = cnt > 0 ? Math.round((sum / cnt) * 100) : 0;

        var html = ''
          + '<div class="dash-section" style="background:var(--bg-glass);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:14px 16px;">'
          +   '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">'
          +     '<h4 style="margin:0;font-size:1rem;">📡 Radar de maitrise</h4>'
          +     '<span style="font-size:0.82rem;color:var(--text-muted);">moyenne ' + avgPct + '%</span>'
          +   '</div>'
          +   '<div style="display:flex;flex-direction:column;gap:8px;">';

        for (var j = 0; j < rows.length; j++) {
            var t = rows[j];
            var mastery = (t.topic && typeof t.topic.mastery === 'number') ? t.topic.mastery : 0;
            var pct = Math.round(mastery * 100);
            var color = colorFor(pct);
            var label = (t.topic && t.topic.label) ? t.topic.label : t.topicId;

            html += ''
              + '<div>'
              +   '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3px;font-size:0.85rem;">'
              +     '<span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-right:8px;">' + escapeHtml(label) + '</span>'
              +     '<span style="color:' + color + ';font-weight:600;white-space:nowrap;">' + pct + '%</span>'
              +   '</div>'
              +   '<div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;">'
              +     '<div style="height:100%;width:' + pct + '%;background:' + color + ';transition:width 0.4s ease;"></div>'
              +   '</div>'
              + '</div>';
        }

        if (topics.length > MAX_ROWS) {
            html += '<p style="margin:8px 0 0;color:var(--text-muted);font-size:0.75rem;text-align:center;">+ ' + (topics.length - MAX_ROWS) + ' autres themes</p>';
        }

        html += '  </div>'
          + '</div>';
        return html;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.radarMastery = { renderCard: renderCard };
})();
