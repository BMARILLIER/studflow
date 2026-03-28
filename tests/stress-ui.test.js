// Stress tests — UI component simulation (toasts, progress, XP display, renders)
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic ====================
const MAX_TOASTS = 3;

function manageToastQueue(activeToasts, newToast) {
    activeToasts.push(newToast);
    const removed = [];
    while (activeToasts.length > MAX_TOASTS) {
        removed.push(activeToasts.shift());
    }
    return { active: activeToasts, removed: removed };
}

// XP display calculation
const LEVELS = [
    { level: 1, xpNeeded: 0 }, { level: 2, xpNeeded: 50 },
    { level: 3, xpNeeded: 120 }, { level: 4, xpNeeded: 250 },
    { level: 5, xpNeeded: 400 }, { level: 6, xpNeeded: 600 },
    { level: 7, xpNeeded: 850 }, { level: 8, xpNeeded: 1200 },
    { level: 9, xpNeeded: 1600 }, { level: 10, xpNeeded: 2100 }
];

function calculateXPProgress(xp) {
    let currentLevel = LEVELS[0];
    let nextLevel = LEVELS[1];
    for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (xp >= LEVELS[i].xpNeeded) {
            currentLevel = LEVELS[i];
            nextLevel = LEVELS[i + 1] || null;
            break;
        }
    }
    if (!nextLevel) return { level: currentLevel.level, percent: 100, xpInLevel: 0, xpNeeded: 0 };
    const xpInLevel = xp - currentLevel.xpNeeded;
    const xpNeeded = nextLevel.xpNeeded - currentLevel.xpNeeded;
    const percent = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));
    return { level: currentLevel.level, percent, xpInLevel, xpNeeded };
}

// Dashboard render counter simulation
function simulateDashboardRender(stats) {
    const sections = [];
    sections.push('<div class="welcome">Welcome</div>');
    sections.push('<div class="xp">XP: ' + stats.xp + '</div>');
    sections.push('<div class="level">Level: ' + stats.level + '</div>');
    sections.push('<div class="streak">Streak: ' + stats.streak + '</div>');
    if (stats.quizResults && stats.quizResults.length) {
        sections.push('<div class="quiz-stats">Quizzes: ' + stats.quizResults.length + '</div>');
    }
    if (stats.flashcardDecks && stats.flashcardDecks.length) {
        sections.push('<div class="fc-stats">Decks: ' + stats.flashcardDecks.length + '</div>');
    }
    sections.push('<div class="mission">Mission</div>');
    sections.push('<div class="quick-actions">Actions</div>');
    return sections.join('');
}

// Focus timer SVG calculation
function calculateTimerArc(elapsed, total) {
    if (total <= 0) return { percent: 0, dashOffset: 0 };
    const percent = Math.min(100, Math.round((elapsed / total) * 100));
    const circumference = 2 * Math.PI * 90; // radius = 90
    const dashOffset = circumference * (1 - elapsed / total);
    return { percent, dashOffset };
}

// EventBus stress
function createEventBus() {
    const listeners = {};
    return {
        on(event, fn) {
            if (!listeners[event]) listeners[event] = [];
            listeners[event].push(fn);
        },
        off(event, fn) {
            if (!listeners[event]) return;
            listeners[event] = listeners[event].filter(f => f !== fn);
        },
        emit(event, data) {
            if (!listeners[event]) return;
            const snapshot = listeners[event].slice();
            snapshot.forEach(fn => {
                try { fn(data); } catch (e) { /* isolate errors */ }
            });
        },
        listenerCount(event) {
            return (listeners[event] || []).length;
        }
    };
}

// ==================== STRESS TESTS ====================

