// coachEngine.js — Deterministic adaptive coach engine
// Returns personalized messages based on student profile + context
// No AI — pure rule-based logic with quality copywriting
(function() {
    'use strict';

    var _lastKey = '';

    // ==================== MESSAGE BANKS ====================
    var MESSAGES = {
        start: {
            stress_high: [
                'On ne cherche pas la perfection. Juste commencer, tranquillement.',
                'On fait simple : 2-3 questions, et c\'est deja tres bien.',
                'Respire. Tu n\'as pas besoin d\'aller vite, juste d\'avancer.',
                'Pas de pression. On y va doucement.'
            ],
            consistency_low: [
                'Juste 3 minutes. Pas plus. Lance la session.',
                'Pas besoin de motivation, juste un petit demarrage.',
                'Commence. Meme petit, ca compte.',
                '3 cartes et t\'as deja fait plus que hier.'
            ],
            confidence_low: [
                'Chaque carte = un progres. Meme petite.',
                'Tu sais plus que tu crois. On verifie ?',
                'Pas besoin d\'etre parfait. Juste present.',
                'On avance a ton rythme.'
            ],
            challenge: [
                'Objectif : session propre. Tu peux faire mieux qu\'hier.',
                'On avance serieusement aujourd\'hui.',
                'Montre ce que tu sais faire.',
                'Pret(e) a tout defoncer ?'
            ],
            weak_subject: [
                'C\'est normal que ce soit plus difficile ici. Etape par etape.',
                'On va progresser doucement sur cette matiere.',
                'Chaque bonne reponse ici compte double.',
                'C\'est la qu\'on progresse le plus.'
            ],
            strong_subject: [
                'Tu es a l\'aise ici. On consolide.',
                'Garde ton niveau. Precision et rigueur.',
                'Tu maitrises. On entretient.',
                'Zone de confort. Parfait pour la confiance.'
            ],
            default: [
                'C\'est parti.',
                'On y va. Une session a la fois.',
                'Avance tranquillement.',
                'Session lancee.'
            ]
        },
        during: {
            difficulty: [
                'C\'est normal de bloquer. Continue.',
                'On ne lache pas. Une question a la fois.',
                'L\'erreur fait partie du progres.',
                'Prends ton temps. Pas de rush.'
            ],
            end_push: [
                'Encore un petit effort. Tu es presque au bout.',
                'Dernieres questions. Tu y es.',
                'Tu peux finir fort.',
                'Sprint final. Allez.'
            ],
            good_flow: [
                'Bien. Continue comme ca.',
                'C\'est propre. Tu progresses.',
                'Tu es dans le rythme.',
                'Solide.'
            ],
            stress_high: [
                'Tu avances bien. Respire.',
                'Prends ton temps, c\'est pas une course.',
                'T\'es en train de progresser, meme si ca parait lent.'
            ],
            default: [
                'Continue.',
                'Tu avances.',
                'Reste concentre(e).'
            ]
        },
        end: {
            stress_high: [
                'Tu as fait le travail. C\'est suffisant pour aujourd\'hui.',
                'Tu avances, meme si tu en doutes.',
                'C\'est fini. Tu as gere. Souffle.',
                'Session terminee. Fais une pause, tu l\'as merite.'
            ],
            confidence_low: [
                'Tu vois ? T\'es capable.',
                'Session terminee. Tu progresses, c\'est un fait.',
                'Chaque session te rapproche du Bac.'
            ],
            consistency_low: [
                'Meme petite, cette session compte.',
                'Le plus dur, c\'etait de commencer. C\'est fait.',
                'Reviens demain. Meme format.'
            ],
            performance_high: [
                'Bon niveau. Continue comme ca.',
                'Tu construis quelque chose de solide.',
                'Garde cette regularite.'
            ],
            challenge: [
                'Pas mal. Mais tu peux faire plus demain.',
                'Good. Reviens demain pour battre ton score.',
                'Session validee. Next level demain.'
            ],
            default: [
                'Session terminee. C\'est fait.',
                'Tu as avance aujourd\'hui. C\'est ca qui compte.',
                'Ce que tu fais aujourd\'hui te servira le jour J.',
                'Bien joue. A demain.'
            ]
        }
    };

    // ==================== DRIFT MESSAGES ====================
    var DRIFT_POSITIVE = [
        'Tu te sous-estimes en {subject} : tes resultats progressent.',
        'Ton niveau en {subject} est meilleur que ce que tu penses.',
        'Tu prends confiance en {subject}, et ca se voit.'
    ];

    var DRIFT_NEGATIVE = [
        'Attention en {subject} : revois les bases, quelques lacunes a combler.',
        'En {subject}, concentre-toi sur les fondamentaux.'
    ];

    // ==================== PICK WITHOUT REPEAT ====================
    function pickMessage(pool) {
        if (!pool || pool.length === 0) return '';
        if (pool.length === 1) return pool[0];
        // Avoid repeating last message
        var idx;
        var attempts = 0;
        do {
            idx = Math.floor(Math.random() * pool.length);
            attempts++;
        } while (pool[idx] === _lastKey && attempts < 5);
        _lastKey = pool[idx];
        return pool[idx];
    }

    // ==================== SUBJECT DIFFICULTY ====================
    function detectSubjectDifficulty(profile, subject) {
        if (!profile || !profile.academic || !subject) return 'neutral';
        if ((profile.academic.weakSubjects || []).indexOf(subject) !== -1) return 'weak';
        if ((profile.academic.strongSubjects || []).indexOf(subject) !== -1) return 'strong';
        return 'neutral';
    }

    // ==================== DRIFT DETECTION ====================
    function detectDrift(profile, subject, stats) {
        if (!profile || !profile.academic || !subject || !stats) return null;
        var weak = profile.academic.weakSubjects || [];
        var score = stats.bySubject ? stats.bySubject[subject] : null;
        if (score === null || score === undefined) return null;

        if (weak.indexOf(subject) !== -1 && score >= 70) {
            return { positive: true, subject: subject };
        }
        if (weak.indexOf(subject) === -1 && score < 40) {
            return { positive: false, subject: subject };
        }
        return null;
    }

    // ==================== MAIN ENGINE ====================
    function getCoachMessage(profile, context) {
        if (!profile) profile = {};
        if (!context) context = {};

        var moment = context.moment || 'start';
        var bank = MESSAGES[moment] || MESSAGES.start;
        var behavior = profile.behavior || {};
        var motivation = profile.motivation || {};
        var subject = context.subject || '';
        var progress = context.progress || 0;
        var successRate = context.successRate || 0;
        var category = 'default';

        if (moment === 'start') {
            // Priority: stress > weak subject > low consistency > challenge > strong > default
            if (behavior.stressLevel === 'high') category = 'stress_high';
            else if (subject && detectSubjectDifficulty(profile, subject) === 'weak') category = 'weak_subject';
            else if (behavior.consistency === 'low') category = 'consistency_low';
            else if (behavior.confidence === 'low') category = 'confidence_low';
            else if (motivation.type === 'challenge') category = 'challenge';
            else if (subject && detectSubjectDifficulty(profile, subject) === 'strong') category = 'strong_subject';

        } else if (moment === 'during') {
            // Priority: difficulty > end push > good flow > stress > default
            if (successRate < 40 && progress > 20) category = 'difficulty';
            else if (progress >= 70) category = 'end_push';
            else if (successRate >= 70) category = 'good_flow';
            else if (behavior.stressLevel === 'high') category = 'stress_high';

        } else if (moment === 'end') {
            // Check drift first
            if (subject) {
                var drift = detectDrift(profile, subject, context);
                if (drift && drift.positive) {
                    var pool = DRIFT_POSITIVE;
                    return pickMessage(pool).replace('{subject}', subject);
                }
            }
            // Priority: stress > low consistency > high performance > challenge > default
            if (behavior.stressLevel === 'high') category = 'stress_high';
            else if (behavior.consistency === 'low') category = 'consistency_low';
            else if (successRate >= 80) category = 'performance_high';
            else if (behavior.confidence === 'low') category = 'confidence_low';
            else if (motivation.type === 'challenge') category = 'challenge';
        }

        return pickMessage(bank[category] || bank['default']);
    }

    // ==================== SESSION PARAMS ====================
    function getSessionParams(profile) {
        if (!profile) profile = {};
        var behavior = profile.behavior || {};
        var motivation = profile.motivation || {};

        var minutes = 10;
        var cards = 10;

        if (behavior.stressLevel === 'high') { minutes = 5; cards = 5; }
        else if (behavior.consistency === 'low') { minutes = 5; cards = 5; }
        else if (motivation.pace === 'fast' || motivation.type === 'challenge') { minutes = 15; cards = 15; }

        return { minutes: minutes, cards: cards };
    }

    // ==================== COMPUTE DRIFT (batch) ====================
    function computeDrift(profile) {
        if (!profile || !profile.academic || !profile.computed) return [];
        var weak = profile.academic.weakSubjects || [];
        var real = profile.computed.realLevel || {};
        var messages = [];

        for (var subject in real) {
            var drift = detectDrift(profile, subject, { bySubject: real });
            if (drift && drift.positive) {
                messages.push({
                    type: 'positive',
                    subject: subject,
                    message: pickMessage(DRIFT_POSITIVE).replace('{subject}', subject)
                });
            } else if (drift && !drift.positive) {
                messages.push({
                    type: 'negative',
                    subject: subject,
                    message: pickMessage(DRIFT_NEGATIVE).replace('{subject}', subject)
                });
            }
        }

        if (profile.computed) {
            profile.computed.drift = messages.length;
        }
        return messages;
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.coachEngine = {
        getCoachMessage: getCoachMessage,
        getSessionParams: getSessionParams,
        computeDrift: computeDrift,
        detectSubjectDifficulty: detectSubjectDifficulty,
        detectDrift: detectDrift
    };
})();
