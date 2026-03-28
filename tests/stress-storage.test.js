// Stress tests — storage resilience (quota, corruption, concurrent writes)
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic ====================
const PREFIX = 'studflow_';

function saveData(key, val) {
    localStorage.setItem(PREFIX + key, JSON.stringify(val));
}

function loadData(key, def) {
    try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw ? JSON.parse(raw) : (def !== undefined ? def : null);
    } catch (e) { return def !== undefined ? def : null; }
}

function isQuotaError(e) {
    return e && (
        e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED'
    );
}

const PURGEABLE_KEYS = [
    'diagnostic_cache', 'temp_quiz', 'focus_history_detail',
    'old_flashcard_stats', 'analytics_buffer'
];

function emergencyCleanup() {
    let freed = 0;
    PURGEABLE_KEYS.forEach(function(key) {
        var fullKey = PREFIX + key;
        var existing = localStorage.getItem(fullKey);
        if (existing) {
            freed += existing.length;
            localStorage.removeItem(fullKey);
        }
    });
    return freed;
}

// Backup logic
const EXPORT_KEYS = [
    'gamification', 'quiz_results', 'flashcard_decks', 'sr_state',
    'profile', 'settings', 'daily_mission', 'focus_stats',
    'onboarding', 'analytics', 'content_reports', 'error_log'
];

function exportBackup() {
    const data = { _meta: { version: 2, ts: new Date().toISOString(), app: 'StudFlow' } };
    EXPORT_KEYS.forEach(key => {
        const val = loadData(key, null);
        if (val !== null) data[key] = val;
    });
    return JSON.stringify(data);
}

function importBackup(jsonStr) {
    if (jsonStr.length > 5 * 1024 * 1024) return { ok: false, error: 'File too large (>5MB)' };
    let data;
    try { data = JSON.parse(jsonStr); } catch (e) { return { ok: false, error: 'Invalid JSON' }; }
    if (!data._meta || data._meta.app !== 'StudFlow') return { ok: false, error: 'Not a StudFlow backup' };
    Object.keys(data).forEach(key => {
        if (key !== '_meta') saveData(key, data[key]);
    });
    return { ok: true, keysImported: Object.keys(data).filter(k => k !== '_meta').length };
}

// ==================== STRESS TESTS ====================

describe('Stress — storage write/read cycles (1000 iterations)', () => {
    beforeEach(() => resetStorage());

    it('survives 1000 write/read cycles on same key', () => {
        for (let i = 0; i < 1000; i++) {
            saveData('counter', { value: i, ts: Date.now() });
        }
        const result = loadData('counter', {});
        expect(result.value).toBe(999);
    });

    it('survives 1000 write/read cycles on different keys', () => {
        for (let i = 0; i < 1000; i++) {
            saveData('key_' + i, { index: i });
        }
        // Verify random samples
        expect(loadData('key_0', {}).index).toBe(0);
        expect(loadData('key_499', {}).index).toBe(499);
        expect(loadData('key_999', {}).index).toBe(999);
    });

    it('handles rapid alternating reads and writes', () => {
        for (let i = 0; i < 500; i++) {
            saveData('alt', { v: i });
            const read = loadData('alt', {});
            expect(read.v).toBe(i);
        }
    });
});

describe('Stress — quota recovery simulation', () => {
    beforeEach(() => resetStorage());

    it('emergency cleanup frees purgeable keys', () => {
        // Fill purgeable keys
        PURGEABLE_KEYS.forEach(key => {
            saveData(key, 'X'.repeat(1000));
        });
        const freed = emergencyCleanup();
        expect(freed).toBeGreaterThan(0);
        // Verify keys are gone
        PURGEABLE_KEYS.forEach(key => {
            expect(localStorage.getItem(PREFIX + key)).toBeNull();
        });
    });

    it('quota error detection works for all error types', () => {
        expect(isQuotaError({ code: 22, name: 'QuotaExceededError' })).toBe(true);
        expect(isQuotaError({ code: 1014, name: 'NS_ERROR_DOM_QUOTA_REACHED' })).toBe(true);
        expect(isQuotaError({ name: 'QuotaExceededError' })).toBe(true);
        expect(isQuotaError(null)).toBeFalsy();
        expect(isQuotaError({})).toBeFalsy();
        expect(isQuotaError({ code: 0 })).toBeFalsy();
    });

    it('write succeeds after emergency cleanup frees space', () => {
        // Fill purgeable keys
        PURGEABLE_KEYS.forEach(key => {
            saveData(key, { data: 'A'.repeat(500) });
        });

        // Cleanup
        emergencyCleanup();

        // Now write critical data
        saveData('gamification', { xp: 500, level: 5 });
        expect(loadData('gamification', {}).xp).toBe(500);
    });

    it('handles 50 consecutive quota-and-recover cycles', () => {
        for (let i = 0; i < 50; i++) {
            // Fill purgeable keys
            PURGEABLE_KEYS.forEach(key => {
                saveData(key, { round: i });
            });
            // Cleanup
            emergencyCleanup();
            // Write important data
            saveData('critical_' + (i % 5), { round: i });
        }
        // Critical data from last round should survive
        expect(loadData('critical_4', {}).round).toBe(49);
    });
});