describe('Stress — toast queue overflow (500 rapid toasts)', () => {
    it('MAX_TOASTS is never exceeded during burst', () => {
        const activeToasts = [];
        let totalRemoved = 0;
        for (let i = 0; i < 500; i++) {
            const result = manageToastQueue(activeToasts, { id: i, message: 'Toast #' + i });
            totalRemoved += result.removed.length;
            expect(result.active.length).toBeLessThanOrEqual(MAX_TOASTS);
        }
        expect(activeToasts.length).toBe(MAX_TOASTS);
        expect(totalRemoved).toBe(500 - MAX_TOASTS); // 497 removed
    });

    it('oldest toasts are always removed first', () => {
        const activeToasts = [];
        const removedIds = [];
        for (let i = 0; i < 100; i++) {
            const result = manageToastQueue(activeToasts, { id: i, message: 'Toast #' + i });
            result.removed.forEach(r => removedIds.push(r.id));
        }
        // Removed IDs should be in order 0, 1, 2, ...
        for (let i = 1; i < removedIds.length; i++) {
            expect(removedIds[i]).toBeGreaterThan(removedIds[i - 1]);
        }
    });

    it('toast messages are not truncated or corrupted', () => {
        const activeToasts = [];
        for (let i = 0; i < 50; i++) {
            const msg = 'Message with special chars: éàü #' + i;
            manageToastQueue(activeToasts, { id: i, message: msg });
        }
        // Last 3 toasts should have correct messages
        activeToasts.forEach(t => {
            expect(t.message).toContain('Message with special chars');
        });
    });
});

describe('Stress — XP progress bar (rapid updates)', () => {
    it('calculates progress correctly for 0 to 3000 XP', () => {
        for (let xp = 0; xp <= 3000; xp += 10) {
            const prog = calculateXPProgress(xp);
            expect(prog.level).toBeGreaterThanOrEqual(1);
            expect(prog.level).toBeLessThanOrEqual(10);
            expect(prog.percent).toBeGreaterThanOrEqual(0);
            expect(prog.percent).toBeLessThanOrEqual(100);
            expect(Number.isFinite(prog.percent)).toBe(true);
        }
    });

    it('level transitions are correct at boundaries', () => {
        LEVELS.forEach((lvl, i) => {
            const prog = calculateXPProgress(lvl.xpNeeded);
            expect(prog.level).toBe(lvl.level);
            if (i < LEVELS.length - 1) {
                expect(prog.percent).toBe(0); // just crossed into new level
            }
        });
    });

    it('handles exactly-at-boundary XP values', () => {
        expect(calculateXPProgress(0).level).toBe(1);
        expect(calculateXPProgress(50).level).toBe(2);
        expect(calculateXPProgress(49).level).toBe(1);
        expect(calculateXPProgress(2100).level).toBe(10);
        expect(calculateXPProgress(2100).percent).toBe(100);
    });

    it('handles extreme XP (1,000,000)', () => {
        const prog = calculateXPProgress(1000000);
        expect(prog.level).toBe(10);
        expect(prog.percent).toBe(100);
    });
});

describe('Stress — dashboard render storms (100 renders)', () => {
    it('produces valid HTML for 100 consecutive renders', () => {
        for (let i = 0; i < 100; i++) {
            const html = simulateDashboardRender({
                xp: i * 10,
                level: Math.min(10, Math.floor(i / 10) + 1),
                streak: i % 7,
                quizResults: new Array(i % 20),
                flashcardDecks: i % 5 > 0 ? [{ name: 'deck' }] : []
            });
            expect(html).toContain('Welcome');
            expect(html).toContain('XP:');
            expect(html).toContain('Level:');
            expect(html.length).toBeGreaterThan(0);
        }
    });

    it('renders with empty stats without crashing', () => {
        const html = simulateDashboardRender({ xp: 0, level: 1, streak: 0 });
        expect(html).toContain('Welcome');
        expect(html).not.toContain('undefined');
    });

    it('renders with large stat values', () => {
        const html = simulateDashboardRender({
            xp: 999999,
            level: 10,
            streak: 365,
            quizResults: new Array(1000),
            flashcardDecks: new Array(50)
        });
        expect(html).toContain('999999');
        expect(html).toContain('Quizzes: 1000');
    });
});

