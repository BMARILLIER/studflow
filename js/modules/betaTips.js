// betaTips.js — One-time contextual tips shown after key user actions
(function() {
    'use strict';

    var STORAGE_KEY = 'studflow_beta_tips_seen';

    var TIPS = {
        pdf_imported: {
            message: 'Ton document est pret. Tu peux generer des quiz ou des flashcards pour reviser plus vite.',
            event: 'pdf:imported'
        },
        first_generation: {
            message: 'Astuce : entraine-toi avec le quiz pour mieux memoriser.',
            event: 'generation:completed'
        },
        quiz_completed: {
            message: 'Bien joue ! Revise les erreurs avec les flashcards pour ancrer tes connaissances.',
            event: 'quiz:completed'
        },
        flashcard_completed: {
            message: 'Les repetitions espacees renforcent la memoire. Reviens demain pour consolider.',
            event: 'flashcard:completed'
        }
    };

    function getSeenTips() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (e) { return {}; }
    }

    function markSeen(tipId) {
        var seen = getSeenTips();
        seen[tipId] = new Date().toISOString();
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
        } catch (e) { /* ignore */ }
    }

    function showTip(tipId) {
        var seen = getSeenTips();
        if (seen[tipId]) return; // already shown

        var tip = TIPS[tipId];
        if (!tip) return;

        markSeen(tipId);

        // Use existing toast system
        if (window.StudFlow.gamification && window.StudFlow.gamification.showToast) {
            window.StudFlow.gamification.showToast(tip.message, 'xp');
        }
    }

    function init() {
        var bus = window.StudFlow.events;
        if (!bus) return;

        // Listen for events and show tips once
        bus.on('pdf:imported', function() { showTip('pdf_imported'); });
        bus.on('generation:completed', function() { showTip('first_generation'); });
        bus.on('quiz:completed', function() { showTip('quiz_completed'); });
        bus.on('flashcard:completed', function() { showTip('flashcard_completed'); });
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.betaTips = {
        init: init,
        showTip: showTip
    };
})();
