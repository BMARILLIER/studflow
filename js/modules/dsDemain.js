// dsDemain.js — "DS Demain" targeted revision mode for test preparation
(function() {
    'use strict';

    var _selectedSubject = null;
    var _selectedDuration = null; // 15, 30, 60
    var _sessionSubjectId = null;

    var DURATION_OPTIONS = [
        { value: 15, label: '15 min', items: 15 },
        { value: 30, label: '30 min', items: 30 },
        { value: 60, label: '1h', items: 50 }
    ];

    // ==================== SETUP SCREEN ====================
    function show() {
        _selectedSubject = null;
        _selectedDuration = null;

        window.StudFlow.app.showScreen('ds-demain');
        renderSetup();
    }

    function renderSetup() {
        var container = document.getElementById('ds-demain-content');
        if (!container) return;

        // Get subjects
        var subjects = [];
        if (window.StudFlow.subjects) {
            var all = window.StudFlow.subjects.getAll();
            var picker = window.StudFlow.subjectPicker;
            var hasFilter = picker && picker.isCompleted();
            for (var i = 0; i < all.length; i++) {
                if (!hasFilter || (picker && picker.isSubjectActive(all[i].id))) {
                    subjects.push(all[i]);
                }
            }
            // If no active filter, show all
            if (subjects.length === 0) subjects = all;
        }

        var html = '<div class="dsdem-setup">'
            + '<button class="back-btn" data-action="screen:dashboard">\u2190 Retour</button>'
            + '<div class="dsdem-header">'
            + '<div class="dsdem-icon">\uD83D\uDCDD</div>'
            + '<h2 class="dsdem-title">DS demain ?</h2>'
            + '<p class="dsdem-subtitle">Revision ciblee et efficace pour ton controle</p>'
            + '</div>';

        // Subject selection
        html += '<div class="dsdem-section">'
            + '<h3 class="dsdem-section-title">Choisis ta matiere</h3>'
            + '<div class="dsdem-subjects">';

        for (var j = 0; j < subjects.length; j++) {
            var s = subjects[j];
            html += '<button class="dsdem-subject-btn" data-action="dsDemain.selectSubject" data-param="' + s.id + '">'
                + '<span class="dsdem-subject-icon">' + s.icon + '</span>'
                + '<span class="dsdem-subject-name">' + s.name + '</span>'
                + '</button>';
        }

        html += '</div></div>';

        // Duration selection
        html += '<div class="dsdem-section">'
            + '<h3 class="dsdem-section-title">Temps disponible</h3>'
            + '<div class="dsdem-time-options">';

        for (var k = 0; k < DURATION_OPTIONS.length; k++) {
            var d = DURATION_OPTIONS[k];
            html += '<button class="dsdem-time-btn" data-action="dsDemain.selectDuration" data-param="' + d.value + '">'
                + d.label
                + '</button>';
        }

        html += '</div></div>';

        // Launch button
        html += '<button class="ds-btn ds-btn-primary dsdem-launch" data-action="dsDemain.launch" disabled>'
            + 'Lancer la revision ciblee \u2192'
            + '</button>'
            + '</div>';

        container.innerHTML = html;
    }

    function selectSubject(subjectId) {
        _selectedSubject = subjectId;

        // Update UI
        var btns = document.querySelectorAll('.dsdem-subject-btn');
        for (var i = 0; i < btns.length; i++) {
            var param = btns[i].getAttribute('data-param');
            if (param === subjectId) {
                btns[i].classList.add('dsdem-selected');
            } else {
                btns[i].classList.remove('dsdem-selected');
            }
        }

        updateLaunchButton();
    }

    function selectDuration(duration) {
        _selectedDuration = parseInt(duration);

        // Update UI
        var btns = document.querySelectorAll('.dsdem-time-btn');
        for (var i = 0; i < btns.length; i++) {
            var param = parseInt(btns[i].getAttribute('data-param'));
            if (param === _selectedDuration) {
                btns[i].classList.add('dsdem-selected');
            } else {
                btns[i].classList.remove('dsdem-selected');
            }
        }

        updateLaunchButton();
    }

    function updateLaunchButton() {
        var btn = document.querySelector('.dsdem-launch');
        if (!btn) return;
        btn.disabled = !(_selectedSubject && _selectedDuration);
    }

    // ==================== SESSION BUILDER ====================
    function launch() {
        if (!_selectedSubject || !_selectedDuration) return;
        _sessionSubjectId = _selectedSubject;
        start(_selectedSubject, _selectedDuration);
    }

    function start(subjectId, duration) {
        if (!window.StudFlow.subjects) return;

        var subj = window.StudFlow.subjects.getById(subjectId);
        if (!subj || !subj.sections) return;

        // Determine item count from duration
        var itemCount = 30;
        for (var d = 0; d < DURATION_OPTIONS.length; d++) {
            if (DURATION_OPTIONS[d].value === duration) {
                itemCount = DURATION_OPTIONS[d].items;
                break;
            }
        }

        // Gather ALL flashcards and quiz from this subject
        var allFc = [];
        var allQuiz = [];
        for (var i = 0; i < subj.sections.length; i++) {
            var sec = subj.sections[i];
            var deckId = 'subj-' + subjectId + '-' + sec.id;
            var fc = window.StudFlow.subjects.getFlashcardsByDeck(deckId);
            var qz = window.StudFlow.subjects.getQuizByDeck(deckId);
            allFc = allFc.concat(fc);
            allQuiz = allQuiz.concat(qz);
        }

        // Prioritize: cards with low ease factor (wrong before), then new, then due
        allFc = prioritizeCards(allFc);
        allQuiz = shuffleArray(allQuiz);

        // Mix: 60% FC, 40% quiz
        var fcTarget = Math.round(itemCount * 0.6);
        var qzTarget = itemCount - fcTarget;

        var selectedFc = allFc.slice(0, fcTarget);
        var selectedQuiz = allQuiz.slice(0, qzTarget);

        // Build items
        var items = [];
        for (var f = 0; f < selectedFc.length; f++) {
            items.push({ type: 'fc', data: selectedFc[f], done: false, correct: null });
        }
        for (var q = 0; q < selectedQuiz.length; q++) {
            items.push({ type: 'quiz', data: selectedQuiz[q], done: false, correct: null });
        }

        // Interleave
        items = interleaveItems(items);

        if (items.length === 0) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Pas de contenu pour cette matiere !', 'xp', '\uD83D\uDE15');
            }
            return;
        }

        // Launch via dailySession engine
        var title = 'DS ' + subj.name + ' \u2014 revision ciblee';
        window.StudFlow.dailySession.showWithItems(items, title);
    }

    function prioritizeCards(cards) {
        // Try to use SR data to prioritize
        var srData = null;
        try {
            srData = window.StudFlow.storage.loadData('spacedRep', { cards: {} });
        } catch(e) {}

        var lowEase = [];
        var neverSeen = [];
        var rest = [];

        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            var srId = card._srId;
            if (srId && srData && srData.cards && srData.cards[srId]) {
                var cs = srData.cards[srId];
                if (cs.ef < 2.0) {
                    lowEase.push(card);
                } else {
                    rest.push(card);
                }
            } else {
                neverSeen.push(card);
            }
        }

        // Shuffle each group
        lowEase = shuffleArray(lowEase);
        neverSeen = shuffleArray(neverSeen);
        rest = shuffleArray(rest);

        return lowEase.concat(neverSeen).concat(rest);
    }

    function interleaveItems(items) {
        var fc = [];
        var qz = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].type === 'fc') fc.push(items[i]);
            else qz.push(items[i]);
        }
        var result = [];
        var fi = 0, qi = 0;
        while (fi < fc.length || qi < qz.length) {
            if (fi < fc.length) result.push(fc[fi++]);
            if (fi < fc.length) result.push(fc[fi++]);
            if (qi < qz.length) result.push(qz[qi++]);
        }
        return result;
    }

    function shuffleArray(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    // ==================== DASHBOARD LINK ====================
    function renderDashboardLink() {
        return '<div class="dsdem-dash-link" data-action="screen:ds-demain">'
            + '<span class="dsdem-dash-icon">\uD83D\uDCDD</span>'
            + '<span class="dsdem-dash-text">DS demain ? Revision ciblee</span>'
            + '<span class="dsdem-dash-arrow">\u2192</span>'
            + '</div>';
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dsDemain = {
        show: show,
        selectSubject: selectSubject,
        selectDuration: selectDuration,
        launch: launch,
        start: start,
        renderDashboardLink: renderDashboardLink
    };

})();
