import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

describe('storage.js — quota recovery', () => {

    beforeEach(() => {
        resetStorage();
        // Re-import fresh module each test
    });

    it('isQuotaError detects QuotaExceededError by name', async () => {
        await import('../js/modules/storage.js');
        const storage = window.StudFlow.storage;
        const err = new DOMException('quota exceeded', 'QuotaExceededError');
        expect(storage._isQuotaError(err)).toBe(true);
    });

    it('isQuotaError detects legacy Safari code 22', async () => {
        await import('../js/modules/storage.js');
        const storage = window.StudFlow.storage;
        const err = { name: 'SomeError', code: 22 };
        expect(storage._isQuotaError(err)).toBe(true);
    });

    it('isQuotaError returns false for other errors', async () => {
        await import('../js/modules/storage.js');
        const storage = window.StudFlow.storage;
        expect(storage._isQuotaError(new Error('timeout'))).toBe(false);
        expect(storage._isQuotaError(null)).toBe(false);
        expect(storage._isQuotaError(undefined)).toBe(false);
    });

    it('emergencyCleanup removes purgeable keys', async () => {
        // Pre-populate purgeable data
        localStorage.setItem('studflow_error_log', JSON.stringify([{ts:'a'},{ts:'b'},{ts:'c'},{ts:'d'}]));
        localStorage.setItem('studflow_analytics_queue', JSON.stringify([1,2,3]));
        localStorage.setItem('studflow_content_reports', JSON.stringify([{ts:'x'}]));
        // Also store a critical key that should NOT be purged
        localStorage.setItem('studflow_profile', JSON.stringify({name:'test'}));

        await import('../js/modules/storage.js');
        const storage = window.StudFlow.storage;

        const freed = storage._emergencyCleanup();

        expect(freed).toBeGreaterThan(0);
        expect(localStorage.getItem('studflow_analytics_queue')).toBeNull();
        expect(localStorage.getItem('studflow_content_reports')).toBeNull();
        // Profile must survive
        expect(localStorage.getItem('studflow_profile')).not.toBeNull();
    });

    it('saveData retries after quota cleanup', async () => {
        await import('../js/modules/storage.js');
        const storage = window.StudFlow.storage;

        // Make setItem fail once with quota error, then succeed
        let callCount = 0;
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = vi.fn(function(key, val) {
            callCount++;
            if (callCount === 1) {
                const err = new DOMException('quota exceeded', 'QuotaExceededError');
                throw err;
            }
            return originalSetItem.call(localStorage, key, val);
        });

        // Should not throw — retry succeeds
        storage.saveData('testKey', { hello: 'world' });

        // Verify the data was eventually saved (2nd call succeeds)
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    it('saveData shows toast on quota cleanup', async () => {
        await import('../js/modules/storage.js');
        const storage = window.StudFlow.storage;

        let callCount = 0;
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = vi.fn(function(key, val) {
            callCount++;
            if (callCount === 1) {
                throw new DOMException('quota exceeded', 'QuotaExceededError');
            }
            return originalSetItem.call(localStorage, key, val);
        });

        const toastSpy = window.StudFlow.gamification.showToast;

        storage.saveData('testKey', 'data');

        expect(toastSpy).toHaveBeenCalledWith(
            expect.stringContaining('nettoyage'),
            'warning',
            '⚠️'
        );
    });
});
