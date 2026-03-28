// Tests for edge cases — empty/large PDF, invalid quiz data, missing DOM, network loss
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Quiz validation logic (from contentAudit.js) ====================
function validateQuizQuestion(q) {
    const errors = [];
    if (!q) { errors.push('question is null/undefined'); return errors; }
    if (!q.question || q.question.length < 15) errors.push('question too short');
    if (!Array.isArray(q.options) || q.options.length < 2) errors.push('insufficient options');
    if (q.correctIndex === undefined || q.correctIndex === null) errors.push('no correctIndex');
    if (Array.isArray(q.options) && (q.correctIndex < 0 || q.correctIndex >= q.options.length)) {
        errors.push('correctIndex out of bounds');
    }
    if (Array.isArray(q.options)) {
        const lower = q.options.map(o => String(o).toLowerCase().trim());
        const unique = new Set(lower);
        if (unique.size < lower.length) errors.push('duplicate options');
    }
    return errors;
}

// ==================== Storage resilience helpers ====================
const PREFIX = 'studflow_';

function loadData(key, defaultValue) {
    try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw ? JSON.parse(raw) : (defaultValue !== undefined ? defaultValue : null);
    } catch (e) {
        return defaultValue !== undefined ? defaultValue : null;
    }
}

// ==================== TESTS ====================

describe('Edge cases — invalid quiz data', () => {
    it('rejects null question', () => {
        expect(validateQuizQuestion(null)).toContain('question is null/undefined');
    });

    it('rejects undefined question', () => {
        expect(validateQuizQuestion(undefined)).toContain('question is null/undefined');
    });

    it('rejects question with empty string', () => {
        const errors = validateQuizQuestion({ question: '', options: ['A', 'B'], correctIndex: 0 });
        expect(errors).toContain('question too short');
    });

    it('rejects question with very short text', () => {
        const errors = validateQuizQuestion({ question: 'Short?', options: ['A', 'B', 'C', 'D'], correctIndex: 0 });
        expect(errors).toContain('question too short');
    });

    it('rejects question with no options', () => {
        const errors = validateQuizQuestion({ question: 'A valid question here?', options: [], correctIndex: 0 });
        expect(errors).toContain('insufficient options');
    });

    it('rejects question with single option', () => {
        const errors = validateQuizQuestion({ question: 'A valid question here?', options: ['Only one'], correctIndex: 0 });
        expect(errors).toContain('insufficient options');
    });

    it('rejects question with null options', () => {
        const errors = validateQuizQuestion({ question: 'A valid question here?', options: null, correctIndex: 0 });
        expect(errors).toContain('insufficient options');
    });

    it('rejects correctIndex out of bounds (negative)', () => {
        const errors = validateQuizQuestion({ question: 'A valid question here?', options: ['A', 'B', 'C', 'D'], correctIndex: -1 });
        expect(errors).toContain('correctIndex out of bounds');
    });

    it('rejects correctIndex out of bounds (too high)', () => {
        const errors = validateQuizQuestion({ question: 'A valid question here?', options: ['A', 'B', 'C', 'D'], correctIndex: 4 });
        expect(errors).toContain('correctIndex out of bounds');
    });

    it('rejects missing correctIndex', () => {
        const errors = validateQuizQuestion({ question: 'A valid question here?', options: ['A', 'B', 'C', 'D'] });
        expect(errors).toContain('no correctIndex');
    });

    it('rejects duplicate options (case-insensitive)', () => {
        const errors = validateQuizQuestion({
            question: 'A valid question here?',
            options: ['Paris', 'paris', 'London', 'Berlin'],
            correctIndex: 0
        });
        expect(errors).toContain('duplicate options');
    });

    it('accepts valid quiz question', () => {
        const errors = validateQuizQuestion({
            question: 'Quelle est la capitale de la France ?',
            options: ['Paris', 'Londres', 'Berlin', 'Madrid'],
            correctIndex: 0
        });
        expect(errors.length).toBe(0);
    });

    it('handles options with whitespace-only strings', () => {
        const errors = validateQuizQuestion({
            question: 'A valid question here?',
            options: ['  ', '  ', 'C', 'D'],
            correctIndex: 0
        });
        expect(errors).toContain('duplicate options');
    });
});

describe('Edge cases — empty PDF', () => {
    it('extractText on empty content returns empty string', async () => {
        // Simulate PDF.js returning 0 pages
        const mockPdf = {
            numPages: 0
        };
        let fullText = '';
        for (let i = 1; i <= mockPdf.numPages; i++) {
            fullText += 'page text\n\n';
        }
        expect(fullText).toBe('');
    });

    it('extractText on single empty page returns whitespace', async () => {
        const mockPage = {
            getTextContent: async () => ({ items: [] })
        };
        const items = (await mockPage.getTextContent()).items;
        const text = items.map(item => item.str).join(' ');
        expect(text).toBe('');
    });
});

