// Stress tests — rapid user action simulation (hundreds of iterations)
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic ====================
const STORAGE_KEY_PREFIX = 'studflow_';

function saveData(key, val) {
    localStorage.setItem(STORAGE_KEY_PREFIX + key, JSON.stringify(val));
}

function loadData(key, def) {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_PREFIX + key);
        return raw ? JSON.parse(raw) : (def !== undefined ? def : null);
    } catch (e) { return def !== undefined ? def : null; }
}

// SM-2 card state
function freshCardState() {
    return { ef: 2.5, interval: 0, reps: 0, nextReview: null, lastReview: null, lapses: 0, totalReviews: 0 };
}

function sm2(cs, quality) {
    cs.totalReviews++;
    cs.ef = cs.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (cs.ef < 1.3) cs.ef = 1.3;
    if (quality >= 3) {
        if (cs.reps === 0) cs.interval = 1;
        else if (cs.reps === 1) cs.interval = 6;
        else cs.interval = Math.round(cs.interval * cs.ef);
        cs.reps++;
    } else {
        cs.reps = 0;
        cs.interval = 1;
        cs.lapses++;
    }
    return cs;
}

// XP system
const XP_ACTIONS = {
    flashcard_correct: 5, flashcard_complete: 15,
    quiz_correct: 8, quiz_complete: 25,
    focus_15: 20, focus_25: 35, focus_45: 60,
    diagnostic_done: 30, daily_mission: 50,
    create_flashcard: 5, create_quiz: 8, daily_login: 15
};

const LEVELS = [
    { level: 1, xpNeeded: 0 }, { level: 2, xpNeeded: 50 },
    { level: 3, xpNeeded: 120 }, { level: 4, xpNeeded: 250 },
    { level: 5, xpNeeded: 400 }, { level: 6, xpNeeded: 600 },
    { level: 7, xpNeeded: 850 }, { level: 8, xpNeeded: 1200 },
    { level: 9, xpNeeded: 1600 }, { level: 10, xpNeeded: 2100 }
];

function getCurrentLevel(xp) {
    let current = LEVELS[0];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].xpNeeded) { current = LEVELS[i]; break; }
    }
    return current;
}

