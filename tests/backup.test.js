// Tests for backup.js — export/import data integrity
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extracted logic for testing ====================
const EXPORT_KEYS = [
    'studflow_app_state', 'studflow_profile', 'studflow_gamification',
    'studflow_onboarding', 'studflow_dailyDashboard', 'studflow_dailyGoal',
    'studflow_missions', 'studflow_timeline', 'studflow_focusStats',
    'studflow_quizGenHistory', 'studflow_spacedRepetition', 'studflow_planBac',
    'studflow_subscription', 'studflow_notif_enabled', 'studflow_tour_done',
    'studflow_quiz_count', 'studflow_feedback_prompted', 'studflow_last_active',
    'studflow_activeSubject'
];

const SENSITIVE_KEYS = ['studflow_groq_api_key', 'studflow_stripeConfig'];

function buildExportData() {
    var data = {
        _meta: {
            app: 'StudFlow',
            version: 1,
            date: new Date().toISOString(),
            platform: 'test'
        }
    };

    for (var i = 0; i < EXPORT_KEYS.length; i++) {
        var key = EXPORT_KEYS[i];
        var val = localStorage.getItem(key);
        if (val !== null) {
            data[key] = val;
        }
    }

    for (var j = 0; j < localStorage.length; j++) {
        var k = localStorage.key(j);
        if (k && k.indexOf('studflow_') === 0 && !data[k]) {
            if (SENSITIVE_KEYS.indexOf(k) === -1) {
                data[k] = localStorage.getItem(k);
            }
        }
    }

    return data;
}

function validateImportData(jsonString) {
    if (jsonString.length > 5 * 1024 * 1024) return { valid: false, reason: 'too_large' };

    var data;
    try {
        data = JSON.parse(jsonString);
    } catch (e) {
        return { valid: false, reason: 'invalid_json' };
    }

    if (!data._meta || data._meta.app !== 'StudFlow') {
        return { valid: false, reason: 'invalid_format' };
    }

    return { valid: true, data: data };
}

function importKeys(data) {
    var count = 0;
    for (var key in data) {
        if (key === '_meta') continue;
        if (key.indexOf('studflow_') === 0 && SENSITIVE_KEYS.indexOf(key) === -1) {
            localStorage.setItem(key, data[key]);
            count++;
        }
    }
    return count;
}

// ==================== TESTS ====================

describe('backup.js — export', () => {
    beforeEach(() => resetStorage());

    it('includes _meta with correct app name', () => {
        const data = buildExportData();
        expect(data._meta.app).toBe('StudFlow');
        expect(data._meta.version).toBe(1);
        expect(data._meta.date).toBeTruthy();
    });

    it('exports known keys from localStorage', () => {
        localStorage.setItem('studflow_profile', JSON.stringify({ mainProfile: 'anxieux' }));
        localStorage.setItem('studflow_gamification', JSON.stringify({ xp: 150, level: 3 }));
        const data = buildExportData();
        expect(data['studflow_profile']).toBeTruthy();
        expect(data['studflow_gamification']).toBeTruthy();
    });

    it('exports custom studflow_ keys not in EXPORT_KEYS', () => {
        localStorage.setItem('studflow_custom_data', 'my_data');
        const data = buildExportData();
        expect(data['studflow_custom_data']).toBe('my_data');
    });

    it('excludes sensitive keys (API keys, Stripe)', () => {
        localStorage.setItem('studflow_groq_api_key', 'sk-secret-key-123');
        localStorage.setItem('studflow_stripeConfig', JSON.stringify({ mode: 'live', publishableKey: 'pk_live_xxx' }));
        const data = buildExportData();
        expect(data['studflow_groq_api_key']).toBeUndefined();
        expect(data['studflow_stripeConfig']).toBeUndefined();
    });

    it('excludes non-studflow keys', () => {
        localStorage.setItem('other_app_data', 'foreign');
        const data = buildExportData();
        expect(data['other_app_data']).toBeUndefined();
    });

    it('handles empty localStorage', () => {
        const data = buildExportData();
        expect(data._meta.app).toBe('StudFlow');
        // Only _meta key should exist
        const keys = Object.keys(data).filter(k => k !== '_meta');
        expect(keys.length).toBe(0);
    });
});

describe('backup.js — import validation', () => {
    it('rejects oversized files (>5MB)', () => {
        const bigJson = '{"_meta":{"app":"StudFlow"},' + '"data":"' + 'X'.repeat(6 * 1024 * 1024) + '"}';
        const result = validateImportData(bigJson);
        expect(result.valid).toBe(false);
        expect(result.reason).toBe('too_large');
    });

    it('rejects invalid JSON', () => {
        const result = validateImportData('{not valid json!!!');
        expect(result.valid).toBe(false);
        expect(result.reason).toBe('invalid_json');
    });

    it('rejects files without _meta', () => {
        const result = validateImportData(JSON.stringify({ data: 'something' }));
        expect(result.valid).toBe(false);
        expect(result.reason).toBe('invalid_format');
    });

    it('rejects files with wrong app name', () => {
        const result = validateImportData(JSON.stringify({ _meta: { app: 'OtherApp' } }));
        expect(result.valid).toBe(false);
        expect(result.reason).toBe('invalid_format');
    });

    it('accepts valid StudFlow backup', () => {
        const valid = JSON.stringify({
            _meta: { app: 'StudFlow', version: 1, date: '2024-01-01' },
            studflow_profile: '{"mainProfile":"anxieux"}'
        });
        const result = validateImportData(valid);
        expect(result.valid).toBe(true);
        expect(result.data._meta.app).toBe('StudFlow');
    });
});

describe('backup.js — import/export round-trip', () => {
    beforeEach(() => resetStorage());

    it('restores exported data exactly', () => {
        // Set up state
        localStorage.setItem('studflow_profile', JSON.stringify({ mainProfile: 'confiant' }));
        localStorage.setItem('studflow_gamification', JSON.stringify({ xp: 250, level: 4 }));
        localStorage.setItem('studflow_onboarding', JSON.stringify({ completed: true }));

        // Export
        const exported = buildExportData();
        const json = JSON.stringify(exported);

        // Clear and re-import
        localStorage.clear();
        const parsed = JSON.parse(json);
        const count = importKeys(parsed);

        expect(count).toBe(3);
        expect(localStorage.getItem('studflow_profile')).toBe(JSON.stringify({ mainProfile: 'confiant' }));
        expect(JSON.parse(localStorage.getItem('studflow_gamification')).xp).toBe(250);
    });

    it('import does not restore sensitive keys even if present', () => {
        const maliciousBackup = {
            _meta: { app: 'StudFlow', version: 1 },
            studflow_profile: '{"mainProfile":"test"}',
            studflow_groq_api_key: 'stolen-key',
            studflow_stripeConfig: '{"mode":"live"}'
        };

        const count = importKeys(maliciousBackup);
        expect(count).toBe(1); // only profile
        expect(localStorage.getItem('studflow_groq_api_key')).toBeNull();
        expect(localStorage.getItem('studflow_stripeConfig')).toBeNull();
    });

    it('import ignores non-studflow keys', () => {
        const backup = {
            _meta: { app: 'StudFlow', version: 1 },
            studflow_profile: '{"test":true}',
            malicious_key: 'should_not_import',
            '__proto__': 'should_not_import'
        };

        const count = importKeys(backup);
        expect(count).toBe(1);
        expect(localStorage.getItem('malicious_key')).toBeNull();
    });
});
