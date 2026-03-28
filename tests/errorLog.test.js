// Tests for errorLog.js — rolling log, corruption handling, reports
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted pure logic ====================
const STORAGE_KEY = 'studflow_error_log';
const MAX_ENTRIES = 200;

// Ensure navigator.userAgent exists for tests
if (!navigator.userAgent) {
    Object.defineProperty(navigator, 'userAgent', { value: 'vitest-agent', writable: true });
}

function readLog() {
    try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) { /* corrupted — reset */ }
    return [];
}

function log(type, message, extra) {
    var ua = '';
    try { ua = (navigator.userAgent || '').substring(0, 120); } catch(e) {}
    var entry = {
        ts: new Date().toISOString(),
        type: type,
        message: String(message || '').substring(0, 300),
        stack: extra && extra.stack ? String(extra.stack).substring(0, 500) : null,
        url: extra && extra.url ? String(extra.url).split('/').pop() : null,
        ua: ua
    };

    var entries = readLog();
    entries.push(entry);

    if (entries.length > MAX_ENTRIES) {
        entries = entries.slice(-MAX_ENTRIES);
    }

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
        entries = entries.slice(Math.floor(entries.length / 2));
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
        } catch (e2) { /* give up */ }
    }
}

function logReport(contentType, excerpt) {
    log('content_report', 'Contenu signale: ' + (contentType || 'unknown'), {
        url: '#test'
    });

    var reports = [];
    try {
        var raw = localStorage.getItem('studflow_content_reports');
        if (raw) reports = JSON.parse(raw);
    } catch (e) { /* ignore */ }

    var rua = '';
    try { rua = (navigator.userAgent || '').substring(0, 120); } catch(e) {}
    reports.push({
        ts: new Date().toISOString(),
        type: contentType,
        excerpt: String(excerpt || '').substring(0, 200),
        url: '#test',
        ua: rua
    });

    if (reports.length > 50) reports = reports.slice(-50);
    try {
        localStorage.setItem('studflow_content_reports', JSON.stringify(reports));
    } catch (e) { /* ignore */ }
}

// ==================== TESTS ====================

describe('errorLog.js — logging', () => {
    beforeEach(() => resetStorage());

    it('logs an entry to localStorage', () => {
        log('error', 'Something broke');
        const entries = readLog();
        expect(entries.length).toBe(1);
        expect(entries[0].type).toBe('error');
        expect(entries[0].message).toBe('Something broke');
        expect(entries[0].ts).toBeTruthy();
    });

    it('appends multiple entries', () => {
        log('error', 'First');
        log('warn', 'Second');
        log('info', 'Third');
        expect(readLog().length).toBe(3);
    });

    it('truncates message to 300 chars', () => {
        const longMsg = 'A'.repeat(500);
        log('error', longMsg);
        const entries = readLog();
        expect(entries[0].message.length).toBe(300);
    });

    it('truncates stack to 500 chars', () => {
        const longStack = 'at '.repeat(200);
        log('error', 'test', { stack: longStack });
        const entries = readLog();
        expect(entries[0].stack.length).toBe(500);
    });

    it('handles null message gracefully', () => {
        log('error', null);
        const entries = readLog();
        // null || '' → '', String('') → ''
        expect(entries[0].message).toBe('');
    });

    it('handles undefined extra gracefully', () => {
        log('error', 'test', undefined);
        const entries = readLog();
        expect(entries[0].stack).toBeNull();
        expect(entries[0].url).toBeNull();
    });
});

describe('errorLog.js — rolling limit', () => {
    beforeEach(() => resetStorage());

    it('caps at MAX_ENTRIES (200)', () => {
        // Pre-fill with 200 entries
        const existing = [];
        for (let i = 0; i < 200; i++) {
            existing.push({ ts: new Date().toISOString(), type: 'old', message: 'entry-' + i });
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

        // Add one more
        log('new', 'overflow');
        const entries = readLog();
        expect(entries.length).toBe(200);
        // Oldest entry should be gone, newest should be last
        expect(entries[entries.length - 1].type).toBe('new');
        expect(entries[0].message).toBe('entry-1'); // entry-0 was dropped
    });

    it('drops oldest half when localStorage is full', () => {
        // Fill with some entries
        const existing = [];
        for (let i = 0; i < 10; i++) {
            existing.push({ ts: '2024-01-01', type: 'old', message: 'entry-' + i });
        }
        const origSet = localStorage.setItem;
        // Restore original first to store existing
        origSet.call(localStorage, STORAGE_KEY, JSON.stringify(existing));

        // Make first setItem throw (quota), then succeed
        let callCount = 0;
        localStorage.setItem = vi.fn(function(key, val) {
            callCount++;
            if (key === STORAGE_KEY && callCount === 1) {
                throw new DOMException('quota exceeded', 'QuotaExceededError');
            }
            return origSet.call(localStorage, key, val);
        });

        log('new', 'after-quota');

        // Restore original setItem for subsequent tests
        localStorage.setItem = origSet;

        const entries = readLog();
        // Should have ~6 entries (11 total / 2 = 5 dropped, then stored the remaining)
        expect(entries.length).toBeLessThan(11);
        expect(entries[entries.length - 1].message).toBe('after-quota');
    });
});

describe('errorLog.js — corrupted data recovery', () => {
    beforeEach(() => resetStorage());

    it('returns empty array when log is corrupted JSON', () => {
        localStorage.setItem(STORAGE_KEY, '{invalid json###');
        expect(readLog()).toEqual([]);
    });

    it('returns empty array when log is empty string', () => {
        localStorage.setItem(STORAGE_KEY, '');
        expect(readLog()).toEqual([]);
    });

    it('returns empty array when log key does not exist', () => {
        expect(readLog()).toEqual([]);
    });

    it('recovers by starting fresh after corruption', () => {
        localStorage.setItem(STORAGE_KEY, 'CORRUPT');
        log('error', 'fresh start');
        const entries = readLog();
        expect(entries.length).toBe(1);
        expect(entries[0].message).toBe('fresh start');
    });
});

describe('errorLog.js — content reports', () => {
    beforeEach(() => resetStorage());

    it('logs a content report', () => {
        logReport('quiz', 'Incorrect answer for Q3');
        const raw = localStorage.getItem('studflow_content_reports');
        const reports = JSON.parse(raw);
        expect(reports.length).toBe(1);
        expect(reports[0].type).toBe('quiz');
        expect(reports[0].excerpt).toBe('Incorrect answer for Q3');
    });

    it('truncates excerpt to 200 chars', () => {
        logReport('quiz', 'X'.repeat(300));
        const reports = JSON.parse(localStorage.getItem('studflow_content_reports'));
        expect(reports[0].excerpt.length).toBe(200);
    });

    it('caps reports at 50', () => {
        const existing = [];
        for (let i = 0; i < 50; i++) {
            existing.push({ ts: '2024-01-01', type: 'old', excerpt: 'r-' + i });
        }
        localStorage.setItem('studflow_content_reports', JSON.stringify(existing));

        logReport('new', 'latest');
        const reports = JSON.parse(localStorage.getItem('studflow_content_reports'));
        expect(reports.length).toBe(50);
        expect(reports[reports.length - 1].type).toBe('new');
    });
});
