// spacedRepetition.js — Algorithme SM-2 pour revision espacee
(function() {

    var STORAGE_KEY = 'spacedRep';

    // ==================== HELPERS ====================
    function getTodayStr() {
        var d = new Date();
        var y = d.getFullYear();
        var m = String(d.getMonth() + 1).padStart(2, '0');
        var day = String(d.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + day;
    }

    function cardId(question, answer) {
        var str = (question || '') + '||' + (answer || '');
        var hash = 5381;
        for (var i = 0; i < str.length; i++) {
            hash = ((hash << 5) + hash) + str.charCodeAt(i);
            hash = hash & hash;
        }
        return (hash >>> 0).toString(16).padStart(8, '0');
    }

    // ==================== STATE ====================
    function loadState() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, {
            cards: {},
            stats: {
                totalReviews: 0,
                totalCorrect: 0,
                sessionsCompleted: 0,
                lastSessionDate: null
            }
        });
    }

    function saveState(state) {
        window.StudFlow.storage.saveData(STORAGE_KEY, state);
    }

    function getCardState(state, id) {
        if (!state.cards[id]) {
            state.cards[id] = {
                ef: 2.5,
                interval: 0,
                reps: 0,
                nextReview: getTodayStr(),
                lastReview: null,
                lapses: 0,
                totalReviews: 0
            };
        }
        return state.cards[id];
    }

    // ==================== SM-2 ALGORITHM ====================
    function sm2(cs, quality) {
        cs.totalReviews++;
        cs.lastReview = getTodayStr();

        // Update easiness factor
        cs.ef = cs.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (cs.ef < 1.3) cs.ef = 1.3;

        if (quality >= 3) {
            // Successful recall
            if (cs.reps === 0) cs.interval = 1;
            else if (cs.reps === 1) cs.interval = 6;
            else cs.interval = Math.round(cs.interval * cs.ef);
            cs.reps++;
        } else {
            // Failed recall — reset
            cs.reps = 0;
            cs.interval = 1;
            cs.lapses++;
        }

        // Compute next review date
        var next = new Date();
        next.setDate(next.getDate() + cs.interval);
        var y = next.getFullYear();
        var m = String(next.getMonth() + 1).padStart(2, '0');
        var d = String(next.getDate()).padStart(2, '0');
        cs.nextReview = y + '-' + m + '-' + d;

        return cs;
    }

    // ==================== DUE CARDS ====================
    function getDueCards(allCards) {
        var state = loadState();
        var today = getTodayStr();
        var overdue = [];
        var due = [];
        var newCards = [];

        for (var i = 0; i < allCards.length; i++) {
            var card = allCards[i];
            var cid = cardId(card.question, card.answer);
            var cs = state.cards[cid];

            if (!cs) {
                // Never seen — new card
                var copy = {};
                for (var k in card) { if (card.hasOwnProperty(k)) copy[k] = card[k]; }
                copy._srId = cid;
                newCards.push(copy);
            } else if (cs.nextReview < today) {
                var copy2 = {};
                for (var k2 in card) { if (card.hasOwnProperty(k2)) copy2[k2] = card[k2]; }
                copy2._srId = cid;
                overdue.push(copy2);
            } else if (cs.nextReview === today) {
                var copy3 = {};
                for (var k3 in card) { if (card.hasOwnProperty(k3)) copy3[k3] = card[k3]; }
                copy3._srId = cid;
                due.push(copy3);
            }
        }

        return { overdue: overdue, due: due, newCards: newCards };
    }

    // ==================== SESSION ====================
    function buildSession(maxCards) {
        maxCards = maxCards || 20;

        // Gather all flashcards from all sources
        var allCards = [];
        var appState = window.StudFlow.app.getState();
        allCards = allCards.concat(appState.flashcards || []);
        allCards = allCards.concat(appState.customFlashcards || []);
        if (window.StudFlow.bacfrancais) {
            allCards = allCards.concat(window.StudFlow.bacfrancais.getAllFlashcards());
        }

        var dueInfo = getDueCards(allCards);
        var session = [];

        // Priority: overdue > due > new
        var sources = [dueInfo.overdue, dueInfo.due, dueInfo.newCards];
        for (var s = 0; s < sources.length; s++) {
            for (var i = 0; i < sources[s].length && session.length < maxCards; i++) {
                session.push(sources[s][i]);
            }
        }

        return session;
    }

    // ==================== RECORD REVIEW ====================
    function recordReview(cid, quality) {
        var state = loadState();
        var cs = getCardState(state, cid);
        sm2(cs, quality);

        // Update global stats
        state.stats.totalReviews++;
        if (quality >= 3) {
            state.stats.totalCorrect++;
        }
        state.stats.lastSessionDate = getTodayStr();

        saveState(state);
    }

    // ==================== STATS HELPERS ====================
    function getDueCount() {
        var allCards = [];
        var appState = window.StudFlow.app.getState();
        allCards = allCards.concat(appState.flashcards || []);
        allCards = allCards.concat(appState.customFlashcards || []);
        if (window.StudFlow.bacfrancais) {
            allCards = allCards.concat(window.StudFlow.bacfrancais.getAllFlashcards());
        }
        var dueInfo = getDueCards(allCards);
        return dueInfo.overdue.length + dueInfo.due.length;
    }

    function getRetentionRate() {
        var state = loadState();
        if (state.stats.totalReviews === 0) return 0;
        return Math.round(state.stats.totalCorrect / state.stats.totalReviews * 100);
    }

    function getMasteredCount() {
        var state = loadState();
        var count = 0;
        var cards = state.cards;
        for (var id in cards) {
            if (cards.hasOwnProperty(id) && cards[id].interval >= 21) {
                count++;
            }
        }
        return count;
    }

    function getSessionStats() {
        var state = loadState();
        return state.stats;
    }

    // ==================== DASHBOARD BLOCK ====================
    function renderDashboardBlock() {
        var dueCount = getDueCount();
        var html = '';

        if (dueCount > 0) {
            html = '<div class="dash-section dash-sr-card">'
                + '<div class="dash-sr-icon">🧠</div>'
                + '<div class="dash-sr-info">'
                + '<div class="dash-sr-label">Revision espacee</div>'
                + '<div class="dash-sr-count">' + dueCount + ' carte' + (dueCount > 1 ? 's' : '') + ' a reviser</div>'
                + '</div>'
                + '<button class="dash-sr-btn" data-action="spacedRepetition.startSession">Go !</button>'
                + '</div>';
        } else {
            html = '<div class="dash-section dash-sr-card done">'
                + '<div class="dash-sr-icon">🧠</div>'
                + '<div class="dash-sr-info">'
                + '<div class="dash-sr-label">Revision espacee</div>'
                + '<div class="dash-sr-done-msg">Rien a reviser. T\'es au top !</div>'
                + '</div>'
                + '</div>';
        }

        return html;
    }

    // ==================== START SESSION ====================
    function startSession() {
        if (window.StudFlow.flashcards) {
            window.StudFlow.flashcards.start('sr');
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.spacedRepetition = {
        cardId: cardId,
        buildSession: buildSession,
        recordReview: recordReview,
        getDueCount: getDueCount,
        getRetentionRate: getRetentionRate,
        getMasteredCount: getMasteredCount,
        getSessionStats: getSessionStats,
        renderDashboardBlock: renderDashboardBlock,
        startSession: startSession
    };

})();
