// Tests for storage.js — advanced scenarios: corrupted data, app state, subscriptions, migrations
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted pure logic for testing ====================
const PREFIX = 'studflow_';

function loadData(key, defaultValue) {
    try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw ? JSON.parse(raw) : (defaultValue !== undefined ? defaultValue : null);
    } catch (e) {
        return defaultValue !== undefined ? defaultValue : null;
    }
}

function saveData(key, data) {
    localStorage.setItem(PREFIX + key, JSON.stringify(data));
}

function saveAppState(state) {
    saveData('flashcards', state.flashcards || []);
    saveData('quizQuestions', state.quizQuestions || []);
    saveData('customFlashcards', state.customFlashcards || []);
    saveData('customQuiz', state.customQuiz || []);
    saveData('scores', {
        masteredCards: state.masteredCards || 0,
        streak: state.streak || 0,
        quizScore: state.quizScore || 0,
        flashcardScore: state.flashcardScore || 0
    });
    saveData('focusStats', state.focusStats || { sessions: 0, totalMinutes: 0, streak: 0 });
}

function restoreAppState(state) {
    state.flashcards = loadData('flashcards', []);
    state.quizQuestions = loadData('quizQuestions', []);
    state.customFlashcards = loadData('customFlashcards', []);
    state.customQuiz = loadData('customQuiz', []);
    const scores = loadData('scores', {});
    state.masteredCards = scores.masteredCards || 0;
    state.streak = scores.streak || 0;
    state.focusStats = loadData('focusStats', { sessions: 0, totalMinutes: 0, streak: 0 });
    return state;
}

function isSubscriptionValid(sub) {
    if (sub.plan === 'free') return false;
    if (!sub.expiresAt) return sub.plan !== 'free';
    return new Date(sub.expiresAt) > new Date();
}

function updateUserProfile(data) {
    const existing = loadData('profile', {});
    const merged = Object.assign({}, existing, data);
    saveData('profile', merged);
    return merged;
}

// ==================== TESTS ====================

describe('storage.js — corrupted JSON recovery', () => {
    beforeEach(() => resetStorage());

    it('returns default when JSON is corrupted', () => {
        localStorage.setItem('studflow_profile', '{broken json!!!');
        expect(loadData('profile', null)).toBeNull();
    });

    it('returns default array when JSON is corrupted', () => {
        localStorage.setItem('studflow_flashcards', 'NOT_JSON');
        expect(loadData('flashcards', [])).toEqual([]);
    });

    it('returns default when value is empty string', () => {
        localStorage.setItem('studflow_scores', '');
        // empty string is truthy for raw check but fails JSON.parse
        expect(loadData('scores', {})).toEqual({});
    });

    it('returns null when key does not exist and no default', () => {
        expect(loadData('nonexistent')).toBeNull();
    });

    it('returns undefined-safe default', () => {
        expect(loadData('missing', undefined)).toBeNull();
    });

    it('handles localStorage.getItem throwing', () => {
        const original = localStorage.getItem;
        localStorage.getItem = vi.fn(() => { throw new Error('SecurityError'); });
        expect(loadData('anything', 'fallback')).toBe('fallback');
        localStorage.getItem = original;
    });
});

describe('storage.js — saveAppState / restoreAppState round-trip', () => {
    beforeEach(() => resetStorage());

    it('saves and restores complete app state', () => {
        const original = {
            flashcards: [{ q: 'Q1', a: 'A1' }],
            quizQuestions: [{ question: 'Test?', options: ['A', 'B'], correctIndex: 0 }],
            customFlashcards: [{ question: 'Custom Q', answer: 'Custom A' }],
            customQuiz: [],
            masteredCards: 12,
            streak: 5,
            quizScore: 80,
            flashcardScore: 90,
            focusStats: { sessions: 3, totalMinutes: 75, streak: 2 }
        };

        saveAppState(original);
        const restored = restoreAppState({});

        expect(restored.flashcards).toEqual(original.flashcards);
        expect(restored.quizQuestions).toEqual(original.quizQuestions);
        expect(restored.customFlashcards).toEqual(original.customFlashcards);
        expect(restored.masteredCards).toBe(12);
        expect(restored.streak).toBe(5);
        expect(restored.focusStats.sessions).toBe(3);
        expect(restored.focusStats.totalMinutes).toBe(75);
    });

    it('restores defaults when storage is empty', () => {
        const state = restoreAppState({});
        expect(state.flashcards).toEqual([]);
        expect(state.quizQuestions).toEqual([]);
        expect(state.masteredCards).toBe(0);
        expect(state.streak).toBe(0);
        expect(state.focusStats).toEqual({ sessions: 0, totalMinutes: 0, streak: 0 });
    });

    it('restores defaults when stored scores are corrupted', () => {
        localStorage.setItem('studflow_scores', '{{invalid');
        const state = restoreAppState({});
        expect(state.masteredCards).toBe(0);
        expect(state.streak).toBe(0);
    });

    it('handles partial scores object', () => {
        saveData('scores', { masteredCards: 5 });
        const state = restoreAppState({});
        expect(state.masteredCards).toBe(5);
        expect(state.streak).toBe(0); // missing key defaults to 0
    });
});

describe('storage.js — subscription validation', () => {
    it('returns false for free plan', () => {
        expect(isSubscriptionValid({ plan: 'free', expiresAt: null })).toBe(false);
    });

    it('returns true for premium without expiry (lifetime)', () => {
        expect(isSubscriptionValid({ plan: 'premium', expiresAt: null })).toBe(true);
    });

    it('returns true for premium with future expiry', () => {
        const future = new Date();
        future.setDate(future.getDate() + 30);
        expect(isSubscriptionValid({ plan: 'premium', expiresAt: future.toISOString() })).toBe(true);
    });

    it('returns false for expired premium', () => {
        const past = new Date();
        past.setDate(past.getDate() - 1);
        expect(isSubscriptionValid({ plan: 'premium', expiresAt: past.toISOString() })).toBe(false);
    });

    it('returns true for ultimate without expiry', () => {
        expect(isSubscriptionValid({ plan: 'ultimate', expiresAt: null })).toBe(true);
    });
});

describe('storage.js — user profile merge', () => {
    beforeEach(() => resetStorage());

    it('creates profile from scratch', () => {
        const result = updateUserProfile({ mainProfile: 'anxieux', scores: { stress: 8 } });
        expect(result.mainProfile).toBe('anxieux');
        expect(result.scores.stress).toBe(8);
    });

    it('merges new fields into existing profile', () => {
        saveData('profile', { mainProfile: 'anxieux', scores: { stress: 8 } });
        const result = updateUserProfile({ name: 'Test User' });
        expect(result.mainProfile).toBe('anxieux');
        expect(result.name).toBe('Test User');
    });

    it('overwrites existing fields', () => {
        saveData('profile', { mainProfile: 'anxieux' });
        const result = updateUserProfile({ mainProfile: 'confiant' });
        expect(result.mainProfile).toBe('confiant');
    });
});
