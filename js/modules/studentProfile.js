// studentProfile.js — Profil intelligent par matière + mémoire des difficultés
// Stocke les scores par matière, retient les erreurs, adapte le niveau
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_student_profile';

    // ==================== CHARGEMENT / SAUVEGARDE ====================
    function load() {
        return window.StudFlow.storage.loadData(STORAGE_KEY, {
            global: { correct: 0, total: 0, modeClairUsed: 0 },
            subjects: {},
            errors: [],
            lastUpdated: null
        });
    }

    function save(data) {
        data.lastUpdated = new Date().toISOString();
        window.StudFlow.storage.saveData(STORAGE_KEY, data);
    }

    // ==================== PROFIL GLOBAL ====================
    function getGlobalLevel() {
        var data = load();
        var g = data.global;
        if (g.total < 5) return 'moyen'; // pas assez de données
        var rate = g.total > 0 ? Math.round((g.correct / g.total) * 100) : 0;
        // Ajuster selon l'utilisation du mode clair
        var clairPenalty = g.modeClairUsed > g.total * 0.3 ? 10 : 0;
        rate = Math.max(0, rate - clairPenalty);
        if (rate < 50) return 'difficulte';
        if (rate > 80) return 'alaise';
        return 'moyen';
    }

    function getGlobalStats() {
        var data = load();
        var g = data.global;
        var rate = g.total > 0 ? Math.round((g.correct / g.total) * 100) : 0;
        return { correct: g.correct, total: g.total, rate: rate, level: getGlobalLevel() };
    }

    // ==================== PROFIL PAR MATIÈRE ====================
    function getSubjectData(subjectId) {
        var data = load();
        if (!data.subjects[subjectId]) {
            data.subjects[subjectId] = { correct: 0, total: 0, modeClairUsed: 0 };
        }
        return data.subjects[subjectId];
    }

    function getSubjectLevel(subjectId) {
        var s = getSubjectData(subjectId);
        if (s.total < 3) return 'moyen';
        var rate = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
        if (rate < 50) return 'difficulte';
        if (rate > 80) return 'alaise';
        return 'moyen';
    }

    function getSubjectStats(subjectId) {
        var s = getSubjectData(subjectId);
        var rate = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
        return { correct: s.correct, total: s.total, rate: rate, level: getSubjectLevel(subjectId) };
    }

    function getAllSubjectStats() {
        var data = load();
        var result = [];
        for (var id in data.subjects) {
            var s = data.subjects[id];
            var rate = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
            var level = 'moyen';
            if (s.total >= 3) {
                if (rate < 50) level = 'difficulte';
                else if (rate > 80) level = 'alaise';
            }
            result.push({ id: id, correct: s.correct, total: s.total, rate: rate, level: level });
        }
        result.sort(function(a, b) { return a.rate - b.rate; }); // plus faible en premier
        return result;
    }

    // ==================== ENREGISTRER UNE RÉPONSE ====================
    function recordAnswer(subjectId, question, isCorrect, answer) {
        var data = load();
        // Global
        data.global.total++;
        if (isCorrect) data.global.correct++;
        // Par matière
        if (subjectId) {
            if (!data.subjects[subjectId]) {
                data.subjects[subjectId] = { correct: 0, total: 0, modeClairUsed: 0 };
            }
            data.subjects[subjectId].total++;
            if (isCorrect) data.subjects[subjectId].correct++;
        }
        // Mémoire des erreurs
        if (!isCorrect && question) {
            recordError(data, subjectId, question, answer);
        }
        save(data);
    }

    function recordModeClairUsed(subjectId) {
        var data = load();
        data.global.modeClairUsed = (data.global.modeClairUsed || 0) + 1;
        if (subjectId && data.subjects[subjectId]) {
            data.subjects[subjectId].modeClairUsed = (data.subjects[subjectId].modeClairUsed || 0) + 1;
        }
        save(data);
    }

    // ==================== MÉMOIRE DES ERREURS ====================
    function recordError(data, subjectId, question, answer) {
        var errors = data.errors || [];
        // Chercher si cette question existe déjà
        var found = false;
        for (var i = 0; i < errors.length; i++) {
            if (errors[i].question === question) {
                errors[i].count = (errors[i].count || 1) + 1;
                errors[i].lastSeen = new Date().toISOString();
                found = true;
                break;
            }
        }
        if (!found) {
            errors.push({
                question: question,
                answer: answer || '',
                subject: subjectId || '',
                count: 1,
                lastSeen: new Date().toISOString()
            });
        }
        // Garder max 50 erreurs
        if (errors.length > 50) {
            errors.sort(function(a, b) { return (b.count || 1) - (a.count || 1); });
            errors = errors.slice(0, 50);
        }
        data.errors = errors;
    }

    function getWeakQuestions(limit) {
        var data = load();
        var errors = (data.errors || []).slice();
        errors.sort(function(a, b) { return (b.count || 1) - (a.count || 1); });
        return errors.slice(0, limit || 10);
    }

    function getWeakSubjects() {
        var all = getAllSubjectStats();
        return all.filter(function(s) { return s.level === 'difficulte'; });
    }

    // ==================== MESSAGE ADAPTATIF ====================
    // ==================== RECORD PERSONNEL ====================
    function recordSessionScore(subjectId, correct, total) {
        if (!subjectId || total === 0) return;
        var data = load();
        if (!data.records) data.records = {};
        var pct = Math.round((correct / total) * 100);
        var prev = data.records[subjectId] || 0;
        var isNewRecord = pct > prev;
        if (isNewRecord) {
            data.records[subjectId] = pct;
            save(data);
        }
        return { score: pct, previousBest: prev, isNewRecord: isNewRecord };
    }

    function getRecord(subjectId) {
        var data = load();
        return (data.records && data.records[subjectId]) || 0;
    }

    function getAllRecords() {
        var data = load();
        return data.records || {};
    }

    function getAdaptiveMessage(subjectId) {
        var level = subjectId ? getSubjectLevel(subjectId) : getGlobalLevel();
        if (level === 'difficulte') {
            var msgs = [
                '\uD83D\uDCA1 On simplifie ensemble',
                '\uD83D\uDCA1 Pas de panique, on y va doucement',
                '\uD83D\uDCA1 On adapte pour t\u2019aider'
            ];
            return msgs[Math.floor(Math.random() * msgs.length)];
        }
        if (level === 'alaise') {
            var msgs2 = [
                '\uD83D\uDD25 Tu progresses tr\u00E8s bien\u00A0!',
                '\u2B50 Tu ma\u00EEtrises le sujet\u00A0!',
                '\uD83C\uDFC6 Niveau avanc\u00E9 activ\u00E9\u00A0!'
            ];
            return msgs2[Math.floor(Math.random() * msgs2.length)];
        }
        var msgs3 = [
            '\uD83D\uDC4D Continue comme \u00E7a\u00A0!',
            '\uD83D\uDCAA Tu es sur la bonne voie\u00A0!',
            '\u2705 Bon rythme\u00A0!'
        ];
        return msgs3[Math.floor(Math.random() * msgs3.length)];
    }

    function shouldAutoSimplify(subjectId) {
        var level = subjectId ? getSubjectLevel(subjectId) : getGlobalLevel();
        return level === 'difficulte';
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.studentProfile = {
        getGlobalLevel: getGlobalLevel,
        getGlobalStats: getGlobalStats,
        getSubjectLevel: getSubjectLevel,
        getSubjectStats: getSubjectStats,
        getAllSubjectStats: getAllSubjectStats,
        recordAnswer: recordAnswer,
        recordModeClairUsed: recordModeClairUsed,
        getWeakQuestions: getWeakQuestions,
        getWeakSubjects: getWeakSubjects,
        getAdaptiveMessage: getAdaptiveMessage,
        shouldAutoSimplify: shouldAutoSimplify,
        recordSessionScore: recordSessionScore,
        getRecord: getRecord,
        getAllRecords: getAllRecords
    };
})();
