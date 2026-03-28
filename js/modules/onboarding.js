// onboarding.js — Parcours d'accueil guide, warm & rassurant
(function() {

    var STORAGE_KEY = 'onboarding';

    // ==================== PERSISTENCE ====================
    function loadState() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, {
            completed: false,
            lastStep: 1,
            actionLaunched: false
        });
    }

    function saveState(state) {
        window.StudFlow.storage.saveData(STORAGE_KEY, state);
    }

    function isActive() {
        var state = loadState();
        return !state.completed;
    }

    // ==================== QUICK ACTIONS BY PROFILE ====================
    var QUICK_ACTIONS = {
        anxieux: {
            icon: '🫁',
            label: 'Respiration anti-stress',
            desc: '2 minutes de calme. Ton corps te remerciera.',
            launcher: function() { window.StudFlow.app.showScreen('breathing'); }
        },
        procrastinateur: {
            icon: '🎯',
            label: 'Mini focus 15 min',
            desc: 'Juste 15 min. Le plus dur c\'est de cliquer.',
            launcher: function() { if (window.StudFlow.focus) window.StudFlow.focus.show(); else window.StudFlow.app.showScreen('focus'); }
        },
        desorganise: {
            icon: '🧠',
            label: 'Fiche methodo',
            desc: 'Decouvre comment reviser efficacement.',
            launcher: function() { if (window.StudFlow.coach) window.StudFlow.coach.show(); else window.StudFlow.app.showScreen('coach'); }
        },
        surcharge: {
            icon: '🫁',
            label: 'Pause respiration',
            desc: 'Tu en fais deja beaucoup. Souffle 2 min.',
            launcher: function() { window.StudFlow.app.showScreen('breathing'); }
        },
        confiance_faible: {
            icon: '🧠',
            label: 'Methode d\'apprentissage',
            desc: 'La technique qui va tout changer.',
            launcher: function() { if (window.StudFlow.coach) window.StudFlow.coach.show(); else window.StudFlow.app.showScreen('coach'); }
        },
        confiant: {
            icon: '⚡',
            label: 'Quiz rapide',
            desc: 'Teste-toi. Tu vas gerer.',
            launcher: function() { if (window.StudFlow.quiz) window.StudFlow.quiz.start(); else window.StudFlow.app.showScreen('quiz'); }
        },
        equilibre: {
            icon: '🎯',
            label: 'Session focus 15 min',
            desc: 'Lance ta premiere session de travail.',
            launcher: function() { if (window.StudFlow.focus) window.StudFlow.focus.show(); else window.StudFlow.app.showScreen('focus'); }
        }
    };

    // ==================== PROFILE DETAILS (minimal, for step 3) ====================
    var PROFILE_NAMES = {
        anxieux: { emoji: '😰', title: 'Anxieux', msg: 'Le stress est ton frein principal. On va le transformer en force.' },
        procrastinateur: { emoji: '⏰', title: 'Procrastinateur', msg: 'Ton cerveau cherche le plaisir immediat. On va le hacker.' },
        desorganise: { emoji: '📋', title: 'Desorganise', msg: 'Tu as l\'energie, il te manque le cadre. On t\'en donne un.' },
        surcharge: { emoji: '🤯', title: 'Surcharge', msg: 'Tu fais trop. On va t\'apprendre a faire moins, mais mieux.' },
        confiance_faible: { emoji: '📚', title: 'En recherche de methode', msg: 'Tu ne sais pas par ou commencer. C\'est justement notre job.' },
        confiant: { emoji: '💪', title: 'Confiant', msg: 'Tu geres bien. On va t\'aider a aller encore plus loin.' },
        equilibre: { emoji: '⚖️', title: 'Equilibre', msg: 'Bonnes bases. Quelques ajustements et tu seras au top.' }
    };

    // ==================== ENTRY POINT ====================
    function start() {
        var state = loadState();

        // Already completed → dashboard
        if (state.completed) {
            window.StudFlow.app.showScreen('dashboard');
            window.StudFlow.app.updateDashboard();
            return;
        }

        // Resume at last step
        showStep(state.lastStep);
    }

    // ==================== PROGRESS DOTS ====================
    function renderProgressDots(currentStep, totalSteps) {
        var dots = '';
        for (var i = 1; i <= totalSteps; i++) {
            var cls = i === currentStep ? 'ob-dot active' : (i < currentStep ? 'ob-dot done' : 'ob-dot');
            dots += '<div class="' + cls + '"></div>';
        }
        return '<div class="ob-progress-dots">' + dots + '</div>';
    }

    // ==================== ROUTER ====================
    function showStep(step) {
        var state = loadState();
        state.lastStep = step;
        saveState(state);

        window.StudFlow.app.showScreen('onboarding');
        var container = document.getElementById('onboarding-content');
        if (!container) return;

        // Fade transition
        container.style.opacity = '0';
        container.style.transform = 'translateY(8px)';
        setTimeout(function() {
            switch (step) {
                case 1: renderStep1(container); break;
                case 2: renderStep2(container); break;
                case 3: renderStep3(container); break;
                case 4: renderStep4(container); break;
                default: renderStep1(container);
            }
            container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 50);
    }

    // ==================== STEP 1 — BIENVENUE ====================
    function renderStep1(container) {
        container.innerHTML = ''
            + '<div class="ob-step ob-welcome">'
            + '<div class="ob-logo">'
            + '<div class="ob-logo-icon"></div>'
            + '<span class="ob-logo-text">Stud<span>Flow</span></span>'
            + '</div>'
            + '<h1 class="ob-title">Reussis ton bac<br><span>sans stress.</span></h1>'
            + '<p class="ob-subtitle">StudFlow te guide chaque jour avec un coaching personnalise, des methodes simples et zero pression.</p>'
            + '<div class="ob-features">'
            + '<div class="ob-feature"><span>🎯</span> Diagnostic personnalise</div>'
            + '<div class="ob-feature"><span>🧠</span> Methodes qui marchent</div>'
            + '<div class="ob-feature"><span>💆</span> Anti-stress integre</div>'
            + '<div class="ob-feature"><span>📈</span> Progression visible</div>'
            + '</div>'
            + renderProgressDots(1, 4)
            + '<button class="ob-btn-primary" data-action="onboarding.showStep" data-param="2">Commencer</button>'
            + '<button class="ob-btn-skip" data-action="onboarding.skipToDashboard">J\'ai deja un profil — aller au dashboard</button>'
            + '<p class="ob-reassure">Gratuit. Local. Tes donnees restent sur ton appareil.</p>'
            + '</div>';
    }

    // ==================== STEP 2 — DIAGNOSTIC ====================
    function renderStep2(container) {
        var profile = window.StudFlow.storage.getUserProfile();

        // If already has diagnostic → skip to step 3
        if (profile && profile.mainProfile) {
            showStep(3);
            return;
        }

        // Show brief transition then launch diagnostic
        container.innerHTML = ''
            + '<div class="ob-step ob-diagnostic-intro">'
            + renderProgressDots(2, 4)
            + '<div class="ob-big-icon">📋</div>'
            + '<h2 class="ob-heading">Decouvrons ton profil</h2>'
            + '<p class="ob-text">6 questions rapides pour comprendre comment tu fonctionnes.<br>Pas de bonne ou mauvaise reponse.</p>'
            + '<button class="ob-btn-primary" data-action="diagnostic.start">C\'est parti !</button>'
            + '<p class="ob-reassure">Ca prend moins d\'une minute.</p>'
            + '</div>';
    }

    // ==================== AFTER DIAGNOSTIC (called by diagnostic.js) ====================
    function afterDiagnostic() {
        var state = loadState();
        state.lastStep = 3;
        saveState(state);
        showStep(3);
    }

    // ==================== STEP 3 — PROFIL + ACTION IMMEDIATE ====================
    function renderStep3(container) {
        var profile = window.StudFlow.storage.getUserProfile();
        if (!profile || !profile.mainProfile) {
            showStep(2);
            return;
        }

        var profileKey = profile.mainProfile;
        var info = PROFILE_NAMES[profileKey] || PROFILE_NAMES.equilibre;
        var action = QUICK_ACTIONS[profileKey] || QUICK_ACTIONS.equilibre;

        container.innerHTML = ''
            + '<div class="ob-step ob-profile-action">'
            + renderProgressDots(3, 4)

            // Profile summary
            + '<div class="ob-profile-card">'
            + '<div class="ob-profile-emoji">' + info.emoji + '</div>'
            + '<h2 class="ob-heading">Ton profil : ' + info.title + '</h2>'
            + '<p class="ob-profile-msg">' + info.msg + '</p>'
            + '</div>'

            // Quick action
            + '<div class="ob-action-card">'
            + '<p class="ob-action-label">Ton plan de demarrage — 5 min</p>'
            + '<div class="ob-action-row">'
            + '<span class="ob-action-icon">' + action.icon + '</span>'
            + '<div class="ob-action-info">'
            + '<strong>' + action.label + '</strong>'
            + '<p>' + action.desc + '</p>'
            + '</div>'
            + '</div>'
            + '<button class="ob-btn-primary" data-action="onboarding.launchAction">Je le fais maintenant</button>'
            + '</div>'

            + '<button class="ob-btn-skip" data-action="onboarding.complete">Plus tard — aller au dashboard</button>'
            + '</div>';
    }

    // ==================== LAUNCH ACTION ====================
    function launchAction() {
        var state = loadState();
        state.lastStep = 4;
        state.actionLaunched = true;
        saveState(state);

        var profile = window.StudFlow.storage.getUserProfile();
        var profileKey = (profile && profile.mainProfile) || 'equilibre';
        var action = QUICK_ACTIONS[profileKey] || QUICK_ACTIONS.equilibre;

        action.launcher();
    }

    // ==================== PENDING CELEBRATION CHECK ====================
    // Called when navigating to dashboard — if step 4 is pending, show celebration
    function checkPendingCelebration() {
        var state = loadState();
        if (!state.completed && state.actionLaunched && state.lastStep === 4) {
            showStep(4);
            return true;
        }
        return false;
    }

    // ==================== STEP 4 — PREMIER SUCCES ====================
    function renderStep4(container) {
        container.innerHTML = ''
            + '<div class="ob-step ob-celebration">'
            + renderProgressDots(4, 4)
            + '<div class="ob-celeb-icon">🎉</div>'
            + '<h2 class="ob-heading">Bravo, premier succes !</h2>'
            + '<p class="ob-celeb-msg">Tu viens de faire ta premiere action. C\'est le plus dur — et tu l\'as fait.</p>'
            + '<p class="ob-celeb-sub">Chaque petit pas compte. StudFlow est la pour t\'accompagner, a ton rythme.</p>'
            + '<button class="ob-btn-primary" data-action="onboarding.complete">Aller au dashboard</button>'
            + '</div>';

        // Fire confetti
        if (window.StudFlow.gamification) {
            setTimeout(function() {
                window.StudFlow.gamification.spawnConfetti();
            }, 300);
            setTimeout(function() {
                window.StudFlow.gamification.showToast('Bienvenue sur StudFlow !', 'streak', '🌟');
            }, 600);
        }
    }

    // ==================== COMPLETE ====================
    function complete() {
        var state = loadState();
        state.completed = true;
        saveState(state);
        window.StudFlow.storage.setOnboardingDone();

        window.StudFlow.app.showScreen('dashboard');
        window.StudFlow.app.updateDashboard();
    }

    // ==================== SKIP ====================
    function skipToDashboard() {
        var state = loadState();
        state.completed = true;
        saveState(state);
        window.StudFlow.storage.setOnboardingDone();

        window.StudFlow.app.showScreen('dashboard');
        window.StudFlow.app.updateDashboard();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.onboarding = {
        start: start,
        isActive: isActive,
        showStep: showStep,
        afterDiagnostic: afterDiagnostic,
        launchAction: launchAction,
        checkPendingCelebration: checkPendingCelebration,
        complete: complete,
        skipToDashboard: skipToDashboard
    };

})();
