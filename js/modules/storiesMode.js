// storiesMode.js — TikTok-style swipe flashcard revision (Stories mode)
(function() {

    const SESSION_MAX = 15;
    const TIMER_DURATION = 30; // seconds per card

    let cards = [];
    let currentIndex = 0;
    let knewCount = 0;
    let isFlipped = false;
    let timerInterval = null;
    let timerRemaining = TIMER_DURATION;
    let timerPaused = false;
    let touchStartY = 0;
    let touchStartX = 0;
    let isSwiping = false;

    // ==================== HELPERS ====================
    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
        }
        return a;
    }

    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ==================== TIMER ====================
    function startTimer() {
        clearTimer();
        timerRemaining = TIMER_DURATION;
        timerPaused = false;
        updateTimerBar();
        timerInterval = setInterval(function() {
            if (timerPaused) return;
            timerRemaining -= 0.1;
            if (timerRemaining <= 0) {
                timerRemaining = 0;
                updateTimerBar();
                // Auto-advance as "didn't know"
                handleAnswer(false);
                return;
            }
            updateTimerBar();
        }, 100);
    }

    function clearTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    function toggleTimer() {
        timerPaused = !timerPaused;
        const bar = document.querySelector('.stories-timer-bar');
        if (bar) {
            bar.classList.toggle('paused', timerPaused);
        }
    }

    function updateTimerBar() {
        const fill = document.querySelector('.stories-timer-fill');
        if (fill) {
            const pct = Math.max(0, (timerRemaining / TIMER_DURATION) * 100);
            fill.style.width = pct + '%';
            // Color shifts from accent to red as time runs out
            if (pct < 20) {
                fill.style.background = '#ef4444';
            } else if (pct < 50) {
                fill.style.background = '#FBBF24';
            } else {
                fill.style.background = 'var(--accent)';
            }
        }
    }

    // ==================== SHOW / HIDE ====================
    function show() {
        // Get all flashcards
        let allCards = [];
        if (window.StudFlow.flashcards && window.StudFlow.flashcards.getAllCards) {
            allCards = window.StudFlow.flashcards.getAllCards();
        }

        if (!allCards || allCards.length === 0) {
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast(
                    'Pas encore de flashcards ! Importe un PDF ou cree-en.', 'info', '📚'
                );
            }
            return;
        }

        // Shuffle and limit
        cards = shuffle(allCards).slice(0, SESSION_MAX);
        currentIndex = 0;
        knewCount = 0;
        isFlipped = false;

        // Hide header and tab-bar
        const header = document.querySelector('header');
        const tabBar = document.getElementById('tab-bar');
        if (header) header.style.display = 'none';
        if (tabBar) tabBar.style.display = 'none';

        // Show stories screen
        window.StudFlow.app.showScreen('stories');

        renderOverlay();
        startTimer();
        attachTouchListeners();
    }

    function exit() {
        clearTimer();
        removeTouchListeners();

        // Remove overlay
        const overlay = document.querySelector('.stories-overlay');
        if (overlay) overlay.remove();

        // Show header and tab-bar again
        const header = document.querySelector('header');
        const tabBar = document.getElementById('tab-bar');
        if (header) header.style.display = '';
        if (tabBar) tabBar.style.display = '';

        // Go back to dashboard
        window.StudFlow.app.showScreen('dashboard');
    }

    // ==================== RENDER ====================
    function renderOverlay() {
        // Remove old overlay if any
        const old = document.querySelector('.stories-overlay');
        if (old) old.remove();

        const overlay = document.createElement('div');
        overlay.className = 'stories-overlay';
        overlay.innerHTML = buildOverlayHTML();
        document.body.appendChild(overlay);

        // Attach event listeners
        attachOverlayEvents(overlay);
    }

    function buildOverlayHTML() {
        const card = cards[currentIndex];
        const total = cards.length;
        const num = currentIndex + 1;

        return ''
            + '<div class="stories-timer-bar" id="stories-timer-bar">'
            + '  <div class="stories-timer-fill"></div>'
            + '</div>'
            + '<button class="stories-close-btn" id="stories-close-btn" aria-label="Fermer">&times;</button>'
            + '<div class="stories-counter">' + num + '/' + total + '</div>'
            + '<div class="stories-card-wrap">'
            + '  <div class="stories-card" id="stories-card">'
            + '    <div class="stories-card-front">'
            + '      <div class="stories-card-label">Question</div>'
            + '      <div class="stories-card-text">' + escapeHTML(card.question) + '</div>'
            + '      <div class="stories-tap-hint">Touche pour retourner</div>'
            + '    </div>'
            + '    <div class="stories-card-back">'
            + '      <div class="stories-card-label">Reponse</div>'
            + '      <div class="stories-card-text">' + escapeHTML(card.answer) + '</div>'
            + '    </div>'
            + '  </div>'
            + '</div>'
            + '<div class="stories-swipe-hint">Swipe ↑ je sais · Swipe ↓ a revoir</div>'
            + '<div class="stories-actions">'
            + '  <button class="stories-btn stories-btn-fail" id="stories-btn-fail">A revoir ↓</button>'
            + '  <button class="stories-btn stories-btn-success" id="stories-btn-success">Je sais ↑</button>'
            + '</div>';
    }

    function updateCard() {
        if (currentIndex >= cards.length) {
            showSummary();
            return;
        }

        const card = cards[currentIndex];
        const overlay = document.querySelector('.stories-overlay');
        if (!overlay) return;

        // Update counter
        const counter = overlay.querySelector('.stories-counter');
        if (counter) counter.textContent = (currentIndex + 1) + '/' + cards.length;

        // Update card content with slide-in animation
        const cardEl = overlay.querySelector('#stories-card');
        if (cardEl) {
            cardEl.classList.remove('flipped');
            isFlipped = false;

            const front = cardEl.querySelector('.stories-card-front .stories-card-text');
            const back = cardEl.querySelector('.stories-card-back .stories-card-text');
            if (front) front.textContent = card.question;
            if (back) back.textContent = card.answer;

            // Trigger slide-in
            cardEl.classList.remove('slide-in');
            void cardEl.offsetWidth; // force reflow
            cardEl.classList.add('slide-in');
        }

        startTimer();
    }

    function attachOverlayEvents(overlay) {
        // Close button
        const closeBtn = overlay.querySelector('#stories-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                exit();
            });
        }

        // Timer bar click to pause/resume
        const timerBar = overlay.querySelector('#stories-timer-bar');
        if (timerBar) {
            timerBar.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleTimer();
            });
        }

        // Card flip
        const cardEl = overlay.querySelector('#stories-card');
        if (cardEl) {
            cardEl.addEventListener('click', function(e) {
                e.stopPropagation();
                flipCard();
            });
        }

        // Action buttons
        const btnSuccess = overlay.querySelector('#stories-btn-success');
        const btnFail = overlay.querySelector('#stories-btn-fail');
        if (btnSuccess) {
            btnSuccess.addEventListener('click', function(e) {
                e.stopPropagation();
                handleAnswer(true);
            });
        }
        if (btnFail) {
            btnFail.addEventListener('click', function(e) {
                e.stopPropagation();
                handleAnswer(false);
            });
        }
    }

    // ==================== CARD ACTIONS ====================
    function flipCard() {
        const cardEl = document.querySelector('#stories-card');
        if (!cardEl) return;
        isFlipped = !isFlipped;
        cardEl.classList.toggle('flipped', isFlipped);
    }

    function handleAnswer(knew) {
        clearTimer();

        if (knew) {
            knewCount++;
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.addXP('flashcard_correct');
            }
        }

        // Animate card out
        const cardEl = document.querySelector('#stories-card');
        if (cardEl) {
            const animClass = knew ? 'slide-out-up' : 'slide-out-down';
            cardEl.classList.add(animClass);

            setTimeout(function() {
                if (cardEl) cardEl.classList.remove(animClass, 'slide-in');
                currentIndex++;
                isFlipped = false;
                updateCard();
            }, 300);
        } else {
            currentIndex++;
            isFlipped = false;
            updateCard();
        }
    }

    // ==================== TOUCH GESTURES ====================
    function onTouchStart(e) {
        const overlay = document.querySelector('.stories-overlay');
        if (!overlay) return;
        touchStartY = e.touches[0].clientY;
        touchStartX = e.touches[0].clientX;
        isSwiping = false;
    }

    function onTouchMove(e) {
        const overlay = document.querySelector('.stories-overlay');
        if (!overlay) return;
        const dy = e.touches[0].clientY - touchStartY;
        const dx = e.touches[0].clientX - touchStartX;

        // Only consider vertical swipes (dy > dx)
        if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 20) {
            isSwiping = true;
            e.preventDefault();

            // Visual feedback: move card slightly
            const cardEl = document.querySelector('#stories-card');
            if (cardEl) {
                const translateY = Math.max(-80, Math.min(80, dy * 0.4));
                const opacity = 1 - Math.abs(translateY) / 200;
                cardEl.style.transform = 'translateY(' + translateY + 'px)';
                cardEl.style.opacity = opacity;
            }
        }
    }

    function onTouchEnd(e) {
        const overlay = document.querySelector('.stories-overlay');
        if (!overlay) return;

        const cardEl = document.querySelector('#stories-card');
        if (cardEl) {
            cardEl.style.transform = '';
            cardEl.style.opacity = '';
        }

        if (!isSwiping) return;

        const dy = e.changedTouches[0].clientY - touchStartY;
        const THRESHOLD = 80;

        if (dy < -THRESHOLD) {
            // Swipe up = knew it
            handleAnswer(true);
        } else if (dy > THRESHOLD) {
            // Swipe down = didn't know
            handleAnswer(false);
        }

        isSwiping = false;
    }

    function attachTouchListeners() {
        document.addEventListener('touchstart', onTouchStart, { passive: true });
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', onTouchEnd, { passive: true });
    }

    function removeTouchListeners() {
        document.removeEventListener('touchstart', onTouchStart);
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
    }

    // ==================== SUMMARY ====================
    function showSummary() {
        clearTimer();

        const total = cards.length;
        const pct = total > 0 ? Math.round((knewCount / total) * 100) : 0;
        const emoji = pct === 100 ? '🎉' : pct >= 70 ? '👏' : pct >= 40 ? '💪' : '📖';
        const msg = pct === 100 ? 'Parfait !' : pct >= 70 ? 'Bien joue !' : pct >= 40 ? 'Continue !' : 'Revise encore !';
        const xpEarned = knewCount * 5 + 15; // flashcard_correct * knew + flashcard_complete

        // Award completion XP
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('flashcard_complete');
        }

        // Emit event
        const stats = {
            knew: knewCount,
            total: total,
            percent: pct
        };
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('stories:completed', stats);
        }

        const overlay = document.querySelector('.stories-overlay');
        if (!overlay) return;

        overlay.innerHTML = ''
            + '<button class="stories-close-btn" id="stories-close-btn" aria-label="Fermer">&times;</button>'
            + '<div class="stories-summary">'
            + '  <div class="stories-summary-emoji">' + emoji + '</div>'
            + '  <div class="stories-summary-title">' + msg + '</div>'
            + '  <div class="stories-summary-score">' + knewCount + '/' + total + ' cartes maitrisees</div>'
            + '  <div class="stories-summary-pct">' + pct + '%</div>'
            + '  <div class="stories-summary-xp">+' + xpEarned + ' XP gagnes</div>'
            + '  <div class="stories-summary-bar">'
            + '    <div class="stories-summary-bar-fill" style="width:' + pct + '%"></div>'
            + '  </div>'
            + '  <button class="stories-btn stories-btn-success stories-btn-restart" id="stories-btn-restart">Recommencer</button>'
            + '  <button class="stories-btn stories-btn-exit" id="stories-btn-exit">Retour</button>'
            + '</div>';

        // Re-attach close button
        const closeBtn = overlay.querySelector('#stories-close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() { exit(); });
        }

        const restartBtn = overlay.querySelector('#stories-btn-restart');
        if (restartBtn) {
            restartBtn.addEventListener('click', function() {
                overlay.remove();
                removeTouchListeners();
                show();
            });
        }

        const exitBtn = overlay.querySelector('#stories-btn-exit');
        if (exitBtn) {
            exitBtn.addEventListener('click', function() { exit(); });
        }
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.storiesMode = {
        show: show
    };

})();
