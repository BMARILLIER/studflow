// revisionPlan.js — Smart revision plan widget based on real student performance
(function() {
    'use strict';

    // ==================== ANALYSE ====================
    function analyze() {
        var adaptive = window.StudFlow.adaptive;
        if (!adaptive) return null;

        var all = adaptive.getAllTopics();
        if (all.length < 2) return null; // Not enough data yet

        var weak = [];
        var medium = [];
        var strong = [];

        for (var i = 0; i < all.length; i++) {
            var m = Math.round(all[i].topic.mastery * 100);
            var label = formatTopicLabel(all[i].topicId);
            var entry = { id: all[i].topicId, label: label, mastery: m };

            if (m < 40) weak.push(entry);
            else if (m < 70) medium.push(entry);
            else strong.push(entry);
        }

        // Sort weak by mastery ascending (worst first)
        weak.sort(function(a, b) { return a.mastery - b.mastery; });

        return { weak: weak.slice(0, 3), medium: medium.slice(0, 2), strong: strong, total: all.length };
    }

    function formatTopicLabel(topicId) {
        // 'subj-philo-liberte' → 'Liberte'
        // 'subj-francais-figures' → 'Figures'
        var parts = topicId.replace('subj-', '').split('-');
        var last = parts[parts.length - 1] || parts[0];
        return last.charAt(0).toUpperCase() + last.slice(1);
    }

    // ==================== PLAN GENERATION ====================
    function generatePlan(analysis) {
        if (!analysis) return null;

        var priorities = analysis.weak.concat(analysis.medium);
        if (priorities.length === 0) return null;

        var plan = [];
        for (var d = 0; d < 3 && d < priorities.length; d++) {
            var focus = priorities[d];
            var tasks = [];
            tasks.push('10 flashcards ' + focus.label);
            tasks.push('5 quiz ' + focus.label);
            if (d > 0 && priorities[d - 1]) {
                tasks.push('Revision ' + priorities[d - 1].label);
            }
            plan.push({ day: d + 1, focus: focus, tasks: tasks });
        }

        return plan;
    }

    // ==================== DASHBOARD WIDGET ====================
    function renderDashboardWidget() {
        var analysis = analyze();
        if (!analysis || analysis.weak.length === 0) return '';

        var plan = generatePlan(analysis);
        if (!plan || plan.length === 0) return '';

        var today = plan[0]; // Day 1 = today

        var html = '<div class="rp-widget">';
        html += '<div class="rp-header">';
        html += '<span class="rp-title">Plan de revision</span>';
        html += '</div>';

        // Weak points
        html += '<div class="rp-weak">';
        html += '<span class="rp-weak-label">Tes points faibles :</span>';
        for (var i = 0; i < analysis.weak.length; i++) {
            html += '<span class="rp-weak-tag">' + analysis.weak[i].label + ' <small>' + analysis.weak[i].mastery + '%</small></span>';
        }
        html += '</div>';

        // Today's plan
        html += '<div class="rp-today">';
        html += '<div class="rp-today-label">Aujourd\'hui :</div>';
        for (var t = 0; t < today.tasks.length; t++) {
            html += '<div class="rp-task">\u2714 ' + today.tasks[t] + '</div>';
        }
        html += '</div>';

        // Goal
        var avgWeak = 0;
        for (var w = 0; w < analysis.weak.length; w++) avgWeak += analysis.weak[w].mastery;
        avgWeak = analysis.weak.length > 0 ? Math.round(avgWeak / analysis.weak.length) : 0;
        var target = Math.min(avgWeak + 20, 100);
        html += '<div class="rp-goal">Objectif : ' + avgWeak + '% \u2192 ' + target + '% en 3 jours</div>';

        // CTA
        if (today.focus && today.focus.id) {
            html += '<button class="rp-cta" data-action="adaptive.review" data-param="' + today.focus.id + '">Commencer \u2192</button>';
        }

        html += '</div>';
        return html;
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.revisionPlan = {
        analyze: analyze,
        generatePlan: generatePlan,
        renderDashboardWidget: renderDashboardWidget
    };
})();
