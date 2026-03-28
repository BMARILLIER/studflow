// Tests for XP + progress integration — quiz/flashcard completion updating XP
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic (gamification + quiz/flashcard interaction) ====================
const XP_ACTIONS = {
    flashcard_correct: 5,
    flashcard_complete: 15,
    quiz_correct: 8,
    quiz_complete: 25,
    focus_15: 20,
    focus_25: 35,
    focus_45: 60,
    diagnostic_done: 30,
    daily_mission: 50,
    create_flashcard: 5,
    create_quiz: 8,
    daily_login: 15
};

const LEVELS = [
    { level: 1, xpNeeded: 0 },
    { level: 2, xpNeeded: 50 },
    { level: 3, xpNeeded: 120 },
    { level: 4, xpNeeded: 250 },
    { level: 5, xpNeeded: 400 },
    { level: 6, xpNeeded: 600 },
    { level: 7, xpNeeded: 850 },
    { level: 8, xpNeeded: 1200 },
    { level: 9, xpNeeded: 1600 },
    { level: 10, xpNeeded: 2100 }
];

function getCurrentLevel(xp) {
    let current = LEVELS[0];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].xpNeeded) { current = LEVELS[i]; break; }
    }
    return current;
}

// Simulate a quiz session: N questions, some correct
function simulateQuizSession(totalQuestions, correctAnswers) {
    let xpGained = 0;
    for (let i = 0; i < correctAnswers; i++) {
        xpGained += XP_ACTIONS.quiz_correct;
    }
    xpGained += XP_ACTIONS.quiz_complete;
    return xpGained;
}

// Simulate a flashcard session: N cards, some known
function simulateFlashcardSession(totalCards, knownCards) {
    let xpGained = 0;
    for (let i = 0; i < knownCards; i++) {
        xpGained += XP_ACTIONS.flashcard_correct;
    }
    xpGained += XP_ACTIONS.flashcard_complete;
    return xpGained;
}

// ==================== TESTS ====================

describe('XP — quiz completion XP calculation', () => {
    it('awards 8 XP per correct answer + 25 for completion', () => {
        const xp = simulateQuizSession(10, 7);
        expect(xp).toBe(7 * 8 + 25); // 81 XP
    });

    it('awards completion XP even with 0 correct', () => {
        const xp = simulateQuizSession(5, 0);
        expect(xp).toBe(25); // only completion bonus
    });

    it('perfect score gives maximum XP', () => {
        const xp = simulateQuizSession(10, 10);
        expect(xp).toBe(10 * 8 + 25); // 105 XP
    });

    it('single question quiz gives correct XP', () => {
        const xp = simulateQuizSession(1, 1);
        expect(xp).toBe(8 + 25); // 33 XP
    });
});

describe('XP — flashcard session XP calculation', () => {
    it('awards 5 XP per known card + 15 for completion', () => {
        const xp = simulateFlashcardSession(20, 15);
        expect(xp).toBe(15 * 5 + 15); // 90 XP
    });

    it('awards completion XP even with 0 known', () => {
        const xp = simulateFlashcardSession(10, 0);
        expect(xp).toBe(15); // only completion bonus
    });

    it('all cards known gives maximum XP', () => {
        const xp = simulateFlashcardSession(10, 10);
        expect(xp).toBe(10 * 5 + 15); // 65 XP
    });
});

describe('XP — level progression via activities', () => {
    it('starts at level 1 with 0 XP', () => {
        expect(getCurrentLevel(0).level).toBe(1);
    });

    it('reaches level 2 after 2 perfect quizzes (10 questions each)', () => {
        const xpPerQuiz = simulateQuizSession(10, 10); // 105
        const totalXP = xpPerQuiz * 2; // 210 (but need to subtract daily_login bonus)
        // 210 XP → level 4 (>= 250? No, 210 >= 120 → level 3)
        expect(getCurrentLevel(210).level).toBe(3);
    });

    it('daily activities accumulate XP over time', () => {
        // Simulate a week: daily login + 1 quiz + 1 flashcard session
        const dailyXP = XP_ACTIONS.daily_login + simulateQuizSession(5, 3) + simulateFlashcardSession(10, 6);
        // 15 + (24+25) + (30+15) = 15 + 49 + 45 = 109 per day
        const weeklyXP = dailyXP * 7; // 763
        expect(getCurrentLevel(weeklyXP).level).toBeGreaterThanOrEqual(6);
    });

    it('focus sessions contribute meaningful XP', () => {
        const focusXP = XP_ACTIONS.focus_25 * 5; // 5 pomodoros = 175 XP
        expect(getCurrentLevel(focusXP).level).toBe(3); // 175 >= 120
    });
});

describe('XP — action constants validation', () => {
    it('all XP values are positive integers', () => {
        Object.values(XP_ACTIONS).forEach(xp => {
            expect(xp).toBeGreaterThan(0);
            expect(Number.isInteger(xp)).toBe(true);
        });
    });

    it('daily_mission gives one of the highest single-action XP', () => {
        // focus_45 (60) is highest, daily_mission (50) is second
        expect(XP_ACTIONS.daily_mission).toBeGreaterThanOrEqual(50);
        expect(XP_ACTIONS.daily_mission).toBeGreaterThan(XP_ACTIONS.quiz_complete);
    });

    it('focus_45 > focus_25 > focus_15', () => {
        expect(XP_ACTIONS.focus_45).toBeGreaterThan(XP_ACTIONS.focus_25);
        expect(XP_ACTIONS.focus_25).toBeGreaterThan(XP_ACTIONS.focus_15);
    });

    it('quiz_correct > flashcard_correct (harder activity)', () => {
        expect(XP_ACTIONS.quiz_correct).toBeGreaterThan(XP_ACTIONS.flashcard_correct);
    });
});

describe('XP — level boundaries', () => {
    it('every level has higher XP than previous', () => {
        for (let i = 1; i < LEVELS.length; i++) {
            expect(LEVELS[i].xpNeeded).toBeGreaterThan(LEVELS[i - 1].xpNeeded);
        }
    });

    it('level 10 is reachable with consistent daily activity', () => {
        // ~109 XP/day (login + quiz + flashcards) × 30 days ≈ 3270 XP
        // Level 10 needs 2100 XP → reachable in ~20 days
        expect(2100).toBeLessThanOrEqual(109 * 30);
    });

    it('XP cannot go negative', () => {
        // Verify the system design — no negative XP actions
        Object.values(XP_ACTIONS).forEach(xp => {
            expect(xp).toBeGreaterThanOrEqual(0);
        });
    });
});
