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

    // ==================== ADAPTIVE DIFFICULTY ====================
    var _streak = 0;          // réussites consécutives
    var _failStreak = 0;      // échecs consécutifs
    var _totalCorrect = 0;
    var _totalAnswered = 0;
    var _adaptiveLevel = 'normal'; // 'easy', 'normal', 'hard'

    function recordAdaptiveAnswer(isCorrect) {
        _totalAnswered++;
        if (isCorrect) {
            _totalCorrect++;
            _streak++;
            _failStreak = 0;
        } else {
            _failStreak++;
            _streak = 0;
        }
        // Adapter le niveau
        if (_streak >= 3) {
            _adaptiveLevel = 'hard';
        } else if (_failStreak >= 2) {
            _adaptiveLevel = 'easy';
        } else {
            _adaptiveLevel = 'normal';
        }
    }

    function getAdaptiveLevel() { return _adaptiveLevel; }
    function resetAdaptive() { _streak = 0; _failStreak = 0; _totalCorrect = 0; _totalAnswered = 0; _adaptiveLevel = 'normal'; }

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

    // Mode confiance : filtre le pool pour ne garder que les cartes connues
    // (SR reps >= 1) et limite a 6 cartes. Pool = deck courant (all, subj-*, ...).
    function buildConfidenceDeck() {
        var sr = window.StudFlow.spacedRepetition;
        if (!sr || !sr.getMasteredCardIds) return [];
        var savedShuffle = shuffledCards;
        shuffledCards = null;
        var pool = getAllCards();
        shuffledCards = savedShuffle;
        if (!pool.length) return [];

        var mastered = sr.getMasteredCardIds();
        var filtered = [];
        for (var i = 0; i < pool.length; i++) {
            var c = pool[i];
            if (!c || !c.question) continue;
            var id = sr.cardId(c.question, c.answer);
            if (mastered[id]) {
                filtered.push({ question: c.question, answer: c.answer, mastered: false });
            }
        }
        for (var j = filtered.length - 1; j > 0; j--) {
            var k = Math.floor(Math.random() * (j + 1));
            var tmp = filtered[j]; filtered[j] = filtered[k]; filtered[k] = tmp;
        }
        return filtered.slice(0, 6);
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

    var currentLevelFilter = null;

    function start(deck, mode, opts) {
        currentDeck = deck || 'all';
        currentIndex = 0;
        score = 0;
        startTime = Date.now();
        shuffledCards = null;
        resetAdaptive();
        if (window.StudFlow.combo) window.StudFlow.combo.startSession();

        // Mode selection
        if (mode) {
            currentMode = mode;
        } else {
            currentMode = 'auto';
        }

        // Level filter (optionnel) : 'facile' | 'moyen' | 'difficile' | null
        currentLevelFilter = (opts && opts.level && opts.level !== 'all') ? opts.level : null;

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

        // Mode confiance : session courte uniquement sur cartes deja connues
        if (currentMode === 'confidence') {
            shuffledCards = buildConfidenceDeck();
            if (!shuffledCards.length) {
                if (window.StudFlow.gamification) {
                    window.StudFlow.gamification.showToast('Fais d\'abord quelques sessions pour debloquer ce mode.', 'xp', '💪');
                }
                return;
            }
            if (window.StudFlow.gamification) {
                setTimeout(function() {
                    window.StudFlow.gamification.showToast('Mode confiance : que des cartes que tu sais deja.', 'xp', '😌');
                }, 500);
            }
        }

        // Build adaptive session from profile + real stats
        try {
            if (currentMode === 'confidence') {
                // deja construit, on court-circuite la logique adaptative
            } else if (!srMode && window.StudFlow.sessionSettings) {
                var profile = window.StudFlow.storage.getUserProfile();
                var allPool = currentMode !== 'auto' && deck !== 'custom' ? buildModeDeck(currentDeck) : getAllCards();
                var realStats = {};
                var sr = window.StudFlow.spacedRepetition;
                if (sr) {
                    realStats.recentAccuracy = sr.getRetentionRate();
                    realStats.streak = window.StudFlow.gamification ? window.StudFlow.gamification.getStats().streak : 0;
                }
                shuffledCards = window.StudFlow.sessionSettings.buildAdaptiveSession(profile, realStats, allPool, null);
                if (!shuffledCards || shuffledCards.length === 0) {
                    shuffledCards = (currentMode !== 'auto' && deck !== 'custom') ? buildModeDeck(currentDeck) : null;
                }
            } else if (!srMode && currentMode !== 'auto' && deck !== 'custom') {
                shuffledCards = buildModeDeck(currentDeck);
            }
        } catch(e) {
            console.error('[flashcards] session build error:', e);
            shuffledCards = null;
        }

        // Applique le filtre de niveau (facile/moyen/difficile) s'il est defini.
        // Post-build, compatible avec tous les modes.
        if (currentLevelFilter && shuffledCards && shuffledCards.length > 0) {
            var filteredByLevel = shuffledCards.filter(function(c) {
                return c && c.level === currentLevelFilter;
            });
            if (filteredByLevel.length > 0) shuffledCards = filteredByLevel;
        }

        // Coach message at session start
        if (window.StudFlow.coachEngine && window.StudFlow.gamification) {
            var p = window.StudFlow.storage.getUserProfile();
            var msg = window.StudFlow.coachEngine.getCoachMessage(p, { moment: 'start' });
            if (msg) window.StudFlow.gamification.showToast(msg, 'xp', '\uD83E\uDDE0');
        }

        // Show/hide Easy button
        var easyBtn = document.getElementById('fc-btn-easy');
        if (easyBtn) easyBtn.style.display = srMode ? '' : 'none';

        // Show mode indicator
        updateModeIndicator();

        if (window.StudFlow.usageLogger) {
            window.StudFlow.usageLogger.log('session_start', { mode: 'flashcards', deck: currentDeck });
        }

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

        // Level badge (affiche seulement si card.level est defini)
        var levelBadge = document.getElementById('fc-level-badge');
        if (!levelBadge && elCard) {
            levelBadge = document.createElement('span');
            levelBadge.id = 'fc-level-badge';
            levelBadge.className = 'fc-level-badge';
            elCard.appendChild(levelBadge);
        }
        if (levelBadge) {
            if (card.level) {
                var lvlLabels = { facile: '🟢 Facile', moyen: '🟡 Moyen', difficile: '🔴 Difficile' };
                levelBadge.textContent = lvlLabels[card.level] || card.level;
                levelBadge.setAttribute('data-level', card.level);
                levelBadge.style.display = '';
            } else {
                levelBadge.style.display = 'none';
            }
        }

        // Pitfalls structures (optionnels, affiches sous la reponse au dos)
        var pitfallsEl = document.getElementById('fc-pitfalls');
        var fcBackFace = elA && elA.parentElement;
        if (!pitfallsEl && fcBackFace) {
            pitfallsEl = document.createElement('div');
            pitfallsEl.id = 'fc-pitfalls';
            pitfallsEl.className = 'fc-pitfalls';
            fcBackFace.appendChild(pitfallsEl);
        }
        if (pitfallsEl) {
            if (card.pitfalls && card.pitfalls.length) {
                var itemsHtml = '';
                for (var pi = 0; pi < card.pitfalls.length; pi++) {
                    itemsHtml += '<li>' + String(card.pitfalls[pi]).replace(/[&<>]/g, function(ch){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[ch];}) + '</li>';
                }
                pitfallsEl.innerHTML = '<div class="fc-pitfalls-title">⚠️ Pieges frequents</div><ul>' + itemsHtml + '</ul>';
                pitfallsEl.style.display = '';
            } else {
                pitfallsEl.style.display = 'none';
            }
        }

        // TTS button
        var ttsBtn = document.getElementById('fc-tts-btn');
        if (!ttsBtn && elQ) {
            ttsBtn = document.createElement('button');
            ttsBtn.id = 'fc-tts-btn';
            ttsBtn.className = 'tts-btn';
            ttsBtn.setAttribute('aria-label', 'Lire a voix haute');
            ttsBtn.textContent = '\uD83D\uDD0A';
            var fcFront = elQ.parentElement;
            if (fcFront) fcFront.insertBefore(ttsBtn, fcFront.firstChild);
        }
        if (ttsBtn) {
            ttsBtn.classList.remove('tts-active');
            ttsBtn.onclick = function() {
                var tts = window.StudFlow.tts;
                if (!tts) return;
                tts.stop();
                var isFlipped = elCard && elCard.classList.contains('flipped');
                var text = isFlipped ? card.answer : card.question;
                var speaking = tts.toggle(text);
                ttsBtn.classList.toggle('tts-active', speaking);
            };
        }
        // TTS auto: read question on display
        var tts = window.StudFlow.tts;
        if (tts && tts.isAutoEnabled && tts.isAutoEnabled()) {
            tts.stop();
            tts.speak(card.question);
        }

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
        // TTS: stop any ongoing speech on flip, user must click button to listen
        var tts = window.StudFlow.tts;
        if (tts) tts.stop();
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
            if (window.StudFlow.combo) window.StudFlow.combo.hit();
            else if (window.StudFlow.sounds) window.StudFlow.sounds.correct();
            if (window.StudFlow.microFeedback) {
                window.StudFlow.microFeedback.success(document.getElementById('flashcard'));
            }
        } else {
            state.streak = 0;
            if (window.StudFlow.combo) window.StudFlow.combo.miss();
            else if (window.StudFlow.sounds) window.StudFlow.sounds.wrong();
            if (window.StudFlow.errorNotebook && card) {
                window.StudFlow.errorNotebook.record({
                    question: card.question,
                    correctAnswer: card.answer,
                    type: 'fc'
                });
            }
        }

        // Incrementer la jauge quotidienne + temps de revision
        if (window.StudFlow.dashboard) {
            if (window.StudFlow.dashboard.incrementDailyGauge) window.StudFlow.dashboard.incrementDailyGauge();
            if (window.StudFlow.dashboard.incrementStudyTime) window.StudFlow.dashboard.incrementStudyTime(30);
        }

        if (window.StudFlow.analytics) window.StudFlow.analytics.track('flashcard_review', { correct: !!knew, mode: currentMode });
        window.StudFlow.app.updateStats();
        window.StudFlow.storage.saveAppState(state);

        // REVANCHE : si l'élève se trompe, réinsérer la carte 3 positions plus loin
        if (!knew && card && !card._revenge) {
            var revengeCard = { question: card.question, answer: card.answer, mastered: false, _revenge: true };
            var insertAt = Math.min(currentIndex + 3, cards.length);
            cards.splice(insertAt, 0, revengeCard);
        }

        currentIndex++;

        // Micro-wins + mid-session coach (at key moments only)
        if (window.StudFlow.gamification && currentIndex < cards.length) {
            var pct = Math.round((currentIndex / cards.length) * 100);
            var rate = currentIndex > 0 ? Math.round((score / currentIndex) * 100) : 0;
            var remaining = cards.length - currentIndex;
            var toast = window.StudFlow.gamification.showToast;
            var coach = window.StudFlow.coachEngine;
            var profile = coach ? window.StudFlow.storage.getUserProfile() : null;

            // Micro-win: first correct answer
            if (knew && score === 1) {
                toast('Bien. Tu es lance(e).', 'xp', '\u2713');
            }
            // Micro-win: 3 items done
            else if (currentIndex === 3 && score >= 2) {
                toast('Bon debut.', 'xp', '\uD83D\uDCAA');
            }
            // Micro-win: 5 items done with good rate
            else if (currentIndex === 5 && rate >= 60) {
                toast('Tu progresses !', 'xp', '\uD83D\uDCAA');
            }
            // Tension positive: 2 items left
            else if (remaining === 2) {
                toast('Encore 2 et c\'est boucle.', 'xp', '\uD83C\uDFAF');
            }
            // Tension positive: last item
            else if (remaining === 1) {
                toast('Derniere carte. Finis fort.', 'xp', '\uD83D\uDD25');
            }
            // Coach at 50% or after difficulty
            else if (coach && (pct >= 50 && pct < 55)) {
                var midMsg = coach.getCoachMessage(profile, { moment: 'during', progress: pct, successRate: rate });
                if (midMsg) toast(midMsg, 'xp', '\uD83D\uDCAC');
            }
            else if (coach && !knew && state.streak === 0 && currentIndex >= 3) {
                var diffMsg = coach.getCoachMessage(profile, { moment: 'during', progress: pct, successRate: rate });
                if (diffMsg) toast(diffMsg, 'xp', '\uD83D\uDCAC');
            }
        }

        if (currentIndex >= cards.length) {
            if (knew) offerOneMore();
            else showResults();
        } else {
            display();
        }
    }

    // Bouton "Encore 1 carte" — propose d'etendre la session apres une bonne
    // derniere reponse. Non bloquant : l'utilisateur peut toujours voir ses
    // resultats.
    function offerOneMore() {
        var existing = document.getElementById('fc-encore-prompt');
        if (existing) existing.remove();

        var overlay = document.createElement('div');
        overlay.id = 'fc-encore-prompt';
        overlay.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);z-index:100;padding:1rem;';
        overlay.innerHTML = ''
          + '<div style="background:var(--bg-elev,#1a1d2e);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.5rem;max-width:360px;width:100%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.5);">'
          +   '<div style="font-size:2rem;margin-bottom:0.5rem;">🎯</div>'
          +   '<h3 style="margin:0 0 0.5rem;font-size:1.1rem;">Bien joue !</h3>'
          +   '<p style="color:var(--text-muted);margin:0 0 1.25rem;font-size:0.9rem;">Tu es dans le flow. Une derniere carte ?</p>'
          +   '<button id="fc-encore-yes" class="new-course-btn" style="width:100%;padding:0.8rem;margin-bottom:0.5rem;font-weight:600;">+ Encore 1 carte</button>'
          +   '<button id="fc-encore-no" style="width:100%;padding:0.6rem;background:none;border:1px solid rgba(255,255,255,0.15);border-radius:10px;color:var(--text-muted);cursor:pointer;">Voir mes resultats</button>'
          + '</div>';
        document.body.appendChild(overlay);

        document.getElementById('fc-encore-yes').onclick = function() {
            overlay.remove();
            if (extendSessionByOne()) display();
            else showResults();
        };
        document.getElementById('fc-encore-no').onclick = function() {
            overlay.remove();
            showResults();
        };
    }

    function extendSessionByOne() {
        if (!shuffledCards) shuffledCards = getAllCards().slice();
        var saved = shuffledCards;
        shuffledCards = null;
        var freshPool = getAllCards();
        shuffledCards = saved;
        if (!freshPool.length) return false;
        if (freshPool.length === 1 && freshPool[0] && freshPool[0].question === 'Pas encore de flashcards') return false;
        var pick = freshPool[Math.floor(Math.random() * freshPool.length)];
        shuffledCards.push({ question: pick.question, answer: pick.answer, mastered: false });
        return true;
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
        if (rTitle) rTitle.textContent = endMsg || (percent >= 70 ? 'Excellent\u00A0!' : 'Continue comme \u00E7a\u00A0!');

        // Social proof (percentile simulé)
        var streak = gamStats ? (gamStats.streak || 0) : 0;
        var percentile = Math.min(95, Math.max(10, 20 + (streak * 6) + Math.round(percent * 0.5)));
        var socialEl = document.getElementById('results-social');
        if (!socialEl) {
            socialEl = document.createElement('div');
            socialEl.id = 'results-social';
            socialEl.className = 'results-social';
            var rScoreEl = document.getElementById('results-score');
            if (rScoreEl && rScoreEl.parentNode) rScoreEl.parentNode.appendChild(socialEl);
        }
        if (socialEl) {
            socialEl.textContent = 'Top ' + percentile + '% des \u00E9l\u00E8ves cette semaine';
            socialEl.style.display = '';
        }

        var gamStats = window.StudFlow.gamification ? window.StudFlow.gamification.getStats() : {};

        // Contextual sub-message
        var subMsg = '';
        if (total <= 5) subMsg = 'Meme courte, cette session compte.';
        else if (percent >= 80) subMsg = 'Tu construis quelque chose de solide.';
        else if (elapsed < 120) subMsg = 'Rapide et efficace.';
        else subMsg = 'Aujourd\'hui c\'est fait. Demain, on continue.';
        var rSub = document.getElementById('results-sub');
        if (rSub) rSub.textContent = subMsg;
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

        // Record personnel
        var subjectId = currentDeck.indexOf('subj-') === 0 ? currentDeck.split('-')[1] : null;
        if (subjectId && window.StudFlow.studentProfile) {
            var recordResult = window.StudFlow.studentProfile.recordSessionScore(subjectId, score, total);
            if (recordResult) {
                var recordEl = document.getElementById('results-record');
                if (!recordEl) {
                    recordEl = document.createElement('div');
                    recordEl.id = 'results-record';
                    recordEl.className = 'results-record';
                    var levelEl2 = document.getElementById('results-level');
                    if (levelEl2 && levelEl2.parentNode) levelEl2.parentNode.insertBefore(recordEl, levelEl2.nextSibling);
                }
                if (recordEl) {
                    if (recordResult.isNewRecord) {
                        recordEl.innerHTML = '<span class="record-new">\uD83C\uDFC6 Nouveau record\u00A0! ' + recordResult.score + '% (ancien\u00A0: ' + recordResult.previousBest + '%)</span>';
                        if (window.StudFlow.sounds) window.StudFlow.sounds.levelUp();
                    } else {
                        recordEl.innerHTML = '<span class="record-current">\uD83C\uDFC6 Record\u00A0: ' + recordResult.previousBest + '%</span>';
                    }
                    recordEl.style.display = '';
                }
            }
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

        // "Encore 1 carte" button
        var encoreBtn = document.getElementById('results-encore');
        if (encoreBtn) {
            var allCards = getAllCards();
            if (allCards.length > 0) {
                encoreBtn.style.display = '';
                encoreBtn.onclick = function() {
                    // Pick a random card and show it
                    currentIndex = Math.floor(Math.random() * allCards.length);
                    score = 0;
                    startTime = Date.now();
                    window.StudFlow.app.showScreen('flashcards');
                    display();
                };
            } else {
                encoreBtn.style.display = 'none';
            }
        }

        // Streak display
        var streakEl = document.getElementById('results-streak');
        var gamStats2 = window.StudFlow.gamification ? window.StudFlow.gamification.getStats() : {};
        if (streakEl && gamStats2.streak > 1) {
            streakEl.textContent = '\uD83D\uDD25 ' + gamStats2.streak + ' jours de suite';
            streakEl.style.display = '';
        } else if (streakEl) {
            streakEl.style.display = 'none';
        }

        if (window.StudFlow.combo) window.StudFlow.combo.endSession();
        if (window.StudFlow.gamification) window.StudFlow.gamification.addXP('flashcard_complete');
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('flashcard:completed', { score: score, total: total, percent: percent, deck: currentDeck, srMode: srMode, mode: currentMode });
        }

        // Suggest breathing after difficult session (score < 40% and stressed profile)
        if (percent < 40 && window.StudFlow.breathing) {
            var prof = window.StudFlow.storage.getUserProfile();
            if (prof && prof.behavior && prof.behavior.stressLevel === 'high') {
                setTimeout(function() { window.StudFlow.breathing.suggest('post_session'); }, 1500);
            }
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

    // ==================== SIMPLIFY (Je ne comprends pas) ====================
    function simplify() {
        var box = document.getElementById('fc-simplify-box');
        var btn = document.getElementById('fc-simplify-btn');
        if (!box) return;

        // Toggle
        if (box.style.display !== 'none') {
            box.style.display = 'none';
            if (btn) {
                btn.textContent = '\uD83D\uDCA1 Explique-moi simplement';
                btn.classList.remove('fc-simplify-btn--active');
            }
            return;
        }

        var cards = getAllCards();
        var card = cards[currentIndex];
        if (!card) return;

        var answer = (card.answer || '').replace(/<[^>]+>/g, '');

        // ===== EXTRAIRE TOUTES LES SECTIONS =====

        // 1. Reponse simple (En gros / premiere phrase)
        var reponse = '';
        var egMatch = answer.match(/En gros\s*[:]\s*([^.]+\.)/i);
        if (egMatch) {
            reponse = egMatch[1].trim();
        } else {
            reponse = answer.split(/\.\s/)[0] + '.';
            if (reponse.length > 120) reponse = reponse.substring(0, 117) + '...';
        }

        // 2. Points cles (numeros 1) 2) 3) ou tirets)
        var points = [];
        var numSteps = answer.match(/\d\)\s*[^.]+\./g);
        if (!numSteps) numSteps = answer.match(/\d\)\s*[^)]+(?=\d\)|$)/g);
        if (numSteps && numSteps.length >= 2) {
            for (var s = 0; s < Math.min(numSteps.length, 3); s++) {
                var pt = numSteps[s].trim();
                if (pt.length > 80) pt = pt.substring(0, 77) + '...';
                points.push(pt);
            }
        } else {
            // Extraire des phrases courtes comme points
            var sentences = answer.split(/\.\s+/);
            for (var p = 1; p < Math.min(sentences.length, 4); p++) {
                var sent = sentences[p].trim();
                if (sent.length > 15 && sent.length < 100 && sent !== reponse.replace(/\.$/, '')) {
                    points.push(sent + '.');
                    if (points.length >= 3) break;
                }
            }
        }

        // 3. Exemple concret
        var exemple = '';
        var exMatch = answer.match(/Exemple\s*(?:concret\s*)?[:]\s*([^.]+\.)/i);
        if (!exMatch) exMatch = answer.match(/Exemple\s*[:]\s*([^.]+\.)/i);
        if (!exMatch) exMatch = answer.match(/Ex\s*[:]\s*([^.]+\.)/i);
        if (exMatch) {
            exemple = exMatch[1].trim();
        } else {
            // Chercher une phrase avec "comme" ou "par exemple"
            var commeMatch = answer.match(/(?:comme|par exemple)[^.]+\./i);
            if (commeMatch) exemple = commeMatch[0].trim();
        }

        // 4. Pourquoi
        var pourquoi = '';
        var pqMatch = answer.match(/Pourquoi[^:]*[:]\s*([^.]+\.)/i);
        if (pqMatch) pourquoi = pqMatch[1].trim();
        // Chercher aussi "Astuce Bac :"
        if (!pourquoi) {
            var bacMatch = answer.match(/Astuce Bac\s*[:]\s*([^.]+\.)/i);
            if (bacMatch) pourquoi = bacMatch[1].trim();
        }

        // 5. Mots difficiles
        var motsDiff = '';
        var mdMatch = answer.match(/Mots?\s*difficiles?\s*[:]\s*(.+)/i);
        if (mdMatch) motsDiff = mdMatch[1].trim();

        // ===== CONSTRUIRE LE HTML =====
        var html = '<div class="fc-simple-header">\uD83D\uDCA1 Explication simplifi\u00E9e</div>'
            + '<div class="fc-simple-content">';

        // Reponse
        html += '<div class="fc-simple-section">'
            + '<span class="fc-simple-label">\uD83D\uDCCC R\u00E9ponse</span>'
            + '<p class="fc-simple-text fc-simple-main">' + escapeSimple(reponse) + '</p>'
            + '</div>';

        // Points cles
        if (points.length > 0) {
            html += '<div class="fc-simple-section">'
                + '<span class="fc-simple-label">\uD83D\uDCCB En ' + points.length + ' points</span>';
            for (var i = 0; i < points.length; i++) {
                html += '<p class="fc-simple-step">' + escapeSimple(points[i]) + '</p>';
            }
            html += '</div>';
        }

        // Exemple
        if (exemple) {
            html += '<div class="fc-simple-section">'
                + '<span class="fc-simple-label">\uD83D\uDCA1 Exemple concret</span>'
                + '<p class="fc-simple-text">' + escapeSimple(exemple) + '</p>'
                + '</div>';
        }

        // Pourquoi
        if (pourquoi) {
            html += '<div class="fc-simple-section">'
                + '<span class="fc-simple-label">\uD83C\uDFAF Pourquoi c\u2019est utile</span>'
                + '<p class="fc-simple-text">' + escapeSimple(pourquoi) + '</p>'
                + '</div>';
        }

        // Mots difficiles
        if (motsDiff) {
            html += '<div class="fc-simple-section">'
                + '<span class="fc-simple-label">\uD83D\uDD24 Mots difficiles</span>'
                + '<p class="fc-simple-text fc-simple-vocab">' + escapeSimple(motsDiff) + '</p>'
                + '</div>';
        }

        html += '</div>';

        // Footer
        html += '<div class="fc-simple-footer">C\u2019est plus clair maintenant\u00A0?</div>';

        box.innerHTML = html;
        box.style.display = '';
        if (btn) {
            btn.textContent = '\u2715 Fermer';
            btn.classList.add('fc-simplify-btn--active');
        }
        // Enregistrer l'utilisation du mode clair dans le profil
        var subjectId = currentDeck.indexOf('subj-') === 0 ? currentDeck.split('-')[1] : null;
        if (window.StudFlow.studentProfile) {
            window.StudFlow.studentProfile.recordModeClairUsed(subjectId);
        }
    }

    function escapeSimple(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // ==================== MICRO EXPLAIN ====================
    function microExplain() {
        var box = document.getElementById('fc-micro-box');
        var btn = document.getElementById('fc-micro-btn');
        if (!box) return;
        if (box.style.display !== 'none') {
            box.style.display = 'none';
            if (btn) { btn.textContent = '\u26A1 Explique-moi vite'; btn.classList.remove('micro-explain-btn--active'); }
            return;
        }
        var me = window.StudFlow.microExplain;
        if (!me) return;
        var cards = getAllCards();
        var card = cards[currentIndex];
        if (!card) return;
        var data = me.build(card);
        box.innerHTML = me.renderHTML(data);
        box.style.display = '';
        if (btn) { btn.textContent = '\u2715 Fermer'; btn.classList.add('micro-explain-btn--active'); }
    }

    // Reset simplify box + micro box + build interactive QCM when card changes
    var _origDisplay = display;
    display = function() {
        // Reset simplify
        var box = document.getElementById('fc-simplify-box');
        var btn = document.getElementById('fc-simplify-btn');
        if (box) box.style.display = 'none';
        if (btn) {
            btn.textContent = '\uD83D\uDCA1 Explique-moi simplement';
            btn.classList.remove('fc-simplify-btn--active');
        }
        // Reset micro explain
        var mBox = document.getElementById('fc-micro-box');
        var mBtn = document.getElementById('fc-micro-btn');
        if (mBox) mBox.style.display = 'none';
        if (mBtn) { mBtn.textContent = '\u26A1 Explique-moi vite'; mBtn.classList.remove('micro-explain-btn--active'); }
        // Reset interactive
        var interEl = document.getElementById('fc-interactive');
        var feedbackEl = document.getElementById('fc-inter-feedback');
        if (interEl) interEl.style.display = 'none';
        if (feedbackEl) feedbackEl.style.display = 'none';

        _origDisplay();

        // Build QCM after card is displayed
        buildInteractiveQCM();
    };

    // ==================== INTERACTIVE QCM ====================
    function extractShortFact(answerText) {
        // Extraire un fait COURT de la reponse
        var clean = (answerText || '').replace(/<[^>]+>/g, '');
        // Chercher "En gros :"
        var eg = clean.match(/En gros\s*:\s*([^.]+\.)/i);
        if (eg) return eg[1].trim();
        // Sinon premiere phrase
        var first = clean.split(/\.\s/)[0];
        if (first.length > 80) first = first.substring(0, 77) + '...';
        return first + '.';
    }

    function buildInteractiveQCM() {
        var interEl = document.getElementById('fc-interactive');
        var choicesEl = document.getElementById('fc-inter-choices');
        var hintEl = document.querySelector('.fc-inter-hint');
        if (!interEl || !choicesEl) return;

        var cards = getAllCards();
        var card = cards[currentIndex];
        if (!card || !card.answer) return;
        if (cards.length < 3) return; // pas assez de cartes

        var correctFact = extractShortFact(card.answer);

        // Generer 2 faux choix du MEME deck (pas aleatoire)
        var wrongFacts = [];
        var usedIdx = {};
        usedIdx[currentIndex] = true;
        var attempts = 0;
        while (wrongFacts.length < 2 && attempts < 30) {
            // Prendre une carte PROCHE (meme zone du deck = meme sujet)
            var range = Math.min(cards.length, 15); // chercher dans les 15 cartes autour
            var offset = Math.floor(Math.random() * range) - Math.floor(range / 2);
            var idx = (currentIndex + offset + cards.length) % cards.length;
            if (usedIdx[idx]) { attempts++; continue; }
            usedIdx[idx] = true;

            var fact = extractShortFact(cards[idx].answer);
            // Verifier que c'est assez different de la bonne reponse
            if (fact.length > 10 && fact !== correctFact && fact.substring(0, 20) !== correctFact.substring(0, 20)) {
                wrongFacts.push(fact);
            }
            attempts++;
        }
        if (wrongFacts.length < 2) return;

        // Construire les choix selon le niveau adaptatif
        var choices = [];
        if (_adaptiveLevel === 'hard' && wrongFacts.length >= 1) {
            // Mode difficile : seulement 2 choix (plus dur a deviner)
            choices = [
                { text: correctFact, correct: true },
                { text: wrongFacts[0], correct: false }
            ];
        } else {
            // Mode normal/facile : 3 choix
            choices = [
                { text: correctFact, correct: true },
                { text: wrongFacts[0], correct: false },
                { text: wrongFacts[1], correct: false }
            ];
        }
        for (var i = choices.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = choices[i]; choices[i] = choices[j]; choices[j] = tmp;
        }

        // Afficher
        var html = '';
        for (var c = 0; c < choices.length; c++) {
            var letter = ['A', 'B', 'C'][c];
            html += '<button class="fc-inter-choice" data-correct="' + (choices[c].correct ? '1' : '0') + '">'
                + '<span class="fc-inter-letter">' + letter + '</span> '
                + escapeSimple(choices[c].text)
                + '</button>';
        }
        choicesEl.innerHTML = html;
        interEl.style.display = '';
        if (hintEl) hintEl.style.display = '';

        // Brancher les clics
        var btns = choicesEl.querySelectorAll('.fc-inter-choice');
        for (var b = 0; b < btns.length; b++) {
            btns[b].addEventListener('click', handleInteractiveChoice);
        }
    }

    function handleInteractiveChoice(e) {
        var btn = e.currentTarget;
        var isCorrect = btn.getAttribute('data-correct') === '1';
        var feedbackEl = document.getElementById('fc-inter-feedback');
        var choicesEl = document.getElementById('fc-inter-choices');
        var hintEl = document.querySelector('.fc-inter-hint');

        // Desactiver tous les boutons
        var allBtns = choicesEl.querySelectorAll('.fc-inter-choice');
        for (var i = 0; i < allBtns.length; i++) {
            allBtns[i].disabled = true;
            if (allBtns[i].getAttribute('data-correct') === '1') {
                allBtns[i].classList.add('fc-inter-correct');
            }
        }

        // Cacher le hint
        if (hintEl) hintEl.style.display = 'none';

        // Message adaptatif selon le profil par matière
        var encouragement;
        var subjectIdLocal = currentDeck.indexOf('subj-') === 0 ? currentDeck.split('-')[1] : null;
        if (window.StudFlow.studentProfile) {
            encouragement = window.StudFlow.studentProfile.getAdaptiveMessage(subjectIdLocal);
        } else {
            var defaultMsgs = [
                '\uD83D\uDCAA Continue comme \u00E7a\u00A0!',
                '\uD83D\uDC4D Tu progresses\u00A0!',
                '\uD83D\uDD25 Tu es en feu\u00A0!'
            ];
            encouragement = defaultMsgs[Math.floor(Math.random() * defaultMsgs.length)];
        }

        // Cartes restantes
        var cards = getAllCards();
        var remaining = cards.length - currentIndex - 1;
        var remainingText = remaining > 0
            ? 'Encore ' + remaining + ' carte' + (remaining > 1 ? 's' : '')
            : 'Derni\u00E8re carte\u00A0!';

        // Son + vibration
        if (window.StudFlow.sounds) {
            if (isCorrect) {
                if (_streak >= 2) {
                    window.StudFlow.sounds.combo(); // arpege si streak
                } else {
                    window.StudFlow.sounds.correct(); // ding simple
                }
            } else {
                window.StudFlow.sounds.wrong(); // buzz
            }
        }

        // Enregistrer la reponse pour l'adaptation locale
        recordAdaptiveAnswer(isCorrect);

        // Enregistrer dans le profil permanent (par matière)
        var cards = getAllCards();
        var card = cards[currentIndex];
        var subjectId = currentDeck.indexOf('subj-') === 0 ? currentDeck.split('-')[1] : null;
        if (window.StudFlow.studentProfile && card) {
            window.StudFlow.studentProfile.recordAnswer(subjectId, card.question, isCorrect, card.answer);
        }

        if (isCorrect) {
            btn.classList.add('fc-inter-correct');
            var xpAmount = _adaptiveLevel === 'hard' ? 15 : 10;
            // UN SEUL feedback : résultat + XP + compteur
            feedbackEl.innerHTML = '<div class="fc-inter-win">'
                + '<strong>\u2705 Bien jou\u00E9\u00A0!</strong>'
                + '<span class="fc-xp-badge">+' + xpAmount + ' XP</span>'
                + '<p class="fc-inter-remaining">' + remainingText + '</p>'
                + '</div>';
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.addXP('flashcard_correct');
            }
        } else {
            btn.classList.add('fc-inter-wrong');
            // UN SEUL feedback : résultat + instruction + compteur
            feedbackEl.innerHTML = '<div class="fc-inter-lose">'
                + '<strong>\u274C Presque\u00A0!</strong>'
                + '<p>Retourne la carte \uD83D\uDC47</p>'
                + '<p class="fc-inter-remaining">' + remainingText + '</p>'
                + '</div>';

            // Si 2+ echecs → auto mode clair
            if (_failStreak >= 2) {
                setTimeout(function() {
                    var flashcard = document.getElementById('flashcard');
                    if (flashcard && !flashcard.classList.contains('flipped')) {
                        flashcard.classList.add('flipped');
                    }
                    setTimeout(function() { simplify(); }, 600);
                }, 800);
            }
        }
        feedbackEl.style.display = '';

    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.flashcards = {
        start, display, flip, answer, showResults,
        showCreateForm, createCard, deleteCard, updateCount, getAllCards,
        shuffleDeck: shuffleDeck,
        showModePicker: showModePicker,
        startMode: startMode,
        getUserLevel: getUserLevel,
        simplify: simplify,
        microExplain: microExplain
    };
})();
