// flashcards.js — Logique flashcards + modes hybrides + creation manuelle
(function() {
    let currentIndex = 0;
    let score = 0;
    let startTime = null;
    let currentDeck = 'all'; // 'all', 'custom', 'bac-dissertation', etc.
    let srMode = false;
    let srCards = [];
    let shuffledCards = null;
    let currentMode = 'auto'; // 'learning', 'mix', 'exam', 'auto'

    // ==================== USER LEVEL DETECTION ====================
    function getUserLevel() {
        var sr = window.StudFlow.spacedRepetition;
        if (!sr) return 'debutant';
        var mastered = sr.getMasteredCount();
        var retention = sr.getRetentionRate();
        var stats = sr.getSessionStats();
        var totalReviews = stats.totalReviews || 0;

        // Avance: 50+ cartes maitrisees, 75%+ retention, 100+ reviews
        if (mastered >= 50 && retention >= 75 && totalReviews >= 100) return 'avance';
        // Intermediaire: 15+ cartes maitrisees, 60%+ retention, 30+ reviews
        if (mastered >= 15 && retention >= 60 && totalReviews >= 30) return 'intermediaire';
        return 'debutant';
    }

    function getAutoMode() {
        var level = getUserLevel();
        if (level === 'debutant') return 'learning';
        if (level === 'intermediaire') return 'mix';
        return 'exam';
    }

    // ==================== HELPERS ====================
    function shuffle(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    function getAllCards() {
        if (shuffledCards) return shuffledCards;
        if (srMode && srCards.length > 0) return srCards;

        const app = window.StudFlow.app;
        const state = app.getState();
        let cards = [];

        if (currentDeck === 'all') {
            cards = (state.flashcards || []).concat(state.customFlashcards || []);
            if (window.StudFlow.subjects) {
                cards = cards.concat(window.StudFlow.subjects.getAllFlashcards());
            } else if (window.StudFlow.bacfrancais) {
                cards = cards.concat(window.StudFlow.bacfrancais.getAllFlashcards());
            }
        } else if (currentDeck === 'custom') {
            cards = state.customFlashcards || [];
        } else if (currentDeck === 'imported') {
            cards = state.flashcards || [];
        } else if (currentDeck.startsWith('subj-')) {
            if (window.StudFlow.subjects) {
                cards = window.StudFlow.subjects.getFlashcardsByDeck(currentDeck);
            }
        } else if (currentDeck.startsWith('bac-')) {
            if (window.StudFlow.bacfrancais) {
                cards = window.StudFlow.bacfrancais.getFlashcardsBySection(currentDeck.replace('bac-', ''));
            }
        }

        return cards.length > 0 ? cards : [
            { question: "Pas encore de flashcards", answer: "Cree tes propres flashcards ou explore le module Bac francais !", mastered: false }
        ];
    }

    // ==================== MODE-AWARE CARD BUILDING ====================
    function buildModeDeck(baseDeck) {
        var mode = currentMode === 'auto' ? getAutoMode() : currentMode;
        var cards = [];

        if (mode === 'learning') {
            // 100% cartes du theme, nouvelles d'abord
            cards = getThemeCards(baseDeck);
            cards = prioritizeNewCards(cards);
        } else if (mode === 'mix') {
            // 60% cartes dues (SR), 40% aleatoires d'autres themes
            var dueCards = getDueCards();
            var otherCards = getOtherThemeCards(baseDeck);
            var totalTarget = Math.max(20, dueCards.length);
            var dueCount = Math.ceil(totalTarget * 0.6);
            var randomCount = totalTarget - dueCount;
            cards = shuffle(dueCards).slice(0, dueCount)
                .concat(shuffle(otherCards).slice(0, randomCount));
            cards = shuffle(cards);
        } else if (mode === 'exam') {
            // 100% aleatoire, toutes matieres, pas d'indication de theme
            var allCards = getAllSubjectCards();
            cards = shuffle(allCards).slice(0, 30);
        }

        return cards.length > 0 ? cards : getAllCards();
    }

    function getThemeCards(deck) {
        var oldDeck = currentDeck;
        currentDeck = deck;
        var saved = shuffledCards;
        shuffledCards = null;
        var cards = getAllCards();
        shuffledCards = saved;
        currentDeck = oldDeck;
        return cards;
    }

    function getDueCards() {
        if (!window.StudFlow.spacedRepetition) return [];
        return window.StudFlow.spacedRepetition.buildSession(40);
    }

    function getOtherThemeCards(currentThemeDeck) {
        var allCards = getAllSubjectCards();
        var themeCards = getThemeCards(currentThemeDeck);
        var themeQuestions = {};
        themeCards.forEach(function(c) { themeQuestions[c.question] = true; });
        return allCards.filter(function(c) { return !themeQuestions[c.question]; });
    }

    function getAllSubjectCards() {
        var cards = [];
        if (window.StudFlow.subjects) {
            cards = window.StudFlow.subjects.getAllFlashcards();
        }
        var state = window.StudFlow.app.getState();
        cards = cards.concat(state.flashcards || []).concat(state.customFlashcards || []);
        return cards;
    }

    function prioritizeNewCards(cards) {
        if (!window.StudFlow.spacedRepetition) return cards;
        var sr = window.StudFlow.spacedRepetition;
        var newCards = [];
        var reviewedCards = [];
        cards.forEach(function(c) {
            var cid = sr.cardId(c.question, c.answer);
            var stats = sr.getCardStats ? sr.getCardStats(cid) : null;
            if (!stats || stats.reps === 0) {
                newCards.push(c);
            } else {
                reviewedCards.push(c);
            }
        });
        return newCards.concat(reviewedCards);
    }

    // ==================== CORE ====================
    function shuffleDeck() {
        shuffledCards = shuffle(getAllCards());
        currentIndex = 0;
        display();
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.showToast('Cartes melangees !', 'xp', '\uD83D\uDD00');
        }
    }

    function start(deck, mode) {
        currentDeck = deck || 'all';
        currentIndex = 0;
        score = 0;
        startTime = Date.now();
        shuffledCards = null;

        // Mode selection
        if (mode) {
            currentMode = mode;
        } else {
            currentMode = 'auto';
        }

        // SR mode handling
        if (deck === 'sr' && window.StudFlow.spacedRepetition) {
            srMode = true;
            srCards = window.StudFlow.spacedRepetition.buildSession(20);
            if (srCards.length === 0) {
                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.showToast('Aucune carte a reviser ! Reviens demain.', 'xp', '\uD83E\uDDE0');
                }
                return;
            }
        } else {
            srMode = false;
            srCards = [];
        }

        // Build mode-aware deck if not SR
        if (!srMode && currentMode !== 'auto' && deck !== 'custom') {
            shuffledCards = buildModeDeck(currentDeck);
        }

        // Coach message at session start
        if (window.StudFlow.coachEngine && window.StudFlow.gamification) {
            var profile = window.StudFlow.storage.getUserProfile();
            var msg = window.StudFlow.coachEngine.getCoachMessage(profile, { moment: 'start' });
            if (msg) window.StudFlow.gamification.showToast(msg, 'xp', '\uD83E\uDDE0');
        }

        // Show/hide Easy button
        var easyBtn = document.getElementById('fc-btn-easy');
        if (easyBtn) easyBtn.style.display = srMode ? '' : 'none';

        // Show mode indicator
        updateModeIndicator();

        window.StudFlow.app.showScreen('flashcard');
        display();
    }

    function updateModeIndicator() {
        var el = document.getElementById('fc-mode-indicator');
        if (!el) return;
        var mode = currentMode === 'auto' ? getAutoMode() : currentMode;
        var labels = {
            learning: '\uD83D\uDCDA Apprentissage',
            mix: '\uD83D\uDD00 Mix',
            exam: '\uD83C\uDFAF Examen'
        };
        el.textContent = labels[mode] || '';
        el.style.display = '';
    }

    function display() {
        const cards = getAllCards();
        const card = cards[currentIndex];
        if (!card) {
            showResults();
            return;
        }

        var elQ = document.getElementById('fc-question');
        var elA = document.getElementById('fc-answer');
        var elP = document.getElementById('fc-progress');
        var elBar = document.getElementById('fc-progress-bar');
        var elScore = document.getElementById('fc-score');
        var elCard = document.getElementById('flashcard');
        var math = window.StudFlow.mathRender;
        if (math) {
            math.setContent(elQ, card.question);
            math.setContent(elA, card.answer);
        } else {
            if (elQ) elQ.textContent = card.question;
            if (elA) elA.textContent = card.answer;
        }
        if (elP) elP.textContent = `${currentIndex + 1}/${cards.length}`;
        var fcPct = Math.round(((currentIndex + 1) / cards.length) * 100);
        if (elBar) {
            elBar.style.width = fcPct + '%';
            var fcBarParent = elBar.parentElement;
            if (fcBarParent) fcBarParent.setAttribute('aria-valuenow', fcPct);
        }
        if (elScore) elScore.textContent = `${score} \u2713`;
        if (elCard) elCard.classList.remove('flipped');

        // Confidence badge for AI-generated cards
        var badgeEl = document.getElementById('fc-confidence-badge');
        if (badgeEl) {
            var guard = window.StudFlow.pedagogicalGuard;
            if (guard && card._confidence === guard.STATUS.TO_VERIFY) {
                badgeEl.innerHTML = guard.confidenceBadge(card._confidence);
                badgeEl.style.display = '';
            } else {
                badgeEl.innerHTML = '';
                badgeEl.style.display = 'none';
            }
        }

        // In exam mode, hide theme indicator
        var mode = currentMode === 'auto' ? getAutoMode() : currentMode;
        var themeEl = document.getElementById('fc-theme-label');
        if (themeEl) {
            if (mode === 'exam') {
                themeEl.style.display = 'none';
            } else if (card._sectionTitle) {
                themeEl.textContent = card._sectionTitle;
                themeEl.style.display = '';
            } else {
                themeEl.style.display = 'none';
            }
        }
    }

    function flip() {
        var el = document.getElementById('flashcard');
        if (el) el.classList.toggle('flipped');
    }

    function answer(knew) {
        const state = window.StudFlow.app.getState();
        const cards = getAllCards();
        const card = cards[currentIndex];

        // SM-2 hook: record review before existing logic
        if (srMode && window.StudFlow.spacedRepetition && card) {
            var quality = knew === 'easy' ? 5 : (knew ? 4 : 1);
            var cid = card._srId || window.StudFlow.spacedRepetition.cardId(card.question, card.answer);
            window.StudFlow.spacedRepetition.recordReview(cid, quality);
        }

        // Also record for non-SR modes (so level detection works)
        if (!srMode && window.StudFlow.spacedRepetition && card) {
            var q = knew === 'easy' ? 5 : (knew ? 4 : 1);
            var id = window.StudFlow.spacedRepetition.cardId(card.question, card.answer);
            window.StudFlow.spacedRepetition.recordReview(id, q);
        }

        // 'easy' is truthy -> treat as correct for score
        if (knew) {
            score++;
            if (cards[currentIndex]) cards[currentIndex].mastered = true;
            state.masteredCards = (state.masteredCards || 0) + 1;
            state.streak = (state.streak || 0) + 1;
            if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('flashcard_correct');
            if (window.StudFlow.sounds) window.StudFlow.sounds.correct();
        } else {
            state.streak = 0;
            if (window.StudFlow.sounds) window.StudFlow.sounds.wrong();
        }

        if (window.StudFlow.analytics) window.StudFlow.analytics.track('flashcard_review', { correct: !!knew, mode: currentMode });
        window.StudFlow.app.updateStats();
        window.StudFlow.storage.saveAppState(state);
        currentIndex++;

        if (currentIndex >= cards.length) {
            showResults();
        } else {
            display();
        }
    }

    function showResults() {
        const cards = getAllCards();
        const total = cards.length;
        const percent = Math.round((score / total) * 100);
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;

        var rIcon = document.getElementById('results-icon');
        var rTitle = document.getElementById('results-title');
        var rScore = document.getElementById('results-score');
        var rCorrect = document.getElementById('results-correct');
        var rWrong = document.getElementById('results-wrong');
        var rTime = document.getElementById('results-time');
        // Coach end-of-session message
        var endMsg = '';
        if (window.StudFlow.coachEngine) {
            var profile = window.StudFlow.storage.getUserProfile();
            endMsg = window.StudFlow.coachEngine.getCoachMessage(profile, { moment: 'end', successRate: percent });
        }
        if (rIcon) rIcon.textContent = percent >= 70 ? '\uD83C\uDF89' : '\uD83D\uDCAA';
        if (rTitle) rTitle.textContent = endMsg || (percent >= 70 ? 'Excellent !' : 'Continue comme ca !');
        if (rScore) rScore.textContent = `${percent}%`;
        if (rCorrect) rCorrect.textContent = score;
        if (rWrong) rWrong.textContent = total - score;
        if (rTime) rTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Show level progression
        var levelEl = document.getElementById('results-level');
        if (levelEl) {
            var level = getUserLevel();
            var labels = { debutant: 'Debutant', intermediaire: 'Intermediaire', avance: 'Avance' };
            var icons = { debutant: '\uD83C\uDF31', intermediaire: '\uD83C\uDF3F', avance: '\uD83C\uDF33' };
            levelEl.innerHTML = '<span>' + (icons[level] || '') + ' Niveau : ' + (labels[level] || level) + '</span>';
            levelEl.style.display = '';
        }

        // SR mode: custom retry label + extra stats
        if (srMode && window.StudFlow.spacedRepetition) {
            document.getElementById('results-retry').textContent = 'Nouvelle session SR';
            document.getElementById('results-retry').onclick = function() { start('sr'); };

            var srExtra = document.getElementById('results-sr-extra');
            if (srExtra) {
                var retention = window.StudFlow.spacedRepetition.getRetentionRate();
                var mastered = window.StudFlow.spacedRepetition.getMasteredCount();
                srExtra.style.display = '';
                srExtra.innerHTML = '<div class="result-stat">'
                    + '<div class="value">' + retention + '%</div>'
                    + '<div class="label">Retention</div>'
                    + '</div>'
                    + '<div class="result-stat">'
                    + '<div class="value">' + mastered + '</div>'
                    + '<div class="label">Maitrisees (21j+)</div>'
                    + '</div>';
            }

            if (window.StudFlow.stats) window.StudFlow.stats.recordActivity && window.StudFlow.stats.recordActivity('flashcard');
        } else {
            document.getElementById('results-retry').textContent = 'Revoir les flashcards';
            document.getElementById('results-retry').onclick = function() { start(currentDeck, currentMode); };

            var srExtra2 = document.getElementById('results-sr-extra');
            if (srExtra2) srExtra2.style.display = 'none';
        }

        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('flashcard_complete');
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('flashcard:completed', { score: score, total: total, percent: percent, deck: currentDeck, srMode: srMode, mode: currentMode });
        }
        window.StudFlow.app.showScreen('results');
    }

    // ==================== MODE PICKER UI ====================
    function showModePicker(deck) {
        var level = getUserLevel();
        var autoMode = getAutoMode();
        var labels = { debutant: 'Debutant', intermediaire: 'Intermediaire', avance: 'Avance' };
        var modeDescs = {
            learning: 'Cartes par theme, nouvelles d\'abord',
            mix: '60% revision espacee + 40% decouverte',
            exam: '100% aleatoire, simulation Bac'
        };

        var container = document.getElementById('fc-mode-picker');
        if (!container) {
            // Fallback: start directly with auto mode
            start(deck, 'auto');
            return;
        }

        container.innerHTML = '<div class="fc-mode-picker-content">'
            + '<h3>Choisis ton mode</h3>'
            + '<p class="fc-mode-level">' + (level === 'debutant' ? '\uD83C\uDF31' : level === 'intermediaire' ? '\uD83C\uDF3F' : '\uD83C\uDF33') + ' Niveau : ' + labels[level] + '</p>'
            + '<div class="fc-mode-options">'
            + '<button class="fc-mode-btn' + (autoMode === 'learning' ? ' recommended' : '') + '" data-action="flashcards.startMode" data-param="learning|' + deck + '">'
            + '<span class="fc-mode-icon">\uD83D\uDCDA</span>'
            + '<span class="fc-mode-name">Apprentissage</span>'
            + '<span class="fc-mode-desc">' + modeDescs.learning + '</span>'
            + (autoMode === 'learning' ? '<span class="fc-mode-badge">Recommande</span>' : '')
            + '</button>'
            + '<button class="fc-mode-btn' + (autoMode === 'mix' ? ' recommended' : '') + '" data-action="flashcards.startMode" data-param="mix|' + deck + '">'
            + '<span class="fc-mode-icon">\uD83D\uDD00</span>'
            + '<span class="fc-mode-name">Mix</span>'
            + '<span class="fc-mode-desc">' + modeDescs.mix + '</span>'
            + (autoMode === 'mix' ? '<span class="fc-mode-badge">Recommande</span>' : '')
            + '</button>'
            + '<button class="fc-mode-btn' + (autoMode === 'exam' ? ' recommended' : '') + '" data-action="flashcards.startMode" data-param="exam|' + deck + '">'
            + '<span class="fc-mode-icon">\uD83C\uDFAF</span>'
            + '<span class="fc-mode-name">Examen</span>'
            + '<span class="fc-mode-desc">' + modeDescs.exam + '</span>'
            + (autoMode === 'exam' ? '<span class="fc-mode-badge">Recommande</span>' : '')
            + '</button>'
            + '</div>'
            + '<button class="fc-mode-auto-btn" data-action="flashcards.startMode" data-param="auto|' + deck + '">'
            + 'Mode auto (adapte a ton niveau) \u2192'
            + '</button>'
            + '</div>';

        container.style.display = 'flex';
    }

    function startMode(param) {
        var parts = param.split('|');
        var mode = parts[0];
        var deck = parts[1] || 'all';

        var picker = document.getElementById('fc-mode-picker');
        if (picker) picker.style.display = 'none';

        start(deck, mode);
    }

    // ==================== CREATION MANUELLE ====================
    function showCreateForm() {
        const container = document.getElementById('flashcard-create-form');
        if (container) {
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
        }
    }

    function createCard() {
        const escape = window.StudFlow.app.escapeText;
        const question = escape(document.getElementById('new-fc-question').value.trim());
        const answer = escape(document.getElementById('new-fc-answer').value.trim());
        const deck = escape(document.getElementById('new-fc-deck') ? document.getElementById('new-fc-deck').value.trim() : 'Mes cartes');

        if (!question || !answer) return;

        const state = window.StudFlow.app.getState();
        if (!state.customFlashcards) state.customFlashcards = [];
        state.customFlashcards.push({ question, answer, mastered: false, deck });
        window.StudFlow.storage.saveAppState(state);

        document.getElementById('new-fc-question').value = '';
        document.getElementById('new-fc-answer').value = '';

        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('create_flashcard');

        // Show confirmation
        const btn = document.getElementById('create-fc-btn');
        const oldText = btn.textContent;
        btn.textContent = 'Flashcard ajoutee !';
        btn.style.background = 'var(--green)';
        setTimeout(() => {
            btn.textContent = oldText;
            btn.style.background = '';
        }, 1500);

        updateCount();
    }

    function deleteCard(index) {
        const state = window.StudFlow.app.getState();
        if (state.customFlashcards && state.customFlashcards[index] !== undefined) {
            state.customFlashcards.splice(index, 1);
            window.StudFlow.storage.saveAppState(state);
            updateCount();
        }
    }

    function updateCount() {
        const state = window.StudFlow.app.getState();
        let subjectTotal = 0;
        if (window.StudFlow.subjects) {
            subjectTotal = window.StudFlow.subjects.getAllFlashcards().length;
        } else if (window.StudFlow.bacfrancais) {
            subjectTotal = window.StudFlow.bacfrancais.getAllFlashcards().length;
        }
        const total = (state.flashcards || []).length +
                      (state.customFlashcards || []).length + subjectTotal;
        const el = document.getElementById('flashcard-count');
        if (el) el.textContent = `${total} cartes`;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.flashcards = {
        start, display, flip, answer, showResults,
        showCreateForm, createCard, deleteCard, updateCount, getAllCards,
        shuffleDeck: shuffleDeck,
        showModePicker: showModePicker,
        startMode: startMode,
        getUserLevel: getUserLevel
    };
})();
