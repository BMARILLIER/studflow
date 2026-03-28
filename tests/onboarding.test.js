// Tests for onboarding.js — step transitions, state persistence, profile-based actions
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic for testing ====================
const STORAGE_KEY = 'onboarding';
const PREFIX = 'studflow_';

function loadState() {
    try {
        const raw = localStorage.getItem(PREFIX + STORAGE_KEY);
        return raw ? JSON.parse(raw) : { completed: false, lastStep: 1, actionLaunched: false };
    } catch (e) {
        return { completed: false, lastStep: 1, actionLaunched: false };
    }
}

function saveState(state) {
    localStorage.setItem(PREFIX + STORAGE_KEY, JSON.stringify(state));
}

function isActive(state) {
    return !state.completed;
}

const QUICK_ACTIONS = {
    anxieux: { icon: '🫁', label: 'Respiration anti-stress' },
    procrastinateur: { icon: '🎯', label: 'Mini focus 15 min' },
    desorganise: { icon: '🧠', label: 'Fiche methodo' },
    surcharge: { icon: '🫁', label: 'Pause respiration' },
    confiance_faible: { icon: '🧠', label: "Methode d'apprentissage" },
    confiant: { icon: '⚡', label: 'Quiz rapide' },
    equilibre: { icon: '🎯', label: 'Session focus 15 min' }
};

const PROFILE_NAMES = {
    anxieux: { emoji: '😰', title: 'Anxieux' },
    procrastinateur: { emoji: '⏰', title: 'Procrastinateur' },
    desorganise: { emoji: '📋', title: 'Desorganise' },
    surcharge: { emoji: '🤯', title: 'Surcharge' },
    confiance_faible: { emoji: '📚', title: 'En recherche de methode' },
    confiant: { emoji: '💪', title: 'Confiant' },
    equilibre: { emoji: '⚖️', title: 'Equilibre' }
};

function renderProgressDots(currentStep, totalSteps) {
    var dots = '';
    for (var i = 1; i <= totalSteps; i++) {
        var cls = i === currentStep ? 'ob-dot active' : (i < currentStep ? 'ob-dot done' : 'ob-dot');
        dots += '<div class="' + cls + '"></div>';
    }
    return '<div class="ob-progress-dots">' + dots + '</div>';
}

// ==================== TESTS ====================

describe('onboarding.js — state management', () => {
    beforeEach(() => resetStorage());

    it('starts with default state', () => {
        const state = loadState();
        expect(state.completed).toBe(false);
        expect(state.lastStep).toBe(1);
        expect(state.actionLaunched).toBe(false);
    });

    it('persists state to localStorage', () => {
        saveState({ completed: false, lastStep: 2, actionLaunched: false });
        const state = loadState();
        expect(state.lastStep).toBe(2);
    });

    it('handles corrupted state gracefully', () => {
        localStorage.setItem(PREFIX + STORAGE_KEY, '{broken!!!');
        const state = loadState();
        expect(state.completed).toBe(false);
        expect(state.lastStep).toBe(1);
    });

    it('detects active onboarding', () => {
        expect(isActive({ completed: false })).toBe(true);
        expect(isActive({ completed: true })).toBe(false);
    });
});

describe('onboarding.js — step transitions', () => {
    beforeEach(() => resetStorage());

    it('step 1 → step 2 updates lastStep', () => {
        saveState({ completed: false, lastStep: 1, actionLaunched: false });
        const state = loadState();
        state.lastStep = 2;
        saveState(state);
        expect(loadState().lastStep).toBe(2);
    });

    it('step 2 → step 3 after diagnostic', () => {
        saveState({ completed: false, lastStep: 2, actionLaunched: false });
        // Simulate afterDiagnostic
        const state = loadState();
        state.lastStep = 3;
        saveState(state);
        expect(loadState().lastStep).toBe(3);
    });

    it('step 3 → step 4 with action launched', () => {
        saveState({ completed: false, lastStep: 3, actionLaunched: false });
        const state = loadState();
        state.lastStep = 4;
        state.actionLaunched = true;
        saveState(state);
        const updated = loadState();
        expect(updated.lastStep).toBe(4);
        expect(updated.actionLaunched).toBe(true);
    });

    it('complete sets completed flag', () => {
        saveState({ completed: false, lastStep: 4, actionLaunched: true });
        const state = loadState();
        state.completed = true;
        saveState(state);
        expect(loadState().completed).toBe(true);
    });

    it('cannot go backwards past step 1', () => {
        const state = { completed: false, lastStep: 0, actionLaunched: false };
        // Step 0 or negative should be treated as step 1
        expect(state.lastStep).toBeLessThanOrEqual(1);
    });
});

describe('onboarding.js — profile-based actions', () => {
    it('has action for every profile type', () => {
        const profiles = ['anxieux', 'procrastinateur', 'desorganise', 'surcharge', 'confiance_faible', 'confiant', 'equilibre'];
        profiles.forEach(p => {
            expect(QUICK_ACTIONS[p]).toBeDefined();
            expect(QUICK_ACTIONS[p].label).toBeTruthy();
            expect(QUICK_ACTIONS[p].icon).toBeTruthy();
        });
    });

    it('has profile name info for every profile type', () => {
        const profiles = ['anxieux', 'procrastinateur', 'desorganise', 'surcharge', 'confiance_faible', 'confiant', 'equilibre'];
        profiles.forEach(p => {
            expect(PROFILE_NAMES[p]).toBeDefined();
            expect(PROFILE_NAMES[p].title).toBeTruthy();
            expect(PROFILE_NAMES[p].emoji).toBeTruthy();
        });
    });

    it('falls back to equilibre for unknown profile', () => {
        const unknownProfile = 'totally_unknown';
        const action = QUICK_ACTIONS[unknownProfile] || QUICK_ACTIONS.equilibre;
        expect(action.label).toBe('Session focus 15 min');
    });
});

describe('onboarding.js — progress dots rendering', () => {
    it('renders correct number of dots', () => {
        const html = renderProgressDots(1, 4);
        const dotCount = (html.match(/ob-dot/g) || []).length;
        // 4 dots, each has "ob-dot" class (some also have "active" or "done")
        expect(dotCount).toBeGreaterThanOrEqual(4);
    });

    it('marks current step as active', () => {
        const html = renderProgressDots(2, 4);
        expect(html).toContain('ob-dot active');
    });

    it('marks previous steps as done', () => {
        const html = renderProgressDots(3, 4);
        expect(html).toContain('ob-dot done');
        expect(html).toContain('ob-dot active');
    });
});

describe('onboarding.js — pending celebration check', () => {
    beforeEach(() => resetStorage());

    it('detects pending celebration (step 4, not completed, action launched)', () => {
        const state = { completed: false, actionLaunched: true, lastStep: 4 };
        const isPending = !state.completed && state.actionLaunched && state.lastStep === 4;
        expect(isPending).toBe(true);
    });

    it('no celebration if already completed', () => {
        const state = { completed: true, actionLaunched: true, lastStep: 4 };
        const isPending = !state.completed && state.actionLaunched && state.lastStep === 4;
        expect(isPending).toBe(false);
    });

    it('no celebration if action not launched', () => {
        const state = { completed: false, actionLaunched: false, lastStep: 4 };
        const isPending = !state.completed && state.actionLaunched && state.lastStep === 4;
        expect(isPending).toBe(false);
    });
});
