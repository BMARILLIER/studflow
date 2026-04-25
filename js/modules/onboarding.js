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
                case 2: renderOB_Class(container); break;
                case 3: renderOB_Strong(container); break;
                case 4: renderOB_Weak(container); break;
                case 5: renderOB_WorkStyle(container); break;
                case 6: renderOB_Stress(container); break;
                case 7: renderOB_SelfNote(container); break;
                case 8: renderOB_Preferences(container); break;
                case 9: renderOB_Summary(container); break;
                case 10: renderStep4(container); break;
                // Legacy compat
                case 25: renderOB_Preferences(container); break;
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
            + '<h1 class="ob-title">Reussis tes examens<br><span>sans stress.</span></h1>'
            + '<p class="ob-subtitle">StudFlow te guide chaque jour avec un coaching personnalise, des methodes simples et zero pression. Brevet ou Bac, on s\'adapte a toi.</p>'
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

    // ==================== ONBOARDING DATA (temp, saved at end) ====================
    var _obData = {};

    // ==================== EFFET MIROIR ====================
    var MIRROR_MESSAGES = {
        // Work style
        fast_learner: 'Top. On va optimiser ta vitesse.',
        needs_time: 'On prendra le temps, sans pression.',
        forgets_fast: 'OK, on va renforcer ta memoire progressivement.',
        needs_repetition: 'La repetition, c\'est la cle. On va t\'aider.',
        procrastinator: 'OK, on va commencer simple avec toi.',
        focus_issues: 'Pas de souci. Sessions courtes, zero distraction.',
        regular: 'Parfait. On va capitaliser sur ta regularite.',
        last_minute: 'On va t\'aider a demarrer plus tot, en douceur.',
        // Stress
        high: 'On va te simplifier les choses.',
        medium: 'On s\'adapte a toi.',
        low: 'On va optimiser ton niveau.',
        // Self note
        _selfnote: 'Parfait. On va adapter ton accompagnement a ca.'
    };

    function showMirror(container, val) {
        var msg = MIRROR_MESSAGES[val];
        if (!msg) return;
        var el = container.querySelector('.ob-mirror');
        if (!el) {
            el = document.createElement('p');
            el.className = 'ob-mirror';
            var btn = container.querySelector('.ob-btn-primary');
            if (btn) btn.parentNode.insertBefore(el, btn);
            else container.querySelector('.ob-step').appendChild(el);
        }
        el.style.opacity = '0';
        el.textContent = msg;
        setTimeout(function() { el.style.opacity = '1'; }, 50);
    }

    function initChipLogic(container, mirrorEnabled) {
        container.addEventListener('click', function(e) {
            var chip = e.target.closest('.ob-chip');
            if (!chip) return;
            var parent = chip.closest('.ob-chips');
            if (!parent) return;
            if (parent.classList.contains('ob-multi')) {
                chip.classList.toggle('selected');
            } else {
                parent.querySelectorAll('.ob-chip').forEach(function(c) { c.classList.remove('selected'); });
                chip.classList.add('selected');
            }
            // Trigger mirror effect
            if (mirrorEnabled && chip.classList.contains('selected')) {
                showMirror(container, chip.getAttribute('data-val'));
            }
        });
    }

    function getSelected(id) {
        var el = document.getElementById(id);
        if (!el) return [];
        var selected = el.querySelectorAll('.ob-chip.selected');
        var vals = [];
        selected.forEach(function(c) { vals.push(c.getAttribute('data-val')); });
        return vals;
    }

    function getSelectedOne(id) {
        var vals = getSelected(id);
        return vals.length > 0 ? vals[0] : '';
    }

    var SUBJECTS_LIST_BAC = [
        { id: 'maths', label: 'Maths' },
        { id: 'francais', label: 'Francais' },
        { id: 'philo', label: 'Philo' },
        { id: 'histgeo', label: 'Hist-Geo' },
        { id: 'physique', label: 'Physique' },
        { id: 'svt', label: 'SVT' },
        { id: 'ses', label: 'SES' },
        { id: 'anglais', label: 'Anglais' }
    ];

    var SUBJECTS_LIST_BREVET = [
        { id: 'maths', label: 'Maths' },
        { id: 'francais', label: 'Francais' },
        { id: 'histgeo', label: 'Hist-Geo' },
        { id: 'physique', label: 'Physique-Chimie' },
        { id: 'svt', label: 'SVT' },
        { id: 'emc', label: 'EMC' },
        { id: 'anglais', label: 'Anglais' },
        { id: 'techno', label: 'Technologie' }
    ];

    var SUBJECTS_LIST = SUBJECTS_LIST_BAC;

    function getSubjectsList() {
        var cls = _obData.class || 'terminale';
        return cls === '3eme' ? SUBJECTS_LIST_BREVET : SUBJECTS_LIST_BAC;
    }

    function subjectChips(containerId, multi) {
        var list = getSubjectsList();
        return '<div class="ob-chips' + (multi ? ' ob-multi' : '') + '" id="' + containerId + '">'
            + list.map(function(s) {
                return '<button class="ob-chip" data-val="' + s.id + '">' + s.label + '</button>';
            }).join('')
            + '</div>';
    }

    // ==================== ECRAN 2 — CLASSE ====================
    function renderOB_Class(container) {
        container.innerHTML = '<div class="ob-step ob-prefs">'
            + renderProgressDots(1, 7)
            + '<h2 class="ob-heading">Tu es en quelle classe ?</h2>'
            + '<p class="ob-text">Ca nous aide a adapter le niveau.</p>'
            + '<div class="ob-chips" id="ob-class">'
            + '<button class="ob-chip" data-val="3eme">3eme</button>'
            + '<button class="ob-chip" data-val="seconde">Seconde</button>'
            + '<button class="ob-chip" data-val="premiere">Premiere</button>'
            + '<button class="ob-chip selected" data-val="terminale">Terminale</button>'
            + '</div>'
            + '<button class="ob-btn-primary" data-action="onboarding.nextOB" data-param="2">Continuer</button>'
            + '</div>';
        initChipLogic(container);
    }

    // ==================== ECRAN 3 — MATIERES FORTES ====================
    function renderOB_Strong(container) {
        _obData.class = getSelectedOne('ob-class') || 'terminale';

        var examLabel = _obData.class === '3eme' ? 'brevet' : 'bac';

        container.innerHTML = '<div class="ob-step ob-prefs">'
            + renderProgressDots(2, 7)
            + '<h2 class="ob-heading">Tes points forts</h2>'
            + '<p class="ob-text">Dans quelles matieres tu te sens a l\'aise ?</p>'
            + (_obData.class === '3eme' ? '<p class="ob-reassure" style="color:var(--accent);">Mode Brevet active !</p>' : '')
            + subjectChips('ob-strong', true)
            + '<p class="ob-reassure">Choisis ce qui te semble le plus naturel.</p>'
            + '<button class="ob-btn-primary" data-action="onboarding.nextOB" data-param="3">Continuer</button>'
            + '</div>';
        initChipLogic(container);
    }

    // ==================== ECRAN 4 — MATIERES FAIBLES ====================
    function renderOB_Weak(container) {
        _obData.strongSubjects = getSelected('ob-strong');

        container.innerHTML = '<div class="ob-step ob-prefs">'
            + renderProgressDots(3, 7)
            + '<h2 class="ob-heading">Les matieres a renforcer</h2>'
            + '<p class="ob-text">C\'est plus difficile en ce moment dans quelles matieres ?</p>'
            + subjectChips('ob-weak', true)
            + '<p class="ob-reassure">Pas de jugement : c\'est pour mieux t\'accompagner.</p>'
            + '<button class="ob-btn-primary" data-action="onboarding.nextOB" data-param="4">Continuer</button>'
            + '</div>';
        initChipLogic(container);
    }

    // ==================== ECRAN 5 — STYLE DE TRAVAIL ====================
    function renderOB_WorkStyle(container) {
        _obData.weakSubjects = getSelected('ob-weak');

        container.innerHTML = '<div class="ob-step ob-prefs">'
            + renderProgressDots(4, 7)
            + '<h2 class="ob-heading">Comment tu fonctionnes</h2>'
            + '<p class="ob-text">Ce qui te ressemble le plus (1 a 3 choix) :</p>'
            + '<div class="ob-chips ob-multi" id="ob-workstyle">'
            + '<button class="ob-chip" data-val="fast_learner">Je comprends vite</button>'
            + '<button class="ob-chip" data-val="needs_time">J\'ai besoin de temps</button>'
            + '<button class="ob-chip" data-val="forgets_fast">J\'oublie vite</button>'
            + '<button class="ob-chip" data-val="needs_repetition">Je dois repeter pour retenir</button>'
            + '<button class="ob-chip" data-val="procrastinator">Je procrastine parfois</button>'
            + '<button class="ob-chip" data-val="focus_issues">J\'ai du mal a me concentrer</button>'
            + '<button class="ob-chip" data-val="regular">Je suis regulier(e)</button>'
            + '<button class="ob-chip" data-val="last_minute">Je travaille dans l\'urgence</button>'
            + '</div>'
            + '<button class="ob-btn-primary" data-action="onboarding.nextOB" data-param="5">Continuer</button>'
            + '</div>';
        initChipLogic(container, true);
    }

    // ==================== ECRAN 6 — STRESS & CONFIANCE ====================
    function renderOB_Stress(container) {
        _obData.workStyle = getSelected('ob-workstyle');

        container.innerHTML = '<div class="ob-step ob-prefs">'
            + renderProgressDots(5, 7)
            + '<h2 class="ob-heading">Ton ressenti</h2>'
            + '<p class="ob-text">Face aux revisions, tu te sens plutot :</p>'
            + '<div class="ob-chips" id="ob-stress">'
            + '<button class="ob-chip" data-val="high">Stresse(e)</button>'
            + '<button class="ob-chip selected" data-val="medium">Mitige(e)</button>'
            + '<button class="ob-chip" data-val="low">Plutot confiant(e)</button>'
            + '</div>'
            + '<div class="ob-field" style="margin-top:16px">'
            + '<label class="ob-label">Ton niveau de confiance</label>'
            + '<div class="ob-chips" id="ob-confidence">'
            + '<button class="ob-chip" data-val="low">Faible</button>'
            + '<button class="ob-chip selected" data-val="medium">Moyen</button>'
            + '<button class="ob-chip" data-val="high">Bon</button>'
            + '</div>'
            + '</div>'
            + '<button class="ob-btn-primary" data-action="onboarding.nextOB" data-param="6">Continuer</button>'
            + '</div>';
        initChipLogic(container, true);
    }

    // ==================== ECRAN 7 — PHRASE PERSO ====================
    function renderOB_SelfNote(container) {
        _obData.stress = getSelectedOne('ob-stress') || 'medium';
        _obData.confidence = getSelectedOne('ob-confidence') || 'medium';

        container.innerHTML = '<div class="ob-step ob-prefs">'
            + renderProgressDots(6, 7)
            + '<h2 class="ob-heading">Une phrase honnete sur toi</h2>'
            + '<p class="ob-text">Decris-toi en une phrase, sans te juger.</p>'
            + '<textarea class="ob-textarea" id="ob-selfnote" rows="3" maxlength="200" placeholder="Ex : Je m\'y mets souvent au dernier moment mais quand je bosse, j\'y arrive."></textarea>'
            + '<p class="ob-reassure">Cette phrase aide le coach a personnaliser tes messages.</p>'
            + '<button class="ob-btn-primary" data-action="onboarding.nextOB" data-param="7">Continuer</button>'
            + '<button class="ob-btn-skip" data-action="onboarding.nextOB" data-param="7">Passer</button>'
            + '</div>';

        // Mirror effect on textarea input
        var ta = container.querySelector('#ob-selfnote');
        if (ta) {
            ta.focus();
            ta.addEventListener('input', function() {
                if (ta.value.trim().length > 10) {
                    showMirror(container, '_selfnote');
                }
            });
        }
    }

    // ==================== ECRAN 8 — PREFERENCES (optionnel) ====================
    function renderOB_Preferences(container) {
        var noteEl = document.getElementById('ob-selfnote');
        _obData.selfNote = noteEl ? noteEl.value.trim() : '';

        container.innerHTML = '<div class="ob-step ob-prefs">'
            + renderProgressDots(7, 7)
            + '<h2 class="ob-heading">Pour personnaliser ton experience</h2>'
            + '<p class="ob-text" style="opacity:0.6">Optionnel</p>'

            + '<div class="ob-field">'
            + '<label class="ob-label">Ambiance de travail</label>'
            + '<div class="ob-chips" id="ob-music">'
            + '<button class="ob-chip" data-val="calm">Calme</button>'
            + '<button class="ob-chip selected" data-val="">Peu importe</button>'
            + '<button class="ob-chip" data-val="energetic">Energique</button>'
            + '</div>'
            + '</div>'

            + '<div class="ob-field">'
            + '<label class="ob-label">Type de sessions</label>'
            + '<div class="ob-chips" id="ob-pace">'
            + '<button class="ob-chip" data-val="fast">Courtes et rapides</button>'
            + '<button class="ob-chip selected" data-val="calm">Plus posees</button>'
            + '</div>'
            + '</div>'

            + '<button class="ob-btn-primary" data-action="onboarding.finishOB">Terminer</button>'
            + '<button class="ob-btn-skip" data-action="onboarding.finishOB">Passer</button>'
            + '</div>';
        initChipLogic(container);
    }

    // ==================== ECRAN 9 — SUMMARY + GO ====================
    function renderOB_Summary(container) {
        var profile = window.StudFlow.storage.getUserProfile() || {};
        var msg = 'On a mieux compris comment t\'accompagner.';
        if (window.StudFlow.coachEngine) {
            msg = window.StudFlow.coachEngine.getCoachMessage(profile, { moment: 'start' });
        }

        container.innerHTML = '<div class="ob-step ob-celebration">'
            + '<div class="ob-celeb-icon">\u2728</div>'
            + '<h2 class="ob-heading">Parfait.</h2>'
            + '<p class="ob-celeb-msg">' + msg + '</p>'
            + '<button class="ob-btn-primary" data-action="onboarding.complete">Commencer \u2192</button>'
            + '</div>';

        if (window.StudFlow.gamification) {
            setTimeout(function() { window.StudFlow.gamification.spawnConfetti(); }, 300);
        }
    }

    // ==================== NAVIGATION HELPERS ====================
    function nextOB(param) {
        var nextStep = parseInt(param, 10) + 2; // param is 0-indexed offset from step 2
        showStep(nextStep);
    }

    function finishOB() {
        _obData.music = getSelectedOne('ob-music') || '';
        _obData.pace = getSelectedOne('ob-pace') || 'calm';

        // Build profile from collected data
        var profile = window.StudFlow.storage.getUserProfile() || {};
        profile.identity = profile.identity || {};
        profile.academic = profile.academic || {};
        profile.behavior = profile.behavior || {};
        profile.motivation = profile.motivation || {};
        profile.optional = profile.optional || {};

        profile.identity.class = _obData.class || 'terminale';
        profile.identity.examLevel = (_obData.class === '3eme') ? 'brevet' : 'bac';
        profile.academic.strongSubjects = _obData.strongSubjects || [];
        profile.academic.weakSubjects = _obData.weakSubjects || [];
        profile.behavior.stressLevel = _obData.stress || 'medium';
        profile.behavior.confidence = _obData.confidence || 'medium';
        profile.optional.selfDescription = _obData.selfNote || '';
        profile.motivation.pace = _obData.pace || 'calm';

        // Derive behavior from workStyle
        var ws = _obData.workStyle || [];
        if (ws.indexOf('procrastinator') !== -1 || ws.indexOf('last_minute') !== -1) {
            profile.behavior.consistency = 'low';
        } else if (ws.indexOf('regular') !== -1) {
            profile.behavior.consistency = 'high';
        } else {
            profile.behavior.consistency = 'medium';
        }

        // Derive motivation type
        if (ws.indexOf('fast_learner') !== -1) {
            profile.motivation.type = 'challenge';
        } else if (_obData.stress === 'high') {
            profile.motivation.type = 'encouragement';
        } else {
            profile.motivation.type = 'structure';
        }

        // Derive mainProfile (compat with existing coach system)
        if (_obData.stress === 'high') profile.mainProfile = 'anxieux';
        else if (ws.indexOf('procrastinator') !== -1) profile.mainProfile = 'procrastinateur';
        else if (ws.indexOf('focus_issues') !== -1) profile.mainProfile = 'desorganise';
        else if (_obData.confidence === 'low') profile.mainProfile = 'confiance_faible';
        else if (_obData.confidence === 'high' && ws.indexOf('fast_learner') !== -1) profile.mainProfile = 'confiant';
        else profile.mainProfile = 'equilibre';

        profile.profiles = [profile.mainProfile];
        profile.completedAt = new Date().toISOString();

        window.StudFlow.storage.updateUserProfile(profile);
        console.log('[onboarding] Profile saved:', profile.mainProfile, profile);

        showStep(9);
    }

    // Legacy compat
    function afterDiagnostic() { showStep(9); }
    function savePrefs() { finishOB(); }

    // ==================== STEP 3 (legacy — now unused, kept for compat) ====================
    function renderStep3(container) { renderOB_Summary(container); }

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
        nextOB: nextOB,
        finishOB: finishOB,
        afterDiagnostic: afterDiagnostic,
        savePrefs: savePrefs,
        launchAction: launchAction,
        checkPendingCelebration: checkPendingCelebration,
        complete: complete,
        skipToDashboard: skipToDashboard
    };

})();