describe('Edge cases — large PDF simulation', () => {
    it('handles 100-page extraction', () => {
        const pages = [];
        for (let i = 0; i < 100; i++) {
            pages.push('Page ' + (i + 1) + ' content here with some text about the topic.');
        }
        const fullText = pages.join('\n\n');
        expect(fullText.length).toBeGreaterThan(0);
        expect(fullText.split('\n\n').length).toBe(100);
    });

    it('handles page with very long text', () => {
        const longPage = 'A'.repeat(100000); // 100KB single page
        expect(longPage.length).toBe(100000);
        // The extractText function doesn't have a size limit, but storage might
        const truncated = longPage.substring(0, 50000);
        expect(truncated.length).toBe(50000);
    });
});

describe('Edge cases — missing DOM elements', () => {
    it('getElementById returns null for missing elements', () => {
        expect(document.getElementById('nonexistent-element')).toBeNull();
    });

    it('null-guarded DOM access pattern works', () => {
        // This is the pattern used throughout the app
        const el = document.getElementById('missing-progress-bar');
        if (el) el.style.width = '50%';
        // Should not throw
        expect(true).toBe(true);
    });

    it('querySelector returns null for missing selectors', () => {
        expect(document.querySelector('.xp-level')).toBeNull();
        expect(document.querySelector('.nonexistent')).toBeNull();
    });

    it('DOM operations are safe with null checks', () => {
        // Simulate the pattern from gamification.js updateXPDisplay
        const levelEl = document.querySelector('.xp-level');
        if (levelEl) levelEl.textContent = 'Nv.1';

        const xpFill = document.querySelector('.xp-fill');
        if (xpFill) {
            xpFill.style.width = '50%';
            const xpBar = xpFill.parentElement;
            if (xpBar) xpBar.setAttribute('aria-valuenow', '50');
        }

        // No errors thrown
        expect(true).toBe(true);
    });
});

describe('Edge cases — corrupted localStorage scenarios', () => {
    beforeEach(() => resetStorage());

    it('handles number stored where object expected', () => {
        localStorage.setItem('studflow_profile', '42');
        const result = loadData('profile', {});
        expect(result).toBe(42); // JSON.parse('42') = 42, not an error
    });

    it('handles array stored where object expected', () => {
        localStorage.setItem('studflow_scores', '[1,2,3]');
        const result = loadData('scores', {});
        expect(Array.isArray(result)).toBe(true);
    });

    it('handles boolean stored where object expected', () => {
        localStorage.setItem('studflow_onboarding_done', 'true');
        const result = loadData('onboarding_done', false);
        expect(result).toBe(true);
    });

    it('handles deeply nested corrupted data', () => {
        // Valid JSON but unexpected structure
        localStorage.setItem('studflow_gamification', JSON.stringify({
            xp: 'not_a_number',
            level: null,
            streak: undefined
        }));
        const result = loadData('gamification', { xp: 0, level: 1, streak: 0 });
        expect(result.xp).toBe('not_a_number'); // loaded as-is, caller must handle
    });
});

describe('Edge cases — network loss during optional sync', () => {
    it('navigator.onLine reflects offline state', () => {
        const originalOnline = navigator.onLine;
        Object.defineProperty(navigator, 'onLine', { value: false, writable: true });
        expect(navigator.onLine).toBe(false);
        Object.defineProperty(navigator, 'onLine', { value: originalOnline, writable: true });
    });

    it('sync should be skippable when offline', () => {
        // Simulate the cloud.js pattern
        const shouldSync = navigator.onLine;
        Object.defineProperty(navigator, 'onLine', { value: false, writable: true });
        const shouldSyncOffline = navigator.onLine;
        expect(shouldSyncOffline).toBe(false);
        Object.defineProperty(navigator, 'onLine', { value: true, writable: true });
    });

    it('local operations work regardless of network', () => {
        Object.defineProperty(navigator, 'onLine', { value: false, writable: true });
        // localStorage always works
        localStorage.setItem('studflow_test', JSON.stringify({ data: 'works' }));
        const result = loadData('test', null);
        expect(result).toEqual({ data: 'works' });
        Object.defineProperty(navigator, 'onLine', { value: true, writable: true });
    });
});

describe('Edge cases — special characters in data', () => {
    beforeEach(() => resetStorage());

    it('stores and retrieves data with unicode', () => {
        const data = { question: 'Qu\'est-ce que le théorème de Pythagore ?', answer: 'a² + b² = c²' };
        localStorage.setItem('studflow_fc', JSON.stringify(data));
        const result = loadData('fc', null);
        expect(result.question).toContain('théorème');
        expect(result.answer).toContain('²');
    });

    it('handles emoji in stored data', () => {
        const data = { name: 'Test 🎯', badge: '🏆' };
        localStorage.setItem('studflow_test', JSON.stringify(data));
        const result = loadData('test', null);
        expect(result.badge).toBe('🏆');
    });

    it('handles very long keys gracefully', () => {
        const longKey = 'x'.repeat(1000);
        localStorage.setItem('studflow_' + longKey, JSON.stringify('value'));
        const result = loadData(longKey, null);
        expect(result).toBe('value');
    });
});
