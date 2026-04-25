// dailySession.js — Daily Session Engine: auto-computed mix of flashcards + quiz
(function() {
    'use strict';

    var SESSION_KEY = 'studflow_daily_session';
    var TARGET_ITEMS = 20; // ~12 flashcards + 8 quiz = 10-15 min
    var FC_RATIO = 0.6;    // 60% flashcards, 40% quiz

    // ==================== SESSION STATE ====================
    var _items = [];        // [{type:'fc'|'quiz', data:{...}, done:false, correct:null}]
    var _currentIndex = 0;
    var _startTime = null;
    var _xpEarned = 0;
    var _flipped = false;
    var _snapshotBefore = {};  // {topicId: mastery%} before session
    var _focusTopics = [];     // [{topicId, label, mastery}] weak topics targeted
    var _lastSummary = null;   // stored for result card sharing
    var _errorCounts = {};     // {itemId: count} track errors per card for learning mode
    var _mood = null;          // 'stressed'|'tired'|'good'|'motivated'
    var _customTitle = null;   // custom title for showWithItems mode

    // ==================== BUILD SESSION ====================
    // Message d'intro basé sur le profil
    var _sessionIntro = '';

    function getSessionIntro() { return _sessionIntro; }

    function getDailySession() {
        // Split: 60% flashcards, 30% quiz, 10% erreurs du profil
        var errorTarget = Math.max(1, Math.round(TARGET_ITEMS * 0.1));
        var fcTarget = Math.round(TARGET_ITEMS * FC_RATIO);
        var qzTarget = TARGET_ITEMS - fcTarget - errorTarget;

        // 0. Erreurs mémorisées dans le profil élève (priorité)
        var profileErrors = [];
        if (window.StudFlow.studentProfile) {
            var weakQs = window.StudFlow.studentProfile.getWeakQuestions(errorTarget + 2);
            for (var e = 0; e < Math.min(weakQs.length, errorTarget); e++) {
                var err = weakQs[e];
                if (err.question && err.answer) {
                    profileErrors.push({
                        type: 'fc',
                        data: { question: err.question, answer: err.answer, _errorReview: true },
                        done: false, correct: null
                    });
                }
            }
        }

        // Déterminer le message d'intro selon le profil
        _sessionIntro = '';
        if (window.StudFlow.studentProfile) {
            var weakSubjects = window.StudFlow.studentProfile.getWeakSubjects();
            if (weakSubjects.length > 0) {
                _sessionIntro = '\uD83D\uDCA1 Aujourd\u2019hui on travaille les notions o\u00F9 tu bloques';
            } else {
                var globalStats = window.StudFlow.studentProfile.getGlobalStats();
                if (globalStats.level === 'alaise') {
                    _sessionIntro = '\uD83D\uDD25 Tu g\u00E8res\u00A0! On monte le niveau';
                } else {
                    _sessionIntro = '\uD83C\uDFAF Ta session personnalis\u00E9e est pr\u00EAte';
                }
            }
        }

        // 1. Get SR due flashcards (priority)
        var srCards = [];
        if (window.StudFlow.spacedRepetition) {
            srCards = window.StudFlow.spacedRepetition.buildSession(fcTarget);
        }

        // 2. Get weak topic flashcards to fill remaining slots
        var weakFc = [];
        if (srCards.length < fcTarget) {
            weakFc = getWeakFlashcards(fcTarget - srCards.length);
        }

        var allFc = srCards.concat(weakFc);

        // 3. Get quiz questions from weak topics
        var quizItems = getWeakQuiz(qzTarget);

        // 4. Build session items
        var items = [];
        for (var i = 0; i < allFc.length; i++) {
            items.push({ type: 'fc', data: allFc[i], done: false, correct: null });
        }
        for (var j = 0; j < quizItems.length; j++) {
            items.push({ type: 'quiz', data: quizItems[j], done: false, correct: null });
        }
        // Ajouter les erreurs du profil
        items = items.concat(profileErrors);

        // 5. Interleave: alternate fc and quiz for variety
        items = interleave(items);

        // 6. Micro-win: put easiest item first (mastered FC or easy quiz)
        items = putEasyFirst(items);

        return items;
    }

    function putEasyFirst(items) {
        if (items.length < 2) return items;
        // Find an item likely to succeed: mastered flashcard or previously correct SR card
        var bestIdx = -1;
        var state = window.StudFlow.spacedRepetition ? null : null;
        for (var i = 0; i < items.length; i++) {
            var it = items[i];
            if (it.type === 'fc' && it.data.mastered) { bestIdx = i; break; }
            if (it.type === 'fc' && it.data._srId) {
                // Check if card has high ease factor (= easy card)
                try {
                    var srState = window.StudFlow.storage.loadData('spacedRep', { cards: {} });
                    var cs = srState.cards[it.data._srId];
                    if (cs && cs.ef >= 2.5 && cs.reps >= 2) { bestIdx = i; break; }
                } catch(e) {}
            }
        }
        // Fallback: pick a flashcard (easier than quiz)
        if (bestIdx === -1) {
            for (var j = 0; j < items.length; j++) {
                if (items[j].type === 'fc') { bestIdx = j; break; }
            }
        }
        if (bestIdx > 0) {
            var easy = items.splice(bestIdx, 1)[0];
            items.unshift(easy);
        }
        return items;
    }

    function isTopicActive(topicId) {
        if (!window.StudFlow.subjectPicker || !window.StudFlow.subjectPicker.isCompleted()) return true;
        if (topicId.indexOf('subj-') === 0) {
            var subjectId = topicId.replace('subj-', '').split('-')[0];
            return window.StudFlow.subjectPicker.isSubjectActive(subjectId);
        }
        return true;
    }

    function getWeakFlashcards(count) {
        var weakTopics = getWeakTopicIds();
        var cards = [];

        // Gather flashcards from weak subjects (filtered by active subjects)
        if (window.StudFlow.subjects) {
            for (var i = 0; i < weakTopics.length && cards.length < count; i++) {
                var topicId = weakTopics[i];
                if (topicId.indexOf('subj-') === 0 && isTopicActive(topicId)) {
                    var subjectCards = window.StudFlow.subjects.getFlashcardsByDeck(topicId);
                    cards = cards.concat(subjectCards);
                }
            }
        }

        // Fallback: all flashcards shuffled
        if (cards.length === 0 && window.StudFlow.flashcards) {
            cards = window.StudFlow.flashcards.getAllCards();
        }

        return shuffle(cards).slice(0, count);
    }

    function getWeakQuiz(count) {
        var weakTopics = getWeakTopicIds();
        var questions = [];

        if (window.StudFlow.subjects) {
            for (var i = 0; i < weakTopics.length && questions.length < count; i++) {
                var topicId = weakTopics[i];
                if (topicId.indexOf('subj-') === 0 && isTopicActive(topicId)) {
                    var topicQuiz = window.StudFlow.subjects.getQuizByDeck(topicId);
                    questions = questions.concat(topicQuiz);
                }
            }
        }

        // Fallback: bac francais quiz or all quiz
        if (questions.length === 0) {
            if (window.StudFlow.bacfrancais) {
                questions = window.StudFlow.bacfrancais.getAllQuiz();
            }
            if (questions.length === 0) {
                var state = window.StudFlow.app.getState();
                questions = (state.quizQuestions || []).concat(state.customQuiz || []);
            }
        }

        return shuffle(questions).slice(0, count);
    }

    function getWeakTopicIds() {
        if (!window.StudFlow.adaptive) return [];
        var all = window.StudFlow.adaptive.getAllTopics();
        // Sort by mastery ascending (weakest first), take top 5
        var weak = [];
        for (var i = 0; i < Math.min(all.length, 5); i++) {
            weak.push(all[i].topicId);
        }
        // Also add due topics
        var due = window.StudFlow.adaptive.getDueTopics();
        for (var j = 0; j < due.length; j++) {
            if (weak.indexOf(due[j].topicId) === -1) {
                weak.push(due[j].topicId);
            }
        }
        return weak;
    }

    function interleave(items) {
        var fc = [];
        var qz = [];
        for (var i = 0; i < items.length; i++) {
            if (items[i].type === 'fc') fc.push(items[i]);
            else qz.push(items[i]);
        }
        var result = [];
        var fi = 0, qi = 0;
        // Pattern: fc, fc, quiz, fc, fc, quiz...
        while (fi < fc.length || qi < qz.length) {
            if (fi < fc.length) result.push(fc[fi++]);
            if (fi < fc.length) result.push(fc[fi++]);
            if (qi < qz.length) result.push(qz[qi++]);
        }
        return result;
    }

    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    // ==================== SNAPSHOT ====================
    function snapshotMastery() {
        _snapshotBefore = {};
        _focusTopics = [];
        if (!window.StudFlow.adaptive) return;
        var all = window.StudFlow.adaptive.getAllTopics();
        for (var i = 0; i < all.length; i++) {
            var pct = Math.round(all[i].topic.mastery * 100);
            _snapshotBefore[all[i].topicId] = pct;
            if (i < 3) {
                _focusTopics.push({ topicId: all[i].topicId, label: all[i].topic.label, mastery: pct });
            }
        }
    }

    function getMasteryDiffs() {
        if (!window.StudFlow.adaptive) return [];
        var all = window.StudFlow.adaptive.getAllTopics();
        var diffs = [];
        for (var i = 0; i < all.length; i++) {
            var id = all[i].topicId;
            var after = Math.round(all[i].topic.mastery * 100);
            var before = _snapshotBefore[id] !== undefined ? _snapshotBefore[id] : after;
            if (after !== before) {
                diffs.push({ label: all[i].topic.label, before: before, after: after, diff: after - before });
            }
        }
        diffs.sort(function(a, b) { return b.diff - a.diff; });
        return diffs;
    }

    function getStreakInfo() {
        try {
            var stats = window.StudFlow.gamification.getStats();
            return { streak: stats.streak || 0 };
        } catch(e) { return { streak: 0 }; }
    }

    // ==================== ADAPTIVE MESSAGES ====================
    function getRunningScore() {
        var correct = 0, done = 0;
        for (var i = 0; i < _items.length; i++) {
            if (_items[i].done) { done++; if (_items[i].correct) correct++; }
        }
        return { correct: correct, done: done, pct: done > 0 ? Math.round(correct / done * 100) : 0 };
    }

    function getAdaptiveMessage() {
        var s = getRunningScore();
        if (s.done < 3) return ''; // too early
        if (s.pct >= 90) return '<div class="ds-adaptive ds-adaptive-hot">🔥 Tu prends de l\'avance !</div>';
        if (s.pct >= 70) return '<div class="ds-adaptive ds-adaptive-good">💪 Bon rythme, continue</div>';
        if (s.pct >= 40) return '<div class="ds-adaptive ds-adaptive-ok">📚 Tu travailles l\'essentiel</div>';
        return '<div class="ds-adaptive ds-adaptive-low">🧠 Parfait, c\'est en se trompant qu\'on apprend</div>';
    }

    // ==================== MOMENTUM PUSH ====================
    function getMomentumPush() {
        var remaining = _items.length - (_currentIndex + 1);
        var s = getRunningScore();

        // Near end of session
        if (remaining <= 3 && remaining > 0) {
            return { text: 'Plus que ' + remaining + ' item' + (remaining > 1 ? 's' : '') + ' !', show: true };
        }

        // Close to milestone XP
        if (window.StudFlow.gamification) {
            try {
                var stats = window.StudFlow.gamification.getStats();
                var xp = stats.xp || 0;
                var nextLvl = window.StudFlow.gamification.getNextLevel(xp);
                if (nextLvl) {
                    var gap = nextLvl.xp - xp;
                    if (gap <= 30) {
                        return { text: 'Plus que ' + gap + ' XP pour le niveau ' + nextLvl.name + ' !', show: true };
                    }
                }
            } catch(e) {}
        }

        // High score streak
        if (s.done >= 5 && s.pct >= 80) {
            return { text: s.correct + ' bonnes reponses d\'affilee. En feu !', show: false };
        }

        return null;
    }

    function buildMomentumSummary() {
        // Compute what continuing would gain
        var diffs = getMasteryDiffs();
        var improving = [];
        for (var i = 0; i < diffs.length; i++) {
            if (diffs[i].diff > 0 && diffs[i].after < 80) {
                improving.push(diffs[i]);
            }
        }

        var html = '';
        if (improving.length > 0) {
            var best = improving[0];
            var gap = 80 - best.after;
            var cardsNeeded = Math.max(3, Math.min(10, Math.round(gap / 3)));
            html += '<div class="ds-momentum">'
                + '<div class="ds-momentum-text">💡 Plus que ~' + cardsNeeded + ' cartes pour atteindre 80% en ' + escapeHTML(best.label) + '</div>'
                + '<div class="ds-momentum-sub">Tu peux y arriver en ~3 min</div>'
                + '</div>';
        }
        return html;
    }

    // ==================== LEARNING TIPS ====================
    var STUDY_TIPS = [
        { icon: '🧠', title: 'Technique Feynman', tip: 'Explique le concept a voix haute comme si tu l\'enseignais a quelqu\'un. Si tu bloques, c\'est la que tu dois reviser.' },
        { icon: '🔁', title: 'Repetition espacee', tip: 'Ton cerveau oublie 80% en 24h. Reviser le lendemain, puis 3 jours apres, puis 1 semaine apres = memoire long terme.' },
        { icon: '✍️', title: 'Ecrire > Lire', tip: 'Ecrire a la main active 5x plus de zones cerebrales que lire. Reecris les points cles au lieu de juste les relire.' },
        { icon: '🎯', title: 'La regle des 5 min', tip: 'Tu veux pas bosser ? Dis-toi "juste 5 min". Apres 5 min, ton cerveau est lance et tu continues naturellement.' },
        { icon: '😴', title: 'Le sommeil consolide', tip: 'Ton cerveau trie et stocke les infos pendant la nuit. Reviser juste avant de dormir = retention x2.' },
        { icon: '🏃', title: 'Bouge entre les sessions', tip: '10 min de marche entre 2 sessions booste ta concentration de 25%. Ton cerveau a besoin d\'oxygene.' },
        { icon: '🎵', title: 'Musique ou silence ?', tip: 'Le silence est mieux pour memoriser. La musique instrumentale (lo-fi) aide pour les taches repetitives. Jamais de paroles.' },
        { icon: '📱', title: 'Le telephone = ennemi #1', tip: 'Meme poser le tel sur la table reduit ta concentration de 20%. Mets-le dans une autre piece pendant ta session.' },
        { icon: '🧩', title: 'Connecte les idees', tip: 'Relie chaque nouveau concept a quelque chose que tu connais deja. Les connexions = memoire solide.' },
        { icon: '❌', title: 'Se tromper = apprendre', tip: 'Les erreurs activent l\'hippocampe 3x plus qu\'une bonne reponse. Chaque erreur est un upgrade de ton cerveau.' },
        { icon: '🕐', title: 'Pomodoro = magie', tip: '25 min focus + 5 min pause. Ton cerveau ne peut pas se concentrer plus de 25 min. Respecte ses limites.' },
        { icon: '💧', title: 'Hydrate-toi', tip: 'Ton cerveau est compose a 75% d\'eau. 2% de deshydratation = 20% de concentration en moins. Bois avant de bosser.' },
        { icon: '🗣️', title: 'Parle a voix haute', tip: 'Lire a voix haute active 3 zones du cerveau au lieu d\'une seule. Recite tes fiches comme un discours.' },
        { icon: '🎭', title: 'Cree des histoires', tip: 'Transforme les dates et les faits en histoires. "En 1789, le peuple a faim et pete les plombs" = tu oublieras jamais.' },
        { icon: '🔤', title: 'Les acronymes', tip: 'HOMES = les Grands Lacs (Huron, Ontario, Michigan, Erie, Superior). Cree tes propres acronymes pour les listes.' },
        { icon: '📝', title: 'Test > Relecture', tip: 'Se tester est 2x plus efficace que relire. C\'est pour ca que les quiz marchent mieux que les cours.' }
    ];

    var _tipShownAt = []; // track which indices showed a tip

    function shouldShowTip() {
        // Mood-aware tip frequency
        var interval = 4; // default
        if (_mood === 'stressed') interval = 3;
        if (_mood === 'motivated') interval = 5;
        if (_currentIndex < interval - 1) return false;
        if (_currentIndex % interval !== (interval - 1)) return false;
        if (_tipShownAt.indexOf(_currentIndex) !== -1) return false;
        return true;
    }

    function getRandomTip() {
        return STUDY_TIPS[Math.floor(Math.random() * STUDY_TIPS.length)];
    }

    function renderTipBreak() {
        _tipShownAt.push(_currentIndex);
        var tip = getRandomTip();
        var container = document.getElementById('daily-session-content');
        if (!container) return;

        var s = getRunningScore();
        var pct = Math.round((_currentIndex / _items.length) * 100);

        var html = '<div class="ds-overlay">'
            + '<div class="ds-top-bar">'
            + '<button class="ds-close" data-action="dailySession.exit">✕</button>'
            + '<div class="ds-progress-bar"><div class="ds-progress-fill" style="width:' + pct + '%"></div></div>'
            + '<span class="ds-counter">' + (_currentIndex + 1) + '/' + _items.length + '</span>'
            + '</div>'
            + '<div class="ds-tip-break">'
            + '<div class="ds-tip-icon">' + tip.icon + '</div>'
            + '<h3 class="ds-tip-title">' + tip.title + '</h3>'
            + '<p class="ds-tip-text">' + tip.tip + '</p>'
            + '<div class="ds-tip-score">Score actuel : ' + s.correct + '/' + s.done + '</div>'
            + '<button class="ds-btn ds-btn-primary" data-action="dailySession.continueTip">Continuer →</button>'
            + '</div>'
            + '</div>';

        container.innerHTML = html;
    }

    function continueTip() {
        renderCurrent();
    }

    function getWrongAnswerTip(item) {
        // Context-specific encouragement after wrong answer
        var tips = [
            'Pas grave ! Ton cerveau vient de creer une connexion plus forte. La prochaine fois tu sauras.',
            'Les erreurs activent l\'hippocampe 3x plus. Tu viens de booster ta memoire.',
            'C\'est normal de se tromper. Les meilleurs se trompent aussi, ils recommencent juste plus vite.',
            'Cette carte va revenir plus tot dans ta revision espacee. Tu la maitriseras bientot.',
            'Fun fact : tu retiens mieux apres une erreur qu\'apres une bonne reponse. Ton cerveau te remercie.'
        ];
        return tips[Math.floor(Math.random() * tips.length)];
    }

    // ==================== MOOD CHECK-IN ====================
    var MOOD_CONFIG = {
        stressed: {
            emoji: '\uD83D\uDE30', label: 'Stresse',
            goalSub: 'On y va doucement. Respire.',
            endMsg: 'T\'as gere malgre le stress. Respect.',
            targetItems: 20, fcRatio: 0.6, fcOnly: false
        },
        tired: {
            emoji: '\uD83D\uDE34', label: 'Fatigue',
            goalSub: 'Mode light. Juste l\'essentiel.',
            endMsg: 'Meme fatigue, t\'as fait l\'effort. C\'est ca la regularite.',
            targetItems: 12, fcRatio: 1.0, fcOnly: true
        },
        good: {
            emoji: '\uD83D\uDE0A', label: 'Bien',
            goalSub: 'Parfait. Session standard, on y va.',
            endMsg: null, // use default
            targetItems: 20, fcRatio: 0.6, fcOnly: false
        },
        motivated: {
            emoji: '\uD83D\uDD25', label: 'Motive',
            goalSub: 'Mode beast. On pousse.',
            endMsg: 'T\'es en feu ! Continue comme ca.',
            targetItems: 25, fcRatio: 0.5, fcOnly: false
        }
    };

    function renderMoodCheck() {
        var container = document.getElementById('daily-session-content');
        if (!container) return;

        var html = '<div class="ds-overlay">'
            + '<div class="ds-mood-check">'
            + '<div class="ds-mood-emoji">\uD83E\uDEC6</div>'
            + '<h2 class="ds-mood-title">Comment tu te sens ?</h2>'
            + '<div class="ds-mood-options">';

        var moods = ['stressed', 'tired', 'good', 'motivated'];
        for (var i = 0; i < moods.length; i++) {
            var m = MOOD_CONFIG[moods[i]];
            html += '<button class="ds-mood-btn" data-action="dailySession.setMood" data-param="' + moods[i] + '">'
                + '<span class="ds-mood-btn-emoji">' + m.emoji + '</span>'
                + '<span class="ds-mood-btn-label">' + m.label + '</span>'
                + '</button>';
        }

        html += '</div>'
            + '</div>'
            + '</div>';

        container.innerHTML = html;
    }

    function setMood(mood) {
        _mood = mood;
        // Build session with mood-adapted parameters
        var config = MOOD_CONFIG[mood] || MOOD_CONFIG.good;
        _items = getMoodAdaptedSession(config);
        _currentIndex = 0;
        _startTime = null;
        _xpEarned = 0;
        _flipped = false;
        _errorCounts = {};

        if (_items.length === 0) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Rien a reviser aujourd\'hui !', 'xp', '\uD83C\uDF89');
            }
            return;
        }

        snapshotMastery();
        renderGoalScreen();
    }

    function getMoodAdaptedSession(config) {
        var targetItems = config.targetItems;
        var fcTarget = Math.round(targetItems * config.fcRatio);
        var qzTarget = config.fcOnly ? 0 : (targetItems - fcTarget);

        // 1. Get SR due flashcards (priority)
        var srCards = [];
        if (window.StudFlow.spacedRepetition) {
            srCards = window.StudFlow.spacedRepetition.buildSession(fcTarget);
        }

        // 2. Get weak topic flashcards to fill remaining slots
        var weakFc = [];
        if (srCards.length < fcTarget) {
            weakFc = getWeakFlashcards(fcTarget - srCards.length);
        }

        var allFc = srCards.concat(weakFc);

        // 3. Get quiz questions from weak topics
        var quizItems = qzTarget > 0 ? getWeakQuiz(qzTarget) : [];

        // 4. Build session items
        var items = [];
        for (var i = 0; i < allFc.length; i++) {
            items.push({ type: 'fc', data: allFc[i], done: false, correct: null });
        }
        for (var j = 0; j < quizItems.length; j++) {
            items.push({ type: 'quiz', data: quizItems[j], done: false, correct: null });
        }

        // 5. Interleave
        items = interleave(items);

        // 6. For stressed mood, put easiest items first
        if (_mood === 'stressed') {
            items = putEasyFirst(items);
        } else {
            items = putEasyFirst(items);
        }

        return items;
    }

    // ==================== UI — LAUNCH ====================
    function show() {
        _mood = null;
        _customTitle = null;

        // Hide header/tab, show screen
        var header = document.querySelector('header');
        var tabBar = document.getElementById('tab-bar');
        if (header) header.style.display = 'none';
        if (tabBar) tabBar.style.display = 'none';

        window.StudFlow.app.showScreen('daily-session');
        renderMoodCheck();
    }

    function showWithItems(customItems, customTitle) {
        _mood = null;
        _customTitle = customTitle || null;
        _items = customItems;
        _currentIndex = 0;
        _startTime = null;
        _xpEarned = 0;
        _flipped = false;
        _errorCounts = {};

        if (_items.length === 0) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('Aucun contenu a reviser !', 'xp', '\uD83D\uDE15');
            }
            return;
        }

        snapshotMastery();

        // Hide header/tab, show screen
        var header = document.querySelector('header');
        var tabBar = document.getElementById('tab-bar');
        if (header) header.style.display = 'none';
        if (tabBar) tabBar.style.display = 'none';

        window.StudFlow.app.showScreen('daily-session');
        renderGoalScreen();
    }

    function startSession() {
        _startTime = Date.now();
        renderCurrent();
    }

    // ==================== PRE-SESSION GOAL SCREEN ====================
    function renderGoalScreen() {
        var container = document.getElementById('daily-session-content');
        if (!container) return;

        var dueCount = 0;
        if (window.StudFlow.spacedRepetition) dueCount = window.StudFlow.spacedRepetition.getDueCount();

        var streakInfo = getStreakInfo();
        var fcCount = 0, qzCount = 0;
        for (var i = 0; i < _items.length; i++) {
            if (_items[i].type === 'fc') fcCount++;
            else qzCount++;
        }

        // Build focus topic lines
        var focusHTML = '';
        if (_focusTopics.length > 0) {
            focusHTML = '<div class="ds-goal-focus">';
            for (var j = 0; j < _focusTopics.length; j++) {
                var t = _focusTopics[j];
                var gain = Math.min(8, Math.max(2, Math.round((100 - t.mastery) * 0.1)));
                focusHTML += '<div class="ds-goal-topic">'
                    + '<span class="ds-goal-topic-name">' + escapeHTML(t.label) + '</span>'
                    + '<span class="ds-goal-topic-stat">' + t.mastery + '% → ~' + (t.mastery + gain) + '%</span>'
                    + '</div>';
            }
            focusHTML += '</div>';
        }

        // Streak line
        var streakHTML = '';
        if (streakInfo.streak > 0) {
            streakHTML = '<div class="ds-goal-streak">🔥 Serie en cours : ' + streakInfo.streak + ' jour' + (streakInfo.streak > 1 ? 's' : '') + '</div>';
        }

        // Mood-specific subtitle
        var moodSub = '';
        if (_mood && MOOD_CONFIG[_mood]) {
            moodSub = '<p class="ds-goal-mood">' + MOOD_CONFIG[_mood].emoji + ' ' + MOOD_CONFIG[_mood].goalSub + '</p>';
        }

        var goalTitle = _customTitle || 'Ta session du jour';
        var goalEmoji = _customTitle ? '\uD83D\uDCDD' : '\uD83C\uDFAF';

        var html = '<div class="ds-overlay">'
            + '<div class="ds-goal">'
            + '<div class="ds-goal-emoji">' + goalEmoji + '</div>'
            + '<h2 class="ds-goal-title">' + escapeHTML(goalTitle) + '</h2>'
            + moodSub
            + '<p class="ds-goal-subtitle">' + _items.length + ' items \u00B7 ~10 min \u00B7 ' + fcCount + ' flashcards + ' + qzCount + ' quiz</p>'
            + focusHTML
            + streakHTML
            + '<button class="ds-btn ds-btn-primary ds-goal-start" data-action="dailySession.startSession">C\'est parti \u2192</button>'
            + '</div>'
            + '</div>';

        container.innerHTML = html;
    }

    function exit() {
        var header = document.querySelector('header');
        var tabBar = document.getElementById('tab-bar');
        if (header) header.style.display = '';
        if (tabBar) tabBar.style.display = '';
        window.StudFlow.app.showScreen('dashboard');
    }

    // ==================== RENDER ====================
    function renderCurrent() {
        var container = document.getElementById('daily-session-content');
        if (!container) return;

        var item = _items[_currentIndex];
        var progress = (_currentIndex + 1) + '/' + _items.length;
        var pct = Math.round(((_currentIndex) / _items.length) * 100);

        var html = '<div class="ds-overlay">'
            + '<div class="ds-top-bar">'
            + '<button class="ds-close" data-action="dailySession.exit">✕</button>'
            + '<div class="ds-progress-bar"><div class="ds-progress-fill" style="width:' + pct + '%"></div></div>'
            + '<span class="ds-counter">' + progress + '</span>'
            + '</div>';

        // Message d'intro à la première carte
        if (_currentIndex === 0 && _sessionIntro) {
            html += '<div class="ds-session-intro">' + _sessionIntro + '</div>';
        }

        // Adaptive message (show after 3+ items done)
        html += getAdaptiveMessage();

        if (item.type === 'fc') {
            html += renderFlashcard(item);
        } else {
            html += renderQuiz(item);
        }

        // Momentum push
        var momentum = getMomentumPush();
        if (momentum) {
            html += '<div class="ds-momentum-inline">' + momentum.text + '</div>';
        }

        html += '</div>';
        container.innerHTML = html;
        _flipped = false;
    }

    function renderFlashcard(item) {
        var card = item.data;
        var itemId = getItemId(item);
        var errors = _errorCounts[itemId] || 0;
        var isLearning = errors >= 3;
        var cardClass = isLearning ? 'ds-card ds-learning-mode' : 'ds-card';

        var html = '<div class="ds-type-badge">🎴 Flashcard</div>';
        if (isLearning) {
            html += '<div class="ds-learning-badge">\uD83D\uDD13 Mode apprentissage</div>';
        }
        html += '<div class="' + cardClass + '" data-action="dailySession.flip">'
            + '<div class="ds-card-face ds-card-front">'
            + '<p class="ds-card-text">' + escapeHTML(card.question) + '</p>';
        if (isLearning && card.answer) {
            var words = String(card.answer).split(/\s+/);
            var hintWords = words.slice(0, Math.max(2, Math.ceil(words.length * 0.25)));
            html += '<div class="ds-hint">Indice : ' + escapeHTML(hintWords.join(' ')) + '...</div>';
        }
        html += '<span class="ds-tap-hint">Tap pour retourner</span>'
            + '</div>'
            + '</div>'
            + '<div class="ds-actions" style="display:none" id="ds-fc-actions">'
            + '<button class="ds-btn ds-btn-fail" data-action="dailySession.answerFc" data-param="0">A revoir</button>'
            + '<button class="ds-btn ds-btn-ok" data-action="dailySession.answerFc" data-param="1">Je sais</button>'
            + '</div>';
        return html;
    }

    function renderQuiz(item) {
        var q = item.data;
        var options = q.options || [];
        var itemId = getItemId(item);
        var errors = _errorCounts[itemId] || 0;
        var isLearning = errors >= 3;
        var correctIndex = q.correct !== undefined ? q.correct : (q.correctIndex || 0);

        // In learning mode, determine which 2 wrong options to eliminate
        var eliminated = {};
        if (isLearning && options.length > 2) {
            var wrongIndices = [];
            for (var w = 0; w < options.length; w++) {
                if (w !== correctIndex) wrongIndices.push(w);
            }
            // Eliminate all but 1 wrong option (keep correct + 1 wrong = 2 choices)
            var shuffledWrong = shuffle(wrongIndices);
            for (var e = 1; e < shuffledWrong.length; e++) {
                eliminated[shuffledWrong[e]] = true;
            }
        }

        var html = '<div class="ds-type-badge">⚡ Quiz</div>';
        if (isLearning) {
            html += '<div class="ds-learning-badge">\uD83D\uDD13 Mode apprentissage</div>';
        }
        html += '<div class="ds-quiz-question">' + escapeHTML(q.question) + '</div>';

        if (isLearning) {
            html += '<div class="ds-fifty-fifty-msg">\uD83D\uDCA1 On t\'aide : 2 reponses eliminees</div>';
        }

        html += '<div class="ds-quiz-options">';

        for (var i = 0; i < options.length; i++) {
            var optClass = 'ds-quiz-option';
            if (eliminated[i]) optClass += ' ds-eliminated';
            html += '<button class="' + optClass + '" data-action="dailySession.answerQuiz" data-param="' + i + '"'
                + (eliminated[i] ? ' disabled' : '') + '>'
                + '<span class="ds-option-letter">' + String.fromCharCode(65 + i) + '</span>'
                + '<span>' + escapeHTML(options[i]) + '</span>'
                + '</button>';
        }

        html += '</div>';
        return html;
    }

    // ==================== ACTIONS ====================
    function flip() {
        if (_flipped) return;
        _flipped = true;

        var item = _items[_currentIndex];
        if (item.type !== 'fc') return;

        var cardEl = document.querySelector('.ds-card');
        if (cardEl) {
            cardEl.innerHTML = '<div class="ds-card-face ds-card-back">'
                + '<p class="ds-card-text">' + escapeHTML(item.data.answer) + '</p>'
                + '</div>';
            cardEl.classList.add('ds-flipped');
        }

        var actions = document.getElementById('ds-fc-actions');
        if (actions) actions.style.display = 'flex';
    }

    function answerFc(correct) {
        correct = correct === '1' || correct === 1;
        var item = _items[_currentIndex];
        item.done = true;
        item.correct = correct;

        // Record in spaced repetition
        if (window.StudFlow.spacedRepetition && item.data._srId) {
            window.StudFlow.spacedRepetition.recordReview(item.data._srId, correct ? 4 : 1);
        }

        // XP
        if (correct && window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('flashcard_correct');
            _xpEarned += 5;
        }

        if (!correct) {
            // Track error count for learning mode
            var fcItemId = getItemId(item);
            _errorCounts[fcItemId] = (_errorCounts[fcItemId] || 0) + 1;

            // Record in error notebook
            if (window.StudFlow.errorNotebook) {
                window.StudFlow.errorNotebook.record({
                    question: item.data.question || '',
                    correctAnswer: item.data.answer || '',
                    userAnswer: '',
                    type: 'fc',
                    subject: item.data._subject || '',
                    date: new Date().toISOString().split('T')[0]
                });
            }

            // Show encouragement briefly
            var tipEl = document.createElement('div');
            tipEl.className = 'ds-wrong-tip';
            tipEl.textContent = getWrongAnswerTip(item);
            var actions = document.getElementById('ds-fc-actions');
            if (actions) actions.parentNode.insertBefore(tipEl, actions.nextSibling);
            setTimeout(function() { advance(); }, 1500);
        } else {
            advance();
        }
    }

    function answerQuiz(selectedIndex) {
        selectedIndex = parseInt(selectedIndex);
        var item = _items[_currentIndex];
        var correctIndex = item.data.correct !== undefined ? item.data.correct : (item.data.correctIndex || 0);
        var isCorrect = selectedIndex === correctIndex;

        item.done = true;
        item.correct = isCorrect;

        // Visual feedback
        var options = document.querySelectorAll('.ds-quiz-option');
        for (var i = 0; i < options.length; i++) {
            options[i].disabled = true;
            if (i === correctIndex) options[i].classList.add('ds-option-correct');
            if (i === selectedIndex && !isCorrect) options[i].classList.add('ds-option-wrong');
        }

        // XP
        if (isCorrect && window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('quiz_correct');
            _xpEarned += 8;
        }

        // Show encouragement on wrong answer, then advance
        if (!isCorrect) {
            // Track error count for learning mode
            var qzItemId = getItemId(item);
            _errorCounts[qzItemId] = (_errorCounts[qzItemId] || 0) + 1;

            // Record in error notebook
            if (window.StudFlow.errorNotebook) {
                var qOpts = item.data.options || [];
                window.StudFlow.errorNotebook.record({
                    question: item.data.question || '',
                    correctAnswer: qOpts[correctIndex] || '',
                    userAnswer: qOpts[selectedIndex] || '',
                    type: 'quiz',
                    subject: item.data._subject || '',
                    date: new Date().toISOString().split('T')[0]
                });
            }

            var tipEl = document.createElement('div');
            tipEl.className = 'ds-wrong-tip';
            tipEl.textContent = getWrongAnswerTip(item);
            var quizContainer = document.querySelector('.ds-quiz-options');
            if (quizContainer) quizContainer.parentNode.insertBefore(tipEl, quizContainer.nextSibling);

            // Show explanation with correct answer
            var q = item.data;
            var explanationHTML = '<div class="ds-explanation">'
                + '<div class="ds-explanation-label">Bonne reponse :</div>'
                + '<div class="ds-explanation-answer">' + escapeHTML(q.options[correctIndex]) + '</div>';
            if (q.explanation) {
                explanationHTML += '<div class="ds-explanation-why">' + escapeHTML(q.explanation) + '</div>';
            }
            explanationHTML += '</div>';

            var explanationEl = document.createElement('div');
            explanationEl.innerHTML = explanationHTML;
            var explanationNode = explanationEl.firstChild;
            if (tipEl.parentNode) tipEl.parentNode.insertBefore(explanationNode, tipEl.nextSibling);
        }

        setTimeout(function() { advance(); }, isCorrect ? 600 : 2500);
    }

    function advance() {
        _currentIndex++;
        if (_currentIndex >= _items.length) {
            showSummary();
        } else if (shouldShowTip()) {
            renderTipBreak();
        } else {
            renderCurrent();
        }
    }

    // ==================== CONTEXTUAL COACH MESSAGE ====================
    function getCoachMessage() {
        var s = getRunningScore();
        var diffs = getMasteryDiffs();
        var streakInfo = getStreakInfo();
        var duration = Math.round((Date.now() - _startTime) / 1000);

        // Priority-based message selection
        var messages = [];

        // 1. Streak milestone
        if (streakInfo.streak === 3) messages.push({priority: 10, msg: '3 jours de suite ! C\'est la que l\'habitude se cree. Lache rien.'});
        if (streakInfo.streak === 7) messages.push({priority: 10, msg: '1 SEMAINE. T\'es officiellement regulier. Les resultats vont suivre, c\'est mathematique.'});
        if (streakInfo.streak === 14) messages.push({priority: 10, msg: '2 semaines non-stop. Tu fais partie du top 5% des eleves qui revisent regulierement.'});
        if (streakInfo.streak === 30) messages.push({priority: 10, msg: '30 JOURS. Legende. Ta memoire long terme est en train de se construire.'});

        // 2. Score-based
        if (s.pct >= 90) messages.push({priority: 8, msg: '90%+ de bonnes reponses. Tu maitrises. Passe au niveau suivant ou defie un ami.'});
        if (s.pct >= 70 && s.pct < 90) messages.push({priority: 6, msg: 'Bon score. Les bases sont la. Reviens demain pour consolider.'});
        if (s.pct < 50 && s.done >= 5) messages.push({priority: 7, msg: 'Score bas mais c\'est BIEN. Ca veut dire que tu travailles les trucs que tu sais pas. C\'est exactement ce qu\'il faut.'});

        // 3. Improvement-based
        if (diffs.length > 0) {
            var improved = diffs.filter(function(d) { return d.diff > 0; });
            if (improved.length >= 2) messages.push({priority: 8, msg: 'Tu as progresse dans ' + improved.length + ' matieres en une session. C\'est du solide.'});
            if (improved.length === 1) messages.push({priority: 6, msg: 'Ta maitrise en ' + escapeHTML(improved[0].label) + ' a monte. Chaque % compte.'});
        }

        // 4. Speed-based
        if (duration < 300 && s.done >= 15) messages.push({priority: 5, msg: 'Session rapide et efficace. T\'as le flow.'});
        if (duration > 900) messages.push({priority: 5, msg: 'T\'as pris ton temps et c\'est bien. Mieux vaut comprendre que speeder.'});

        // 5. Mood-based
        if (_mood === 'stressed' && s.pct >= 50) messages.push({priority: 9, msg: 'T\'etais stresse et t\'as quand meme assure. Ca prouve que tu geres la pression.'});
        if (_mood === 'tired') messages.push({priority: 9, msg: 'Meme fatigue, t\'as fait l\'effort. C\'est CA la regularite. Les autres auraient zappe.'});
        if (_mood === 'motivated' && s.pct >= 80) messages.push({priority: 9, msg: 'Motive + bon score = combo parfait. T\'es dans la zone.'});

        // 6. Time of day
        var hour = new Date().getHours();
        if (hour >= 22) messages.push({priority: 4, msg: 'Session de nuit. Ton cerveau va consolider tout ca pendant ton sommeil. Bonne nuit.'});
        if (hour < 8) messages.push({priority: 4, msg: 'Session du matin. T\'es deja en avance sur tout le monde.'});

        // 7. Fallback
        messages.push({priority: 1, msg: 'Bien joue. Chaque session te rapproche du Bac.'});

        // Sort by priority and return the best
        messages.sort(function(a, b) { return b.priority - a.priority; });
        return messages[0].msg;
    }

    // ==================== SUMMARY ====================
    function showSummary() {
        var container = document.getElementById('daily-session-content');
        if (!container) return;

        var correct = 0;
        var total = _items.length;
        for (var i = 0; i < _items.length; i++) {
            if (_items[i].correct) correct++;
        }
        var pct = Math.round((correct / total) * 100);
        var duration = Math.round((Date.now() - _startTime) / 1000);
        var minutes = Math.floor(duration / 60);
        var seconds = duration % 60;

        // Completion XP bonus
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('flashcard_complete');
            _xpEarned += 15;
            window.StudFlow.gamification.spawnConfetti();
        }

        // Streak
        var streakInfo = getStreakInfo();

        // Emit event
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('dailySession:completed', {
                correct: correct, total: total, xp: _xpEarned, duration: duration
            });
        }

        saveTodaySession(correct, total, _xpEarned);

        // Mastery diffs
        var diffs = getMasteryDiffs();
        var improved = 0;
        for (var d = 0; d < diffs.length; d++) { if (diffs[d].diff > 0) improved++; }

        // Tomorrow projection
        var tomorrowDue = 0;
        if (window.StudFlow.spacedRepetition) tomorrowDue = window.StudFlow.spacedRepetition.getDueCount();
        // Add cards reviewed today that will be due tomorrow
        tomorrowDue = Math.max(tomorrowDue, Math.round(total * 0.3));

        // Average mastery
        var avgMastery = 0;
        if (window.StudFlow.adaptive) {
            var allTopics = window.StudFlow.adaptive.getAllTopics();
            for (var t = 0; t < allTopics.length; t++) avgMastery += allTopics[t].topic.mastery;
            avgMastery = allTopics.length > 0 ? Math.round((avgMastery / allTopics.length) * 100) : 0;
        }
        var targetMastery = Math.min(100, avgMastery + 5);

        var emoji = pct >= 80 ? '🔥' : pct >= 50 ? '💪' : '📚';
        var message = pct >= 80 ? 'Excellente session !'
            : pct >= 50 ? 'Bien joue, continue !'
            : 'Chaque session compte !';

        // === Build HTML ===
        var html = '<div class="ds-overlay">'
            + '<div class="ds-summary">'
            + '<div class="ds-summary-emoji">' + emoji + '</div>'
            + '<h2 class="ds-summary-title">' + message + '</h2>';

        // XP + Streak row
        html += '<div class="ds-impact-row">'
            + '<div class="ds-impact-xp">+' + _xpEarned + ' XP</div>';
        if (streakInfo.streak > 0) {
            html += '<div class="ds-impact-streak">🔥 ' + streakInfo.streak + ' jour' + (streakInfo.streak > 1 ? 's' : '') + '</div>';
        }
        html += '</div>';

        // Score compact
        html += '<div class="ds-impact-score">'
            + '<span>' + correct + '/' + total + ' correct</span>'
            + '<span>' + minutes + ':' + String(seconds).padStart(2, '0') + '</span>'
            + '</div>';

        // Subject progress diffs
        if (diffs.length > 0) {
            html += '<div class="ds-impact-section">'
                + '<h3 class="ds-impact-heading">Progression par sujet</h3>';
            var shown = Math.min(diffs.length, 4);
            for (var k = 0; k < shown; k++) {
                var df = diffs[k];
                var arrow = df.diff > 0 ? '↑' : '↓';
                var cls = df.diff > 0 ? 'ds-diff-up' : 'ds-diff-down';
                html += '<div class="ds-impact-diff">'
                    + '<span class="ds-diff-label">' + escapeHTML(df.label) + '</span>'
                    + '<span class="' + cls + '">' + df.before + '% → ' + df.after + '% ' + arrow + '</span>'
                    + '</div>';
            }
            if (improved > 0) {
                html += '<div class="ds-impact-win">✓ ' + improved + ' point' + (improved > 1 ? 's' : '') + ' faible' + (improved > 1 ? 's' : '') + ' ameliore' + (improved > 1 ? 's' : '') + '</div>';
            }
            html += '</div>';
        }

        // Projection: tomorrow
        html += '<div class="ds-impact-section ds-impact-projection">'
            + '<h3 class="ds-impact-heading">Demain</h3>'
            + '<div class="ds-projection-line">📋 ' + tomorrowDue + ' cartes a revoir</div>'
            + '<div class="ds-projection-line">🎯 Objectif : atteindre ' + targetMastery + '% de maitrise</div>'
            + '</div>';

        // Urgency: streak warning
        if (streakInfo.streak >= 2) {
            html += '<div class="ds-impact-urgency">'
                + '⚠️ Tu perds ta serie de ' + streakInfo.streak + ' jours si tu ne reviens pas demain'
                + '</div>';
        }

        // Momentum push: show what continuing would gain
        html += buildMomentumSummary();

        // Adaptive end message (mood-aware)
        var endMsg;
        if (_mood && MOOD_CONFIG[_mood] && MOOD_CONFIG[_mood].endMsg) {
            endMsg = MOOD_CONFIG[_mood].emoji + ' ' + MOOD_CONFIG[_mood].endMsg;
        } else {
            endMsg = pct >= 80 ? '\uD83C\uDFC6 Tu prends de l\'avance sur le Bac'
                : pct >= 60 ? '\uD83D\uDCAA Solide. Tu consolides tes bases'
                : pct >= 40 ? '\uD83D\uDCDA Parfait, tu travailles exactement ce qu\'il faut'
                : '\uD83E\uDDE0 C\'est en se trompant qu\'on progresse le plus';
        }
        html += '<div class="ds-adaptive ds-end-msg">' + endMsg + '</div>';

        // Contextual coach message
        var coachMsg = getCoachMessage();
        html += '<div class="ds-coach-msg">'
            + '<div class="ds-coach-avatar">🎓</div>'
            + '<p class="ds-coach-text">' + coachMsg + '</p>'
            + '</div>';

        // Quick challenge
        html += '<div class="ds-quick-challenge" data-action="dailySession.quickChallenge">'
            + '⚔️ Defie un ami en 1 tap'
            + '</div>';

        // Actions
        html += '<div class="ds-summary-actions">'
            + '<button class="ds-btn ds-btn-primary ds-share-score" data-action="dailySession.shareScore">\uD83D\uDCF8 Partager mon score</button>'
            + '<button class="ds-btn ds-btn-primary ds-goal-start" data-action="dailySession.show">Continuer \u2192</button>'
            + '<button class="ds-btn ds-btn-secondary" data-action="dailySession.exit">Retour au dashboard</button>'
            + '</div>'
            + '</div>'
            + '</div>';

        // Store summary data for share
        _lastSummary = { correct: correct, total: total, streak: streakInfo.streak, xp: _xpEarned, pct: pct };

        container.innerHTML = html;
    }

    // ==================== PERSISTENCE ====================
    function saveTodaySession(correct, total, xp) {
        var today = new Date().toISOString().slice(0, 10);
        var data = window.StudFlow.storage.loadData(SESSION_KEY, {});
        if (!data.sessions) data.sessions = [];
        data.sessions.push({ date: today, correct: correct, total: total, xp: xp });
        // Keep last 30 sessions
        if (data.sessions.length > 30) data.sessions = data.sessions.slice(-30);
        data.lastDate = today;
        window.StudFlow.storage.saveData(SESSION_KEY, data);
    }

    function hasSessionToday() {
        var data = window.StudFlow.storage.loadData(SESSION_KEY, {});
        var today = new Date().toISOString().slice(0, 10);
        return data.lastDate === today;
    }

    function getSessionCount() {
        var data = window.StudFlow.storage.loadData(SESSION_KEY, {});
        return (data.sessions || []).length;
    }

    // ==================== DASHBOARD BUTTON ====================
    function renderDashboardButton() {
        var dueCount = 0;
        if (window.StudFlow.spacedRepetition) {
            dueCount = window.StudFlow.spacedRepetition.getDueCount();
        }

        var done = hasSessionToday();
        var subtitle = done
            ? 'Session du jour terminee ✓'
            : (dueCount > 0
                ? dueCount + ' carte' + (dueCount > 1 ? 's' : '') + ' a reviser'
                : 'Mix flashcards + quiz personnalise');

        var btnClass = done ? 'ds-launch ds-launch-done' : 'ds-launch';
        var btnText = done ? '↻ Refaire une session' : '▶ Lancer ma session';

        var countdownHTML = '';
        if (!done && window.StudFlow.countdown) {
            countdownHTML = '<p class="ds-launch-sub" style="margin-top:0.15rem;">' + window.StudFlow.countdown.renderBadge() + '</p>';
        }

        return '<div class="dash-section ' + btnClass + '" data-action="dailySession.show">'
            + '<div class="ds-launch-content">'
            + '<div class="ds-launch-icon">🚀</div>'
            + '<div class="ds-launch-text">'
            + '<h3 class="ds-launch-title">' + btnText + '</h3>'
            + '<p class="ds-launch-sub">' + subtitle + '</p>'
            + countdownHTML
            + '</div>'
            + '</div>'
            + '<div class="ds-launch-meta">~10 min · ' + TARGET_ITEMS + ' items</div>'
            + '</div>';
    }

    // ==================== QUICK CHALLENGE ====================
    function quickChallenge() {
        // Exit session UI first
        var header = document.querySelector('header');
        var tabBar = document.getElementById('tab-bar');
        if (header) header.style.display = '';
        if (tabBar) tabBar.style.display = '';

        // Go to challenges and auto-create
        if (window.StudFlow.challenges) {
            window.StudFlow.challenges.show();
            setTimeout(function() {
                if (window.StudFlow.challenges.create) {
                    window.StudFlow.challenges.create();
                }
            }, 300);
        } else {
            window.StudFlow.app.showScreen('dashboard');
        }
    }

    // ==================== HELPERS ====================
    function getItemId(item) {
        if (item.type === 'fc') return 'fc_' + (item.data._srId || item.data.question.substring(0, 30));
        return 'qz_' + (item.data.question || '').substring(0, 30);
    }

    function escapeHTML(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // ==================== SHARE SCORE ====================
    function shareScore() {
        if (!_lastSummary) return;
        if (window.StudFlow.resultCard) {
            window.StudFlow.resultCard.show({
                type: 'session',
                score: _lastSummary.correct,
                total: _lastSummary.total,
                streak: _lastSummary.streak,
                xp: _lastSummary.xp
            });
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dailySession = {
        show: show,
        showWithItems: showWithItems,
        setMood: setMood,
        startSession: startSession,
        exit: exit,
        flip: flip,
        answerFc: answerFc,
        answerQuiz: answerQuiz,
        continueTip: continueTip,
        quickChallenge: quickChallenge,
        shareScore: shareScore,
        renderDashboardButton: renderDashboardButton,
        getSessionIntro: getSessionIntro,
        hasSessionToday: hasSessionToday,
        getSessionCount: getSessionCount
    };

})();
