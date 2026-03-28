// orientation.js — Module orientation post-bac
(function() {
    'use strict';

    var currentStep = 0;
    var answers = {};

    var QUESTIONS = [
        {
            question: 'Qu\'est-ce qui te motive le plus ?',
            options: [
                { label: 'Comprendre le monde, reflechir', value: 'reflexion' },
                { label: 'Creer, inventer, construire', value: 'creation' },
                { label: 'Aider les autres, soigner', value: 'social' },
                { label: 'Gerer, organiser, diriger', value: 'business' }
            ]
        },
        {
            question: 'Quel est ton rapport aux etudes longues ?',
            options: [
                { label: 'Je veux continuer longtemps (5 ans+)', value: 'long' },
                { label: 'Je prefere des etudes courtes (2-3 ans)', value: 'court' },
                { label: 'Je veux alterner cours et travail', value: 'alternance' },
                { label: 'Je ne sais pas encore', value: 'indecis' }
            ]
        },
        {
            question: 'Quel environnement te convient ?',
            options: [
                { label: 'Un cadre structure, encadrant', value: 'structure' },
                { label: 'De l\'autonomie, je me gere', value: 'autonome' },
                { label: 'Des petits groupes, du suivi', value: 'petit_groupe' },
                { label: 'De la pratique, du terrain', value: 'pratique' }
            ]
        },
        {
            question: 'Quelles matieres tu preferes ?',
            options: [
                { label: 'Sciences (maths, physique, SVT)', value: 'sciences' },
                { label: 'Lettres, langues, philo', value: 'lettres' },
                { label: 'Eco, droit, commerce', value: 'eco' },
                { label: 'Art, design, communication', value: 'art' }
            ]
        },
        {
            question: 'Qu\'est-ce qui compte le plus pour toi ?',
            options: [
                { label: 'Un bon salaire apres', value: 'salaire' },
                { label: 'Faire un metier qui a du sens', value: 'sens' },
                { label: 'La securite de l\'emploi', value: 'securite' },
                { label: 'La liberte et l\'independance', value: 'liberte' }
            ]
        }
    ];

    var FILIERES = [
        {
            name: 'Classes preparatoires (CPGE)',
            description: 'Formation intensive de 2 ans pour integrer les grandes ecoles (HEC, Polytechnique, ENS...). Tres encadre, rythme soutenu.',
            tags: ['long', 'structure', 'sciences', 'lettres', 'eco', 'salaire'],
            icon: '🏛️',
            duree: '2 ans + ecole',
            debouches: 'Grandes ecoles, cadres superieurs'
        },
        {
            name: 'Universite (Licence → Master)',
            description: 'Parcours academique flexible. Licence en 3 ans, puis Master en 2 ans. Grande autonomie et choix de specialisation.',
            tags: ['long', 'autonome', 'reflexion', 'lettres', 'sciences', 'sens'],
            icon: '🎓',
            duree: '3 a 5 ans',
            debouches: 'Enseignement, recherche, cadres, metiers specialises'
        },
        {
            name: 'BTS (Brevet de Technicien Superieur)',
            description: 'Formation courte et professionnalisante en 2 ans, en lycee. Tres encadre, stages obligatoires.',
            tags: ['court', 'structure', 'pratique', 'securite', 'business'],
            icon: '🔧',
            duree: '2 ans',
            debouches: 'Technicien, assistant commercial, comptabilite, informatique'
        },
        {
            name: 'BUT (ex-DUT) en IUT',
            description: 'Formation en 3 ans a l\'universite, en petits groupes. Bon equilibre theorie/pratique avec projets tutores.',
            tags: ['court', 'petit_groupe', 'pratique', 'eco', 'sciences', 'securite'],
            icon: '⚙️',
            duree: '3 ans',
            debouches: 'Technicien superieur, poursuite en ecole d\'ingenieur'
        },
        {
            name: 'Ecoles de commerce post-bac',
            description: 'Integration directe apres le bac. Formation en management, marketing, finance sur 3 a 5 ans.',
            tags: ['business', 'salaire', 'eco', 'long', 'structure'],
            icon: '💼',
            duree: '3 a 5 ans',
            debouches: 'Marketing, finance, management, entrepreneuriat'
        },
        {
            name: 'Ecoles d\'ingenieurs post-bac',
            description: 'Integration directe avec prepa integree. Sciences et technologies, souvent en alternance possible.',
            tags: ['sciences', 'creation', 'long', 'salaire', 'structure'],
            icon: '🚀',
            duree: '5 ans',
            debouches: 'Ingenieur R&D, informatique, industrie, conseil'
        },
        {
            name: 'Ecoles d\'art et design',
            description: 'Formation creative : beaux-arts, design graphique, architecture, mode. Souvent sur dossier/concours.',
            tags: ['art', 'creation', 'autonome', 'liberte', 'sens'],
            icon: '🎨',
            duree: '3 a 5 ans',
            debouches: 'Designer, architecte, directeur artistique, illustrateur'
        },
        {
            name: 'Alternance (contrat pro/apprentissage)',
            description: 'Tu etudies ET tu travailles en entreprise. Salaire des le debut, experience concrete. Dispo en BTS, BUT, licence, master.',
            tags: ['alternance', 'pratique', 'salaire', 'securite', 'court'],
            icon: '🤝',
            duree: '1 a 3 ans',
            debouches: 'Emploi direct, evolution rapide en entreprise'
        },
        {
            name: 'Etudes de sante (PASS/L.AS)',
            description: 'Parcours pour devenir medecin, pharmacien, sage-femme, dentiste. Tres selectif, premiere annee intense.',
            tags: ['social', 'sciences', 'long', 'sens', 'securite'],
            icon: '🏥',
            duree: '6 a 12 ans',
            debouches: 'Medecin, pharmacien, dentiste, kinesitherapeute'
        },
        {
            name: 'Sciences Po / IEP',
            description: 'Formation pluridisciplinaire en sciences politiques, droit, economie. Debouches varies : fonction publique, journalisme, ONG.',
            tags: ['reflexion', 'lettres', 'eco', 'sens', 'long', 'autonome'],
            icon: '🏛️',
            duree: '5 ans',
            debouches: 'Haute fonction publique, diplomatie, journalisme, ONG'
        }
    ];

    function show() {
        currentStep = 0;
        answers = {};
        window.StudFlow.app.showScreen('orientation');
        renderQuestion();
    }

    function renderQuestion() {
        var container = document.getElementById('orientation-content');
        if (!container) return;

        if (currentStep >= QUESTIONS.length) {
            showResults();
            return;
        }

        var q = QUESTIONS[currentStep];
        var progressPct = Math.round((currentStep / QUESTIONS.length) * 100);

        var html = '<div style="padding:16px;">'
            + '<div style="text-align:center;margin-bottom:16px;">'
            + '<div style="font-size:2rem;margin-bottom:6px;">🧭</div>'
            + '<h2 style="color:var(--text);font-size:1.1rem;margin:0 0 4px;">Orientation post-bac</h2>'
            + '<p style="color:var(--text-muted);font-size:0.75rem;">Question ' + (currentStep + 1) + '/' + QUESTIONS.length + '</p>'
            + '</div>'
            + '<div style="background:rgba(255,255,255,0.06);border-radius:8px;height:4px;margin-bottom:20px;">'
            + '<div style="background:var(--accent);height:100%;border-radius:8px;width:' + progressPct + '%;transition:width 0.3s;"></div>'
            + '</div>'
            + '<h3 style="color:var(--text);font-size:1rem;margin:0 0 16px;text-align:center;">' + q.question + '</h3>';

        for (var i = 0; i < q.options.length; i++) {
            var opt = q.options[i];
            html += '<div class="orientation-card" data-action="orientation.answer" data-param="' + opt.value + '" '
                + 'style="cursor:pointer;">'
                + '<h4>' + opt.label + '</h4>'
                + '</div>';
        }

        html += '</div>';
        container.innerHTML = html;
    }

    function answer(value) {
        answers[currentStep] = value;
        currentStep++;
        renderQuestion();
    }

    function showResults() {
        var container = document.getElementById('orientation-content');
        if (!container) return;

        // Score each filiere
        var userTags = [];
        for (var key in answers) {
            userTags.push(answers[key]);
        }

        var scored = FILIERES.map(function(f) {
            var score = 0;
            for (var i = 0; i < userTags.length; i++) {
                if (f.tags.indexOf(userTags[i]) !== -1) {
                    score++;
                }
            }
            return { filiere: f, score: score };
        });

        scored.sort(function(a, b) { return b.score - a.score; });

        // Show top 5
        var top = scored.slice(0, 5);

        var html = '<div style="padding:16px;">'
            + '<div style="text-align:center;margin-bottom:16px;">'
            + '<div style="font-size:2rem;margin-bottom:6px;">🎯</div>'
            + '<h2 style="color:var(--text);font-size:1.1rem;margin:0 0 6px;">Tes filieres recommandees</h2>'
            + '<p style="color:var(--text-muted);font-size:0.8rem;">Basees sur tes reponses. Explore chaque option !</p>'
            + '</div>';

        for (var i = 0; i < top.length; i++) {
            var f = top[i].filiere;
            var matchPct = Math.round((top[i].score / userTags.length) * 100);
            html += '<div class="orientation-card">'
                + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">'
                + '<span style="font-size:1.5rem;">' + f.icon + '</span>'
                + '<span style="background:var(--accent-soft);color:var(--accent-light);font-size:0.7rem;padding:2px 8px;border-radius:6px;">'
                + matchPct + '% match</span>'
                + '</div>'
                + '<h4>' + f.name + '</h4>'
                + '<p>' + f.description + '</p>'
                + '<div style="margin-top:8px;">'
                + '<span class="orientation-tag">Duree : ' + f.duree + '</span>'
                + '</div>'
                + '<p style="font-size:0.75rem;color:var(--accent-light);margin-top:6px;">Debouches : ' + f.debouches + '</p>'
                + '</div>';
        }

        html += '<button data-action="orientation.show" '
            + 'style="background:var(--bg-glass);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:10px 20px;color:var(--text);font-size:0.85rem;cursor:pointer;width:100%;margin-top:8px;">'
            + 'Refaire le test</button>'
            + '<p style="text-align:center;font-size:0.7rem;color:var(--text-dim);margin-top:12px;">'
            + 'Ce test est indicatif. Renseigne-toi sur Parcoursup et aupres de tes professeurs.</p>'
            + '</div>';

        container.innerHTML = html;

        if (window.StudFlow.gamification) {
            window.StudFlow.gamification.addXP('diagnostic_done');
            window.StudFlow.gamification.showToast('Orientation terminee !', 'xp', '🧭');
        }
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.orientation = {
        show: show,
        answer: answer
    };
})();
