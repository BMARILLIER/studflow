// flashcards.js — Logique flashcards + creation manuelle
(function() {
    let currentIndex = 0;
    let score = 0;
    let startTime = null;
    let currentDeck = 'all'; // 'all', 'custom', 'bac-dissertation', etc.
    let srMode = false;
    let srCards = [];
    let shuffledCards = null;

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

    function shuffleDeck() {
        shuffledCards = shuffle(getAllCards());
        currentIndex = 0;
        display();
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.showToast('Cartes melangees !', 'xp', '🔀');
        }
    }

    function start(deck) {
        currentDeck = deck || 'all';
        currentIndex = 0;
        score = 0;
        startTime = Date.now();
        shuffledCards = null;

        // SR mode handling
        if (deck === 'sr' && window.StudFlow.spacedRepetition) {
            srMode = true;
            srCards = window.StudFlow.spacedRepetition.buildSession(20);
            if (srCards.length === 0) {
                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.showToast('Aucune carte a reviser ! Reviens demain.', 'xp', '🧠');
                }
                return;
            }
        } else {
            srMode = false;
            srCards = [];
        }

        // Show/hide Easy button
        var easyBtn = document.getElementById('fc-btn-easy');
        if (easyBtn) easyBtn.style.display = srMode ? '' : 'none';

        window.StudFlow.app.showScreen('flashcard');
        display();
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
        if (elQ) elQ.textContent = card.question;
        if (elA) elA.textContent = card.answer;
        if (elP) elP.textContent = `${currentIndex + 1}/${cards.length}`;
        var fcPct = Math.round(((currentIndex + 1) / cards.length) * 100);
        if (elBar) {
            elBar.style.width = fcPct + '%';
            var fcBarParent = elBar.parentElement;
            if (fcBarParent) fcBarParent.setAttribute('aria-valuenow', fcPct);
        }
        if (elScore) elScore.textContent = `${score} ✓`;
        if (elCard) elCard.classList.remove('flipped');
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

        // 'easy' is truthy → treat as correct for score
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

        if (window.StudFlow.analytics) window.StudFlow.analytics.track('flashcard_review', { correct: !!knew });
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
        if (rIcon) rIcon.textContent = percent >= 70 ? '🎉' : '💪';
        if (rTitle) rTitle.textContent = percent >= 70 ? 'Excellent !' : 'Continue comme ca !';
        if (rScore) rScore.textContent = `${percent}%`;
        if (rCorrect) rCorrect.textContent = score;
        if (rWrong) rWrong.textContent = total - score;
        if (rTime) rTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
            document.getElementById('results-retry').onclick = function() { start(currentDeck); };

            var srExtra2 = document.getElementById('results-sr-extra');
            if (srExtra2) srExtra2.style.display = 'none';
        }

        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('flashcard_complete');
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('flashcard:completed', { score: score, total: total, percent: percent, deck: currentDeck, srMode: srMode });
        }
        window.StudFlow.app.showScreen('results');
    }

    // Creation manuelle
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
        shuffleDeck: shuffleDeck
    };
})();
