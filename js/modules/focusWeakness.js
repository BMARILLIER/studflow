// focusWeakness.js — 1 bouton dashboard qui lance un entrainement direct sur
// le point le plus faible (adaptive.getAllTopics() deja trie asc par mastery).
// Reutilise adaptive.reviewTopic() existant. Aucun nouveau scoring.
(function() {
    'use strict';

    function escapeHtml(s) {
        return String(s || '').replace(/[&<>"']/g, function(c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function getWeakest() {
        try {
            if (!window.StudFlow.adaptive || !window.StudFlow.adaptive.getAllTopics) return null;
            var topics = window.StudFlow.adaptive.getAllTopics();
            if (!topics || !topics.length) return null;
            var t = topics[0];
            var mastery = (t.topic && typeof t.topic.mastery === 'number') ? t.topic.mastery : 0;
            if (mastery >= 0.70) return null; // rien de faible, pas de focus
            return { topicId: t.topicId, label: t.topic.label || t.topicId, mastery: mastery };
        } catch (e) { return null; }
    }

    function renderCard() {
        var w = getWeakest();
        if (!w) return '';
        var pct = Math.round(w.mastery * 100);
        return ''
          + '<div class="dash-section" style="padding:0;">'
          +   '<button data-action="focusWeakness.launch" style="display:flex;align-items:center;gap:12px;width:100%;padding:14px 16px;border-radius:16px;border:1px solid rgba(239,68,68,0.3);background:linear-gradient(135deg,rgba(239,68,68,0.10),rgba(245,101,101,0.10));color:inherit;cursor:pointer;font:inherit;text-align:left;">'
          +     '<span style="font-size:1.6rem;flex-shrink:0;">🎯</span>'
          +     '<span style="flex:1;min-width:0;">'
          +       '<span style="display:block;font-weight:600;font-size:0.96rem;">Focus faiblesse</span>'
          +       '<span style="display:block;color:var(--text-muted);font-size:0.8rem;margin-top:2px;">' + escapeHtml(w.label) + ' · ' + pct + '% maitrise · entrainement cible</span>'
          +     '</span>'
          +     '<span style="color:#ef4444;font-size:1.2rem;flex-shrink:0;">›</span>'
          +   '</button>'
          + '</div>';
    }

    function launch() {
        var w = getWeakest();
        if (!w) {
            if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
                window.StudFlow.gamification.showToast('Pas de faiblesse detectee. Continue comme ca !', 'xp', '🎯');
            }
            return;
        }
        if (window.StudFlow.adaptive && window.StudFlow.adaptive.reviewTopic) {
            window.StudFlow.adaptive.reviewTopic(w.topicId);
        }
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.focusWeakness = { renderCard: renderCard, launch: launch, getWeakest: getWeakest };
})();
