// focus.js — Timer concentration
(function() {
    let timer = null;
    let remaining = 0;
    let totalDuration = 0;
    let isRunning = false;
    let isPaused = false;
    let objective = '';

    const MOTIVATIONS = [
        "Bravo ! Chaque session te rapproche du succes.",
        "Session terminee ! Ton cerveau vient de creer de nouvelles connexions.",
        "Excellent travail ! La regularite, c'est la cle.",
        "Tu viens de prouver que tu peux te concentrer. Continue !",
        "Session complete ! Tu es plus fort(e) que la procrastination.",
        "Bien joue ! Prends une pause meritee.",
        "Tu geres ! Chaque minute compte dans ta preparation.",
        "Objectif atteint ! Tu construis ta reussite session apres session."
    ];

    function show() {
        window.StudFlow.app.showScreen('focus');
        renderSetup();
    }

    function renderSetup() {
        const container = document.getElementById('focus-content');
        const state = window.StudFlow.app.getState();
        const stats = state.focusStats || { sessions: 0, totalMinutes: 0, streak: 0 };

        container.innerHTML = `
            <div class="focus-header">
                <h2>Mode Concentration</h2>
                <p>Choisis ta duree et concentre-toi a fond</p>
            </div>

            <div class="focus-stats-bar">
                <div class="focus-stat">
                    <span class="focus-stat-value">${stats.sessions}</span>
                    <span class="focus-stat-label">Sessions</span>
                </div>
                <div class="focus-stat">
                    <span class="focus-stat-value">${stats.totalMinutes}</span>
                    <span class="focus-stat-label">Minutes</span>
                </div>
                <div class="focus-stat">
                    <span class="focus-stat-value">${stats.streak}</span>
                    <span class="focus-stat-label">Streak 🔥</span>
                </div>
            </div>

            <div class="focus-setup-card">
                <div class="focus-objective">
                    <label for="focus-objective-input">Objectif de la session</label>
                    <input type="text" id="focus-objective-input" placeholder="Ex: Reviser le chapitre 3 de francais..." class="api-input">
                </div>

                <div class="focus-durations">
                    <h3>Duree</h3>
                    <div class="focus-duration-buttons">
                        <button class="focus-duration-btn" data-action="focus.startTimer" data-param="15">
                            <span class="focus-dur-time">15</span>
                            <span class="focus-dur-label">min</span>
                            <span class="focus-dur-desc">Rapide</span>
                        </button>
                        <button class="focus-duration-btn recommended" data-action="focus.startTimer" data-param="25">
                            <span class="focus-dur-time">25</span>
                            <span class="focus-dur-label">min</span>
                            <span class="focus-dur-desc">Pomodoro</span>
                        </button>
                        <button class="focus-duration-btn" data-action="focus.startTimer" data-param="45">
                            <span class="focus-dur-time">45</span>
                            <span class="focus-dur-label">min</span>
                            <span class="focus-dur-desc">Deep work</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function startTimer(minutes) {
        objective = document.getElementById('focus-objective-input')
            ? document.getElementById('focus-objective-input').value.trim()
            : '';
        totalDuration = minutes * 60;
        remaining = totalDuration;
        isRunning = true;
        isPaused = false;
        if (window.StudFlow.analytics) window.StudFlow.analytics.track('focus_session_start', { duration: minutes });
        renderTimer();
        tick();
    }

    function renderTimer() {
        const container = document.getElementById('focus-content');
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        const progress = ((totalDuration - remaining) / totalDuration) * 100;
        const circumference = 2 * Math.PI * 110;
        const dashOffset = circumference - (progress / 100) * circumference;

        container.innerHTML = `
            <div class="focus-timer-screen">
                ${objective ? `<div class="focus-objective-display">${sanitize(objective)}</div>` : ''}

                <div class="focus-circle-container">
                    <svg class="focus-circle-svg" viewBox="0 0 240 240">
                        <circle cx="120" cy="120" r="110" fill="none" stroke="var(--cream-dark)" stroke-width="6"/>
                        <circle cx="120" cy="120" r="110" fill="none" stroke="var(--coral)" stroke-width="6"
                            stroke-dasharray="${circumference}" stroke-dashoffset="${dashOffset}"
                            stroke-linecap="round" transform="rotate(-90 120 120)"
                            style="transition: stroke-dashoffset 1s linear"/>
                    </svg>
                    <div class="focus-time-display">
                        <span class="focus-time">${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}</span>
                        <span class="focus-time-label">${isPaused ? 'En pause' : 'Reste concentre(e)'}</span>
                    </div>
                </div>

                <div class="focus-controls">
                    <button class="breathing-btn secondary" data-action="focus.cancelTimer">Arreter</button>
                    <button class="breathing-btn primary" data-action="focus.togglePause">
                        ${isPaused ? '▶ Reprendre' : '⏸ Pause'}
                    </button>
                </div>
            </div>
        `;
    }

    function tick() {
        timer = setInterval(() => {
            if (!isPaused && isRunning) {
                remaining--;
                if (remaining <= 0) {
                    clearInterval(timer);
                    timer = null;
                    isRunning = false;
                    onComplete();
                } else {
                    renderTimer();
                }
            }
        }, 1000);
    }

    function togglePause() {
        isPaused = !isPaused;
        renderTimer();
    }

    function cancelTimer() {
        clearInterval(timer);
        timer = null;
        isRunning = false;
        isPaused = false;
        renderSetup();
    }

    function onComplete() {
        // Beep notification
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 800;
            gain.gain.value = 0.3;
            osc.start();
            setTimeout(() => { osc.stop(); ctx.close(); }, 500);
        } catch(e) {}

        // Update stats
        const state = window.StudFlow.app.getState();
        if (!state.focusStats) state.focusStats = { sessions: 0, totalMinutes: 0, streak: 0 };
        state.focusStats.sessions++;
        state.focusStats.totalMinutes += Math.round(totalDuration / 60);
        state.focusStats.streak++;
        window.StudFlow.storage.saveAppState(state);
        if (window.StudFlow.stats) window.StudFlow.stats.recordActivity('focus');

        // XP selon la duree
        if (window.StudFlow.gamification) {
            const mins = Math.round(totalDuration / 60);
            if (mins >= 45) window.StudFlow.gamification.addXP('focus_45');
            else if (mins >= 25) window.StudFlow.gamification.addXP('focus_25');
            else window.StudFlow.gamification.addXP('focus_15');
        }
        if (window.StudFlow.badges) window.StudFlow.badges.checkAll();
        if (window.StudFlow.analytics) window.StudFlow.analytics.track('focus_session_complete', { duration: Math.round(totalDuration / 60) });
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('focus:completed', { minutes: Math.round(totalDuration / 60), objective: objective });
        }

        const motivation = MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)];
        const container = document.getElementById('focus-content');

        container.innerHTML = `
            <div class="focus-complete">
                <div class="focus-complete-icon">🎉</div>
                <h2>Session terminee !</h2>
                <p class="focus-motivation">${motivation}</p>

                ${objective ? `<div class="focus-complete-objective">
                    <strong>Objectif :</strong> ${sanitize(objective)} ✓
                </div>` : ''}

                <div class="focus-complete-stats">
                    <div class="focus-stat">
                        <span class="focus-stat-value">${Math.round(totalDuration / 60)}</span>
                        <span class="focus-stat-label">min</span>
                    </div>
                    <div class="focus-stat">
                        <span class="focus-stat-value">${state.focusStats.sessions}</span>
                        <span class="focus-stat-label">Total sessions</span>
                    </div>
                    <div class="focus-stat">
                        <span class="focus-stat-value">${state.focusStats.streak}🔥</span>
                        <span class="focus-stat-label">Streak</span>
                    </div>
                </div>

                <div class="focus-complete-actions">
                    <button class="breathing-btn primary" data-action="focus.renderSetup">
                        Nouvelle session
                    </button>
                    <button class="breathing-btn secondary" data-action="breathing.start">
                        Pause zen 🧘
                    </button>
                    <button class="breathing-btn secondary" data-action="app.showScreen" data-param="dashboard">
                        Tableau de bord
                    </button>
                </div>
            </div>
        `;
    }

    function sanitize(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.focus = { show, renderSetup, startTimer, renderTimer, togglePause, cancelTimer };
})();
