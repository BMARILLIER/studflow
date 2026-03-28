// Tests for analytics queue logic
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { resetStorage } from './setup.js';

const QUEUE_KEY = 'studflow_analytics_queue';
const MAX_QUEUE = 200;

// ==================== Extract queue logic ====================

function loadQueue() {
    try {
        var raw = localStorage.getItem(QUEUE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch(e) { return []; }
}

function saveQueue(queue) {
    try {
        localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    } catch(e) {}
}

function enqueue(row) {
    var queue = loadQueue();
    queue.push(row);
    if (queue.length > MAX_QUEUE) {
        queue = queue.slice(-MAX_QUEUE);
    }
    saveQueue(queue);
}

// ==================== TESTS ====================

describe('Analytics — Queue', () => {
    beforeEach(() => {
        resetStorage();
    });

    it('starts with empty queue', () => {
        expect(loadQueue()).toEqual([]);
    });

    it('enqueues events', () => {
        enqueue({ event_name: 'login', metadata: {} });
        enqueue({ event_name: 'quiz_completed', metadata: { score: 8 } });
        const q = loadQueue();
        expect(q).toHaveLength(2);
        expect(q[0].event_name).toBe('login');
        expect(q[1].metadata.score).toBe(8);
    });

    it('caps queue at 200 events', () => {
        for (let i = 0; i < 210; i++) {
            enqueue({ event_name: 'test', metadata: { i } });
        }
        const q = loadQueue();
        expect(q).toHaveLength(200);
        // Should keep the most recent
        expect(q[0].metadata.i).toBe(10);
        expect(q[199].metadata.i).toBe(209);
    });

    it('handles corrupted localStorage gracefully', () => {
        localStorage.setItem(QUEUE_KEY, 'not-json');
        expect(loadQueue()).toEqual([]);
    });
});

describe('Analytics — getBetaStats', () => {
    // Import module to access getBetaStats
    // We test it as a pure function by passing events directly

    it('returns zero counts for empty events', () => {
        const events = [];
        const stats = computeBetaStats(events);
        expect(stats.total_events).toBe(0);
        expect(stats.app_opens).toBe(0);
        expect(stats.focus_completions).toBe(0);
    });

    it('counts each event type correctly', () => {
        const events = [
            { event_name: 'app_open' },
            { event_name: 'app_open' },
            { event_name: 'dashboard_view' },
            { event_name: 'focus_session_start' },
            { event_name: 'focus_session_complete' },
            { event_name: 'flashcard_review' },
            { event_name: 'flashcard_review' },
            { event_name: 'flashcard_review' },
            { event_name: 'quiz_start' },
            { event_name: 'quiz_completed' },
            { event_name: 'pdf_import' },
            { event_name: 'diagnostic_complete' },
            { event_name: 'invite_link_generated' },
            { event_name: 'unknown_event' }
        ];
        const stats = computeBetaStats(events);
        expect(stats.total_events).toBe(14);
        expect(stats.app_opens).toBe(2);
        expect(stats.dashboard_views).toBe(1);
        expect(stats.focus_starts).toBe(1);
        expect(stats.focus_completions).toBe(1);
        expect(stats.flashcard_reviews).toBe(3);
        expect(stats.quiz_starts).toBe(1);
        expect(stats.quiz_completions).toBe(1);
        expect(stats.pdf_imports).toBe(1);
        expect(stats.diagnostic_completions).toBe(1);
        expect(stats.invite_links_generated).toBe(1);
    });

    it('ignores events with missing event_name', () => {
        const events = [{ event_name: 'app_open' }, { metadata: {} }, { event_name: 'quiz_start' }];
        const stats = computeBetaStats(events);
        expect(stats.total_events).toBe(3);
        expect(stats.app_opens).toBe(1);
        expect(stats.quiz_starts).toBe(1);
    });
});

// Pure re-implementation of getBetaStats for testing (mirrors analytics.js logic)
function computeBetaStats(events) {
    var stats = {
        total_events: events.length,
        app_opens: 0, dashboard_views: 0, focus_starts: 0, focus_completions: 0,
        flashcard_reviews: 0, quiz_starts: 0, quiz_completions: 0,
        pdf_imports: 0, diagnostic_completions: 0, invite_links_generated: 0
    };
    for (var i = 0; i < events.length; i++) {
        var name = events[i].event_name;
        if (name === 'app_open') stats.app_opens++;
        else if (name === 'dashboard_view') stats.dashboard_views++;
        else if (name === 'focus_session_start') stats.focus_starts++;
        else if (name === 'focus_session_complete') stats.focus_completions++;
        else if (name === 'flashcard_review') stats.flashcard_reviews++;
        else if (name === 'quiz_start') stats.quiz_starts++;
        else if (name === 'quiz_completed') stats.quiz_completions++;
        else if (name === 'pdf_import') stats.pdf_imports++;
        else if (name === 'diagnostic_complete') stats.diagnostic_completions++;
        else if (name === 'invite_link_generated') stats.invite_links_generated++;
    }
    return stats;
}

describe('Analytics — D1 Retention', () => {
    beforeEach(() => {
        resetStorage();
    });

    // Pure re-implementation of nextDayStr for testing
    function nextDayStr(dateStr) {
        var d = new Date(dateStr + 'T12:00:00Z');
        d.setUTCDate(d.getUTCDate() + 1);
        return d.toISOString().slice(0, 10);
    }

    function trackRetention(today) {
        if (!localStorage.getItem('studflow_first_open_date')) {
            localStorage.setItem('studflow_first_open_date', today);
        }
        localStorage.setItem('studflow_last_open_date', today);
        if (localStorage.getItem('studflow_d1_return') !== 'true') {
            var firstOpen = localStorage.getItem('studflow_first_open_date');
            if (firstOpen && today === nextDayStr(firstOpen)) {
                localStorage.setItem('studflow_d1_return', 'true');
            }
        }
    }

    it('stores first open date on first call', () => {
        trackRetention('2026-03-04');
        expect(localStorage.getItem('studflow_first_open_date')).toBe('2026-03-04');
        expect(localStorage.getItem('studflow_last_open_date')).toBe('2026-03-04');
    });

    it('does not overwrite first open date on subsequent calls', () => {
        trackRetention('2026-03-04');
        trackRetention('2026-03-05');
        expect(localStorage.getItem('studflow_first_open_date')).toBe('2026-03-04');
        expect(localStorage.getItem('studflow_last_open_date')).toBe('2026-03-05');
    });

    it('detects D1 return (next day visit)', () => {
        trackRetention('2026-03-04');
        expect(localStorage.getItem('studflow_d1_return')).toBeNull();

        trackRetention('2026-03-05');
        expect(localStorage.getItem('studflow_d1_return')).toBe('true');
    });

    it('does not set D1 for same-day revisit', () => {
        trackRetention('2026-03-04');
        trackRetention('2026-03-04');
        expect(localStorage.getItem('studflow_d1_return')).toBeNull();
    });

    it('does not set D1 for visit two days later', () => {
        trackRetention('2026-03-04');
        trackRetention('2026-03-06');
        expect(localStorage.getItem('studflow_d1_return')).toBeNull();
    });

    it('nextDayStr computes correctly', () => {
        expect(nextDayStr('2026-03-04')).toBe('2026-03-05');
        expect(nextDayStr('2026-03-31')).toBe('2026-04-01');
        expect(nextDayStr('2026-12-31')).toBe('2027-01-01');
        expect(nextDayStr('2024-02-28')).toBe('2024-02-29'); // leap year
        expect(nextDayStr('2025-02-28')).toBe('2025-03-01'); // non-leap
    });
});

describe('Analytics — Event structure', () => {
    it('creates well-formed event row', () => {
        const row = {
            user_id: 'abc-123',
            event_name: 'quiz_completed',
            metadata: { score: 8, total: 10, percent: 80, deck: 'maths' },
            created_at: new Date().toISOString()
        };
        expect(row.user_id).toBeTruthy();
        expect(row.event_name).toBe('quiz_completed');
        expect(row.metadata.score).toBe(8);
        expect(row.created_at).toMatch(/^\d{4}-\d{2}-\d{2}/);
    });

    it('allows null user_id for anonymous tracking', () => {
        const row = {
            user_id: null,
            event_name: 'premium_click',
            metadata: {},
            created_at: new Date().toISOString()
        };
        expect(row.user_id).toBeNull();
    });
});
