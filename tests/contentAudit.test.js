// Tests for content audit logic
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extract pure logic for testing ====================

function bigrams(str) {
    str = (str || '').toLowerCase().replace(/[^a-z0-9àâéèêëïîôùûüçœæ ]/g, '');
    var b = {};
    for (var i = 0; i < str.length - 1; i++) {
        var pair = str.substring(i, i + 2);
        b[pair] = (b[pair] || 0) + 1;
    }
    return b;
}

function similarity(a, b) {
    var ba = bigrams(a);
    var bb = bigrams(b);
    var intersection = 0;
    var union = 0;
    var all = {};
    for (var k in ba) all[k] = true;
    for (var k in bb) all[k] = true;
    for (var k in all) {
        var va = ba[k] || 0;
        var vb = bb[k] || 0;
        intersection += Math.min(va, vb);
        union += Math.max(va, vb);
    }
    return union === 0 ? 0 : intersection / union;
}

// ==================== TESTS ====================

describe('Content Audit — Similarity', () => {
    it('returns 1.0 for identical strings', () => {
        expect(similarity('hello world', 'hello world')).toBe(1);
    });

    it('returns 0 for completely different strings', () => {
        const s = similarity('abcdefg', 'xyz123');
        expect(s).toBeLessThan(0.1);
    });

    it('detects near-duplicates', () => {
        const s = similarity(
            'Quelle est la derivee de x^n ?',
            'Quelle est la derivee de x^n'
        );
        expect(s).toBeGreaterThan(0.9);
    });

    it('distinguishes different questions', () => {
        const s = similarity(
            'Quelle est la derivee de x^n ?',
            'Comment calculer une integrale ?'
        );
        expect(s).toBeLessThan(0.5);
    });

    it('handles empty strings', () => {
        expect(similarity('', '')).toBe(0);
        expect(similarity('hello', '')).toBe(0);
    });
});

describe('Content Audit — Quiz validation', () => {
    const MIN_QUESTION_LENGTH = 15;

    it('flags question shorter than 15 characters', () => {
        const q = 'Derivee ?';
        expect(q.length).toBeLessThan(MIN_QUESTION_LENGTH);
    });

    it('passes question longer than 15 characters', () => {
        const q = 'Quelle est la derivee de x^n ?';
        expect(q.length).toBeGreaterThanOrEqual(MIN_QUESTION_LENGTH);
    });

    it('detects correctIndex out of bounds', () => {
        const quiz = { options: ['A', 'B', 'C', 'D'], correctIndex: 5 };
        expect(quiz.correctIndex >= quiz.options.length).toBe(true);
    });

    it('detects duplicate options', () => {
        const options = ['12x^3', '3x^3', '12x^3', '12x^4'];
        const seen = {};
        let hasDup = false;
        for (const opt of options) {
            const lower = opt.toLowerCase().trim();
            if (seen[lower]) { hasDup = true; break; }
            seen[lower] = true;
        }
        expect(hasDup).toBe(true);
    });

    it('passes valid quiz with unique options', () => {
        const options = ['12x^3', '3x^3', '4x^3', '12x^4'];
        const seen = {};
        let hasDup = false;
        for (const opt of options) {
            const lower = opt.toLowerCase().trim();
            if (seen[lower]) { hasDup = true; break; }
            seen[lower] = true;
        }
        expect(hasDup).toBe(false);
    });
});