describe('Stress — focus timer calculations (3600 ticks)', () => {
    it('calculates arc for every second of a 60-minute session', () => {
        const total = 3600; // seconds
        for (let elapsed = 0; elapsed <= total; elapsed++) {
            const arc = calculateTimerArc(elapsed, total);
            expect(arc.percent).toBeGreaterThanOrEqual(0);
            expect(arc.percent).toBeLessThanOrEqual(100);
            expect(Number.isFinite(arc.dashOffset)).toBe(true);
        }
    });

    it('arc reaches 0 dashOffset at completion', () => {
        const arc = calculateTimerArc(1500, 1500); // 25-min timer done
        expect(arc.percent).toBe(100);
        expect(Math.abs(arc.dashOffset)).toBeLessThan(0.01); // essentially 0
    });

    it('handles zero total gracefully', () => {
        const arc = calculateTimerArc(0, 0);
        expect(arc.percent).toBe(0);
        expect(arc.dashOffset).toBe(0);
    });

    it('handles elapsed > total', () => {
        const arc = calculateTimerArc(2000, 1500);
        expect(arc.percent).toBe(100); // capped at 100
    });
});

describe('Stress — EventBus saturation', () => {
    it('handles 1000 listeners on one event', () => {
        const bus = createEventBus();
        let callCount = 0;
        for (let i = 0; i < 1000; i++) {
            bus.on('test', () => { callCount++; });
        }
        bus.emit('test', {});
        expect(callCount).toBe(1000);
    });

    it('handles 1000 different events', () => {
        const bus = createEventBus();
        const results = {};
        for (let i = 0; i < 1000; i++) {
            const event = 'event_' + i;
            results[event] = false;
            bus.on(event, () => { results[event] = true; });
        }
        for (let i = 0; i < 1000; i++) {
            bus.emit('event_' + i, {});
        }
        expect(Object.values(results).every(v => v)).toBe(true);
    });

    it('handles rapid subscribe/unsubscribe cycles', () => {
        const bus = createEventBus();
        for (let i = 0; i < 500; i++) {
            const fn = () => {};
            bus.on('cycle', fn);
            bus.off('cycle', fn);
        }
        expect(bus.listenerCount('cycle')).toBe(0);
    });

    it('isolates errors from 100 listeners (50 throwing)', () => {
        const bus = createEventBus();
        let successCount = 0;
        for (let i = 0; i < 100; i++) {
            if (i % 2 === 0) {
                bus.on('mixed', () => { throw new Error('fail'); });
            } else {
                bus.on('mixed', () => { successCount++; });
            }
        }
        bus.emit('mixed', {});
        expect(successCount).toBe(50);
    });

    it('emit during emit does not cause infinite loop', () => {
        const bus = createEventBus();
        let depth = 0;
        bus.on('recursive', () => {
            depth++;
            if (depth < 10) bus.emit('recursive', {});
        });
        bus.emit('recursive', {});
        expect(depth).toBe(10);
    });
});

describe('Stress — memory leak simulation (object growth)', () => {
    it('reused arrays do not grow unbounded', () => {
        let arr = [];
        for (let i = 0; i < 1000; i++) {
            arr.push({ id: i, data: 'x'.repeat(100) });
            if (arr.length > 200) {
                arr = arr.slice(-100); // keep last 100
            }
        }
        expect(arr.length).toBeLessThanOrEqual(200);
    });

    it('event listener cleanup prevents accumulation', () => {
        const bus = createEventBus();
        for (let i = 0; i < 1000; i++) {
            const fn = () => {};
            bus.on('temp', fn);
            bus.off('temp', fn);
        }
        expect(bus.listenerCount('temp')).toBe(0);
    });

    it('toast queue stays bounded over time', () => {
        const queue = [];
        for (let i = 0; i < 10000; i++) {
            manageToastQueue(queue, { id: i });
        }
        expect(queue.length).toBe(MAX_TOASTS);
    });
});
