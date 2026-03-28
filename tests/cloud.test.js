import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// Minimal mock for Supabase client and auth
function setupCloudMocks() {
    window.StudFlow.sb = {
        isAvailable: vi.fn(() => true),
        getClient: vi.fn(() => ({
            from: vi.fn(() => ({
                upsert: vi.fn(() => Promise.resolve({ error: null })),
                select: vi.fn(() => ({
                    eq: vi.fn(() => ({
                        single: vi.fn(() => Promise.resolve({ data: null, error: { code: 'PGRST116' } }))
                    }))
                }))
            }))
        })),
        withTimeout: vi.fn((p) => p),
        URL: 'https://test.supabase.co',
        KEY: 'test-key'
    };
    window.StudFlow.auth = {
        getUser: vi.fn(() => ({ id: 'user-123' }))
    };
}

describe('cloud.js — sync recovery on reconnect', () => {

    beforeEach(() => {
        resetStorage();
        setupCloudMocks();
        // Ensure navigator.onLine is true
        global.navigator.onLine = true;
    });

    it('scheduleRetry disables sync after 3 failures', async () => {
        await import('../js/modules/cloud.js');
        const cloud = window.StudFlow.cloud;

        // Make push fail by returning error
        const mockFrom = vi.fn(() => ({
            upsert: vi.fn(() => Promise.resolve({ error: { message: 'server error' } }))
        }));
        window.StudFlow.sb.getClient = vi.fn(() => ({ from: mockFrom }));

        // Init and mark dirty
        cloud.init();
        cloud.markDirty();

        // Simulate 4 push failures to trigger max retries
        // We'll call pushNow directly and let scheduleRetry increment
        for (let i = 0; i < 4; i++) {
            await cloud.push();
        }

        const state = cloud._getRetryState();
        // After 3+ failures, sync should be disabled
        // Note: exact count depends on internal flow, but disabled should be true
        expect(state.disabled).toBe(true);
    });

    it('online event resets retry state and re-enables sync', async () => {
        await import('../js/modules/cloud.js');
        const cloud = window.StudFlow.cloud;

        // Reset state from previous test (IIFE closure persists)
        cloud.stop();
        cloud.init();

        // Verify clean initial state
        let state = cloud._getRetryState();
        expect(state.retryCount).toBe(0);
        expect(state.disabled).toBe(false);

        // Simulate: exhaust retries by pushing with failing server
        const mockFrom = vi.fn(() => ({
            upsert: vi.fn(() => Promise.resolve({ error: { message: 'fail' } }))
        }));
        window.StudFlow.sb.getClient = vi.fn(() => ({ from: mockFrom }));
        cloud.markDirty();
        for (let i = 0; i < 4; i++) {
            await cloud.push();
        }

        state = cloud._getRetryState();
        expect(state.disabled).toBe(true);

        // Now simulate online event — should reset
        window.dispatchEvent(new Event('online'));

        state = cloud._getRetryState();
        expect(state.retryCount).toBe(0);
        expect(state.disabled).toBe(false);
    });

    it('getSyncStatus returns expected shape', async () => {
        await import('../js/modules/cloud.js');
        const cloud = window.StudFlow.cloud;
        cloud.stop();
        cloud.init();

        const status = cloud.getSyncStatus();
        expect(status).toHaveProperty('lastSyncAt');
        expect(status).toHaveProperty('dirty');
        expect(status).toHaveProperty('syncing');
        expect(status).toHaveProperty('state');
    });

    it('stop resets all state including syncDisabled', async () => {
        await import('../js/modules/cloud.js');
        const cloud = window.StudFlow.cloud;
        cloud.stop();
        cloud.init();
        cloud.stop();

        const state = cloud._getRetryState();
        expect(state.retryCount).toBe(0);
        expect(state.disabled).toBe(false);

        const status = cloud.getSyncStatus();
        expect(status.state).toBe('idle');
        expect(status.dirty).toBe(false);
    });
});
