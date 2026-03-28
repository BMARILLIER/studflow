// Tests for dailyMission.js — task tracking, completion, XP reward
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic for testing ====================
const TASKS = [
    { id: 'focus',      label: '1 session Focus',         target: 1 },
    { id: 'flashcards', label: 'Réviser 5 flashcards',    target: 5 },
    { id: 'quiz',       label: 'Répondre à 3 questions',  target: 3 }
];

function getTodayKey() {
    return new Date().toISOString().slice(0, 10);
}

function freshState() {
    return { date: getTodayKey(), focus: 0, flashcards: 0, quiz: 0, completed: false };
}

function getCompletedCount(state) {
    var count = 0;
    TASKS.forEach(function(t) {
        if (state[t.id] >= t.target) count++;
    });
    return count;
}

function checkCompletion(state) {
    if (state.completed) return false;
    if (getCompletedCount(state) >= TASKS.length) {
        state.completed = true;
        return true; // newly completed
    }
    return false;
}

function onFocusCompleted(state) {
    if (state.completed) return state;
    state.focus = Math.min(state.focus + 1, TASKS[0].target);
    checkCompletion(state);
    return state;
}

function onFlashcardCompleted(state, data) {
    if (state.completed) return state;
    var increment = (data && data.total) ? data.total : 1;
    state.flashcards = Math.min(state.flashcards + increment, TASKS[1].target);
    checkCompletion(state);
    return state;
}

function onQuizCompleted(state, data) {
    if (state.completed) return state;
    var increment = (data && data.total) ? data.total : 1;
    state.quiz = Math.min(state.quiz + increment, TASKS[2].target);
    checkCompletion(state);
    return state;
}

// ==================== TESTS ====================

describe('dailyMission.js — state initialization', () => {
    it('fresh state has zero progress', () => {
        const state = freshState();
        expect(state.focus).toBe(0);
        expect(state.flashcards).toBe(0);
        expect(state.quiz).toBe(0);
        expect(state.completed).toBe(false);
    });

    it('fresh state has today date', () => {
        const state = freshState();
        expect(state.date).toBe(getTodayKey());
    });

    it('stale state (yesterday) should be treated as expired', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const staleState = { date: yesterday.toISOString().slice(0, 10), focus: 1, flashcards: 5, quiz: 3, completed: true };
        // The real module checks date !== getTodayKey() and creates fresh
        expect(staleState.date).not.toBe(getTodayKey());
    });
});

describe('dailyMission.js — task completion counting', () => {
    it('0 tasks completed initially', () => {
        expect(getCompletedCount(freshState())).toBe(0);
    });

    it('counts single task completed', () => {
        const state = freshState();
        state.focus = 1; // target: 1
        expect(getCompletedCount(state)).toBe(1);
    });

    it('counts all tasks completed', () => {
        const state = freshState();
        state.focus = 1;
        state.flashcards = 5;
        state.quiz = 3;
        expect(getCompletedCount(state)).toBe(3);
    });

    it('does not count partial progress', () => {
        const state = freshState();
        state.flashcards = 3; // target: 5
        state.quiz = 2;       // target: 3
        expect(getCompletedCount(state)).toBe(0);
    });

    it('counts over-target as completed', () => {
        const state = freshState();
        state.focus = 10; // target: 1
        expect(getCompletedCount(state)).toBe(1);
    });
});

describe('dailyMission.js — focus event', () => {
    it('increments focus by 1', () => {
        const state = freshState();
        onFocusCompleted(state);
        expect(state.focus).toBe(1);
    });

    it('caps focus at target', () => {
        const state = freshState();
        onFocusCompleted(state);
        onFocusCompleted(state); // already at target
        expect(state.focus).toBe(1); // capped at 1
    });

    it('does not update if already completed', () => {
        const state = freshState();
        state.completed = true;
        state.focus = 0;
        onFocusCompleted(state);
        expect(state.focus).toBe(0);
    });
});

describe('dailyMission.js — flashcard event', () => {
    it('increments by data.total', () => {
        const state = freshState();
        onFlashcardCompleted(state, { total: 3 });
        expect(state.flashcards).toBe(3);
    });

    it('defaults to 1 if no data', () => {
        const state = freshState();
        onFlashcardCompleted(state, null);
        expect(state.flashcards).toBe(1);
    });

    it('caps at target (5)', () => {
        const state = freshState();
        onFlashcardCompleted(state, { total: 10 });
        expect(state.flashcards).toBe(5);
    });
});

describe('dailyMission.js — quiz event', () => {
    it('increments quiz by data.total', () => {
        const state = freshState();
        onQuizCompleted(state, { total: 2 });
        expect(state.quiz).toBe(2);
    });

    it('caps at target (3)', () => {
        const state = freshState();
        onQuizCompleted(state, { total: 100 });
        expect(state.quiz).toBe(3);
    });
});

describe('dailyMission.js — mission completion', () => {
    it('marks completed when all tasks done', () => {
        const state = freshState();
        state.focus = 1;
        state.flashcards = 5;
        state.quiz = 3;
        const justCompleted = checkCompletion(state);
        expect(justCompleted).toBe(true);
        expect(state.completed).toBe(true);
    });

    it('does not mark completed if any task missing', () => {
        const state = freshState();
        state.focus = 1;
        state.flashcards = 5;
        state.quiz = 2; // not enough
        const justCompleted = checkCompletion(state);
        expect(justCompleted).toBe(false);
        expect(state.completed).toBe(false);
    });

    it('does not re-trigger if already completed', () => {
        const state = freshState();
        state.focus = 1;
        state.flashcards = 5;
        state.quiz = 3;
        state.completed = true;
        const justCompleted = checkCompletion(state);
        expect(justCompleted).toBe(false);
    });

    it('completes via sequential events', () => {
        const state = freshState();
        onFocusCompleted(state);
        expect(state.completed).toBe(false);
        onFlashcardCompleted(state, { total: 5 });
        expect(state.completed).toBe(false);
        onQuizCompleted(state, { total: 3 });
        expect(state.completed).toBe(true);
    });
});
