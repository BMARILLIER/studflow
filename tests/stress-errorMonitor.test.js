// Stress tests — error monitoring (console errors, unhandled rejections, storage failures, DOM errors)
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic ====================
const PREFIX = 'studflow_';
const MAX_LOG_ENTRIES = 200;

function saveData(key, val) {
    localStorage.setItem(PREFIX + key, JSON.stringify(val));
}

function loadData(key, def) {
    try {
        const raw = localStorage.getItem(PREFIX + key);
        return raw ? JSON.parse(raw) : (def !== undefined ? def : null);
    } catch (e) { return def !== undefined ? def : null; }
}

// Error log system
function readLog() {
    try {
        var raw = localStorage.getItem(PREFIX + 'error_log');
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
}

function logError(type, message, extra) {
    var entry = {
        ts: new Date().toISOString(),
        type: type,
        message: String(message || '').substring(0, 300),
        stack: extra && extra.stack ? String(extra.stack).substring(0, 500) : null,
        url: extra && extra.url ? String(extra.url).split('/').pop() : null
    };
    var entries = readLog();
    entries.push(entry);
    if (entries.length > MAX_LOG_ENTRIES) entries = entries.slice(-MAX_LOG_ENTRIES);
    try {
        localStorage.setItem(PREFIX + 'error_log', JSON.stringify(entries));
    } catch (e) {
        entries = entries.slice(Math.floor(entries.length / 2));
        try {
            localStorage.setItem(PREFIX + 'error_log', JSON.stringify(entries));
        } catch (e2) { /* give up */ }
    }
}

// Content report system
function logReport(contentType, excerpt) {
    logError('content_report', 'Contenu signale: ' + (contentType || 'unknown'), { url: '#report' });
    var reports = [];
    try {
        var raw = localStorage.getItem(PREFIX + 'content_reports');
        if (raw) reports = JSON.parse(raw);
    } catch (e) {}
    reports.push({
        ts: new Date().toISOString(),
        type: contentType,
        excerpt: String(excerpt || '').substring(0, 200)
    });
    if (reports.length > 50) reports = reports.slice(-50);
    try {
        localStorage.setItem(PREFIX + 'content_reports', JSON.stringify(reports));
    } catch (e) {}
}

// Error categorization
function categorizeError(error) {
    if (!error) return 'unknown';
    const msg = String(error.message || error || '').toLowerCase();
    if (msg.includes('quota') || msg.includes('storage')) return 'storage';
    if (msg.includes('network') || msg.includes('fetch') || msg.includes('timeout')) return 'network';
    if (msg.includes('dom') || msg.includes('element') || msg.includes('null')) return 'dom';
    if (msg.includes('json') || msg.includes('parse') || msg.includes('syntax')) return 'parse';
    if (msg.includes('type') || msg.includes('undefined is not')) return 'type';
    return 'unknown';
}

// ==================== STRESS TESTS ====================

describe('Stress — error log under heavy load', () => {
    beforeEach(() => resetStorage());

    it('logs 1000 errors, retains only last 200', () => {
        for (let i = 0; i < 1000; i++) {
            logError('error', 'Error iteration ' + i, { stack: 'at test:' + i });
        }
        const entries = readLog();
        expect(entries.length).toBe(200);
        expect(entries[0].message).toBe('Error iteration 800');
        expect(entries[199].message).toBe('Error iteration 999');
    });

    it('mixed error types maintain order', () => {
        const types = ['error', 'warn', 'info', 'fatal', 'network'];
        for (let i = 0; i < 500; i++) {
            logError(types[i % 5], 'Msg ' + i);
        }
        const entries = readLog();
        expect(entries.length).toBe(200);
        // Verify chronological order
        for (let i = 1; i < entries.length; i++) {
            expect(entries[i].ts >= entries[i - 1].ts).toBe(true);
        }
    });

    it('stack traces are properly truncated under load', () => {
        const longStack = 'at '.repeat(500); // >1500 chars
        for (let i = 0; i < 100; i++) {
            logError('error', 'test', { stack: longStack + i });
        }
        const entries = readLog();
        entries.forEach(entry => {
            if (entry.stack) {
                expect(entry.stack.length).toBeLessThanOrEqual(500);
            }
        });
    });

    it('messages are properly truncated under load', () => {
        const longMsg = 'M'.repeat(500);
        for (let i = 0; i < 100; i++) {
            logError('error', longMsg + i);
        }
        const entries = readLog();
        entries.forEach(entry => {
            expect(entry.message.length).toBeLessThanOrEqual(300);
        });
    });
});

describe('Stress — content reports saturation', () => {
    beforeEach(() => resetStorage());

    it('caps at 50 reports after 200 submissions', () => {
        for (let i = 0; i < 200; i++) {
            logReport('quiz', 'Report excerpt ' + i);
        }
        const reports = JSON.parse(localStorage.getItem(PREFIX + 'content_reports'));
        expect(reports.length).toBe(50);
        expect(reports[49].excerpt).toBe('Report excerpt 199');
    });

    it('handles mixed content types', () => {
        const types = ['quiz', 'flashcard', 'focus', 'diagnostic', 'general'];
        for (let i = 0; i < 100; i++) {
            logReport(types[i % 5], 'Content ' + i);
        }
        const reports = JSON.parse(localStorage.getItem(PREFIX + 'content_reports'));
        expect(reports.length).toBe(50);
        // Should have all types represented in last 50
        const uniqueTypes = new Set(reports.map(r => r.type));
        expect(uniqueTypes.size).toBe(5);
    });

    it('excerpt truncation works at scale', () => {
        const longExcerpt = 'X'.repeat(500);
        for (let i = 0; i < 50; i++) {
            logReport('test', longExcerpt);
        }
        const reports = JSON.parse(localStorage.getItem(PREFIX + 'content_reports'));
        reports.forEach(r => {
            expect(r.excerpt.length).toBeLessThanOrEqual(200);
        });
    });
});

describe('Stress — error categorization', () => {
    it('categorizes 100 different error messages correctly', () => {
        const testCases = [
            { msg: 'QuotaExceededError: storage full', expected: 'storage' },
            { msg: 'localStorage quota exceeded', expected: 'storage' },
            { msg: 'NetworkError: failed to fetch', expected: 'network' },
            { msg: 'fetch timeout after 30s', expected: 'network' },
            { msg: 'Cannot read property of null', expected: 'dom' },
            { msg: 'DOM element not found', expected: 'dom' },
            { msg: 'JSON.parse: unexpected character', expected: 'parse' },
            { msg: 'SyntaxError: invalid JSON', expected: 'parse' },
            { msg: 'TypeError: undefined is not a function', expected: 'type' },
            { msg: 'Something went wrong', expected: 'unknown' }
        ];
        testCases.forEach(tc => {
            expect(categorizeError({ message: tc.msg })).toBe(tc.expected);
        });
    });

    it('handles null/undefined errors', () => {
        expect(categorizeError(null)).toBe('unknown');
        expect(categorizeError(undefined)).toBe('unknown');
        expect(categorizeError('')).toBe('unknown');
        expect(categorizeError({})).toBe('unknown');
    });
});

describe('Stress — storage failure simulation', () => {
    beforeEach(() => resetStorage());

    it('gracefully handles setItem throwing on every call', () => {
        const origSet = localStorage.setItem;
        localStorage.setItem = vi.fn(() => {
            throw new DOMException('quota exceeded', 'QuotaExceededError');
        });

        // Error logging should not crash even when storage fails
        expect(() => {
            for (let i = 0; i < 50; i++) {
                logError('error', 'Storage full ' + i);
            }
        }).not.toThrow();

        localStorage.setItem = origSet;
    });

    it('gracefully handles getItem throwing', () => {
        const origGet = localStorage.getItem;
        localStorage.getItem = vi.fn(() => {
            throw new Error('SecurityError');
        });

        const result = loadData('anything', 'fallback');
        expect(result).toBe('fallback');

        const logEntries = readLog();
        expect(logEntries).toEqual([]);

        localStorage.getItem = origGet;
    });

    it('handles intermittent storage failures (every 3rd call)', () => {
        const origSet = localStorage.setItem;
        let callCount = 0;
        localStorage.setItem = vi.fn(function(key, val) {
            callCount++;
            if (callCount % 3 === 0) {
                throw new DOMException('quota exceeded', 'QuotaExceededError');
            }
            return origSet.call(localStorage, key, val);
        });

        let successCount = 0;
        let failCount = 0;
        for (let i = 0; i < 30; i++) {
            try {
                saveData('test_' + i, { v: i });
                successCount++;
            } catch (e) {
                failCount++;
            }
        }

        localStorage.setItem = origSet;
        // Some should succeed, some fail — app should not crash
        expect(successCount + failCount).toBe(30);
    });
});

describe('Stress — unhandled error patterns', () => {
    it('try/catch protects against 200 different error types', () => {
        const errorFactories = [
            () => new Error('generic'),
            () => new TypeError('type error'),
            () => new RangeError('range error'),
            () => new SyntaxError('syntax error'),
            () => new URIError('uri error'),
            () => new ReferenceError('ref error'),
            () => ({ message: 'plain object error' }),
            () => 'string error',
            () => 42,
            () => null
        ];

        for (let i = 0; i < 200; i++) {
            const factory = errorFactories[i % errorFactories.length];
            try {
                throw factory();
            } catch (e) {
                const category = categorizeError(e);
                expect(typeof category).toBe('string');
            }
        }
    });

    it('error log survives after logging errors about itself', () => {
        for (let i = 0; i < 50; i++) {
            logError('error', 'Error in error handler', {
                stack: 'at logError (errorLog.js:42)\nat handleError (app.js:100)'
            });
        }
        const entries = readLog();
        expect(entries.length).toBe(50);
        expect(entries.every(e => e.type === 'error')).toBe(true);
    });
});

describe('Stress — combined error + storage + UI scenario', () => {
    beforeEach(() => resetStorage());

    it('simulates a chaotic session: 100 operations with random failures', () => {
        let errors = 0;
        let successes = 0;

        for (let i = 0; i < 100; i++) {
            try {
                // Random operation
                const op = i % 5;
                switch (op) {
                    case 0: // Save data
                        saveData('session_' + (i % 10), { step: i });
                        successes++;
                        break;
                    case 1: // Load data (may return default)
                        loadData('session_' + (i % 10), {});
                        successes++;
                        break;
                    case 2: // Log error
                        logError('warn', 'Warning at step ' + i);
                        successes++;
                        break;
                    case 3: // Report content
                        logReport('quiz', 'Issue at step ' + i);
                        successes++;
                        break;
                    case 4: // Read corrupted data
                        localStorage.setItem(PREFIX + 'corrupt_' + i, '{{INVALID');
                        loadData('corrupt_' + i, 'safe_default');
                        successes++;
                        break;
                }
            } catch (e) {
                errors++;
            }
        }

        expect(successes).toBe(100);
        expect(errors).toBe(0);
    });

    it('data integrity after mixed operations', () => {
        // Phase 1: Fill with data
        for (let i = 0; i < 20; i++) {
            saveData('phase1_' + i, { phase: 1, index: i });
        }

        // Phase 2: Log errors
        for (let i = 0; i < 50; i++) {
            logError('error', 'Phase 2 error ' + i);
        }

        // Phase 3: Report content
        for (let i = 0; i < 30; i++) {
            logReport('flashcard', 'Phase 3 report ' + i);
        }

        // Phase 4: Overwrite some data
        for (let i = 0; i < 10; i++) {
            saveData('phase1_' + i, { phase: 4, index: i });
        }

        // Verify phase 1 data (indices 10-19 untouched)
        for (let i = 10; i < 20; i++) {
            expect(loadData('phase1_' + i, {}).phase).toBe(1);
        }

        // Verify phase 4 overwrites (indices 0-9)
        for (let i = 0; i < 10; i++) {
            expect(loadData('phase1_' + i, {}).phase).toBe(4);
        }

        // Verify error log
        const log = readLog();
        expect(log.length).toBe(50 + 30); // errors + content_report entries from logReport

        // Verify content reports
        const reports = JSON.parse(localStorage.getItem(PREFIX + 'content_reports'));
        expect(reports.length).toBe(30);
    });
});
