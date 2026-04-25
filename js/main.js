// main.js — Vite entry point (side-effect imports, order matters)
// Each file is an IIFE that attaches to window.StudFlow

// ==================== CRITICAL — needed for first paint ====================
import './modules/sentry.js'           // Error monitoring — must be first
import './modules/storage.js'
import './modules/theme.js'
import './modules/errorLog.js'
import './modules/eventBus.js'
import './modules/utils.js'
import './core/supabaseClient.js'
import './modules/betaGate.js'
import './modules/cloud.js'
import './modules/track.js'
import './modules/trackPicker.js'
import './modules/auth.js'
import './modules/roles.js'
import './modules/adminDashboard.js'
import './modules/aiQuota.js'
import './modules/pedagogicalGuard.js'
import './modules/subjectPicker.js'
import './modules/subjects.js'
// subjectData modules are lazy-loaded by subjects.js on first access
import './modules/premium.js'
import './modules/subscription.js'
import './modules/gamification.js'
import './modules/stats.js'
import './modules/dailyGoal.js'
import './modules/badges.js'
import './modules/leaderboard.js'
import './modules/countdown.js'
import './modules/dailyChallenges.js'
import './modules/dailyPath.js'
import './modules/microFeedback.js'
import './modules/progressCompare.js'
import './modules/rituelJour.js'
import './modules/radarMastery.js'
import './modules/miniSujet.js'
import './modules/usageLogger.js'
import './modules/adminUsage.js'
import './modules/focusWeakness.js'
import './modules/analytics.js'
import './modules/notifications.js'
import './modules/onboarding.js'
import './modules/dashboard.js'
import './modules/home.js'
import './app.js'
import './modules/router.js'

// ==================== DEFERRED — loaded after first paint ====================
// Feature modules (flashcards, quiz, coach, generators, etc.)
// Dashboard guards all references with if(window.StudFlow.module) checks.
function loadDeferred() {
    import('./deferred.js').then(function() {
        // Re-render dashboard to pick up deferred widgets (SR, missions, timeline, etc.)
        if (window.StudFlow && window.StudFlow.dashboard && window.StudFlow.dashboard.render) {
            window.StudFlow.dashboard.render();
        }
    });
}

if ('requestIdleCallback' in window) {
    requestIdleCallback(loadDeferred, { timeout: 2000 });
} else {
    setTimeout(loadDeferred, 150);
}
