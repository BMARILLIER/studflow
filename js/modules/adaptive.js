// adaptive.js — Adaptive learning: per-topic mastery tracking & revision scheduling
(function() {

    var STORAGE_KEY = 'studflow_adaptive';
    var MAX_HISTORY = 10;
    var MAX_DISPLAY = 6;

    // Mastery → review interval (days) + UI labels
    var LEVELS = [
        { min: 0.90, interval: 14, label: 'Maitrise',  cls: 'al-excellent' },
        { min: 0.70, interval: 7,  label: 'Bon',       cls: 'al-good' },
        { min: 0.40, interval: 3,  label: 'En cours',  cls: 'al-medium' },
        { min: 0,    interval: 1,  label: 'A revoir',  cls: 'al-low' }
    ];

    // ==================== STORAGE ====================
    function loadState() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, { topics: {}, lastUpdated: null });
    }

    function saveState(state) {
        window.StudFlow.storage.saveData(STORAGE_KEY, state);
    }

    // ==================== TOPIC PARSING ====================
    function parseDeck(deck) {
        if (!deck) return null;

        if (deck.indexOf('subj-') === 0) {
            var parts = deck.split('-');
            var subjectId = parts[1];
            var sectionId = parts.slice(2).join('-');
            var label = subjectId;
            if (window.StudFlow.subjects) {
                var subject = window.StudFlow.subjects.getById(subjectId);
                if (subject) {
                    label = subject.name;
                    for (var i = 0; i < subject.sections.length; i++) {
                        if (subject.sections[i].id === sectionId) {
                            label = subject.icon + ' ' + subject.sections[i].title;
                            break;
                        }
                    }
                }
            }
            return { topicId: deck, label: label, deckNav: deck };
        }

        if (deck.indexOf('bac-') === 0) {
            var section = deck.replace('bac-', '');
            return { topicId: deck, label: '📖 Bac ' + section, deckNav: deck };
        }

        // imported deck → use file name as topic
        if (deck === 'imported') {
            var state = window.StudFlow.app.getState();
            var name = state.fileName || 'Document PDF';
            return { topicId: 'imported', label: '📄 ' + name, deckNav: null };
        }

        // 'all', 'custom', 'quick', 'sr' → skip (can't attribute to topic)
        return null;
    }

    // ==================== MASTERY COMPUTATION ====================
    function computeMastery(history) {
        if (!history || !history.length) return 0;
        var totalWeight = 0;
        var totalScore = 0;
        for (var i = 0; i < history.length; i++) {
            var weight = i + 1; // newer entries have higher index = more weight
            var pct = history[i].total > 0 ? history[i].correct / history[i].total : 0;
            totalWeight += weight;
            totalScore += pct * weight;
        }
        return totalWeight > 0 ? totalScore / totalWeight : 0;
    }

    function getLevel(mastery) {
        for (var i = 0; i < LEVELS.length; i++) {
            if (mastery >= LEVELS[i].min) return LEVELS[i];
        }
        return LEVELS[LEVELS.length - 1];
    }

    function getInterval(mastery) {
        return getLevel(mastery).interval;
    }

    function todayStr() {
        return new Date().toISOString().slice(0, 10);
    }

    // ==================== RECORD RESULT ====================
    function recordResult(deck, correct, total, type) {
        var parsed = parseDeck(deck);
        if (!parsed || total === 0) return;

        var state = loadState();
        var topic = state.topics[parsed.topicId];
        if (!topic) {
            topic = {
                label: parsed.label,
                correct: 0, total: 0, mastery: 0,
                lastActivity: null, nextReview: null,
                interval: 1, history: []
            };
        }

        topic.correct += correct;
        topic.total += total;
        topic.lastActivity = todayStr();

        topic.history.push({
            date: todayStr(),
            correct: correct,
            total: total,
            type: type
        });
        if (topic.history.length > MAX_HISTORY) {
            topic.history = topic.history.slice(-MAX_HISTORY);
        }

        // Update label in case subject name changed
        topic.label = parsed.label;

        // Recompute mastery and schedule
        topic.mastery = computeMastery(topic.history);
        topic.interval = getInterval(topic.mastery);

        var next = new Date();
        next.setDate(next.getDate() + topic.interval);
        topic.nextReview = next.toISOString().slice(0, 10);

        state.topics[parsed.topicId] = topic;
        state.lastUpdated = todayStr();
        saveState(state);
    }

    // ==================== EVENT HANDLERS ====================
    function onQuizCompleted(data) {
        if (data && data.deck && data.total > 0) {
            recordResult(data.deck, data.score, data.total, 'quiz');
            refreshUI();
        }
    }

    function onFlashcardCompleted(data) {
        if (data && data.deck && data.total > 0) {
            recordResult(data.deck, data.score, data.total, 'flashcard');
            refreshUI();
        }
    }

    // ==================== QUERIES ====================
    function getDueTopics() {
        var state = loadState();
        var today = todayStr();
        var due = [];
        var keys = Object.keys(state.topics);
        for (var i = 0; i < keys.length; i++) {
            var t = state.topics[keys[i]];
            if (t.nextReview && t.nextReview <= today) {
                due.push({ topicId: keys[i], topic: t });
            }
        }
        due.sort(function(a, b) { return a.topic.mastery - b.topic.mastery; });
        return due;
    }

    function getAllTopics() {
        var state = loadState();
        var list = [];
        var keys = Object.keys(state.topics);
        for (var i = 0; i < keys.length; i++) {
            list.push({ topicId: keys[i], topic: state.topics[keys[i]] });
        }
        list.sort(function(a, b) { return a.topic.mastery - b.topic.mastery; });
        return list;
    }

    // ==================== NAVIGATION ====================
    function reviewTopic(topicId) {
        if (!topicId) return;
        // Subject-based topics → open quiz for that deck
        if (topicId.indexOf('subj-') === 0 && window.StudFlow.quiz) {
            window.StudFlow.quiz.start(topicId);
            return;
        }
        if (topicId.indexOf('bac-') === 0 && window.StudFlow.bacfrancais) {
            window.StudFlow.app.showScreen('bacfrancais');
            return;
        }
        // Fallback: go to quiz screen
        if (window.StudFlow.quiz) window.StudFlow.quiz.start('all');
    }

    // ==================== RENDER ====================
    function renderCard() {
        var all = getAllTopics();
        var due = getDueTopics();

        if (all.length === 0) {
            return ''; // No data yet — don't show empty card
        }

        // Recommendation line
        var recoHTML = '';
        if (due.length > 0) {
            var weakest = due[0];
            recoHTML = '<div class="al-reco">'
                + '<span class="al-reco-icon">📌</span>'
                + '<span class="al-reco-text">Revise <strong>' + escapeHTML(weakest.topic.label) + '</strong> aujourd\'hui</span>'
                + '<button class="al-reco-btn" data-action="adaptive.review" data-param="' + weakest.topicId + '">Go</button>'
                + '</div>';
        }

        // Topic bars (max MAX_DISPLAY)
        var displayed = all.slice(0, MAX_DISPLAY);
        var barsHTML = displayed.map(function(item) {
            var t = item.topic;
            var pct = Math.round(t.mastery * 100);
            var lvl = getLevel(t.mastery);
            var isDue = t.nextReview && t.nextReview <= todayStr();
            var dueTag = isDue ? '<span class="al-due-tag">A revoir</span>' : '';

            return '<div class="al-topic">'
                + '<div class="al-topic-header">'
                + '<span class="al-topic-name">' + escapeHTML(t.label) + '</span>'
                + '<span class="al-topic-pct ' + lvl.cls + '">' + pct + '%</span>'
                + dueTag
                + '</div>'
                + '<div class="al-bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100" aria-label="' + escapeHTML(t.label) + ' maitrise"><div class="al-fill ' + lvl.cls + '" style="width:' + pct + '%"></div></div>'
                + '</div>';
        }).join('');

        var moreHTML = '';
        if (all.length > MAX_DISPLAY) {
            moreHTML = '<div class="al-more">' + (all.length - MAX_DISPLAY) + ' autre' + (all.length - MAX_DISPLAY > 1 ? 's' : '') + ' sujet' + (all.length - MAX_DISPLAY > 1 ? 's' : '') + '</div>';
        }

        // Summary stats
        var avgMastery = 0;
        for (var i = 0; i < all.length; i++) avgMastery += all[i].topic.mastery;
        avgMastery = all.length > 0 ? Math.round((avgMastery / all.length) * 100) : 0;

        return '<div id="al-card" class="al-card">'
            + '<div class="al-header">'
            + '<span class="al-title">🧠 Maitrise par sujet</span>'
            + '<span class="al-avg">' + avgMastery + '% moyen</span>'
            + '</div>'
            + recoHTML
            + barsHTML
            + moreHTML
            + '</div>';
    }

    function escapeHTML(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function refreshUI() {
        var el = document.getElementById('al-card');
        if (!el) return;
        var tmp = document.createElement('div');
        tmp.innerHTML = renderCard();
        if (tmp.firstChild) {
            el.replaceWith(tmp.firstChild);
        }
    }

    // ==================== INIT ====================
    function init() {
        if (!window.StudFlow.events) return;
        window.StudFlow.events.on('quiz:completed', onQuizCompleted);
        window.StudFlow.events.on('flashcard:completed', onFlashcardCompleted);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.adaptive = {
        renderCard: renderCard,
        init: init,
        getDueTopics: getDueTopics,
        getAllTopics: getAllTopics,
        review: reviewTopic
    };

})();
