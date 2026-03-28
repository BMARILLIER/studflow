// Tests for spacedRepetition.js — SM-2 algorithm, card ID hashing, state management
import { describe, it, expect, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic ====================

function cardId(question, answer) {
    var str = (question || '') + '||' + (answer || '');
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
        hash = hash & hash;
    }
    return (hash >>> 0).toString(16).padStart(8, '0');
}

function sm2(cs, quality) {
    cs.totalReviews++;

    // Update easiness factor
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

function freshCardState() {
    return {
        ef: 2.5,
        interval: 0,
        reps: 0,
        nextReview: null,
        lastReview: null,
        lapses: 0,
        totalReviews: 0
    };
}

// ==================== TESTS ====================

describe('spacedRepetition.js — card ID hashing', () => {
    it('generates deterministic hash for same input', () => {
        const id1 = cardId('What is 2+2?', '4');
        const id2 = cardId('What is 2+2?', '4');
        expect(id1).toBe(id2);
    });

    it('generates different hashes for different questions', () => {
        const id1 = cardId('What is 2+2?', '4');
        const id2 = cardId('What is 3+3?', '6');
        expect(id1).not.toBe(id2);
    });

    it('generates different hashes for same question different answer', () => {
        const id1 = cardId('Capital of France?', 'Paris');
        const id2 = cardId('Capital of France?', 'London');
        expect(id1).not.toBe(id2);
    });

    it('returns 8-char hex string', () => {
        const id = cardId('test', 'answer');
        expect(id).toMatch(/^[0-9a-f]{8}$/);
    });

    it('handles empty strings', () => {
        const id = cardId('', '');
        expect(id).toMatch(/^[0-9a-f]{8}$/);
    });

    it('handles null/undefined inputs', () => {
        const id1 = cardId(null, null);
        const id2 = cardId(undefined, undefined);
        expect(id1).toMatch(/^[0-9a-f]{8}$/);
        expect(id1).toBe(id2); // both resolve to '' + '||' + ''
    });

    it('handles unicode characters', () => {
        const id = cardId('Qu\'est-ce que le théorème de Pythagore?', 'a² + b² = c²');
        expect(id).toMatch(/^[0-9a-f]{8}$/);
    });
});

describe('spacedRepetition.js — SM-2 algorithm', () => {
    it('first successful review sets interval to 1 day', () => {
        const cs = freshCardState();
        sm2(cs, 4); // quality 4 = correct
        expect(cs.interval).toBe(1);
        expect(cs.reps).toBe(1);
    });

    it('second successful review sets interval to 6 days', () => {
        const cs = freshCardState();
        sm2(cs, 4);
        sm2(cs, 4);
        expect(cs.interval).toBe(6);
        expect(cs.reps).toBe(2);
    });

    it('third successful review uses EF multiplier', () => {
        const cs = freshCardState();
        sm2(cs, 4);
        sm2(cs, 4);
        sm2(cs, 4);
        // interval = round(6 * EF), EF should be around 2.5 after quality 4
        expect(cs.interval).toBeGreaterThan(6);
        expect(cs.reps).toBe(3);
    });

    it('failed review (quality < 3) resets to interval 1', () => {
        const cs = freshCardState();
        sm2(cs, 4); // reps=1, interval=1
        sm2(cs, 4); // reps=2, interval=6
        sm2(cs, 1); // fail — reset
        expect(cs.interval).toBe(1);
        expect(cs.reps).toBe(0);
        expect(cs.lapses).toBe(1);
    });

    it('easiness factor never goes below 1.3', () => {
        const cs = freshCardState();
        // Repeated failures should not drop EF below 1.3
        for (let i = 0; i < 10; i++) {
            sm2(cs, 0); // worst quality
        }
        expect(cs.ef).toBeGreaterThanOrEqual(1.3);
    });

    it('perfect quality (5) increases EF', () => {
        const cs = freshCardState();
        const initialEF = cs.ef;
        sm2(cs, 5);
        expect(cs.ef).toBeGreaterThan(initialEF);
    });

    it('mediocre quality (3) slightly decreases EF', () => {
        const cs = freshCardState();
        const initialEF = cs.ef;
        sm2(cs, 3);
        expect(cs.ef).toBeLessThan(initialEF);
    });

    it('tracks total reviews accurately', () => {
        const cs = freshCardState();
        sm2(cs, 4);
        sm2(cs, 2);
        sm2(cs, 5);
        expect(cs.totalReviews).toBe(3);
    });

    it('tracks lapses on failures', () => {
        const cs = freshCardState();
        sm2(cs, 4);
        sm2(cs, 1); // fail
        sm2(cs, 4);
        sm2(cs, 0); // fail
        expect(cs.lapses).toBe(2);
    });
});

describe('spacedRepetition.js — EF progression', () => {
    it('consistent quality 4 keeps EF stable around 2.5', () => {
        const cs = freshCardState();
        for (let i = 0; i < 10; i++) sm2(cs, 4);
        // EF should stay close to 2.5 with quality 4
        expect(cs.ef).toBeGreaterThan(2.3);
        expect(cs.ef).toBeLessThan(2.7);
    });

    it('intervals grow exponentially with good reviews', () => {
        const cs = freshCardState();
        const intervals = [];
        for (let i = 0; i < 6; i++) {
            sm2(cs, 4);
            intervals.push(cs.interval);
        }
        // First few: 1, 6, ~15, ~38, ...
        expect(intervals[0]).toBe(1);
        expect(intervals[1]).toBe(6);
        expect(intervals[2]).toBeGreaterThan(10);
        // Each should be >= previous
        for (let i = 2; i < intervals.length; i++) {
            expect(intervals[i]).toBeGreaterThanOrEqual(intervals[i - 1]);
        }
    });
});
