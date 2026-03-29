// sessionSettings.js — Adaptive session builder based on student profile + real stats
// Determines: session length, review/new ratio, difficulty, tone, item order
(function() {
    'use strict';

    // ==================== GET SESSION SETTINGS ====================
    function getSessionSettings(profile, stats, subject) {
        if (!profile) profile = {};
        if (!stats) stats = {};
        var behavior = profile.behavior || {};
        var motivation = profile.motivation || {};
        var academic = profile.academic || {};
        var weak = academic.weakSubjects || [];
        var strong = academic.strongSubjects || [];
        var workStyle = behavior.workStyle || [];

        // Defaults
        var settings = {
            targetItems: 10,
            reviewWeight: 0.6,
            newWeight: 0.4,
            difficultyMode: 'normal',  // soft | normal | progressive | challenge
            tone: 'neutral',           // soft | neutral | push
            startEasy: false
        };

        // ----- STRESS -----
        if (behavior.stressLevel === 'high') {
            settings.targetItems = 5;
            settings.tone = 'soft';
            settings.reviewWeight = 0.8;
            settings.newWeight = 0.2;
            settings.startEasy = true;
            settings.difficultyMode = 'soft';
        }

        // ----- CONSISTENCY LOW (procrastine / urgence) -----
        if (behavior.consistency === 'low') {
            settings.targetItems = Math.min(settings.targetItems, 5);
            settings.startEasy = true;
            if (settings.tone !== 'soft') settings.tone = 'neutral';
        }

        // ----- FORGETS FAST / NEEDS REPETITION -----
        if (workStyle.indexOf && (workStyle.indexOf('forgets_fast') !== -1 || workStyle.indexOf('needs_repetition') !== -1)) {
            settings.reviewWeight = Math.max(settings.reviewWeight, 0.75);
            settings.newWeight = 1 - settings.reviewWeight;
        }

        // ----- CONFIDENCE LOW -----
        if (behavior.confidence === 'low') {
            settings.startEasy = true;
            settings.difficultyMode = settings.difficultyMode === 'normal' ? 'soft' : settings.difficultyMode;
        }

        // ----- SUBJECT: WEAK -----
        if (subject && weak.indexOf(subject) !== -1) {
            settings.difficultyMode = 'progressive';
            settings.startEasy = true;
            settings.reviewWeight = Math.max(settings.reviewWeight, 0.7);
            settings.newWeight = 1 - settings.reviewWeight;
        }

        // ----- SUBJECT: STRONG -----
        if (subject && strong.indexOf(subject) !== -1) {
            settings.difficultyMode = 'challenge';
            settings.reviewWeight = 0.4;
            settings.newWeight = 0.6;
        }

        // ----- PACE / MUSIC -----
        if (motivation.pace === 'fast') {
            settings.targetItems = Math.min(settings.targetItems, 8);
            if (settings.tone === 'neutral') settings.tone = 'push';
        }
        if (motivation.pace === 'calm') {
            if (settings.tone === 'push') settings.tone = 'neutral';
        }

        // ----- CHALLENGE MOTIVATION -----
        if (motivation.type === 'challenge' && behavior.stressLevel !== 'high') {
            settings.tone = 'push';
            settings.targetItems = Math.max(settings.targetItems, 10);
            if (settings.difficultyMode === 'soft') settings.difficultyMode = 'normal';
        }

        // ----- DRIFT: real stats override declared perception -----
        if (subject && stats.bySubject && stats.bySubject[subject]) {
            var subjectStats = stats.bySubject[subject];
            var rate = subjectStats.successRate || 0;

            // Declared weak but actually good → be more ambitious
            if (weak.indexOf(subject) !== -1 && rate >= 70) {
                settings.difficultyMode = 'progressive';
                settings.newWeight = Math.max(settings.newWeight, 0.4);
                settings.reviewWeight = 1 - settings.newWeight;
            }

            // Declared strong but actually struggling → consolidate
            if (strong.indexOf(subject) !== -1 && rate < 45) {
                settings.difficultyMode = 'soft';
                settings.reviewWeight = 0.8;
                settings.newWeight = 0.2;
                settings.startEasy = true;
            }
        }

        return settings;
    }

    // ==================== BUILD ADAPTIVE SESSION ====================
    // Takes a pool of items and builds an ordered session
    function buildAdaptiveSession(profile, stats, pool, subject) {
        if (!pool || pool.length === 0) return [];

        var settings = getSessionSettings(profile, stats, subject);
        var target = Math.min(settings.targetItems, pool.length);

        // Split pool into review (seen before) and new
        var sr = window.StudFlow.spacedRepetition;
        var review = [];
        var newItems = [];

        pool.forEach(function(item) {
            if (sr) {
                var cid = sr.cardId(item.question, item.answer);
                var cardState = sr.getCardStats ? sr.getCardStats(cid) : null;
                if (cardState && cardState.reps > 0) {
                    review.push(item);
                } else {
                    newItems.push(item);
                }
            } else {
                if (item.mastered) review.push(item);
                else newItems.push(item);
            }
        });

        // Calculate counts
        var reviewCount = Math.round(target * settings.reviewWeight);
        var newCount = target - reviewCount;

        // Cap to available
        reviewCount = Math.min(reviewCount, review.length);
        newCount = Math.min(newCount, newItems.length);

        // Fill remaining from the other pool
        var remaining = target - reviewCount - newCount;
        if (remaining > 0 && review.length > reviewCount) {
            reviewCount += Math.min(remaining, review.length - reviewCount);
            remaining = target - reviewCount - newCount;
        }
        if (remaining > 0 && newItems.length > newCount) {
            newCount += Math.min(remaining, newItems.length - newCount);
        }

        // Shuffle each pool
        var selectedReview = shuffle(review).slice(0, reviewCount);
        var selectedNew = shuffle(newItems).slice(0, newCount);

        // Build ordered session
        var session = [];

        if (settings.startEasy) {
            // Start with easiest review items
            session = selectedReview.concat(selectedNew);
        } else if (settings.difficultyMode === 'challenge') {
            // Mix freely
            session = shuffle(selectedReview.concat(selectedNew));
        } else {
            // Progressive: review first, then new, interleaved
            var ri = 0, ni = 0;
            while (ri < selectedReview.length || ni < selectedNew.length) {
                // 2 reviews then 1 new
                if (ri < selectedReview.length) session.push(selectedReview[ri++]);
                if (ri < selectedReview.length) session.push(selectedReview[ri++]);
                if (ni < selectedNew.length) session.push(selectedNew[ni++]);
            }
        }

        // Tag items with settings for coach
        session._settings = settings;
        return session;
    }

    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.sessionSettings = {
        getSessionSettings: getSessionSettings,
        buildAdaptiveSession: buildAdaptiveSession
    };
})();