// Error log
const MAX_LOG_ENTRIES = 200;
function readLog() {
    try {
        var raw = localStorage.getItem('studflow_error_log');
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
}
function logEntry(type, message) {
    var entry = { ts: new Date().toISOString(), type: type, message: String(message || '').substring(0, 300) };
    var entries = readLog();
    entries.push(entry);
    if (entries.length > MAX_LOG_ENTRIES) entries = entries.slice(-MAX_LOG_ENTRIES);
    try { localStorage.setItem('studflow_error_log', JSON.stringify(entries)); } catch (e) {}
}

// ==================== STRESS TESTS ====================

describe('Stress — rapid quiz sessions (200 iterations)', () => {
    beforeEach(() => resetStorage());

    it('completes 200 quiz sessions without data corruption', () => {
        let totalXP = 0;
        for (let i = 0; i < 200; i++) {
            const correct = Math.floor(Math.random() * 11); // 0-10
            const xp = correct * XP_ACTIONS.quiz_correct + XP_ACTIONS.quiz_complete;
            totalXP += xp;
            saveData('gamification', { xp: totalXP, level: getCurrentLevel(totalXP).level, streak: 1 });
        }
        const stored = loadData('gamification', {});
        expect(stored.xp).toBe(totalXP);
        expect(stored.level).toBeGreaterThanOrEqual(1);
        expect(stored.level).toBeLessThanOrEqual(10);
    });

    it('quiz results accumulate correctly over 200 sessions', () => {
        const results = [];
        for (let i = 0; i < 200; i++) {
            results.push({ score: Math.floor(Math.random() * 100), ts: new Date().toISOString() });
        }
        saveData('quiz_results', results);
        const stored = loadData('quiz_results', []);
        expect(stored.length).toBe(200);
    });
});

describe('Stress — rapid flashcard reviews (500 iterations)', () => {
    beforeEach(() => resetStorage());

    it('SM-2 algorithm stays stable over 500 reviews', () => {
        const card = freshCardState();
        for (let i = 0; i < 500; i++) {
            const quality = Math.floor(Math.random() * 6); // 0-5
            sm2(card, quality);
        }
        expect(card.totalReviews).toBe(500);
        expect(card.ef).toBeGreaterThanOrEqual(1.3);
        expect(card.interval).toBeGreaterThanOrEqual(0);
        expect(Number.isFinite(card.ef)).toBe(true);
        expect(Number.isFinite(card.interval)).toBe(true);
    });

    it('handles 500 cards with individual state tracking', () => {
        const cards = {};
        for (let i = 0; i < 500; i++) {
            const id = 'card_' + i;
            cards[id] = freshCardState();
            sm2(cards[id], Math.floor(Math.random() * 6));
        }
        saveData('sr_state', cards);
        const stored = loadData('sr_state', {});
        expect(Object.keys(stored).length).toBe(500);
        // Verify each card has valid state
        Object.values(stored).forEach(card => {
            expect(card.ef).toBeGreaterThanOrEqual(1.3);
            expect(card.totalReviews).toBe(1);
        });
    });

    it('alternating success/failure patterns over 300 reviews', () => {
        const card = freshCardState();
        for (let i = 0; i < 300; i++) {
            const quality = i % 2 === 0 ? 5 : 1; // alternate perfect/fail
            sm2(card, quality);
        }
        expect(card.totalReviews).toBe(300);
        expect(card.lapses).toBe(150); // every odd iteration is a fail
        expect(card.ef).toBeGreaterThanOrEqual(1.3);
    });
});

describe('Stress — rapid XP accumulation (100 actions in burst)', () => {
    beforeEach(() => resetStorage());

    it('processes 100 XP events without overflow', () => {
        let xp = 0;
        const actions = Object.keys(XP_ACTIONS);
        for (let i = 0; i < 100; i++) {
            const action = actions[i % actions.length];
            xp += XP_ACTIONS[action];
        }
        const level = getCurrentLevel(xp);
        expect(xp).toBeGreaterThan(0);
        expect(level.level).toBeGreaterThanOrEqual(1);
        expect(level.level).toBeLessThanOrEqual(10);
        expect(Number.isFinite(xp)).toBe(true);
    });

    it('level calculation stays consistent through rapid gains', () => {
        let xp = 0;
        const levelHistory = [];
        for (let i = 0; i < 500; i++) {
            xp += XP_ACTIONS.quiz_correct;
            levelHistory.push(getCurrentLevel(xp).level);
        }
        // Levels should be monotonically non-decreasing
        for (let i = 1; i < levelHistory.length; i++) {
            expect(levelHistory[i]).toBeGreaterThanOrEqual(levelHistory[i - 1]);
        }
    });

    it('handles XP values up to 100,000 without issues', () => {
        const extremeXP = 100000;
        const level = getCurrentLevel(extremeXP);
        expect(level.level).toBe(10); // maxed out
        saveData('gamification', { xp: extremeXP, level: level.level });
        const stored = loadData('gamification', {});
        expect(stored.xp).toBe(100000);
    });
});

describe('Stress — rapid dashboard state updates (300 iterations)', () => {
    beforeEach(() => resetStorage());

    it('saves and reads appState 300 times without corruption', () => {
        for (let i = 0; i < 300; i++) {
            const state = {
                currentScreen: ['dashboard', 'quiz', 'flashcards', 'focus'][i % 4],
                quizCount: i,
                flashcardCount: i * 2,
                focusMinutes: i * 5,
                lastUpdated: new Date().toISOString()
            };
            saveData('appState', state);
        }
        const final = loadData('appState', {});
        expect(final.currentScreen).toBe('focus'); // 299 % 4 = 3
        expect(final.quizCount).toBe(299);
    });

    it('concurrent-like stat increments stay consistent', () => {
        saveData('stats', { quizzes: 0, flashcards: 0, focus: 0 });
        for (let i = 0; i < 200; i++) {
            const stats = loadData('stats', { quizzes: 0, flashcards: 0, focus: 0 });
            stats.quizzes++;
            stats.flashcards += 2;
            stats.focus += 5;
            saveData('stats', stats);
        }
        const final = loadData('stats', {});
        expect(final.quizzes).toBe(200);
        expect(final.flashcards).toBe(400);
        expect(final.focus).toBe(1000);
    });
});

describe('Stress — error log saturation (500 entries)', () => {
    beforeEach(() => resetStorage());

    it('maintains max 200 entries after 500 logs', () => {
        for (let i = 0; i < 500; i++) {
            logEntry('error', 'Error #' + i);
        }
        const entries = readLog();
        expect(entries.length).toBe(200);
        // Should have the last 200 entries
        expect(entries[0].message).toBe('Error #300');
        expect(entries[199].message).toBe('Error #499');
    });

    it('log does not grow unbounded with mixed types', () => {
        const types = ['error', 'warn', 'info', 'debug'];
        for (let i = 0; i < 1000; i++) {
            logEntry(types[i % 4], 'Entry ' + i);
        }
        const entries = readLog();
        expect(entries.length).toBeLessThanOrEqual(200);
    });
});

describe('Stress — daily mission rapid completions', () => {
    beforeEach(() => resetStorage());

    it('mission state resets correctly over 30 simulated days', () => {
        for (let day = 0; day < 30; day++) {
            const dateStr = '2024-0' + (Math.floor(day / 28) + 1) + '-' + String(day % 28 + 1).padStart(2, '0');
            const mission = {
                date: dateStr,
                tasks: [
                    { type: 'focus', target: 1, count: 0, done: false },
                    { type: 'flashcards', target: 1, count: 0, done: false },
                    { type: 'quiz', target: 1, count: 0, done: false }
                ],
                allDone: false
            };
            // Complete all tasks
            mission.tasks.forEach(t => { t.count = t.target; t.done = true; });
            mission.allDone = true;
            saveData('daily_mission', mission);
        }
        const final = loadData('daily_mission', {});
        expect(final.allDone).toBe(true);
    });

    it('handles task over-completion without breaking', () => {
        const mission = {
            date: '2024-01-01',
            tasks: [
                { type: 'focus', target: 1, count: 0, done: false }
            ],
            allDone: false
        };
        // Complete the same task 100 times
        for (let i = 0; i < 100; i++) {
            mission.tasks[0].count++;
            if (mission.tasks[0].count >= mission.tasks[0].target) {
                mission.tasks[0].done = true;
            }
        }
        expect(mission.tasks[0].count).toBe(100);
        expect(mission.tasks[0].done).toBe(true);
    });
});

describe('Stress — rapid screen navigation simulation', () => {
    beforeEach(() => resetStorage());

    it('survives 500 rapid screen switches', () => {
        const screens = ['dashboard', 'quiz', 'flashcards', 'focus', 'profile', 'settings', 'onboarding'];
        const history = [];
        for (let i = 0; i < 500; i++) {
            const screen = screens[i % screens.length];
            history.push(screen);
            saveData('currentScreen', screen);
        }
        const final = loadData('currentScreen', 'dashboard');
        expect(screens).toContain(final);
        expect(history.length).toBe(500);
    });
});
