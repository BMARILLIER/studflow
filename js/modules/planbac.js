// planbac.js — Module Plan Bac personnalise intelligent
(function() {

    // ==================== MATIERES ====================
    var MATIERES = [
        { id: 'francais', name: 'Francais', icon: '📝', coef: 5 },
        { id: 'philo', name: 'Philosophie', icon: '🤔', coef: 4 },
        { id: 'histoire', name: 'Histoire-Geo', icon: '🌍', coef: 3 },
        { id: 'maths', name: 'Mathematiques', icon: '📐', coef: 4 },
        { id: 'anglais', name: 'Anglais', icon: '🇬🇧', coef: 3 },
        { id: 'spe1', name: 'Specialite 1', icon: '🔬', coef: 16 },
        { id: 'spe2', name: 'Specialite 2', icon: '🧬', coef: 16 },
        { id: 'grand_oral', name: 'Grand Oral', icon: '🎤', coef: 10 }
    ];

    // ==================== NIVEAUX & OBJECTIFS ====================
    var NIVEAUX = [
        { id: 'debutant', label: 'En difficulte', emoji: '😓', desc: 'J\'ai du mal dans plusieurs matieres' },
        { id: 'moyen', label: 'Correct', emoji: '😊', desc: 'Je m\'en sors mais je veux progresser' },
        { id: 'bon', label: 'Bon', emoji: '💪', desc: 'J\'ai de bonnes bases a consolider' },
        { id: 'excellent', label: 'Tres bon', emoji: '🌟', desc: 'Je vise l\'excellence' }
    ];

    var OBJECTIFS = [
        { id: 'avoir_bac', label: 'Avoir le bac', emoji: '🎓', desc: 'Objectif principal : reussir' },
        { id: 'mention_ab', label: 'Mention Assez Bien', emoji: '👍', desc: '12/20 de moyenne' },
        { id: 'mention_b', label: 'Mention Bien', emoji: '⭐', desc: '14/20 de moyenne' },
        { id: 'mention_tb', label: 'Mention Tres Bien', emoji: '🏆', desc: '16/20 de moyenne' }
    ];

    // ==================== MESSAGES ENCOURAGEMENT ====================
    var MESSAGES_FORM = [
        "Super que tu prennes les choses en main ! On va construire ton plan ensemble.",
        "Tu fais deja un grand pas en planifiant. C'est la cle.",
        "Pas de panique. On va decouer ca semaine par semaine."
    ];

    var MESSAGES_PLAN = {
        anxieux: [
            "Ton plan est adapte pour avancer sans stress. Chaque session est courte et gerable.",
            "N'oublie pas : une session faite, meme imparfaite, vaut mieux que rien.",
            "Tu peux y aller a ton rythme. L'important c'est la regularite, pas la perfection."
        ],
        procrastinateur: [
            "Les sessions sont courtes expres. 30 minutes, c'est rien — mais ca fait des miracles.",
            "Ne regarde pas tout le plan. Juste la semaine en cours. Un pas a la fois.",
            "Astuce : commence par la matiere que tu aimes le plus. Le reste suivra."
        ],
        desorganise: [
            "Ton plan est bien structure semaine par semaine. Suis-le, et tu verras la difference.",
            "Coche chaque session terminee. Ca te donnera un sentiment de controle.",
            "Cette fois, tu as un cadre clair. Fais confiance au processus."
        ],
        surcharge: [
            "Ce plan est volontairement leger. Mieux vaut 80% fait que 100% abandonne.",
            "Prevois des pauses. Ton cerveau a besoin de repos pour memoriser.",
            "Si c'est trop : reduis. Tu peux ajuster a tout moment."
        ],
        confiance_faible: [
            "Ce plan inclut des sessions methodo pour t'aider a apprendre a apprendre.",
            "Chaque semaine qui passe, tu seras un peu plus confiant. C'est garanti.",
            "N'hesite pas a relire les fiches Coach avant tes sessions de revision."
        ],
        confiant: [
            "Ton plan est ambitieux mais realiste. Tu as les capacites pour le suivre.",
            "Challenge-toi sur les sujets type bac pour viser plus haut.",
            "Continue comme ca, tu es sur la bonne voie !"
        ],
        equilibre: [
            "Ton plan est equilibre, comme toi. Suis-le regulierement et tout ira bien.",
            "N'hesite pas a ajuster si une semaine est plus chargee que prevu.",
            "Tu avances bien. Garde ce rythme !"
        ]
    };

    // ==================== PHASES REVISION ====================
    function getPhases(totalWeeks) {
        if (totalWeeks >= 12) {
            return [
                { name: 'Fondamentaux', pct: 0.35, icon: '📚', desc: 'Reprendre les bases, relire les cours' },
                { name: 'Approfondissement', pct: 0.35, icon: '🔍', desc: 'Exercices et fiches de revision' },
                { name: 'Entrainement', pct: 0.20, icon: '⚡', desc: 'Sujets type et annales' },
                { name: 'Sprint final', pct: 0.10, icon: '🚀', desc: 'Derniere revision et confiance' }
            ];
        }
        if (totalWeeks >= 6) {
            return [
                { name: 'Revision intensive', pct: 0.30, icon: '📖', desc: 'Reviser les points essentiels' },
                { name: 'Exercices', pct: 0.40, icon: '✏️', desc: 'Pratique intensive avec exercices' },
                { name: 'Simulations', pct: 0.30, icon: '🎯', desc: 'Sujets blancs et preparation' }
            ];
        }
        if (totalWeeks >= 3) {
            return [
                { name: 'Synthese', pct: 0.25, icon: '📋', desc: 'Fiches de synthese par matiere' },
                { name: 'Sujets type', pct: 0.50, icon: '📝', desc: 'Entrainement sur sujets reels' },
                { name: 'Confiance', pct: 0.25, icon: '💪', desc: 'Revision finale et mental' }
            ];
        }
        return [
            { name: 'Essentiel', pct: 0.40, icon: '⭐', desc: 'Revisions express des points cles' },
            { name: 'Pratique', pct: 0.40, icon: '✏️', desc: 'Derniers exercices et annales' },
            { name: 'Mental', pct: 0.20, icon: '🧘', desc: 'Confiance et gestion du stress' }
        ];
    }

    // ==================== ADAPTATION PROFIL ====================
    function getProfileAdaptation(profileKey) {
        var adaptations = {
            anxieux: {
                sessionDuration: 30,
                breakFrequency: 2,
                stressSessionsPct: 0.15,
                intensity: 0.8,
                advice: 'Sessions courtes + pause respiration entre chaque'
            },
            procrastinateur: {
                sessionDuration: 25,
                breakFrequency: 1,
                stressSessionsPct: 0.05,
                intensity: 0.85,
                advice: 'Micro-sessions de 25 min max, commence par ce que tu aimes'
            },
            desorganise: {
                sessionDuration: 40,
                breakFrequency: 2,
                stressSessionsPct: 0.05,
                intensity: 0.9,
                advice: 'Planning tres structure, une matiere par session'
            },
            surcharge: {
                sessionDuration: 35,
                breakFrequency: 2,
                stressSessionsPct: 0.10,
                intensity: 0.7,
                advice: 'Moins de sessions mais plus efficaces, pauses obligatoires'
            },
            confiance_faible: {
                sessionDuration: 35,
                breakFrequency: 2,
                stressSessionsPct: 0.05,
                intensity: 0.85,
                advice: 'Sessions methodo incluses, progression graduelle'
            },
            confiant: {
                sessionDuration: 45,
                breakFrequency: 3,
                stressSessionsPct: 0.0,
                intensity: 1.0,
                advice: 'Sessions longues et intensives, challenges reguliers'
            },
            equilibre: {
                sessionDuration: 40,
                breakFrequency: 2,
                stressSessionsPct: 0.05,
                intensity: 0.9,
                advice: 'Rythme equilibre, varier les methodes'
            }
        };
        return adaptations[profileKey] || adaptations.equilibre;
    }

    // ==================== GENERATION ALGORITHME ====================
    function generatePlan(config) {
        var dateBac = new Date(config.dateBac);
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        dateBac.setHours(0, 0, 0, 0);

        var msPerWeek = 7 * 24 * 60 * 60 * 1000;
        var totalWeeks = Math.max(1, Math.ceil((dateBac - today) / msPerWeek));

        var profileKey = getMainProfile();
        var adaptation = getProfileAdaptation(profileKey);
        var phases = getPhases(totalWeeks);
        var heuresParSemaine = config.heuresParSemaine * adaptation.intensity;
        var minutesParSemaine = Math.round(heuresParSemaine * 60);
        var sessionDuration = adaptation.sessionDuration;
        var sessionsParSemaine = Math.max(2, Math.floor(minutesParSemaine / sessionDuration));

        // Distribute matieres by coefficient weight
        var matiereConfigs = config.matieres.map(function(id) {
            return MATIERES.find(function(m) { return m.id === id; });
        }).filter(Boolean);

        var totalCoef = matiereConfigs.reduce(function(sum, m) { return sum + m.coef; }, 0);

        // Build weeks
        var weeks = [];
        var weekStart = new Date(today);
        // Align to next Monday
        var dayOfWeek = weekStart.getDay();
        var daysUntilMonday = dayOfWeek === 0 ? 1 : (dayOfWeek === 1 ? 0 : (8 - dayOfWeek));
        weekStart.setDate(weekStart.getDate() + daysUntilMonday);

        var currentPhaseIdx = 0;
        var weeksInPhase = 0;

        for (var w = 0; w < totalWeeks; w++) {
            // Determine current phase
            var phaseWeeksAccum = 0;
            currentPhaseIdx = 0;
            for (var p = 0; p < phases.length; p++) {
                phaseWeeksAccum += Math.max(1, Math.round(phases[p].pct * totalWeeks));
                if (w < phaseWeeksAccum) {
                    currentPhaseIdx = p;
                    break;
                }
            }
            var phase = phases[currentPhaseIdx];

            var wStart = new Date(weekStart);
            wStart.setDate(wStart.getDate() + (w * 7));
            var wEnd = new Date(wStart);
            wEnd.setDate(wEnd.getDate() + 6);

            // Don't go past bac date
            if (wStart > dateBac) break;

            // Generate sessions for this week
            var sessions = [];
            var sessionCount = sessionsParSemaine;

            // Add stress/wellbeing session for anxious profiles
            if (adaptation.stressSessionsPct > 0 && sessionCount > 2) {
                var stressSessions = Math.max(1, Math.round(sessionCount * adaptation.stressSessionsPct));
                for (var s = 0; s < stressSessions; s++) {
                    sessions.push({
                        matiere: 'bien-etre',
                        icon: '🧘',
                        type: 'respiration',
                        duree: 15,
                        description: 'Respiration + visualisation positive avant la session',
                        done: false
                    });
                }
                sessionCount -= stressSessions;
            }

            // Distribute remaining sessions across matieres
            for (var i = 0; i < sessionCount; i++) {
                var matIdx = i % matiereConfigs.length;
                // Weight by coefficient - higher coef matieres appear more
                var weightedIdx = getWeightedMatiereIndex(matiereConfigs, totalCoef, i, sessionCount);
                var mat = matiereConfigs[weightedIdx];
                var sessionType = getSessionType(phase.name, i, sessionCount);

                sessions.push({
                    matiere: mat.id,
                    icon: mat.icon,
                    type: sessionType.type,
                    duree: sessionDuration,
                    description: sessionType.desc.replace('{matiere}', mat.name),
                    done: false
                });
            }

            weeks.push({
                weekNum: w + 1,
                startDate: formatDate(wStart),
                endDate: formatDate(wEnd),
                phase: phase.name,
                phaseIcon: phase.icon,
                phaseDesc: phase.desc,
                sessions: sessions
            });
        }

        return {
            config: config,
            profileKey: profileKey,
            adaptation: adaptation,
            totalWeeks: weeks.length,
            phases: phases,
            weeks: weeks,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
    }

    function getWeightedMatiereIndex(matieres, totalCoef, sessionIdx, totalSessions) {
        // Simple weighted distribution based on coefficients
        var target = (sessionIdx / totalSessions) * totalCoef;
        var cumul = 0;
        for (var i = 0; i < matieres.length; i++) {
            cumul += matieres[i].coef;
            if (target < cumul) return i;
        }
        return matieres.length - 1;
    }

    function getSessionType(phaseName, sessionIdx, totalSessions) {
        var types = {
            'Fondamentaux': [
                { type: 'cours', desc: 'Relire et comprendre le cours de {matiere}' },
                { type: 'fiche', desc: 'Creer une fiche de revision — {matiere}' },
                { type: 'exercices', desc: 'Exercices de base — {matiere}' }
            ],
            'Approfondissement': [
                { type: 'exercices', desc: 'Exercices intermediaires — {matiere}' },
                { type: 'methodo', desc: 'Appliquer la methode Feynman — {matiere}' },
                { type: 'fiche', desc: 'Completer tes fiches — {matiere}' }
            ],
            'Entrainement': [
                { type: 'annales', desc: 'Annales et sujets type — {matiere}' },
                { type: 'exercices', desc: 'Exercices avances — {matiere}' },
                { type: 'quiz', desc: 'Auto-evaluation — {matiere}' }
            ],
            'Sprint final': [
                { type: 'revision', desc: 'Revision express des fiches — {matiere}' },
                { type: 'annales', desc: 'Dernier sujet blanc — {matiere}' },
                { type: 'mental', desc: 'Relecture zen et confiance — {matiere}' }
            ],
            'Revision intensive': [
                { type: 'cours', desc: 'Reviser les points essentiels — {matiere}' },
                { type: 'fiche', desc: 'Fiche de synthese — {matiere}' },
                { type: 'exercices', desc: 'Exercices cibles — {matiere}' }
            ],
            'Exercices': [
                { type: 'exercices', desc: 'Pratique intensive — {matiere}' },
                { type: 'annales', desc: 'Sujet type — {matiere}' },
                { type: 'correction', desc: 'Corriger et comprendre ses erreurs — {matiere}' }
            ],
            'Simulations': [
                { type: 'blanc', desc: 'Epreuve blanche — {matiere}' },
                { type: 'annales', desc: 'Annales chronometrees — {matiere}' },
                { type: 'revision', desc: 'Revision ciblee des points faibles — {matiere}' }
            ],
            'Synthese': [
                { type: 'fiche', desc: 'Fiche de synthese finale — {matiere}' },
                { type: 'revision', desc: 'Revision acceleree — {matiere}' }
            ],
            'Sujets type': [
                { type: 'annales', desc: 'Sujet type bac — {matiere}' },
                { type: 'exercices', desc: 'Entrainement cible — {matiere}' }
            ],
            'Confiance': [
                { type: 'revision', desc: 'Relecture sereine — {matiere}' },
                { type: 'mental', desc: 'Confiance et visualisation — {matiere}' }
            ],
            'Essentiel': [
                { type: 'revision', desc: 'Points cles a retenir — {matiere}' },
                { type: 'fiche', desc: 'Fiche express — {matiere}' }
            ],
            'Pratique': [
                { type: 'exercices', desc: 'Derniers exercices — {matiere}' },
                { type: 'annales', desc: 'Dernieres annales — {matiere}' }
            ],
            'Mental': [
                { type: 'mental', desc: 'Preparation mentale — {matiere}' },
                { type: 'revision', desc: 'Revision sereine — {matiere}' }
            ]
        };
        var pool = types[phaseName] || types['Fondamentaux'];
        return pool[sessionIdx % pool.length];
    }

    // ==================== HELPERS ====================
    function getMainProfile() {
        var profile = window.StudFlow.storage.getUserProfile();
        return (profile && profile.mainProfile) ? profile.mainProfile : 'equilibre';
    }

    function formatDate(d) {
        var day = String(d.getDate()).padStart(2, '0');
        var month = String(d.getMonth() + 1).padStart(2, '0');
        return day + '/' + month + '/' + d.getFullYear();
    }

    function parseDate(str) {
        // Parse dd/mm/yyyy
        var parts = str.split('/');
        return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    }

    function formatDateISO(d) {
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    function getCurrentWeekIndex(plan) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        for (var i = 0; i < plan.weeks.length; i++) {
            var end = parseDate(plan.weeks[i].endDate);
            end.setHours(23, 59, 59);
            if (today <= end) return i;
        }
        return plan.weeks.length - 1;
    }

    function getCompletionStats(plan) {
        var totalSessions = 0;
        var doneSessions = 0;
        plan.weeks.forEach(function(w) {
            w.sessions.forEach(function(s) {
                totalSessions++;
                if (s.done) doneSessions++;
            });
        });
        return {
            total: totalSessions,
            done: doneSessions,
            pct: totalSessions > 0 ? Math.round((doneSessions / totalSessions) * 100) : 0
        };
    }

    // ==================== STORAGE ====================
    function savePlan(plan) {
        plan.updatedAt = new Date().toISOString();
        window.StudFlow.storage.saveData('planBac', plan);
    }

    function loadPlan() {
        return window.StudFlow.storage.loadData('planBac', null);
    }

    // ==================== RENDER — ECRAN PRINCIPAL ====================
    function show() {
        window.StudFlow.app.showScreen('planbac');
    }

    function renderMain() {
        var container = document.getElementById('planbac-content');
        if (!container) return;

        var plan = loadPlan();
        if (plan && plan.weeks && plan.weeks.length > 0) {
            renderTimeline(container, plan);
        } else {
            renderForm(container);
        }
    }

    // ==================== RENDER — FORMULAIRE ====================
    function renderForm(container) {
        var msgIdx = Math.floor(Math.random() * MESSAGES_FORM.length);
        var profileKey = getMainProfile();

        // Default bac date: June 16 of current year (or next year if past)
        var now = new Date();
        var bacYear = now.getMonth() >= 6 ? now.getFullYear() + 1 : now.getFullYear();
        var defaultDate = bacYear + '-06-16';

        var matieresHTML = MATIERES.map(function(m) {
            var checked = (m.id !== 'spe1' && m.id !== 'spe2') ? 'checked' : '';
            return '<label class="pb-matiere-item">'
                + '<input type="checkbox" value="' + m.id + '" ' + checked + '>'
                + '<span class="pb-matiere-icon">' + m.icon + '</span>'
                + '<span class="pb-matiere-name">' + m.name + '</span>'
                + '<span class="pb-matiere-coef">coef ' + m.coef + '</span>'
                + '</label>';
        }).join('');

        var niveauxHTML = NIVEAUX.map(function(n) {
            var sel = n.id === 'moyen' ? 'checked' : '';
            return '<label class="pb-radio-item">'
                + '<input type="radio" name="pb-niveau" value="' + n.id + '" ' + sel + '>'
                + '<span class="pb-radio-emoji">' + n.emoji + '</span>'
                + '<span class="pb-radio-info">'
                + '<strong>' + n.label + '</strong>'
                + '<small>' + n.desc + '</small>'
                + '</span>'
                + '</label>';
        }).join('');

        var objectifsHTML = OBJECTIFS.map(function(o) {
            var sel = o.id === 'mention_b' ? 'checked' : '';
            return '<label class="pb-radio-item">'
                + '<input type="radio" name="pb-objectif" value="' + o.id + '" ' + sel + '>'
                + '<span class="pb-radio-emoji">' + o.emoji + '</span>'
                + '<span class="pb-radio-info">'
                + '<strong>' + o.label + '</strong>'
                + '<small>' + o.desc + '</small>'
                + '</span>'
                + '</label>';
        }).join('');

        container.innerHTML = '<div class="pb-form">'
            + '<div class="pb-form-header">'
            + '<div class="pb-form-icon">📅</div>'
            + '<h2>Cree ton plan de revision</h2>'
            + '<p class="pb-form-subtitle">' + MESSAGES_FORM[msgIdx] + '</p>'
            + '</div>'

            // Date du bac
            + '<div class="pb-field">'
            + '<label class="pb-label">📆 Date du bac</label>'
            + '<input type="date" id="pb-date-bac" class="pb-input-date" value="' + defaultDate + '">'
            + '</div>'

            // Matieres
            + '<div class="pb-field">'
            + '<label class="pb-label">📚 Tes matieres</label>'
            + '<p class="pb-field-hint">Selectionne les matieres que tu veux reviser</p>'
            + '<div class="pb-matieres-grid">' + matieresHTML + '</div>'
            + '</div>'

            // Heures par semaine
            + '<div class="pb-field">'
            + '<label class="pb-label">⏰ Heures de revision par semaine</label>'
            + '<div class="pb-range-container">'
            + '<input type="range" id="pb-heures" min="3" max="25" value="10" class="pb-range" oninput="StudFlow.planbac.updateHoursLabel()">'
            + '<div class="pb-range-value" id="pb-heures-label">10h / semaine</div>'
            + '</div>'
            + '</div>'

            // Niveau
            + '<div class="pb-field">'
            + '<label class="pb-label">📊 Ton niveau actuel</label>'
            + '<div class="pb-radio-group">' + niveauxHTML + '</div>'
            + '</div>'

            // Objectif
            + '<div class="pb-field">'
            + '<label class="pb-label">🎯 Ton objectif</label>'
            + '<div class="pb-radio-group">' + objectifsHTML + '</div>'
            + '</div>'

            // Submit
            + '<div class="pb-form-actions">'
            + '<button class="pb-btn-generate" data-action="planbac.generate">Generer mon plan 🚀</button>'
            + '<p class="pb-form-note">Tu pourras ajuster a tout moment</p>'
            + '</div>'
            + '</div>';
    }

    function updateHoursLabel() {
        var val = document.getElementById('pb-heures');
        var label = document.getElementById('pb-heures-label');
        if (val && label) {
            label.textContent = val.value + 'h / semaine';
        }
    }

    // ==================== GENERATE ====================
    function generate() {
        var dateInput = document.getElementById('pb-date-bac');
        if (!dateInput || !dateInput.value) {
            alert('Choisis une date pour le bac');
            return;
        }

        var dateBac = new Date(dateInput.value);
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (dateBac <= today) {
            alert('La date du bac doit etre dans le futur');
            return;
        }

        // Collect matieres
        var checks = document.querySelectorAll('.pb-matiere-item input:checked');
        var matieres = [];
        checks.forEach(function(c) { matieres.push(c.value); });
        if (matieres.length === 0) {
            alert('Selectionne au moins une matiere');
            return;
        }

        var heures = parseInt(document.getElementById('pb-heures').value) || 10;
        var niveau = document.querySelector('input[name="pb-niveau"]:checked');
        var objectif = document.querySelector('input[name="pb-objectif"]:checked');

        var config = {
            dateBac: dateInput.value,
            matieres: matieres,
            heuresParSemaine: heures,
            niveau: niveau ? niveau.value : 'moyen',
            objectif: objectif ? objectif.value : 'mention_b'
        };

        var plan = generatePlan(config);
        savePlan(plan);

        // XP bonus
        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('plan_created');
            window.StudFlow.gamification.showToast('+20 XP — Plan de revision cree !', 'xp', '📅');
        }
        if (window.StudFlow.events) {
            window.StudFlow.events.emit('planning:created', { weeks: plan.weeks ? plan.weeks.length : 0 });
        }

        renderMain();
    }

    // ==================== RENDER — TIMELINE ====================
    function renderTimeline(container, plan) {
        // Limit visible weeks for free users
        var maxWeeks = plan.weeks.length;
        if (window.StudFlow.premium && !window.StudFlow.premium.hasAccess('planning_complet')) {
            maxWeeks = Math.min(2, plan.weeks.length);
        }
        var visiblePlan = { weeks: plan.weeks.slice(0, maxWeeks), phases: plan.phases, totalWeeks: plan.totalWeeks, config: plan.config, profileKey: plan.profileKey, adaptation: plan.adaptation };

        var currentWeekIdx = Math.min(getCurrentWeekIndex(plan), maxWeeks - 1);
        var stats = getCompletionStats(visiblePlan);
        var profileKey = plan.profileKey || getMainProfile();
        var msgs = MESSAGES_PLAN[profileKey] || MESSAGES_PLAN.equilibre;
        var msgIdx = Math.floor(Date.now() / 86400000) % msgs.length;
        var adaptation = plan.adaptation || getProfileAdaptation(profileKey);

        // Phase progress
        var phasesHTML = plan.phases.map(function(p, i) {
            var phaseWeekStart = 0;
            for (var j = 0; j < i; j++) {
                phaseWeekStart += Math.max(1, Math.round(plan.phases[j].pct * plan.totalWeeks));
            }
            var phaseWeeks = Math.max(1, Math.round(p.pct * plan.totalWeeks));
            var isActive = currentWeekIdx >= phaseWeekStart && currentWeekIdx < phaseWeekStart + phaseWeeks;
            var isDone = currentWeekIdx >= phaseWeekStart + phaseWeeks;
            var cls = isDone ? 'done' : (isActive ? 'active' : '');
            return '<div class="pb-phase-item ' + cls + '">'
                + '<span class="pb-phase-icon">' + p.icon + '</span>'
                + '<span class="pb-phase-name">' + p.name + '</span>'
                + '</div>';
        }).join('');

        // Weeks navigation
        var weeksNavHTML = '';
        var viewStart = Math.max(0, currentWeekIdx - 1);
        var viewEnd = Math.min(maxWeeks, viewStart + 4);
        for (var w = viewStart; w < viewEnd; w++) {
            var week = plan.weeks[w];
            var weekStats = getWeekStats(week);
            var isCurrent = w === currentWeekIdx;
            var cls = isCurrent ? 'current' : (weekStats.pct === 100 ? 'done' : '');
            weeksNavHTML += '<button class="pb-week-tab ' + cls + '" data-action="planbac.showWeek" data-param="' + w + '">'
                + '<span class="pb-week-num">S' + week.weekNum + '</span>'
                + '<span class="pb-week-dates">' + week.startDate.substring(0, 5) + '</span>'
                + '<div class="pb-week-mini-bar"><div class="pb-week-mini-fill" style="width:' + weekStats.pct + '%"></div></div>'
                + '</button>';
        }

        // Current week detail
        var selectedWeek = plan.weeks[currentWeekIdx];
        var weekDetailHTML = renderWeekDetail(selectedWeek, currentWeekIdx);

        container.innerHTML = ''
            // Header
            + '<div class="pb-timeline-header">'
            + '<div class="pb-timeline-title-row">'
            + '<h2>📅 Mon Plan Bac</h2>'
            + '<button class="pb-btn-adjust" data-action="planbac.adjust">⚙ Ajuster</button>'
            + '</div>'
            + '<p class="pb-timeline-subtitle">' + plan.totalWeeks + ' semaines jusqu\'au bac — ' + plan.config.matieres.length + ' matieres</p>'
            + '</div>'

            // Motivation
            + '<div class="pb-motivation">'
            + '<span class="pb-motivation-icon">💬</span>'
            + '<p>' + msgs[msgIdx] + '</p>'
            + '</div>'

            // Global progress
            + '<div class="pb-global-progress">'
            + '<div class="pb-progress-header">'
            + '<span class="pb-progress-label">Progression globale</span>'
            + '<span class="pb-progress-pct">' + stats.pct + '%</span>'
            + '</div>'
            + '<div class="pb-progress-bar"><div class="pb-progress-fill" style="width:' + stats.pct + '%"></div></div>'
            + '<div class="pb-progress-detail">' + stats.done + '/' + stats.total + ' sessions completees</div>'
            + '</div>'

            // Phase tracker
            + '<div class="pb-phases">'
            + '<div class="pb-phases-track">' + phasesHTML + '</div>'
            + '</div>'

            // Weeks nav
            + '<div class="pb-weeks-nav">' + weeksNavHTML + '</div>'

            // Week detail
            + '<div id="pb-week-detail">' + weekDetailHTML + '</div>'

            // Profile advice
            + '<div class="pb-advice">'
            + '<span class="pb-advice-icon">💡</span>'
            + '<p><strong>Conseil pour toi :</strong> ' + adaptation.advice + '</p>'
            + '</div>'

            // Premium upsell if limited
            + (maxWeeks < plan.weeks.length
                ? '<div class="prem-upsell-inline" style="margin:16px 0;">'
                + '<p>\uD83D\uDD12 ' + (plan.weeks.length - maxWeeks) + ' semaines supplementaires disponibles en Premium</p>'
                + '<button class="prem-upsell-cta" data-action="premium.showPremiumScreen">Debloquer le planning complet \u2192</button>'
                + '</div>'
                : '')

            // Actions
            + '<div class="pb-timeline-actions">'
            + '<button class="pb-btn-reset" data-action="planbac.resetPlan">Recommencer a zero</button>'
            + '</div>';
    }

    function getWeekStats(week) {
        var total = week.sessions.length;
        var done = week.sessions.filter(function(s) { return s.done; }).length;
        return {
            total: total,
            done: done,
            pct: total > 0 ? Math.round((done / total) * 100) : 0
        };
    }

    function renderWeekDetail(week, weekIdx) {
        var weekStats = getWeekStats(week);
        var sessionsHTML = week.sessions.map(function(s, i) {
            var doneClass = s.done ? 'done' : '';
            var checkIcon = s.done ? '✅' : '⬜';
            var typeLabel = getTypeLabel(s.type);
            return '<div class="pb-session-item ' + doneClass + '" data-action="planbac.toggleSession" data-param="' + weekIdx + '" data-param2="' + i + '">'
                + '<span class="pb-session-check">' + checkIcon + '</span>'
                + '<span class="pb-session-icon">' + s.icon + '</span>'
                + '<div class="pb-session-info">'
                + '<div class="pb-session-title">' + s.description + '</div>'
                + '<div class="pb-session-meta">'
                + '<span class="pb-session-type">' + typeLabel + '</span>'
                + '<span class="pb-session-duree">' + s.duree + ' min</span>'
                + '</div>'
                + '</div>'
                + '</div>';
        }).join('');

        var completionMsg = '';
        if (weekStats.pct === 100) {
            completionMsg = '<div class="pb-week-complete">🎉 Semaine terminee ! Bravo !</div>';
        }

        return '<div class="pb-week-detail">'
            + '<div class="pb-week-header">'
            + '<div class="pb-week-header-info">'
            + '<h3>' + week.phaseIcon + ' Semaine ' + week.weekNum + ' — ' + week.phase + '</h3>'
            + '<p>' + week.startDate + ' → ' + week.endDate + '</p>'
            + '</div>'
            + '<div class="pb-week-progress">'
            + '<span>' + weekStats.done + '/' + weekStats.total + '</span>'
            + '</div>'
            + '</div>'
            + '<p class="pb-week-phase-desc">' + week.phaseDesc + '</p>'
            + completionMsg
            + '<div class="pb-sessions-list">' + sessionsHTML + '</div>'
            + '</div>';
    }

    function getTypeLabel(type) {
        var labels = {
            cours: '📖 Cours',
            fiche: '📋 Fiche',
            exercices: '✏️ Exercices',
            annales: '📝 Annales',
            quiz: '⚡ Quiz',
            methodo: '🧠 Methodo',
            revision: '🔄 Revision',
            mental: '🧘 Mental',
            respiration: '🫁 Respiration',
            blanc: '📄 Blanc',
            correction: '🔍 Correction'
        };
        return labels[type] || type;
    }

    // ==================== ACTIONS ====================
    function toggleSession(weekIdx, sessionIdx) {
        var plan = loadPlan();
        if (!plan || !plan.weeks[weekIdx]) return;

        var session = plan.weeks[weekIdx].sessions[sessionIdx];
        session.done = !session.done;
        savePlan(plan);

        // XP for completing session
        if (session.done && window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('plan_session');
            window.StudFlow.gamification.showToast('+10 XP — Session terminee !', 'xp', '✅');
        }

        // Check week completion
        var weekStats = getWeekStats(plan.weeks[weekIdx]);
        if (weekStats.pct === 100 && session.done && window.StudFlow.gamification) {
            setTimeout(function() {
                window.StudFlow.gamification.showToast('Semaine ' + plan.weeks[weekIdx].weekNum + ' terminee !', 'streak', '🎉');
                window.StudFlow.gamification.spawnConfetti();
            }, 500);
        }

        renderMain();
    }

    function showWeek(weekIdx) {
        var plan = loadPlan();
        if (!plan || !plan.weeks[weekIdx]) return;

        var detailContainer = document.getElementById('pb-week-detail');
        if (detailContainer) {
            detailContainer.innerHTML = renderWeekDetail(plan.weeks[weekIdx], weekIdx);
        }

        // Update tab active state
        var tabs = document.querySelectorAll('.pb-week-tab');
        tabs.forEach(function(tab, i) { tab.classList.remove('viewing'); });
        // Find the right tab by data
        var visibleTabs = document.querySelectorAll('.pb-week-tab');
        var currentWeekIdx = getCurrentWeekIndex(plan);
        var viewStart = Math.max(0, currentWeekIdx - 1);
        var tabIdx = weekIdx - viewStart;
        if (visibleTabs[tabIdx]) visibleTabs[tabIdx].classList.add('viewing');
    }

    function adjust() {
        var plan = loadPlan();
        if (!plan) return;

        var container = document.getElementById('planbac-content');
        if (!container) return;

        // Show form pre-filled with current config
        renderForm(container);

        // Pre-fill values
        setTimeout(function() {
            var dateInput = document.getElementById('pb-date-bac');
            if (dateInput && plan.config.dateBac) dateInput.value = plan.config.dateBac;

            var heuresInput = document.getElementById('pb-heures');
            if (heuresInput && plan.config.heuresParSemaine) {
                heuresInput.value = plan.config.heuresParSemaine;
                updateHoursLabel();
            }

            // Pre-check matieres
            var checks = document.querySelectorAll('.pb-matiere-item input');
            checks.forEach(function(c) {
                c.checked = plan.config.matieres.indexOf(c.value) !== -1;
            });

            // Pre-select niveau
            var niveauRadio = document.querySelector('input[name="pb-niveau"][value="' + plan.config.niveau + '"]');
            if (niveauRadio) niveauRadio.checked = true;

            // Pre-select objectif
            var objRadio = document.querySelector('input[name="pb-objectif"][value="' + plan.config.objectif + '"]');
            if (objRadio) objRadio.checked = true;
        }, 50);
    }

    function resetPlan() {
        if (!confirm('Recommencer a zero ? Toute ta progression sera perdue.')) return;
        window.StudFlow.storage.removeData('planBac');
        renderMain();
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.planbac = {
        show: show,
        renderMain: renderMain,
        generate: generate,
        toggleSession: toggleSession,
        showWeek: showWeek,
        adjust: adjust,
        resetPlan: resetPlan,
        updateHoursLabel: updateHoursLabel
    };

})();
