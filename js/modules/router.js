// router.js — Minimal hash-based router with history.pushState
(function() {
    // Screens that support deep linking (excludes transient/flow screens)
    var ROUTABLE = {
        betagate: true,
        betawelcome: true,
        dashboard: true,
        flashcard: true,
        quiz: true,
        coach: true,
        stress: true,
        focus: true,
        bacfrancais: true,
        planbac: true,
        urgence: true,
        confiance: true,
        share: true,
        conseils: true,
        generators: true,
        badges: true,
        stats: true,
        premium: true,
        missions: true,
        matieres: true,
        timeline: true,
        feedback: true,
        settings: true,
        annales: true,
        dissertation: true,
        orientation: true,
        professor: true,
        admin: true,
        aide: true
    };

    var initialized = false;
    var navigating = false;

    function getScreenFromHash() {
        var hash = window.location.hash.replace(/^#\/?/, '');
        return hash || null;
    }

    // Wrap showScreen immediately so the inline script wrapper chains on top
    var origShowScreen = window.StudFlow.app.showScreen;
    window.StudFlow.app.showScreen = function(screenId) {
        origShowScreen(screenId);
        if (initialized && !navigating && ROUTABLE[screenId]) {
            history.pushState({ screen: screenId }, '', '#' + screenId);
        }
    };

    function handleNavigation(screenId) {
        // Block navigation past beta gate if not unlocked
        if (window.StudFlow.betaGate && !window.StudFlow.betaGate.isUnlocked()) {
            if (screenId !== 'betagate') return;
        }
        if (screenId && ROUTABLE[screenId]) {
            var current = window.StudFlow.app.getState().currentScreen;
            if (screenId !== current) {
                navigating = true;
                window.StudFlow.app.showScreen(screenId);
                navigating = false;
            }
        }
    }

    function onReady() {
        // Deep link: navigate to hash screen if present and valid
        var hashScreen = getScreenFromHash();
        if (hashScreen && ROUTABLE[hashScreen] && window.StudFlow.storage.hasCompletedOnboarding()) {
            navigating = true;
            window.StudFlow.app.showScreen(hashScreen);
            navigating = false;
        }

        // Set initial history entry for current screen (replaceState, not pushState)
        var active = window.StudFlow.app.getState().currentScreen;
        if (ROUTABLE[active]) {
            history.replaceState({ screen: active }, '', '#' + active);
        }

        // Enable pushState for all subsequent navigations
        initialized = true;

        // Back/forward browser buttons
        window.addEventListener('popstate', function(e) {
            var screenId = (e.state && e.state.screen) ? e.state.screen : getScreenFromHash();
            handleNavigation(screenId);
        });

        // Manual hash edit in URL bar (pushState does NOT fire hashchange)
        window.addEventListener('hashchange', function() {
            if (!navigating) {
                var screenId = getScreenFromHash();
                handleNavigation(screenId);
            }
        });
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.router = { init: onReady };

    // Boot after app.init() has determined the initial screen
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onReady);
    } else {
        onReady();
    }
})();
