// dashboard.js — Tableau de bord intelligent et personnalise
(function() {

    // Static data (messages, profiles, navigation map) lives in
    // dashboardData.js. Aliased here so call sites stay terse.
    var _data = window.StudFlow.dashboardData;
    var MOTIVATION_MESSAGES = _data.MOTIVATION_MESSAGES;
    var COACH_MESSAGES      = _data.COACH_MESSAGES;
    var DAILY_OBJECTIVES    = _data.DAILY_OBJECTIVES;
    var RECOMMENDATIONS     = _data.RECOMMENDATIONS;
    var PROFILE_DETAILS     = _data.PROFILE_DETAILS;
    var MODULE_MAP          = _data.MODULE_MAP;





    function goTo(moduleId) {
        // Handle subject chips: subj_maths, subj_philo, etc.
        if (moduleId && moduleId.indexOf('subj_') === 0) {
            var subjId = moduleId.replace('subj_', '');
            if (window.StudFlow.subjects) {
                window.StudFlow.app.showScreen('matieres');
                window.StudFlow.subjects.showSubject(subjId);
            }
            return;
        }
        var fn = MODULE_MAP[moduleId];
        if (fn) {
            fn();
        } else {
            window.StudFlow.app.showScreen(moduleId);
        }
    }

    // switchExam removed: track is locked per user via trackPicker + beta_testers.track.

    // ==================== HELPERS ====================
    function getProfile() {
        return window.StudFlow.storage.getUserProfile();
    }

    function getMainProfile() {
        var profile = getProfile();
        return (profile && profile.mainProfile) ? profile.mainProfile : 'equilibre';
    }

    function getGamificationStats() {
        if (window.StudFlow.gamification) {
            return window.StudFlow.gamification.getStats();
        }
        return { xp: 0, level: 1, streak: 0, totalActions: 0 };
    }

    function getFocusStats() {
        return window.StudFlow.storage.loadData('focusStats', { sessions: 0, totalMinutes: 0, streak: 0 });
    }

    function getAppState() {
        return window.StudFlow.app.getState();
    }

    function getDailyData() {
        var today = new Date().toDateString();
        var data = window.StudFlow.storage.loadData('dailyDashboard', {
            date: null,
            motivationIndex: -1,
            objectivesCompleted: [],
            objectiveSet: null
        });
        // Reset if it's a new day
        if (data.date !== today) {
            data = {
                date: today,
                motivationIndex: Math.floor(Math.random() * MOTIVATION_MESSAGES.length),
                objectivesCompleted: [],
                objectiveSet: null
            };
            saveDailyData(data);
        }
        return data;
    }

    function saveDailyData(data) {
        window.StudFlow.storage.saveData('dailyDashboard', data);
    }

    function getGreeting() {
        var h = new Date().getHours();
        if (h < 12) return 'Bonjour';
        if (h < 18) return 'Bon aprem\'';
        return 'Bonsoir';
    }

    // ==================== RENDER PRINCIPAL ====================
    function render() {
        var container = document.getElementById('smart-dashboard');
        if (!container) return;

        // Preload subject data in background for flashcard/quiz sessions
        if (window.StudFlow.subjects && window.StudFlow.subjects.preload) {
            window.StudFlow.subjects.preload();
        }

        var profileKey = getMainProfile();
        var profileData = PROFILE_DETAILS[profileKey] || PROFILE_DETAILS.equilibre;
        var daily = getDailyData();
        var focusStats = getFocusStats();
        var gamStats = getGamificationStats();
        var state = getAppState();
        var recs = RECOMMENDATIONS[profileKey] || RECOMMENDATIONS.equilibre;
        var objectives = getObjectivesForToday(profileKey);
        var greeting = getGreeting();

        // Calculate progress stats
        var totalCards = (state.flashcards ? state.flashcards.length : 0)
                       + (state.customFlashcards ? state.customFlashcards.length : 0);
        var masteredCards = state.masteredCards || 0;
        var totalQuiz = (state.quizQuestions ? state.quizQuestions.length : 0)
                       + (state.customQuiz ? state.customQuiz.length : 0);

        // Daily Goal block (warm unique objective)
        var dailyGoalHTML = '';
        if (window.StudFlow.dailyGoal) {
            dailyGoalHTML = window.StudFlow.dailyGoal.renderDashboardBlock();
        }

        // Revision plan (smart weakness analysis)
        var revisionPlanHTML = '';
        if (window.StudFlow.revisionPlan) {
            revisionPlanHTML = window.StudFlow.revisionPlan.renderDashboardWidget();
        }

        // Secondary zone blocks
        var srBlockHTML = '';
        if (window.StudFlow.spacedRepetition) {
            srBlockHTML = window.StudFlow.spacedRepetition.renderDashboardBlock();
        }

        var missionsWidgetHTML = '';
        if (window.StudFlow.missions) {
            missionsWidgetHTML = window.StudFlow.missions.renderDashboardWidget();
        }

        var timelineWidgetHTML = '';
        if (window.StudFlow.timeline) {
            timelineWidgetHTML = window.StudFlow.timeline.renderDashboardWidget();
        }

        var premiumBadgeHTML = '';
        if (window.StudFlow.premium) {
            premiumBadgeHTML = '<div class="dash-section dash-premium-badge-row">'
                + window.StudFlow.premium.renderBadge()
                + '</div>';
        }

        // ===== PRIMARY ZONE (5 focused sections) =====
        // 1. Bac countdown
        // 2. Main action card (Session: Focus / Flashcards / Quiz)
        // 3. Mission du jour
        // 4. Gamification (XP / Streak / Badges)
        // 5. Progression (adaptive mastery + stats)

        var dailyMissionHTML = '';
        if (window.StudFlow.dailyMission) {
            dailyMissionHTML = window.StudFlow.dailyMission.renderCard();
        }

        var adaptiveHTML = '';
        if (window.StudFlow.adaptive) {
            adaptiveHTML = window.StudFlow.adaptive.renderCard();
        }

        var dailySessionHTML = '';
        if (window.StudFlow.dailySession) {
            dailySessionHTML = window.StudFlow.dailySession.renderDashboardButton();
        }

        var dsDemainHTML = '';
        if (window.StudFlow.dsDemain) {
            dsDemainHTML = window.StudFlow.dsDemain.renderDashboardLink();
        }

        var subjectPickerCTA = '';
        if (window.StudFlow.subjectPicker) {
            subjectPickerCTA = window.StudFlow.subjectPicker.renderDashboardCTA();
        }

        var errorNbHTML = '';
        if (window.StudFlow.errorNotebook) {
            errorNbHTML = window.StudFlow.errorNotebook.renderDashboardWidget();
        }

        var weeklyReportBannerHTML = '';
        if (window.StudFlow.weeklyReport) {
            weeklyReportBannerHTML = window.StudFlow.weeklyReport.renderDashboardBanner();
        }

        // ===== ABOVE THE FOLD: logo + hero + actions =====
        var logoHTML = '<div class="dash-logo"><div class="sf-logo-mark sf-logo-mark--lg"><span>S</span></div><span class="sf-logo-text sf-logo-text--lg">Stud<span>Flow</span></span></div>';

        var searchBarHTML = '<div class="dash-section dash-search-bar">'
            + '<input type="text" class="dash-search-input" id="dash-search-input" '
            + 'placeholder="\uD83D\uDD0D Que veux-tu reviser ?" autocomplete="off">'
            + '<div id="dash-search-results" class="dash-search-results"></div>'
            + '</div>';

        // Exam-level toggle removed: track is now locked per user (see trackPicker).

        // ===== ABOVE THE FOLD : 3 blocs essentiels =====
        var dailyChallengeAboveHTML = window.StudFlow.dailyChallenges
            ? window.StudFlow.dailyChallenges.renderCard()
            : renderDailyChallenge(gamStats);

        var rituelHTML = (window.StudFlow.rituelJour && window.StudFlow.rituelJour.renderCard)
            ? window.StudFlow.rituelJour.renderCard() : '';

        var dailyPathHTML = (window.StudFlow.dailyPath && window.StudFlow.dailyPath.renderCard)
            ? window.StudFlow.dailyPath.renderCard() : '';

        var miniSujetCTAHTML = (window.StudFlow.miniSujet && window.StudFlow.miniSujet.renderDashboardCTA)
            ? window.StudFlow.miniSujet.renderDashboardCTA() : '';

        var radarHTML = (window.StudFlow.radarMastery && window.StudFlow.radarMastery.renderCard)
            ? window.StudFlow.radarMastery.renderCard() : '';

        var focusWeaknessHTML = (window.StudFlow.focusWeakness && window.StudFlow.focusWeakness.renderCard)
            ? window.StudFlow.focusWeakness.renderCard() : '';

        // Mode confiance : petit bouton rassurant, visible seulement si cartes
        // deja connues dispo (sinon masque pour ne pas frustrer)
        var confidenceBtnHTML = '';
        if (window.StudFlow.spacedRepetition && window.StudFlow.spacedRepetition.getMasteredCount
            && window.StudFlow.spacedRepetition.getMasteredCount() >= 3) {
            confidenceBtnHTML = '<div class="dash-section" style="padding:0;">'
              + '<button data-action="flashcards.confidence" style="display:flex;align-items:center;gap:10px;width:100%;padding:12px 14px;border-radius:14px;border:1px solid rgba(129,140,248,0.3);background:linear-gradient(135deg,rgba(129,140,248,0.10),rgba(167,139,250,0.10));color:inherit;cursor:pointer;font:inherit;text-align:left;">'
              +   '<span style="font-size:1.4rem;flex-shrink:0;">😌</span>'
              +   '<span style="flex:1;min-width:0;">'
              +     '<span style="display:block;font-weight:600;font-size:0.95rem;">Mode confiance</span>'
              +     '<span style="display:block;color:var(--text-muted);font-size:0.78rem;margin-top:1px;">6 cartes deja connues, session courte</span>'
              +   '</span>'
              +   '<span style="color:var(--text-muted);font-size:1.1rem;flex-shrink:0;">›</span>'
              + '</button>'
              + '</div>';
        }

        var aboveFold = ''
            + logoHTML
            + searchBarHTML
            + rituelHTML                     // Bloc 0 : rituel du jour (habitude)
            + dailyPathHTML                  // Bloc 0a : parcours guide
            + miniSujetCTAHTML               // Bloc 0a' : mini-sujets type examen
            + confidenceBtnHTML              // Bloc 0b : mode confiance (optionnel)
            + focusWeaknessHTML              // Bloc 0c : focus sur faiblesse #1 (si dispo)
            + radarHTML                      // Bloc 0d : radar de maitrise
            + renderHeroBac(gamStats)       // Bloc 1 : streak + CTA session
            + dailyChallengeAboveHTML        // Bloc 1b : defi du jour
            + renderDailyGauge()            // Bloc 2 : jauge quotidienne
            + renderStudyTimer()            // Bloc 2b : temps de révision
            + renderNextStep()              // Bloc 2c : prochaine étape guidée
            + renderSubjectGrid();          // Bloc 3 : matières

        // ===== BELOW : contenu secondaire caché sous "Voir plus" =====
        var profileWidget = renderStudentProfile();

        var weeklyHTML = renderWeeklySummary();

        var belowFold = ''
            + '<div class="dash-more-content" id="dash-more-content" style="display:none;">'
            + weeklyHTML
            + profileWidget
            + renderHeroActions()
            + renderSubjectStrip()
            + revisionPlanHTML
            + dailyGoalHTML
            + renderImportedCard()
            + renderStreakAlert(gamStats)
            + dailyMissionHTML
            + srBlockHTML
            + missionsWidgetHTML
            + renderDailyTip()
            + '</div>';

        // Bouton "Voir plus"
        var seeMoreHTML = '<div class="dash-section dash-see-more">'
            + '<button class="dash-see-more-btn" data-action="dashboard.toggleMore">'
            + 'Voir plus \u25BC'
            + '</button>'
            + '</div>';

        var primaryHTML = aboveFold + seeMoreHTML + belowFold;

        // ===== EXPLORE BUTTON =====
        var exploreHTML = '<div class="dash-section dash-explore-row">'
            + '<button class="dash-explore-btn" data-action="dashboard.openExplore">'
            + '<span>\uD83D\uDD0D Explorer tous les outils</span>'
            + '<span class="dash-explore-arrow">\u2192</span>'
            + '</button>'
            + '</div>';

        container.innerHTML = primaryHTML + exploreHTML;

        // Wire up search
        if (window.StudFlow.dashboardSearch) window.StudFlow.dashboardSearch.init();
    }

    // ==================== IMPORTED PDF CARD ====================
    function renderImportedCard() {
        var state = getAppState();
        var fcCount = (state.flashcards || []).length;
        var qzCount = (state.quizQuestions || []).length;
        if (fcCount === 0 && qzCount === 0) return '';

        var fileName = window.StudFlow.storage.loadData('pdfFileName', '');
        var label = fileName ? fileName : 'PDF importe';

        var badges = '';
        if (fcCount > 0) badges += '<span class="imported-badge">\uD83C\uDCCF ' + fcCount + ' flashcard' + (fcCount > 1 ? 's' : '') + '</span>';
        if (qzCount > 0) badges += '<span class="imported-badge">\u26A1 ' + qzCount + ' quiz</span>';

        return '<div class="dash-section dash-imported-card">'
            + '<div class="imported-header">'
            + '<span class="imported-icon">\uD83D\uDCC4</span>'
            + '<div class="imported-info">'
            + '<strong>' + (window.StudFlow.app.escapeText ? window.StudFlow.app.escapeText(label) : label) + '</strong>'
            + '<div class="imported-badges">' + badges + '</div>'
            + '</div>'
            + '</div>'
            + '<div class="imported-actions">'
            + (fcCount > 0 ? '<button class="imported-btn" data-action="pdf-result:flashcards">Reviser les fiches \u2192</button>' : '')
            + (qzCount > 0 ? '<button class="imported-btn" data-action="pdf-result:quiz">Lancer le quiz \u2192</button>' : '')
            + '</div>'
            + '</div>';
    }

    // ==================== HERO CTA (import PDF) ====================
    function renderHeroCTA() {
        return '<div class="dash-section dash-hero-cta">'
            + '<div class="dash-hero-cta-card" data-action="dashboard.goTo" data-param="upload">'
            + '<div class="dash-hero-cta-icon">📄</div>'
            + '<div class="dash-hero-cta-content">'
            + '<h3>Importe ton PDF</h3>'
            + '<p>Glisse ton cours et genere quiz, flashcards, fiches en 30 secondes.</p>'
            + '</div>'
            + '<span class="dash-hero-cta-arrow">→</span>'
            + '</div>'
            + '</div>';
    }

    // ==================== PROF IA CARD (visible when PDF imported) ====================
    function renderProfCard(state) {
        if (!state.pdfText || !state.pdfText.length) return '';
        var name = state.fileName || 'Document';
        return '<div class="dash-section dash-prof-card" data-action="profChat.show">'
            + '<div class="dash-prof-icon">🎓</div>'
            + '<div class="dash-prof-content">'
            + '<h3>Prof IA</h3>'
            + '<p>Pose une question sur <strong>' + (window.StudFlow.app.escapeText ? window.StudFlow.app.escapeText(name) : name) + '</strong></p>'
            + '</div>'
            + '<span class="dash-prof-arrow">→</span>'
            + '</div>';
    }

    // ==================== NEXT ACTION CARD ====================
    function getNextAction() {
        // Read daily mission state to know what's been done today
        var missionState = window.StudFlow.storage.loadData('daily_mission', null);
        var todayKey = new Date().toISOString().slice(0, 10);

        // Reset if not today's data
        if (!missionState || missionState.date !== todayKey) {
            missionState = { date: todayKey, focus: 0, flashcards: 0, quiz: 0, completed: false };
        }

        var focusDone = missionState.focus >= 1;
        var flashcardsDone = missionState.flashcards >= 5;
        var quizDone = missionState.quiz >= 3;

        if (missionState.completed || (focusDone && flashcardsDone && quizDone)) {
            return { type: 'done' };
        }

        if (!focusDone) {
            return {
                type: 'action',
                icon: '🎯',
                title: 'Session Focus de 25 minutes',
                desc: 'Aujourd\'hui tu peux commencer par une session Focus de 25 minutes.',
                btnLabel: 'Commencer la session',
                action: 'focus',
                accent: 'sun'
            };
        }

        if (!flashcardsDone) {
            return {
                type: 'action',
                icon: '🎴',
                title: 'Reviser tes flashcards',
                desc: 'Ta session focus est faite ! Enchaine avec une revision de flashcards.',
                btnLabel: 'Reviser mes cartes',
                action: 'flashcard',
                accent: 'mint'
            };
        }

        // Quiz remaining
        return {
            type: 'action',
            icon: '⚡',
            title: 'Tester tes connaissances',
            desc: 'Focus et flashcards termines ! Finis avec un quiz rapide.',
            btnLabel: 'Lancer le quiz',
            action: 'quiz',
            accent: 'accent'
        };
    }

    function renderNextAction() {
        var next = getNextAction();
        var coachMsg = COACH_MESSAGES[Math.floor(Math.random() * COACH_MESSAGES.length)];

        if (next.type === 'done') {
            return '<div class="dash-section dash-next-action dash-next-done">'
                + '<div class="dash-next-header">'
                + '<span class="dash-next-icon" aria-hidden="true">✅</span>'
                + '<h3 class="dash-next-title">Bravo !</h3>'
                + '</div>'
                + '<p class="dash-next-desc">Tu as complete tes activites aujourd\'hui. Reviens demain pour continuer ta serie !</p>'
                + '<p class="dash-next-coach">' + coachMsg + '</p>'
                + '</div>';
        }

        return '<div class="dash-section dash-next-action">'
            + '<div class="dash-next-header">'
            + '<span class="dash-next-icon" aria-hidden="true">' + next.icon + '</span>'
            + '<div>'
            + '<h3 class="dash-next-title">Ta prochaine etape</h3>'
            + '<p class="dash-next-desc">' + next.desc + '</p>'
            + '</div>'
            + '</div>'
            + '<button class="dash-next-btn dash-next-btn--' + next.accent + '" data-action="dashboard.goTo" data-param="' + next.action + '">'
            + next.btnLabel + ' →'
            + '</button>'
            + '<p class="dash-next-coach">' + coachMsg + '</p>'
            + '</div>';
    }

    // ==================== STREAK ALERT ====================
    function renderStreakAlert(gamStats) {
        var streak = gamStats.streak || 0;
        if (streak < 2) return ''; // No streak to lose

        // Only show alert after 18h if daily mission not completed
        var hour = new Date().getHours();
        if (hour < 18) return '';

        var dm = window.StudFlow.dailyMission;
        if (!dm) return '';
        var dmState = window.StudFlow.storage.loadData('studflow_daily_mission', null);
        if (dmState && dmState.completed) return ''; // Mission done, streak safe

        return '<div class="dash-section streak-alert">'
            + '<div class="streak-alert-content">'
            + '<span class="streak-alert-icon">\u26A0\uFE0F</span>'
            + '<div class="streak-alert-text">'
            + '<strong>Tu vas perdre ton streak de ' + streak + ' jours !</strong>'
            + '<span>Complete ta mission avant minuit.</span>'
            + '</div>'
            + '</div>'
            + '<button class="streak-alert-btn" data-action="dashboard.goTo" data-param="flashcard">'
            + 'Sauver mon streak \u2192'
            + '</button>'
            + '</div>';
    }

    // ==================== HERO BAC (countdown + CTA + stats) ====================
    function renderHeroBac(gamStats) {
        // Detect exam level
        var examLevel = (window.StudFlow.subjects && window.StudFlow.subjects.getExamLevel) ? window.StudFlow.subjects.getExamLevel() : 'bac';
        var examLabel = examLevel === 'brevet' ? 'Brevet' : 'Bac';

        // Countdown - Brevet: June 26 2026, Bac: June 18
        var now = new Date();
        var examDate;
        if (examLevel === 'brevet') {
            examDate = new Date(now.getFullYear(), 5, 26); // June 26
            if (now > new Date(now.getFullYear(), 6, 5)) {
                examDate = new Date(now.getFullYear() + 1, 5, 26);
            }
        } else {
            examDate = new Date(now.getFullYear(), 5, 18); // June 18
            if (now > new Date(now.getFullYear(), 6, 5)) {
                examDate = new Date(now.getFullYear() + 1, 5, 18);
            }
        }
        var days = Math.max(0, Math.ceil((examDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

        // Urgency
        var urgencyClass = 'hero-calm';
        var msg = 'Tu as le temps. Pose les bases.';
        if (days <= 10) {
            urgencyClass = 'hero-critical';
            msg = 'Derniere ligne droite. Tu es pret(e).';
        } else if (days <= 30) {
            urgencyClass = 'hero-urgent';
            msg = '10 min maintenant = des points en plus en juin.';
        } else if (days <= 90) {
            urgencyClass = 'hero-soon';
            msg = 'Le ' + examLabel + ' approche. Chaque jour compte.';
        }

        // Stats
        var streak = gamStats.streak || 0;
        var xp = gamStats.xp || 0;
        var pct = gamStats.progressPct || 0;
        var level = gamStats.level || 1;

        var statsHTML = '<div class="hero-bac-stats">';
        if (streak > 0) statsHTML += '<span class="hero-bac-stat">\uD83D\uDD25 ' + streak + 'j</span>';
        if (xp > 0) statsHTML += '<span class="hero-bac-stat">\u2728 ' + xp + ' XP</span>';
        statsHTML += '</div>';

        // Continue CTA
        var sr = window.StudFlow.spacedRepetition;
        var dueCount = sr ? sr.getDueCount() : 0;
        var ctaAction = dueCount > 0 ? 'sr' : 'flashcard';
        var ctaLabel = dueCount > 0 ? 'Reviser ' + dueCount + ' carte' + (dueCount > 1 ? 's' : '') : 'Commencer ma session';

        // Streak hero (gros, central, émotionnel)
        var jokers = (window.StudFlow.gamification && window.StudFlow.gamification.getStreakFreezes)
            ? window.StudFlow.gamification.getStreakFreezes() : 0;
        var jokerLine = jokers > 0
            ? '<span class="hero-streak-jokers" style="display:block;margin-top:4px;font-size:0.78rem;color:var(--text-muted);font-weight:500;">❄️ ' + jokers + ' joker' + (jokers > 1 ? 's' : '') + ' en réserve</span>'
            : '';
        var streakHTML = '';
        if (streak > 0) {
            var streakSize = streak >= 7 ? 'streak-fire' : (streak >= 3 ? 'streak-warm' : '');
            streakHTML = '<div class="hero-streak ' + streakSize + '">'
                + '<span class="hero-streak-flame">\uD83D\uDD25</span>'
                + '<span class="hero-streak-num">' + streak + '</span>'
                + '<span class="hero-streak-label">' + streak + ' jour' + (streak > 1 ? 's' : '') + ' de suite' + jokerLine + '</span>'
                + '</div>';
        } else {
            streakHTML = '<div class="hero-streak hero-streak-zero">'
                + '<span class="hero-streak-flame">\uD83D\uDD25</span>'
                + '<span class="hero-streak-label">Lance ta premi\u00E8re session\u00A0!' + jokerLine + '</span>'
                + '</div>';
        }

        // ===== STREAK DANGER INDICATOR =====
        var streakDangerHTML = '';
        if (streak > 0) {
            var todayKey = new Date().toDateString();
            var dailyData = window.StudFlow.storage.loadData('dailyDashboard', { date: null });
            var hasSessionToday = dailyData.date === todayKey && (dailyData.objectivesCompleted || []).length > 0;

            // Also check daily mission as fallback
            if (!hasSessionToday) {
                var dmState = window.StudFlow.storage.loadData('studflow_daily_mission', null);
                if (dmState && dmState.completed && dmState.date === todayKey) {
                    hasSessionToday = true;
                }
            }

            if (!hasSessionToday) {
                var nowHour = new Date().getHours();
                var nowMin = new Date().getMinutes();
                var dangerCSS = '<style>'
                    + '.streak-warning{background:linear-gradient(135deg,#fef3cd,#fff3cd);border:1px solid #ffc107;border-radius:12px;padding:10px 14px;margin:8px 0;text-align:center;font-size:0.9em;animation:streakPulseSlow 3s ease-in-out infinite}'
                    + '.streak-danger{background:linear-gradient(135deg,#ffe0cc,#ffd6b3);border:1px solid #ff8c00;border-radius:12px;padding:10px 14px;margin:8px 0;text-align:center;font-size:0.9em;animation:streakPulseMed 2s ease-in-out infinite}'
                    + '.streak-critical{background:linear-gradient(135deg,#ffcccc,#ff9999);border:1px solid #ff3333;border-radius:12px;padding:12px 14px;margin:8px 0;text-align:center;font-size:0.95em;font-weight:600;animation:streakPulseFast 1s ease-in-out infinite}'
                    + '@keyframes streakPulseSlow{0%,100%{opacity:1}50%{opacity:0.85}}'
                    + '@keyframes streakPulseMed{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.9;transform:scale(1.01)}}'
                    + '@keyframes streakPulseFast{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.85;transform:scale(1.02)}}'
                    + '</style>';

                if (nowHour >= 23) {
                    var minsLeft = 60 - nowMin;
                    streakDangerHTML = dangerCSS
                        + '<div class="streak-critical">'
                        + '\uD83D\uDC80 DERNIERE CHANCE ! Ta serie de ' + streak + 'j expire dans ' + minsLeft + ' minute' + (minsLeft > 1 ? 's' : '') + ' !'
                        + '</div>';
                } else if (nowHour >= 21) {
                    var hLeft = 23 - nowHour;
                    var hLabel = hLeft > 0 ? hLeft + 'h' : '';
                    streakDangerHTML = dangerCSS
                        + '<div class="streak-danger">'
                        + '\uD83D\uDD25 ATTENTION ! Plus que ' + hLabel + ' pour sauver ta serie de ' + streak + 'j !'
                        + '</div>';
                } else if (nowHour >= 18) {
                    streakDangerHTML = dangerCSS
                        + '<div class="streak-warning">'
                        + '\u26A0\uFE0F Ta serie de ' + streak + 'j est en danger ! Fais 1 session pour la garder.'
                        + '</div>';
                }
            }
        }

        return '<div class="dash-section hero-bac ' + urgencyClass + '">'
            + streakHTML
            + streakDangerHTML
            + '<div class="hero-bac-countdown">'
            + '<span class="hero-bac-days">J\u2212' + days + '</span>'
            + '<span class="hero-bac-label">avant le ' + examLabel + '</span>'
            + '</div>'
            + '<p class="hero-bac-msg">' + msg + '</p>'
            + '<button class="hero-bac-cta" data-action="dashboard.goTo" data-param="' + ctaAction + '">'
            + ctaLabel + ' \u2192'
            + '</button>'
            + statsHTML
            + '</div>';
    }

    // ==================== CONTINUE BUTTON ====================
    function renderContinueButton() {
        // Determine last activity to resume
        var sr = window.StudFlow.spacedRepetition;
        var dueCount = sr ? sr.getDueCount() : 0;
        var state = getAppState();
        var hasPdf = !!(state.pdfText && state.pdfText.length > 50);
        var hasCards = (state.flashcards && state.flashcards.length > 0)
            || (state.customFlashcards && state.customFlashcards.length > 0);

        // Pick the best "continue" action
        var action = '';
        var label = '';
        var icon = '';

        if (dueCount > 0) {
            action = 'sr';
            label = dueCount + ' carte' + (dueCount > 1 ? 's' : '') + ' a reviser';
            icon = '🔄';
        } else if (hasCards) {
            action = 'flashcard';
            label = 'Continuer les flashcards';
            icon = '🎴';
        } else if (hasPdf) {
            action = 'flashcard';
            label = 'Reviser ton cours';
            icon = '📄';
        } else {
            return ''; // Nothing to continue
        }

        return '<div class="dash-section dash-continue">'
            + '<button class="dash-continue-btn" data-action="dashboard.goTo" data-param="' + action + '">'
            + '<span class="dash-continue-icon">' + icon + '</span>'
            + '<span class="dash-continue-text">'
            + '<strong>Continuer</strong>'
            + '<span>' + label + '</span>'
            + '</span>'
            + '<span class="dash-continue-arrow">\u2192</span>'
            + '</button>'
            + '</div>';
    }

    // ==================== STREAK + XP CARD ====================
    function renderStreakCard(gamStats) {
        var streak = gamStats.streak || 0;
        var xp = gamStats.xp || 0;
        var level = gamStats.level || 1;
        var nextXp = gamStats.nextLevelXp || 100;
        var pct = gamStats.progressPct || 0;

        if (streak === 0 && xp === 0) return '';

        var streakHTML = streak > 0
            ? '<div class="dash-streak-pill">'
            + '<span class="dash-streak-fire">\uD83D\uDD25</span>'
            + '<span class="dash-streak-count">' + streak + ' jour' + (streak > 1 ? 's' : '') + '</span>'
            + '</div>'
            : '';

        var xpHTML = '<div class="dash-xp-mini">'
            + '<div class="dash-xp-mini-bar"><div class="dash-xp-mini-fill" style="width:' + pct + '%"></div></div>'
            + '<span class="dash-xp-mini-label">Niv. ' + level + ' \u00B7 ' + xp + '/' + nextXp + ' XP</span>'
            + '</div>';

        return '<div class="dash-section dash-engagement-row">'
            + streakHTML + xpHTML
            + '</div>';
    }

    // ==================== HERO: "QUE VEUX-TU FAIRE ?" ====================
    function renderHeroActions() {
        var subtexts = [
            'Revise moins. Retiens plus.',
            '10 min/jour. Bac dans la poche.',
            'Chaque jour compte. Lance-toi.',
            'Ton futur toi va kiffer.',
            'Meme 5 min, ca change tout.'
        ];
        var sub = subtexts[Math.floor(Math.random() * subtexts.length)];

        return '<div class="dash-section dash-hero-question">'
            + '<h2 class="dash-hero-title">Que veux-tu faire ?</h2>'
            + '<p class="dash-hero-sub">' + sub + '</p>'
            + '<div class="dash-hero-grid dash-hero-grid--2">'
            + '<button class="dash-hero-btn dash-hero-btn--primary" data-action="dashboard.goTo" data-param="flashcard">'
            + '<span class="dash-hero-icon">🎴</span>'
            + '<span class="dash-hero-label">Reviser</span>'
            + '</button>'
            + '<button class="dash-hero-btn dash-hero-btn--primary" data-action="dashboard.goTo" data-param="quiz">'
            + '<span class="dash-hero-icon">⚡</span>'
            + '<span class="dash-hero-label">S\'entrainer</span>'
            + '</button>'
            + '</div>'
            + '<div class="dash-hero-secondary">'
            + '<button class="dash-hero-link" data-action="dashboard.goTo" data-param="upload">'
            + '<span>📄</span> Importer un cours'
            + '</button>'
            + '<button class="dash-hero-link" data-action="dashboard.goTo" data-param="matieres">'
            + '<span>\uD83D\uDCDA</span> Matieres'
            + '</button>'
            + '<button class="dash-hero-link" data-action="screen:exam">'
            + '<span>\uD83C\uDFAF</span> Mode Examen'
            + '</button>'
            + '</div>'
            + '</div>';
    }

    // ==================== MATIERES SCROLLABLES ====================
    function renderSubjectStrip() {
        var subjects = window.StudFlow.subjects ? window.StudFlow.subjects.getAll() : [];
        if (subjects.length === 0) return '';

        var cardsHTML = '';
        for (var i = 0; i < subjects.length; i++) {
            var s = subjects[i];
            cardsHTML += '<button class="dash-subj-chip" data-action="dashboard.goTo" data-param="subj_' + s.id + '">'
                + '<span class="dash-subj-chip-icon">' + (s.icon || '📘') + '</span>'
                + '<span class="dash-subj-chip-name">' + (s.name || s.id) + '</span>'
                + '</button>';
        }

        return '<div class="dash-section dash-subjects-strip">'
            + '<div class="dash-subjects-scroll">'
            + cardsHTML
            + '</div>'
            + '</div>';
    }

    // ==================== SUBJECT GRID (mode guide) ====================
    function renderSubjectGrid() {
        var subjects = window.StudFlow.subjects ? window.StudFlow.subjects.getAll() : [];
        if (subjects.length === 0) return '';

        // Priorite : matieres principales du Bac
        var priority = ['francais', 'francais2', 'maths', 'philo', 'histgeo', 'svt', 'physique', 'ses', 'anglais'];
        var sorted = [];
        for (var p = 0; p < priority.length; p++) {
            for (var s = 0; s < subjects.length; s++) {
                if (subjects[s].id === priority[p]) { sorted.push(subjects[s]); break; }
            }
        }
        // Ajouter les restants
        for (var r = 0; r < subjects.length; r++) {
            if (priority.indexOf(subjects[r].id) === -1) sorted.push(subjects[r]);
        }

        var cardsHTML = '';
        for (var i = 0; i < sorted.length; i++) {
            var subj = sorted[i];
            var fcCount = 0;
            for (var j = 0; j < (subj.sections || []).length; j++) {
                fcCount += (subj.sections[j].flashcards || []).length;
            }
            cardsHTML += '<button class="dash-subj-card" data-action="dashboard.goTo" data-param="subj_' + subj.id + '">'
                + '<span class="dash-subj-card-icon">' + (subj.icon || '\uD83D\uDCD8') + '</span>'
                + '<span class="dash-subj-card-name">' + (subj.name || subj.id) + '</span>'
                + '<span class="dash-subj-card-count">' + fcCount + ' cartes</span>'
                + '</button>';
        }

        return '<div class="dash-section dash-subject-grid-section">'
            + '<h3 class="dash-section-title">\uD83D\uDCDA Choisir une matiere</h3>'
            + '<p class="dash-section-hint">Choisis ta matiere pour voir les chapitres</p>'
            + '<div class="dash-subject-grid">'
            + cardsHTML
            + '</div>'
            + '</div>';
    }

    // ==================== SESSION CARD (focus + extras) ====================
    function renderSessionCard() {
        return '<div class="dash-section dash-session-card">'
            + '<h3 class="dash-session-title">Outils</h3>'
            + '<div class="dash-session-grid">'
            + '<button class="dash-session-btn focus" data-action="dashboard.goTo" data-param="focus">'
            + '<span class="dash-session-icon">🎯</span>'
            + '<span class="dash-session-label">Focus</span>'
            + '</button>'
            + '<button class="dash-session-btn matieres" data-action="dashboard.goTo" data-param="matieres">'
            + '<span class="dash-session-icon">📚</span>'
            + '<span class="dash-session-label">Matieres</span>'
            + '</button>'
            + '<button class="dash-session-btn flashcard" data-action="dashboard.goTo" data-param="coach">'
            + '<span class="dash-session-icon">🧠</span>'
            + '<span class="dash-session-label">Coach</span>'
            + '</button>'
            + '<button class="dash-session-btn quiz" data-action="dashboard.goTo" data-param="stress">'
            + '<span class="dash-session-icon">💆</span>'
            + '<span class="dash-session-label">Zen</span>'
            + '</button>'
            + '</div>'
            + '</div>';
    }

    // ==================== CHALLENGE CARD ====================
    function renderChallengeCard() {
        // Hidden until Supabase challenges table is configured
        return '';
    }

    // ==================== CHRONO CARD ====================
    function renderChronoCard() {
        var best = window.StudFlow.chronoMode ? window.StudFlow.chronoMode.getBestScore() : 0;
        var todayDone = window.StudFlow.chronoMode ? window.StudFlow.chronoMode.hasPlayedToday() : false;
        var todayScore = window.StudFlow.chronoMode ? window.StudFlow.chronoMode.getTodayScore() : null;
        var subLabel = todayDone ? ('Score du jour : ' + todayScore + ' pts') : '60s pour un max de points !';
        var bestLabel = best > 0 ? (' \u00B7 Record : ' + best + ' pts') : '';
        return '<div class="dash-section dash-chrono-cta" data-action="screen:chrono">'
            + '<div class="dash-challenge-icon">\u23F1\uFE0F</div>'
            + '<div class="dash-challenge-content">'
            + '<h3>Mode Chrono</h3>'
            + '<p>' + subLabel + bestLabel + '</p>'
            + '</div>'
            + '<span class="dash-challenge-arrow">\u2192</span>'
            + '</div>';
    }

    // ==================== DAILY TIP ====================
    var DASHBOARD_TIPS = [
        { icon: '🧠', tip: 'Explique a voix haute ce que tu apprends. Si tu galeres, c\'est la qu\'il faut reviser.' },
        { icon: '😴', tip: 'Revise juste avant de dormir. Ton cerveau stocke les infos pendant la nuit.' },
        { icon: '📱', tip: 'Ton tel dans une autre piece = +20% de concentration. Teste, tu verras.' },
        { icon: '✍️', tip: 'Ecrire a la main active 5x plus de zones du cerveau que taper au clavier.' },
        { icon: '🏃', tip: '10 min de marche entre 2 sessions = +25% de concentration. Ton cerveau a besoin d\'oxygene.' },
        { icon: '💧', tip: 'Ton cerveau = 75% d\'eau. Bois un verre avant de bosser.' },
        { icon: '🔁', tip: 'Tu oublies 80% en 24h. Reviens demain et tu retiens tout.' },
        { icon: '❌', tip: 'Se tromper active l\'hippocampe 3x plus qu\'une bonne reponse. Les erreurs = progression.' },
        { icon: '🎯', tip: '"Juste 5 min." Apres 5 min ton cerveau est lance et tu continues.' },
        { icon: '📝', tip: 'Se tester est 2x plus efficace que relire. Les quiz > les cours.' }
    ];

    // ==================== JAUGE QUOTIDIENNE ====================
    function renderDailyGauge() {
        var DAILY_TARGET = 10; // cartes par jour
        var todayKey = new Date().toISOString().slice(0, 10);
        var data = window.StudFlow.storage.loadData('studflow_daily_gauge', { date: null, count: 0 });
        if (data.date !== todayKey) {
            data = { date: todayKey, count: 0 };
        }
        var count = data.count || 0;
        var pct = Math.min(100, Math.round((count / DAILY_TARGET) * 100));
        var done = count >= DAILY_TARGET;

        var msg = done
            ? '\u2705 Objectif atteint\u00A0! Bravo\u00A0!'
            : count === 0
                ? 'Commence ta journ\u00E9e\u00A0!'
                : 'Encore ' + (DAILY_TARGET - count) + ' carte' + ((DAILY_TARGET - count) > 1 ? 's' : '');

        return '<div class="dash-section dash-daily-gauge">'
            + '<div class="gauge-header">'
            + '<span class="gauge-label">\uD83C\uDFAF Objectif du jour</span>'
            + '<span class="gauge-count">' + count + '/' + DAILY_TARGET + '</span>'
            + '</div>'
            + '<div class="gauge-bar"><div class="gauge-fill' + (done ? ' gauge-done' : '') + '" style="width:' + pct + '%"></div></div>'
            + '<p class="gauge-msg">' + msg + '</p>'
            + '</div>';
    }

    // Incrementer la jauge (appele depuis flashcards)
    function incrementDailyGauge() {
        var todayKey = new Date().toISOString().slice(0, 10);
        var data = window.StudFlow.storage.loadData('studflow_daily_gauge', { date: null, count: 0 });
        if (data.date !== todayKey) {
            data = { date: todayKey, count: 0 };
        }
        data.count++;
        window.StudFlow.storage.saveData('studflow_daily_gauge', data);

        // Confetti si objectif atteint
        if (data.count === 10 && window.StudFlow.gamification) {
            window.StudFlow.gamification.spawnConfetti();
            window.StudFlow.gamification.addXP('daily_mission');
            window.StudFlow.gamification.showToast('Objectif du jour atteint\u00A0!', 'streak', '\uD83C\uDFAF');
        }
    }

    // ==================== RÉSUMÉ HEBDOMADAIRE ====================
    function renderWeeklySummary() {
        // Afficher seulement le lundi (ou si pas vu cette semaine)
        var now = new Date();
        var dayOfWeek = now.getDay(); // 0=dim, 1=lun
        var weekKey = now.getFullYear() + '-W' + Math.ceil((now.getDate() + 6 - now.getDay()) / 7);
        var lastShown = localStorage.getItem('studflow_weekly_shown');
        if (lastShown === weekKey && dayOfWeek !== 1) return '';

        var gamStats = getGamificationStats();
        var totalCards = 0;
        if (window.StudFlow.studentProfile) {
            var allStats = window.StudFlow.studentProfile.getAllSubjectStats();
            for (var i = 0; i < allStats.length; i++) totalCards += allStats[i].total;
        }
        if (totalCards === 0 && gamStats.xp === 0) return '';

        localStorage.setItem('studflow_weekly_shown', weekKey);

        return '<div class="dash-section dash-weekly">'
            + '<div class="weekly-header">'
            + '<span class="weekly-icon">\uD83D\uDCCA</span>'
            + '<span class="weekly-title">Ta semaine</span>'
            + '</div>'
            + '<div class="weekly-stats">'
            + '<div class="weekly-stat"><span class="weekly-val">' + totalCards + '</span><span class="weekly-label">cartes</span></div>'
            + '<div class="weekly-stat"><span class="weekly-val">' + (gamStats.streak || 0) + 'j</span><span class="weekly-label">streak</span></div>'
            + '<div class="weekly-stat"><span class="weekly-val">' + (gamStats.xp || 0) + '</span><span class="weekly-label">XP</span></div>'
            + '</div>'
            + '<p class="weekly-msg">\uD83D\uDCAA Continue cette semaine\u00A0!</p>'
            + '</div>';
    }

    // ==================== COMPTEUR DE TEMPS ====================
    function renderStudyTimer() {
        var todayKey = new Date().toISOString().slice(0, 10);
        var data = window.StudFlow.storage.loadData('studflow_study_time', { date: null, seconds: 0 });
        if (data.date !== todayKey) data = { date: todayKey, seconds: 0 };
        var mins = Math.floor(data.seconds / 60);
        if (mins === 0) return '';
        var msg = mins < 5 ? 'Bon d\u00E9but\u00A0!' : mins < 15 ? 'Beau travail\u00A0!' : 'Impressionnant\u00A0!';
        return '<div class="dash-section dash-study-timer">'
            + '<span class="study-timer-icon">\u23F1\uFE0F</span>'
            + '<span class="study-timer-text">' + mins + ' min r\u00E9vis\u00E9es aujourd\u2019hui</span>'
            + '<span class="study-timer-msg">' + msg + '</span>'
            + '</div>';
    }

    function incrementStudyTime(seconds) {
        var todayKey = new Date().toISOString().slice(0, 10);
        var data = window.StudFlow.storage.loadData('studflow_study_time', { date: null, seconds: 0 });
        if (data.date !== todayKey) data = { date: todayKey, seconds: 0 };
        data.seconds += (seconds || 30);
        window.StudFlow.storage.saveData('studflow_study_time', data);
    }

    // ==================== FUN FACT QUOTIDIEN ====================
    var FUN_FACTS = [
        '\uD83E\uDDE0 Ton ADN mis bout \u00E0 bout mesurerait 2 fois le diam\u00E8tre du syst\u00E8me solaire.',
        '\uD83D\uDCDA Tu oublies 80% de ce que tu apprends en 24h sans r\u00E9vision.',
        '\u26A1 Ton cerveau utilise 20% de ton \u00E9nergie alors qu\u2019il ne fait que 2% de ton poids.',
        '\uD83D\uDCA4 Tu retiens mieux si tu r\u00E9vises juste avant de dormir.',
        '\uD83C\uDFB5 La musique sans paroles am\u00E9liore la concentration de 15%.',
        '\uD83D\uDCA7 Boire 2L d\u2019eau par jour am\u00E9liore la m\u00E9moire de 14%.',
        '\uD83C\uDFC3 10 min de marche entre 2 sessions = +25% de concentration.',
        '\u270D\uFE0F \u00C9crire \u00E0 la main active 5x plus de zones du cerveau que taper.',
        '\uD83D\uDD25 Un streak de 7 jours multiplie par 3 ta r\u00E9tention.',
        '\uD83C\uDFC6 Se tester est 2x plus efficace que relire ses cours.',
        '\uD83E\uDDD1\u200D\uD83C\uDFEB Expliquer \u00E0 quelqu\u2019un ce qu\u2019on a appris = la meilleure fa\u00E7on de retenir.',
        '\uD83C\uDF0D L\u2019espagnol est la 4e langue la plus parl\u00E9e au monde.',
        '\uD83D\uDCF1 \u00C9teindre les notifs pendant 25 min = le double de productivit\u00E9.',
        '\uD83E\uDD14 Socrate ne savait qu\u2019une chose : qu\u2019il ne savait rien.'
    ];

    // ==================== PARCOURS GUIDÉ ====================
    function renderNextStep() {
        if (!window.StudFlow.subjects) return '';
        var subjects = window.StudFlow.subjects.getAll();
        if (subjects.length === 0) return '';

        // Trouver la prochaine section non visitée
        var nextSubj = null;
        var nextSection = null;
        var nextSectionIdx = -1;

        for (var i = 0; i < subjects.length; i++) {
            var subj = subjects[i];
            var prog = window.StudFlow.subjects.getProgress(subj.id);
            if (!prog) continue;
            for (var j = 0; j < (subj.sections || []).length; j++) {
                if (prog.visited.indexOf(subj.sections[j].id) === -1) {
                    nextSubj = subj;
                    nextSection = subj.sections[j];
                    nextSectionIdx = j;
                    break;
                }
            }
            if (nextSection) break;
        }

        // Si le profil élève indique des matières faibles, prioriser celles-la
        if (window.StudFlow.studentProfile) {
            var weak = window.StudFlow.studentProfile.getWeakSubjects();
            if (weak.length > 0) {
                for (var w = 0; w < weak.length; w++) {
                    var weakSubj = null;
                    for (var s = 0; s < subjects.length; s++) {
                        if (subjects[s].id === weak[w].id) { weakSubj = subjects[s]; break; }
                    }
                    if (!weakSubj) continue;
                    var wProg = window.StudFlow.subjects.getProgress(weakSubj.id);
                    for (var k = 0; k < (weakSubj.sections || []).length; k++) {
                        if (!wProg || wProg.visited.indexOf(weakSubj.sections[k].id) === -1) {
                            nextSubj = weakSubj;
                            nextSection = weakSubj.sections[k];
                            nextSectionIdx = k;
                            break;
                        }
                    }
                    if (nextSection && nextSubj.id === weak[w].id) break;
                }
            }
        }

        if (!nextSubj || !nextSection) return '';

        return '<div class="dash-section dash-next-step" data-action="subjects.openSection" data-param="' + nextSubj.id + '" data-param2="' + nextSectionIdx + '">'
            + '<div class="next-step-content">'
            + '<span class="next-step-icon">\u27A1\uFE0F</span>'
            + '<div class="next-step-text">'
            + '<span class="next-step-label">Prochaine \u00E9tape</span>'
            + '<strong class="next-step-title">' + (nextSubj.icon || '') + ' ' + nextSection.title + '</strong>'
            + '</div>'
            + '<span class="next-step-arrow">\u2192</span>'
            + '</div>'
            + '</div>';
    }

    // ==================== MINI-DÉFI QUOTIDIEN ====================
    function renderDailyChallenge(gamStats) {
        // Day-of-week based challenges (0=Sun, 1=Mon, ..., 6=Sat)
        var now = new Date();
        var dayOfWeek = now.getDay();
        var todayKey = now.toDateString();
        var challenges = [
            { icon: '\uD83C\uDF1F', text: 'Session libre 10 min', action: 'focus', type: 'free', reward: 'XP x2' },        // Sunday
            { icon: '\uD83C\uDFB4', text: '10 flashcards en 5 min', action: 'flashcard', type: 'speed', reward: 'XP x2' },  // Monday
            { icon: '\uD83E\uDDE0', text: 'Quiz 15 questions', action: 'quiz', type: 'quiz', reward: 'XP x2' },              // Tuesday
            { icon: '\uD83D\uDCDA', text: 'Revise 3 sections', action: 'flashcard', type: 'sections', reward: 'XP x2' },     // Wednesday
            { icon: '\uD83D\uDD25', text: 'Combo x5 minimum', action: 'flashcard', type: 'combo', reward: 'XP x2' },         // Thursday
            { icon: '\u26A1', text: '20 flashcards speed run', action: 'flashcard', type: 'speedrun', reward: 'XP x2' },      // Friday
            { icon: '\uD83C\uDFC6', text: 'Quiz parfait (0 erreur)', action: 'quiz', type: 'perfect', reward: 'XP x2' }       // Saturday
        ];
        var challenge = challenges[dayOfWeek];

        // Pick a random subject icon for today (deterministic by date)
        var subjects = window.StudFlow.subjects ? window.StudFlow.subjects.getAll() : [];
        var subjectIcon = '\uD83D\uDCDA';
        var subjectName = '';
        if (subjects.length > 0) {
            var dayOfYear = Math.floor((Date.now() - new Date(now.getFullYear(), 0, 0)) / 86400000);
            var pickedSubj = subjects[dayOfYear % subjects.length];
            subjectIcon = pickedSubj.icon || '\uD83D\uDCD8';
            subjectName = pickedSubj.name || pickedSubj.id;
        }

        // Check completion status in localStorage
        var dcState = window.StudFlow.storage.loadData('dailyChallenge', { date: null, completed: false });
        var isCompleted = dcState.date === todayKey && dcState.completed;
        var isNew = dcState.date !== todayKey;

        // Countdown until midnight
        var midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        var msLeft = midnight.getTime() - now.getTime();
        var hrsLeft = Math.floor(msLeft / 3600000);
        var minsLeft = Math.floor((msLeft % 3600000) / 60000);
        var countdownText = hrsLeft > 0 ? hrsLeft + 'h ' + minsLeft + 'min' : minsLeft + 'min';

        // Badge
        var badgeHTML = '';
        if (isCompleted) {
            badgeHTML = '<span class="dash-challenge-badge dash-challenge-done">\u2705 Complet\u00E9</span>';
        } else if (isNew) {
            badgeHTML = '<span class="dash-challenge-badge dash-challenge-new">NOUVEAU</span>';
        }

        // Subject line
        var subjLine = subjectName ? subjectIcon + ' ' + subjectName : '';

        // CSS for the enhanced daily challenge
        var challengeCSS = '<style>'
            + '.dash-daily-challenge-v2{background:linear-gradient(135deg,#667eea22,#764ba222);border:2px solid #667eea44;border-radius:16px;padding:16px;position:relative;overflow:hidden}'
            + '.dash-daily-challenge-v2.completed{opacity:0.7;border-color:#22c55e44;background:linear-gradient(135deg,#22c55e11,#16a34a11)}'
            + '.dash-challenge-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}'
            + '.dash-challenge-badge{font-size:0.7em;padding:3px 8px;border-radius:20px;font-weight:700;text-transform:uppercase}'
            + '.dash-challenge-new{background:#667eea;color:#fff;animation:badgePop 0.6s ease}'
            + '.dash-challenge-done{background:#22c55e22;color:#22c55e}'
            + '.dash-challenge-countdown{font-size:0.75em;color:#888;display:flex;align-items:center;gap:4px}'
            + '.dash-challenge-countdown-icon{font-size:0.9em}'
            + '.dash-challenge-body{display:flex;align-items:center;gap:12px}'
            + '.dash-challenge-icon-big{font-size:2em;flex-shrink:0}'
            + '.dash-challenge-details{flex:1}'
            + '.dash-challenge-title-v2{font-weight:700;font-size:1em;margin:0 0 2px}'
            + '.dash-challenge-subj{font-size:0.8em;color:#888;margin:0 0 4px}'
            + '.dash-challenge-desc{font-size:0.85em;color:#666;margin:0}'
            + '.dash-challenge-reward-v2{background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;font-weight:700;font-size:0.75em;padding:4px 10px;border-radius:20px;white-space:nowrap}'
            + '.dash-challenge-cta{display:block;width:100%;margin-top:12px;padding:10px;border:none;border-radius:12px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;font-weight:700;font-size:0.95em;cursor:pointer;text-align:center}'
            + '.dash-challenge-cta:active{transform:scale(0.98)}'
            + '@keyframes badgePop{0%{transform:scale(0)}50%{transform:scale(1.2)}100%{transform:scale(1)}}'
            + '</style>';

        var ctaParam = challenge.action === 'quiz' ? 'quiz' : (challenge.action === 'focus' ? 'focus' : 'flashcard');

        return challengeCSS
            + '<div class="dash-section dash-daily-challenge dash-daily-challenge-v2' + (isCompleted ? ' completed' : '') + '">'
            + '<div class="dash-challenge-top">'
            + '<h4 class="dash-challenge-title-v2">\uD83C\uDFAF D\u00E9fi du jour</h4>'
            + badgeHTML
            + '</div>'
            + '<div class="dash-challenge-body">'
            + '<span class="dash-challenge-icon-big">' + challenge.icon + '</span>'
            + '<div class="dash-challenge-details">'
            + (subjLine ? '<p class="dash-challenge-subj">' + subjLine + '</p>' : '')
            + '<p class="dash-challenge-desc">' + challenge.text + '</p>'
            + '</div>'
            + '<span class="dash-challenge-reward-v2">' + challenge.reward + '</span>'
            + '</div>'
            + (!isCompleted
                ? '<div class="dash-challenge-countdown">'
                    + '<span class="dash-challenge-countdown-icon">\u23F3</span>'
                    + 'Expire dans ' + countdownText
                    + '</div>'
                    + '<button class="dash-challenge-cta" data-action="dashboard.goTo" data-param="' + ctaParam + '">'
                    + 'Relever le d\u00E9fi \u2192'
                    + '</button>'
                : '')
            + '</div>';
    }

    // ==================== PROFIL ÉLÈVE ====================
    function renderStudentProfile() {
        if (!window.StudFlow.studentProfile) return '';
        var stats = window.StudFlow.studentProfile.getAllSubjectStats();
        if (stats.length === 0) return '';

        var html = '<div class="dash-section dash-student-profile">'
            + '<h3 class="dash-section-title">Ton niveau par mati\u00E8re</h3>'
            + '<div class="dash-profile-grid">';

        // Noms lisibles
        var names = {
            'francais': 'Fran\u00E7ais', 'francais2': 'Bac Fr', 'philo': 'Philo',
            'maths': 'Maths', 'histgeo': 'Hist-G\u00E9o', 'svt': 'SVT', 'histoire': 'Histoire',
            'physique': 'Physique', 'ses': 'SES', 'anglais': 'Anglais',
            'figures': 'Figures', 'espagnol': 'Espagnol'
        };
        var levelEmoji = { 'difficulte': '\uD83D\uDCA1', 'moyen': '\uD83D\uDC4D', 'alaise': '\uD83D\uDD25' };
        var levelClass = { 'difficulte': 'profile-weak', 'moyen': 'profile-ok', 'alaise': 'profile-strong' };

        for (var i = 0; i < Math.min(stats.length, 6); i++) {
            var s = stats[i];
            var name = names[s.id] || s.id;
            var emoji = levelEmoji[s.level] || '\uD83D\uDC4D';
            var cls = levelClass[s.level] || 'profile-ok';
            html += '<div class="dash-profile-item ' + cls + '">'
                + '<span class="dash-profile-emoji">' + emoji + '</span>'
                + '<span class="dash-profile-name">' + name + '</span>'
                + '<span class="dash-profile-rate">' + s.rate + '%</span>'
                + '</div>';
        }

        html += '</div></div>';
        return html;
    }

    function renderDailyTip() {
        // Fun fact quotidien (deterministe par jour)
        var dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
        var fact = FUN_FACTS[dayOfYear % FUN_FACTS.length];
        // Fallback aux anciens tips si FUN_FACTS vide
        if (!fact && DASHBOARD_TIPS.length > 0) {
            var tip = DASHBOARD_TIPS[dayOfYear % DASHBOARD_TIPS.length];
            return '<div class="dash-section dash-daily-tip">'
                + '<div class="dash-tip-icon">' + tip.icon + '</div>'
                + '<p class="dash-tip-text">' + tip.tip + '</p>'
                + '</div>';
        }
        return '<div class="dash-section dash-fun-fact">'
            + '<span class="fun-fact-label">Le savais-tu\u00A0?</span>'
            + '<p class="fun-fact-text">' + (fact || '') + '</p>'
            + '</div>';
    }

    // ==================== GAMIFICATION BAR (XP + Streak + Badges) ====================
    function renderGamificationBar(gamStats) {
        var xp = gamStats.xp || 0;
        var streak = gamStats.streak || 0;
        var level = gamStats.level || 1;

        return '<div class="dash-section dash-gamification">'
            + '<div class="dash-gam-row">'
            + '<div class="dash-gam-item">'
            + '<span class="dash-gam-icon">✨</span>'
            + '<span class="dash-gam-val">' + xp + ' XP</span>'
            + '<span class="dash-gam-sub">Niveau ' + level + '</span>'
            + '</div>'
            + '<div class="dash-gam-item">'
            + '<span class="dash-gam-icon">🔥</span>'
            + '<span class="dash-gam-val">' + streak + ' jour' + (streak > 1 ? 's' : '') + '</span>'
            + '<span class="dash-gam-sub">Serie</span>'
            + '</div>'
            + '<div class="dash-gam-item clickable" data-action="dashboard.goTo" data-param="badges">'
            + '<span class="dash-gam-icon">🏅</span>'
            + '<span class="dash-gam-val">Badges</span>'
            + '<span class="dash-gam-sub">Voir &rarr;</span>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    // ==================== ADVANCED TOOLS ====================
    function renderAdvancedTools() {
        return '';
    }

    // ==================== QUICK STATS (3 compact) ====================
    function renderQuickStats(focusStats, gamStats, masteredCards, totalCards) {
        var sessions = focusStats.sessions || 0;
        var streak = gamStats.streak || 0;
        var cardLabel = totalCards > 0 ? (masteredCards + '/' + totalCards) : '0';

        return '<div class="dash-section dash-quick-stats">'
            + '<div class="dash-qstats-row">'
            + '<div class="dash-qstat">'
            + '<div class="dash-qstat-val">' + sessions + '</div>'
            + '<div class="dash-qstat-label">Sessions focus</div>'
            + '</div>'
            + '<div class="dash-qstat">'
            + '<div class="dash-qstat-val">' + cardLabel + '</div>'
            + '<div class="dash-qstat-label">Cartes maitrisees</div>'
            + '</div>'
            + '<div class="dash-qstat">'
            + '<div class="dash-qstat-val">' + streak + '<span class="dash-qstat-fire">🔥</span></div>'
            + '<div class="dash-qstat-label">Serie jours</div>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    // ==================== CONTENT SUMMARY ====================
    function renderContentSummary(state) {
        var flashCount = (state.flashcards ? state.flashcards.length : 0)
                        + (state.customFlashcards ? state.customFlashcards.length : 0);
        var quizCount = (state.quizQuestions ? state.quizQuestions.length : 0)
                       + (state.customQuiz ? state.customQuiz.length : 0);
        var fileName = window.StudFlow.storage.loadData('pdfFileName', '');

        if (flashCount === 0 && quizCount === 0 && !fileName) return '';

        var items = [];
        if (flashCount > 0) items.push('<span class="dash-content-tag">🎴 ' + flashCount + ' flashcard' + (flashCount > 1 ? 's' : '') + '</span>');
        if (quizCount > 0) items.push('<span class="dash-content-tag">⚡ ' + quizCount + ' question' + (quizCount > 1 ? 's' : '') + ' quiz</span>');

        var fileLabel = fileName ? '<p class="dash-content-file">Depuis : ' + window.StudFlow.app.escapeText(fileName) + '.pdf</p>' : '';

        return '<div class="dash-section dash-content-summary">'
            + '<h3 class="dash-section-title">Tes contenus</h3>'
            + '<div class="dash-content-tags">' + items.join('') + '</div>'
            + fileLabel
            + '</div>';
    }

    // ==================== TOGGLE MORE ====================
    function toggleMore() {
        var content = document.getElementById('dash-more-content');
        var btn = document.querySelector('.dash-see-more-btn');
        if (!content) { openExplore(); return; }
        if (content.style.display === 'none') {
            content.style.display = '';
            if (btn) btn.textContent = 'Voir moins \u25B2';
        } else {
            content.style.display = 'none';
            if (btn) btn.textContent = 'Voir plus \u25BC';
        }
    }

    function openExplore() {
        // Remove existing drawer if any
        var existing = document.getElementById('explore-drawer');
        if (existing) { existing.remove(); return; }

        var items = [
            { icon: '\uD83D\uDCDA', label: 'Matieres', action: 'matieres' },
            { icon: '\uD83D\uDCDC', label: 'Annales', action: 'annales' },
            { icon: '\uD83C\uDFAF', label: 'Focus', action: 'focus' },
            { icon: '\uD83D\uDCA8', label: 'Anti-stress', action: 'stress' },
            { icon: '\uD83D\uDCCA', label: 'Progression', action: 'stats' },
            { icon: '\uD83C\uDFC5', label: 'Badges', action: 'badges' }
        ];

        var grid = items.map(function(item) {
            var da = item.action.indexOf('screen:') === 0 ? item.action : 'dashboard.goTo';
            var dp = item.action.indexOf('screen:') === 0 ? '' : item.action;
            return '<button class="explore-item" data-action="' + da + '"' + (dp ? ' data-param="' + dp + '"' : '') + '>'
                + '<span class="explore-item-icon">' + item.icon + '</span>'
                + '<span class="explore-item-label">' + item.label + '</span>'
                + '</button>';
        }).join('');

        var drawer = document.createElement('div');
        drawer.id = 'explore-drawer';
        drawer.className = 'explore-drawer-overlay';
        drawer.innerHTML = '<div class="explore-drawer">'
            + '<div class="explore-drawer-header">'
            + '<h3>Explorer</h3>'
            + '<button class="explore-drawer-close" data-action="dashboard.closeExplore">\u2715</button>'
            + '</div>'
            + '<div class="explore-drawer-grid">' + grid + '</div>'
            + '</div>';

        // Close on overlay click
        drawer.addEventListener('click', function(e) {
            if (e.target === drawer) closeExplore();
        });

        document.body.appendChild(drawer);
    }

    function closeExplore() {
        var el = document.getElementById('explore-drawer');
        if (el) el.remove();
    }

    // ==================== BETA BANNER ====================
    function renderBetaBanner() {
        if (localStorage.getItem('studflow_beta_banner_dismissed')) return '';

        return '<div class="dash-section dash-beta-banner" id="beta-banner">'
            + '<button class="dash-beta-close" data-action="dashboard.dismissBetaBanner" aria-label="Fermer">&times;</button>'
            + '<div class="dash-beta-summary" data-action="dashboard.toggleBetaBanner">'
            + '<span class="dash-beta-chip">Beta</span>'
            + '<span class="dash-beta-summary-text">Tes retours nous aident</span>'
            + '<span class="dash-beta-chevron">&#x25BC;</span>'
            + '</div>'
            + '<div class="dash-beta-detail">'
            + '<p class="dash-beta-text">StudFlow est en version beta. Tes retours nous aident a ameliorer l\'application.</p>'
            + '<div class="dash-beta-actions">'
            + '<button class="dash-beta-btn secondary" data-action="feedback:bug-then-show">Signaler un probleme</button>'
            + '<button class="dash-beta-btn primary" data-action="feedback.show">Donner un avis</button>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    function dismissBetaBanner() {
        localStorage.setItem('studflow_beta_banner_dismissed', '1');
        var el = document.getElementById('beta-banner');
        if (el) el.remove();
    }

    function toggleBetaBanner() {
        var el = document.getElementById('beta-banner');
        if (el) el.classList.toggle('beta-expanded');
    }

    // ==================== GREETING BAR ====================
    function renderGreetingBar(greeting, gamStats) {
        var streak = gamStats.streak || 0;
        var level = gamStats.level || 1;

        // Coach-powered greeting message (profile-aware)
        var timeMsg = '';
        var profile = window.StudFlow.storage.getUserProfile();

        // First visit after onboarding: reference their profile
        if (profile && profile.behavior && !localStorage.getItem('studflow_first_coach_done')) {
            localStorage.setItem('studflow_first_coach_done', '1');
            var ws = profile.behavior.consistency;
            var stress = profile.behavior.stressLevel;
            if (ws === 'low') timeMsg = 'Tu m\'as dit que tu procrastines : on commence petit aujourd\'hui.';
            else if (stress === 'high') timeMsg = 'Tu m\'as dit que tu stresses : on va y aller doucement.';
            else if (profile.behavior.confidence === 'low') timeMsg = 'Tu doutes un peu ? Normal. On avance ensemble.';
        }

        // Comeback after absence
        if (!timeMsg && window.StudFlow.gamification) {
            var gStats = window.StudFlow.gamification.getStats();
            if (gStats && gStats.lastActiveDate) {
                var lastDate = new Date(gStats.lastActiveDate);
                var now = new Date();
                var daysDiff = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));
                if (daysDiff === 1) { /* yesterday, normal */ }
                else if (daysDiff >= 2 && daysDiff <= 3) timeMsg = 'On reprend simplement. Pas de pression.';
                else if (daysDiff >= 4) timeMsg = 'Content de te revoir. On repart d\'ici, tranquillement.';
            }
        }

        if (!timeMsg && window.StudFlow.coachEngine) {
            timeMsg = window.StudFlow.coachEngine.getCoachMessage(profile, { moment: 'start' });
        }
        if (!timeMsg) {
            var hour = new Date().getHours();
            if (hour < 12) timeMsg = 'Bonne session ce matin.';
            else if (hour < 18) timeMsg = 'L\'apres-midi parfait pour reviser.';
            else timeMsg = 'Session du soir, la plus efficace.';
        }

        var streakBadge = streak > 0
            ? '<span class="dash-greet-streak">🔥 ' + streak + 'j</span>'
            : '';

        return '<div class="dash-greet">'
            + '<div class="dash-greet-left">'
            + '<h2 class="dash-greet-name">' + greeting + ' !</h2>'
            + '<p class="dash-greet-msg">' + timeMsg + '</p>'
            + '</div>'
            + '<div class="dash-greet-right">'
            + streakBadge
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 0 — COUNTDOWN EXAM ====================
    function renderCountdown() {
        var examLevel = (window.StudFlow.subjects && window.StudFlow.subjects.getExamLevel) ? window.StudFlow.subjects.getExamLevel() : 'bac';
        var examLabel = examLevel === 'brevet' ? 'Brevet' : 'Bac';

        // Exam dates: Brevet June 26, Bac Philo June 18
        var now = new Date();
        var examDate;
        if (examLevel === 'brevet') {
            examDate = new Date(now.getFullYear(), 5, 26); // June 26
        } else {
            examDate = new Date(now.getFullYear(), 5, 18); // June 18
        }
        if (now > new Date(now.getFullYear(), 6, 5)) {
            examDate = new Date(examDate.getFullYear() + 1, examDate.getMonth(), examDate.getDate());
        }
        var diff = examDate.getTime() - now.getTime();
        var days = Math.ceil(diff / (1000 * 60 * 60 * 24));

        if (days < 0) days = 0;

        var urgencyClass = '';
        var urgencyMsg = '';
        if (days <= 7) {
            urgencyClass = 'countdown-critical';
            urgencyMsg = 'C\'est maintenant ! Tu es pret(e).';
        } else if (days <= 30) {
            urgencyClass = 'countdown-urgent';
            urgencyMsg = 'Derniere ligne droite. Chaque jour compte.';
        } else if (days <= 90) {
            urgencyClass = 'countdown-soon';
            urgencyMsg = 'Le ' + examLabel + ' approche. Reste regulier(e).';
        } else {
            urgencyClass = 'countdown-calm';
            urgencyMsg = 'Tu as le temps. Construis de bonnes habitudes.';
        }

        // Global Exam Readiness
        var avgMastery = 0;
        var topicCount = 0;
        var topicBars = '';
        if (window.StudFlow.adaptive) {
            var allTopics = window.StudFlow.adaptive.getAllTopics();
            topicCount = allTopics.length;
            for (var t = 0; t < allTopics.length; t++) avgMastery += allTopics[t].topic.mastery;
            avgMastery = topicCount > 0 ? Math.round((avgMastery / topicCount) * 100) : 0;

            // Top 4 subjects mini bars
            var shown = Math.min(allTopics.length, 4);
            for (var b = 0; b < shown; b++) {
                var tp = allTopics[b];
                var tpct = Math.round(tp.topic.mastery * 100);
                var barColor = tpct >= 70 ? '#22c55e' : tpct >= 40 ? '#f59e0b' : '#ef4444';
                topicBars += '<div class="dash-readiness-topic">'
                    + '<span class="dash-readiness-name">' + escapeHTML(tp.topic.label) + '</span>'
                    + '<div class="dash-readiness-minibar"><div style="width:' + tpct + '%;background:' + barColor + '"></div></div>'
                    + '<span class="dash-readiness-pct">' + tpct + '%</span>'
                    + '</div>';
            }
        }

        // Estimated readiness: if avgMastery growth rate is X%/day, when will we reach 70%?
        var readinessMsg = '';
        if (avgMastery >= 70) {
            readinessMsg = 'Tu es pret(e) pour le ' + examLabel + ' !';
        } else if (avgMastery > 0 && days > 0) {
            var needed = 70 - avgMastery;
            var dailyRate = Math.max(0.5, avgMastery / Math.max(1, 30 - days + 30)); // rough estimate
            var daysToReady = Math.ceil(needed / Math.max(dailyRate, 0.3));
            if (daysToReady <= days) {
                readinessMsg = 'En rythme pour etre pret dans ~' + daysToReady + ' jours';
            } else {
                readinessMsg = 'Accelere un peu pour etre pret a temps';
            }
        }

        // Social proof (simulated percentile based on mastery)
        var percentile = Math.min(95, Math.max(5, Math.round(avgMastery * 1.2)));

        return '<div class="dash-section dash-countdown ' + urgencyClass + '">'
            + '<div class="dash-countdown-card">'
            + '<div class="dash-bac-top">'
            + '<div class="dash-countdown-left">'
            + '<div class="dash-countdown-number">' + days + '</div>'
            + '<div class="dash-countdown-label">jours</div>'
            + '</div>'
            + '<div class="dash-readiness-right">'
            + '<div class="dash-readiness-big">' + avgMastery + '%</div>'
            + '<div class="dash-readiness-label">pret</div>'
            + '</div>'
            + '</div>'
            + (topicBars ? '<div class="dash-readiness-topics">' + topicBars + '</div>' : '')
            + (readinessMsg ? '<div class="dash-countdown-msg">' + readinessMsg + '</div>' : '')
            + (avgMastery > 0 ? '<div class="dash-readiness-social">Tu es en avance sur ' + percentile + '% des eleves</div>' : '')
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 1 — PROFIL ETUDIANT ====================
    function renderProfileSection(profileData, profileKey, greeting) {
        var profile = getProfile();
        if (!profile) {
            return '<div class="dash-section dash-diag-cta" data-action="diagnostic:start">'
                + '<div class="dash-diag-content">'
                + '<div class="dash-diag-icon">🎯</div>'
                + '<div class="dash-diag-text">'
                + '<h3 class="dash-diag-title">Decouvre ton profil</h3>'
                + '<p class="dash-diag-sub">2 min · personnalise tes sessions</p>'
                + '</div>'
                + '</div>'
                + '<span class="dash-diag-arrow">→</span>'
                + '</div>';
        }

        var strengthsHTML = profileData.strengths.map(function(s) {
            return '<span class="dash-strength-tag">' + s + '</span>';
        }).join('');

        return '<div class="dash-section dash-profile">'
            + '<div class="dash-profile-card ' + profileData.color + '">'
            + '<div class="dash-profile-emoji">' + profileData.emoji + '</div>'
            + '<div class="dash-profile-info">'
            + '<div class="dash-profile-label">Ton profil</div>'
            + '<h2>' + greeting + ' ! ' + profileData.emoji + '</h2>'
            + '<p class="dash-profile-title">' + profileData.title + '</p>'
            + '<p class="dash-profile-desc">' + profileData.description + '</p>'
            + '<div class="dash-strengths">'
            + '<span class="dash-strengths-label">Tes forces :</span>'
            + '<div class="dash-strength-tags">' + strengthsHTML + '</div>'
            + '</div>'
            + '<div class="dash-improve">'
            + '<span class="dash-improve-icon">🎯</span>'
            + '<span>Axe a travailler : <strong>' + profileData.improve + '</strong></span>'
            + '</div>'
            + '</div>'
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 5 — MESSAGE MOTIVATION ====================
    function renderMotivationSection(daily) {
        var msg = MOTIVATION_MESSAGES[daily.motivationIndex] || MOTIVATION_MESSAGES[0];
        return '<div class="dash-section dash-motivation">'
            + '<div class="dash-motivation-card">'
            + '<span class="dash-motivation-icon">💬</span>'
            + '<p class="dash-motivation-text">"' + msg + '"</p>'
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 2 — RECOMMANDATIONS DU JOUR ====================
    function renderRecommendationsSection(recs, profileKey) {
        // Limit recommendations for free users
        var maxReco = 3;
        if (window.StudFlow.premium && !window.StudFlow.premium.hasAccess('stats_avancees')) {
            maxReco = 1;
        }
        var visibleRecs = recs.slice(0, maxReco);

        var recsHTML = visibleRecs.map(function(rec, i) {
            var priorityClass = rec.priority === 'high' ? 'priority-high' : '';
            var priorityLabel = rec.priority === 'high' ? '<span class="dash-rec-badge">Recommande</span>' : '';
            return '<div class="dash-rec-card ' + priorityClass + '" data-action="dashboard.goTo" data-param="' + rec.module + '">'
                + priorityLabel
                + '<div class="dash-rec-icon">' + rec.icon + '</div>'
                + '<div class="dash-rec-info">'
                + '<h4>' + rec.title + '</h4>'
                + '<p>' + rec.desc + '</p>'
                + '</div>'
                + '<span class="dash-rec-arrow">→</span>'
                + '</div>';
        }).join('');

        var upsellHTML = '';
        if (maxReco < recs.length && window.StudFlow.premium) {
            upsellHTML = window.StudFlow.premium.renderInlineUpsell('stats_avancees');
        }

        return '<div class="dash-section dash-recommendations">'
            + '<h3 class="dash-section-title">\uD83D\uDCCB Recommandations du jour</h3>'
            + '<div class="dash-rec-list">'
            + recsHTML
            + '</div>'
            + upsellHTML
            + '</div>';
    }

    // ==================== SECTION 3 — TOUTES LES ACTIONS ====================
    function renderSecondaryActions() {
        var examLevel = (window.StudFlow.subjects && window.StudFlow.subjects.getExamLevel) ? window.StudFlow.subjects.getExamLevel() : 'bac';
        var examLabel = examLevel === 'brevet' ? 'Brevet' : 'Bac';

        return '<div class="dash-section">'
            + '<h3 class="dash-section-title">⚡ Toutes les actions</h3>'
            + '<div class="dash-actions-grid">'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="matieres">'
            + '<span class="dash-quick-icon">📚</span><span>Matieres</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="annales">'
            + '<span class="dash-quick-icon">📜</span><span>Annales ' + examLabel + '</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="coach">'
            + '<span class="dash-quick-icon">🧠</span><span>Coach</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="focus">'
            + '<span class="dash-quick-icon">🎯</span><span>Focus</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="stress">'
            + '<span class="dash-quick-icon">💆</span><span>Anti-stress</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="planbac">'
            + '<span class="dash-quick-icon">📅</span><span>Plan ' + examLabel + '</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="generators">'
            + '<span class="dash-quick-icon">⚙️</span><span>Generateurs</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="stats">'
            + '<span class="dash-quick-icon">📊</span><span>Progression</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="badges">'
            + '<span class="dash-quick-icon">🏅</span><span>Badges</span></button>'
            + '<button class="dash-quick-btn" data-action="dashboard.goTo" data-param="missions">'
            + '<span class="dash-quick-icon">🎯</span><span>Missions</span></button>'
            + '<button class="dash-quick-btn" data-action="screen:errors">'
            + '<span class="dash-quick-icon">📕</span><span>Erreurs</span></button>'
            + '<button class="dash-quick-btn" data-action="screen:aide">'
            + '<span class="dash-quick-icon">❓</span><span>Aide</span></button>'
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 6 — OBJECTIF DU JOUR ====================
    function getObjectivesForToday(profileKey) {
        var pool = DAILY_OBJECTIVES[profileKey] || DAILY_OBJECTIVES.equilibre;
        var daily = getDailyData();
        // Pick consistent objectives for the day based on date seed
        if (!daily.objectiveSet) {
            daily.objectiveSet = pool.map(function(o, i) { return i; });
            saveDailyData(daily);
        }
        return daily.objectiveSet.map(function(idx) { return pool[idx]; });
    }

    function renderObjectiveSection(objectives, daily) {
        var objHTML = objectives.map(function(obj, i) {
            var completed = daily.objectivesCompleted.indexOf(i) !== -1;
            var checkedClass = completed ? 'completed' : '';
            var checkIcon = completed ? '✅' : '⬜';
            return '<div class="dash-objective-item ' + checkedClass + '" data-action="dashboard.toggleObjective" data-param="' + i + '">'
                + '<span class="dash-obj-check">' + checkIcon + '</span>'
                + '<span class="dash-obj-icon">' + obj.icon + '</span>'
                + '<span class="dash-obj-text">' + obj.text + '</span>'
                + '</div>';
        }).join('');

        var completedCount = daily.objectivesCompleted.length;
        var totalCount = objectives.length;
        var progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
        var progressMsg = completedCount === totalCount
            ? 'Bravo ! Tous les objectifs du jour sont faits !'
            : completedCount + '/' + totalCount + ' objectifs completes';

        return '<div class="dash-section dash-objectives">'
            + '<h3 class="dash-section-title">🎯 Objectifs du jour</h3>'
            + '<div class="dash-obj-progress">'
            + '<div class="dash-obj-bar" role="progressbar" aria-valuenow="' + progressPct + '" aria-valuemin="0" aria-valuemax="100" aria-label="Objectifs du jour"><div class="dash-obj-fill" style="width: ' + progressPct + '%"></div></div>'
            + '<span class="dash-obj-status">' + progressMsg + '</span>'
            + '</div>'
            + '<div class="dash-obj-list">'
            + objHTML
            + '</div>'
            + '</div>';
    }

    // ==================== SECTION 4 — PROGRESSION ====================
    function renderProgressSection(focusStats, gamStats, totalCards, masteredCards, totalQuiz) {
        var focusSessions = focusStats.sessions || 0;
        var focusMinutes = focusStats.totalMinutes || 0;
        var xp = gamStats.xp || 0;
        var streak = gamStats.streak || 0;

        // Empty state for brand new users
        if (focusSessions === 0 && xp === 0 && totalCards === 0 && totalQuiz === 0) {
            return '<div class="dash-section dash-progress">'
                + '<h3 class="dash-section-title">📊 Ta progression</h3>'
                + '<div class="dash-empty-state">'
                + '<div class="dash-empty-icon">🚀</div>'
                + '<p class="dash-empty-text">Ta progression apparaitra ici des ta premiere activite.</p>'
                + '<p class="dash-empty-hint">Lance une session focus ou un quiz pour commencer !</p>'
                + '</div>'
                + '</div>';
        }

        var focusHours = Math.floor(focusMinutes / 60);
        var focusMins = focusMinutes % 60;
        var timeDisplay = focusHours > 0 ? (focusHours + 'h ' + focusMins + 'min') : (focusMins + ' min');
        var cardsPct = totalCards > 0 ? Math.round((masteredCards / totalCards) * 100) : 0;

        return '<div class="dash-section dash-progress">'
            + '<h3 class="dash-section-title">📊 Ta progression</h3>'
            + '<div class="dash-stats-grid">'
            + renderStatCard('🎯', 'Sessions focus', String(focusSessions), 'sessions', 'accent')
            + renderStatCard('⏱️', 'Temps travaille', timeDisplay, 'cumule', 'hot')
            + renderStatCard('🎴', 'Cartes maitrisees', masteredCards + '/' + totalCards, cardsPct + '%', 'mint')
            + renderStatCard('⚡', 'Questions quiz', String(totalQuiz), 'disponibles', 'sun')
            + renderStatCard('🔥', 'Serie actuelle', String(streak), 'jours', 'peach')
            + renderStatCard('✨', 'XP total', String(xp), 'points', 'sky')
            + '</div>'
            + '</div>';
    }

    function renderStatCard(icon, label, value, sublabel, color) {
        return '<div class="dash-stat-card ' + color + '">'
            + '<div class="dash-stat-icon">' + icon + '</div>'
            + '<div class="dash-stat-value">' + value + '</div>'
            + '<div class="dash-stat-label">' + label + '</div>'
            + '<div class="dash-stat-sub">' + sublabel + '</div>'
            + '</div>';
    }

    // ==================== ACTIONS ====================
    function toggleObjective(index) {
        var daily = getDailyData();
        var pos = daily.objectivesCompleted.indexOf(index);
        if (pos === -1) {
            daily.objectivesCompleted.push(index);
            // XP bonus for completing objective
            if (window.StudFlow.gamification) {
                window.StudFlow.gamification.showToast('+5 XP — Objectif complete !', 'xp', '🎯');
                var stats = window.StudFlow.gamification.getStats();
                stats.xp += 5;
                stats.totalActions++;
                window.StudFlow.storage.saveData('gamification', stats);
                window.StudFlow.gamification.updateXPDisplay();
            }
        } else {
            daily.objectivesCompleted.splice(pos, 1);
        }
        saveDailyData(daily);

        // Check if all objectives done
        var profileKey = getMainProfile();
        var objectives = DAILY_OBJECTIVES[profileKey] || DAILY_OBJECTIVES.equilibre;
        if (daily.objectivesCompleted.length === objectives.length) {
            if (window.StudFlow.gamification) {
                setTimeout(function() {
                    window.StudFlow.gamification.showToast('Tous les objectifs du jour faits !', 'streak', '🏆');
                    window.StudFlow.gamification.spawnConfetti();
                }, 400);
            }
        }

        render();
    }

    // ==================== TOUR GUIDE (first visit) ====================
    var TOUR_STEPS = [
        { icon: '⚡', title: 'Quiz', text: 'Teste tes connaissances avec des quiz de niveau bac. Plus tu joues, plus tu progresses.' },
        { icon: '🧠', title: 'Coach IA', text: 'Pose n\'importe quelle question. Le coach s\'adapte a ton profil et tes besoins.' },
        { icon: '🎯', title: 'Focus', text: 'Lance un timer Pomodoro pour rester concentre. 25 min de travail, 5 min de pause.' },
        { icon: '💆', title: 'Zen', text: 'Exercices de respiration et anti-stress. Parfait avant un controle ou quand ca monte.' }
    ];

    function showTourIfNeeded() {
        if (localStorage.getItem('studflow_tour_done')) return;
        var onboarding = window.StudFlow.storage.loadData('onboarding', { completed: false });
        if (!onboarding.completed) return;
        setTimeout(function() { showTourStep(0); }, 800);
    }

    function showTourStep(index) {
        // Remove previous overlay
        var prev = document.getElementById('studflow-tour');
        if (prev) prev.remove();

        if (index >= TOUR_STEPS.length) {
            localStorage.setItem('studflow_tour_done', '1');
            return;
        }

        var step = TOUR_STEPS[index];
        var isLast = index === TOUR_STEPS.length - 1;
        var overlay = document.createElement('div');
        overlay.id = 'studflow-tour';
        overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
        overlay.innerHTML = '<div class="tour-card">'
            + '<div class="tour-icon">' + step.icon + '</div>'
            + '<h3 class="tour-title">' + step.title + '</h3>'
            + '<p class="tour-text">' + step.text + '</p>'
            + '<div class="tour-dots">'
            + TOUR_STEPS.map(function(_, i) { return '<div class="tour-dot' + (i === index ? ' active' : '') + '"></div>'; }).join('')
            + '</div>'
            + '<button class="tour-btn-primary" data-action="dashboard.tourNext" data-param="' + (index + 1) + '">'
            + (isLast ? 'C\'est parti !' : 'Suivant →')
            + '</button>'
            + '<br><button class="tour-btn-skip" data-action="dashboard.tourSkip">Passer le tour</button>'
            + '</div>';
        document.body.appendChild(overlay);
    }

    function tourNext(index) { showTourStep(index); }
    function tourSkip() {
        localStorage.setItem('studflow_tour_done', '1');
        var el = document.getElementById('studflow-tour');
        if (el) el.remove();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.dashboard = {
        render: render,
        goTo: goTo,
        toggleMore: toggleMore,
        openExplore: openExplore,
        closeExplore: closeExplore,
        toggleObjective: toggleObjective,
        showTourIfNeeded: showTourIfNeeded,
        tourNext: tourNext,
        tourSkip: tourSkip,
        dismissBetaBanner: dismissBetaBanner,
        toggleBetaBanner: toggleBetaBanner,
        incrementDailyGauge: incrementDailyGauge,
        incrementStudyTime: incrementStudyTime
    };

})();