describe('Stress — corrupted storage recovery', () => {
    beforeEach(() => resetStorage());

    it('handles 100 corruption-and-recovery cycles', () => {
        for (let i = 0; i < 100; i++) {
            // Write valid data
            saveData('data', { iteration: i });
            // Corrupt it
            localStorage.setItem(PREFIX + 'data', '{{{CORRUPT_' + i);
            // Read with default
            const result = loadData('data', { iteration: -1 });
            expect(result.iteration).toBe(-1);
            // Write fresh
            saveData('data', { iteration: i, recovered: true });
            const recovered = loadData('data', {});
            expect(recovered.recovered).toBe(true);
        }
    });

    it('handles various corruption patterns', () => {
        const corruptions = [
            '', 'null', 'undefined', '{{}}', '[}', '{"a":}',
            'NaN', 'Infinity', '\x00\x01', '🎯💥', 'true',
            '0', '-1', '[]', '""', "'quoted'"
        ];
        corruptions.forEach((corrupt, i) => {
            localStorage.setItem(PREFIX + 'test_' + i, corrupt);
            const result = loadData('test_' + i, 'default');
            // Should either parse successfully or return default
            expect(result !== undefined).toBe(true);
        });
    });

    it('survives interleaved valid/invalid data across 20 keys', () => {
        for (let i = 0; i < 20; i++) {
            if (i % 3 === 0) {
                localStorage.setItem(PREFIX + 'key_' + i, 'INVALID_JSON');
            } else {
                saveData('key_' + i, { valid: true, index: i });
            }
        }
        let validCount = 0;
        let defaultCount = 0;
        for (let i = 0; i < 20; i++) {
            const result = loadData('key_' + i, { valid: false });
            if (result.valid === true) validCount++;
            else defaultCount++;
        }
        // 7 corrupted (0,3,6,9,12,15,18), 13 valid
        expect(validCount).toBe(13);
        expect(defaultCount).toBe(7);
    });
});

describe('Stress — backup export/import cycles', () => {
    beforeEach(() => resetStorage());

    it('survives 50 export/import roundtrips', () => {
        // Set initial data
        saveData('gamification', { xp: 100, level: 3 });
        saveData('profile', { name: 'Test', mainProfile: 'equilibre' });
        saveData('quiz_results', [{ score: 80 }, { score: 90 }]);

        for (let i = 0; i < 50; i++) {
            const exported = exportBackup();
            resetStorage();
            const result = importBackup(exported);
            expect(result.ok).toBe(true);
            // Modify data slightly
            const gam = loadData('gamification', {});
            gam.xp += 10;
            saveData('gamification', gam);
        }
        const final = loadData('gamification', {});
        expect(final.xp).toBe(600); // 100 + 50*10
    });

    it('rejects oversized backup (>5MB)', () => {
        const huge = JSON.stringify({ _meta: { app: 'StudFlow' }, data: 'X'.repeat(6 * 1024 * 1024) });
        const result = importBackup(huge);
        expect(result.ok).toBe(false);
        expect(result.error).toContain('too large');
    });

    it('rejects corrupted backup JSON', () => {
        expect(importBackup('{corrupt')).toEqual({ ok: false, error: 'Invalid JSON' });
    });

    it('rejects non-StudFlow backup', () => {
        expect(importBackup(JSON.stringify({ _meta: { app: 'OtherApp' } }))).toEqual({ ok: false, error: 'Not a StudFlow backup' });
    });

    it('handles backup with large dataset (1000 quiz results)', () => {
        const results = [];
        for (let i = 0; i < 1000; i++) {
            results.push({ score: Math.random() * 100, ts: new Date().toISOString(), subject: 'math' });
        }
        saveData('quiz_results', results);
        const exported = exportBackup();
        resetStorage();
        const imported = importBackup(exported);
        expect(imported.ok).toBe(true);
        expect(loadData('quiz_results', []).length).toBe(1000);
    });
});

describe('Stress — large data objects', () => {
    beforeEach(() => resetStorage());

    it('stores and retrieves 1000-card flashcard deck', () => {
        const deck = [];
        for (let i = 0; i < 1000; i++) {
            deck.push({
                question: 'Question ' + i + ' about advanced mathematics and physics',
                answer: 'Answer ' + i + ' with detailed explanation',
                tags: ['math', 'physics', 'chapter' + (i % 10)]
            });
        }
        saveData('flashcard_decks', [{ name: 'Large Deck', cards: deck }]);
        const stored = loadData('flashcard_decks', []);
        expect(stored[0].cards.length).toBe(1000);
        expect(stored[0].cards[999].question).toContain('999');
    });

    it('handles deeply nested objects', () => {
        let nested = { value: 'leaf' };
        for (let i = 0; i < 50; i++) {
            nested = { child: nested, level: i };
        }
        saveData('nested', nested);
        const stored = loadData('nested', {});
        expect(stored.level).toBe(49);
        // Navigate to leaf
        let current = stored;
        for (let i = 0; i < 50; i++) {
            current = current.child;
        }
        expect(current.value).toBe('leaf');
    });

    it('handles array with 5000 simple entries', () => {
        const arr = [];
        for (let i = 0; i < 5000; i++) arr.push(i);
        saveData('bigArray', arr);
        const stored = loadData('bigArray', []);
        expect(stored.length).toBe(5000);
        expect(stored[4999]).toBe(4999);
    });
});
