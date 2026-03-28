// Tests for gamification logic (XP, levels, streaks)
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Pure logic extracted for testing ====================
const LEVELS = [
    { level: 1, name: 'Debutant', xpNeeded: 0, emoji: '🌱' },
    { level: 2, name: 'Curieux', xpNeeded: 50, emoji: '🔍' },
    { level: 3, name: 'Motive', xpNeeded: 120, emoji: '💪' },
    { level: 4, name: 'Regulier', xpNeeded: 250, emoji: '📚' },
    { level: 5, name: 'Concentre', xpNeeded: 400, emoji: '🎯' },
    { level: 6, name: 'Efficace', xpNeeded: 600, emoji: '⚡' },
    { level: 7, name: 'Expert', xpNeeded: 850, emoji: '🧠' },
    { level: 8, name: 'Master', xpNeeded: 1200, emoji: '👑' },
    { level: 9, name: 'Champion', xpNeeded: 1600, emoji: '🏆' },
    { level: 10, name: 'Legende', xpNeeded: 2100, emoji: '🌟' }
];

const XP_ACTIONS = {
    flashcard_correct: 5,
    flashcard_complete: 15,
    quiz_correct: 8,
    quiz_complete: 25,
    focus_15: 20,
    focus_25: 35,
    focus_45: 60,
    diagnostic_done: 30,
    coach_fiche: 10,
    daily_login: 15,
    feedback: 10,
    coach_chat: 5
};

function getCurrentLevel(xp) {
    let current = LEVELS[0];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].xpNeeded) {
            current = LEVELS[i];
            break;
        }
    }
    return current;
}

function getNextLevel(xp) {
    for (let i = 0; i < LEVELS.length; i++) {
        if (xp < LEVELS[i].xpNeeded) return LEVELS[i];
    }
    return LEVELS[LEVELS.length - 1];
}

function getLevelProgress(xp) {
    const current = getCurrentLevel(xp);
    const next = getNextLevel(xp);
    if (current.level === next.level) return 100;
    const inLevel = xp - current.xpNeeded;
    const levelRange = next.xpNeeded - current.xpNeeded;
    return Math.min(100, Math.round((inLevel / levelRange) * 100));
}

function checkStreak(stats) {
    const today = new Date().toDateString();
    if (stats.lastActiveDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (stats.lastActiveDate === yesterday.toDateString()) {
            stats.streak++;
        } else if (stats.lastActiveDate !== null) {
            stats.streak = 1;
        } else {
            stats.streak = 1;
        }
        stats.lastActiveDate = today;
    }
    return stats;
}

// ==================== TESTS ====================

describe('Gamification — Levels', () => {
    it('returns level 1 for 0 XP', () => {
        expect(getCurrentLevel(0).level).toBe(1);
        expect(getCurrentLevel(0).name).toBe('Debutant');
    });

    it('returns correct level for exact threshold', () => {
        expect(getCurrentLevel(50).level).toBe(2);
        expect(getCurrentLevel(120).level).toBe(3);
        expect(getCurrentLevel(2100).level).toBe(10);
    });

    it('returns correct level between thresholds', () => {
        expect(getCurrentLevel(75).level).toBe(2);
        expect(getCurrentLevel(500).level).toBe(5);
        expect(getCurrentLevel(1999).level).toBe(9);
    });

    it('returns next level correctly', () => {
        expect(getNextLevel(0).level).toBe(2);
        expect(getNextLevel(49).level).toBe(2);
        expect(getNextLevel(50).level).toBe(3);
    });

    it('returns max level when at/above cap', () => {
        expect(getNextLevel(2100).level).toBe(10);
        expect(getNextLevel(9999).level).toBe(10);
    });
});

describe('Gamification — Level Progress', () => {
    it('returns 0% at level start', () => {
        expect(getLevelProgress(0)).toBe(0);
        expect(getLevelProgress(50)).toBe(0);
    });

    it('returns correct percentage mid-level', () => {
        // Level 1: 0-50. At 25 XP = 50%
        expect(getLevelProgress(25)).toBe(50);
    });

    it('returns 100% at max level', () => {
        expect(getLevelProgress(2100)).toBe(100);
        expect(getLevelProgress(5000)).toBe(100);
    });
});

describe('Gamification — XP Actions', () => {
    it('has correct XP values for key actions', () => {
        expect(XP_ACTIONS.quiz_complete).toBe(25);
        expect(XP_ACTIONS.flashcard_correct).toBe(5);
        expect(XP_ACTIONS.daily_login).toBe(15);
        expect(XP_ACTIONS.focus_25).toBe(35);
    });

    it('returns 0 for unknown action', () => {
        expect(XP_ACTIONS['nonexistent'] || 0).toBe(0);
    });
});

describe('Gamification — Streaks', () => {
    it('starts streak at 1 on first activity', () => {
        const stats = { xp: 0, streak: 0, lastActiveDate: null };
        checkStreak(stats);
        expect(stats.streak).toBe(1);
        expect(stats.lastActiveDate).toBe(new Date().toDateString());
    });

    it('increments streak on consecutive day', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const stats = { xp: 0, streak: 3, lastActiveDate: yesterday.toDateString() };
        checkStreak(stats);
        expect(stats.streak).toBe(4);
    });

    it('resets streak after gap', () => {
        const twoDaysAgo = new Date();
        twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
        const stats = { xp: 0, streak: 5, lastActiveDate: twoDaysAgo.toDateString() };
        checkStreak(stats);
        expect(stats.streak).toBe(1);
    });

    it('does not change streak on same day', () => {
        const today = new Date().toDateString();
        const stats = { xp: 0, streak: 7, lastActiveDate: today };
        checkStreak(stats);
        expect(stats.streak).toBe(7);
    });
});
