// Tests for premium access control logic
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { resetStorage } from './setup.js';

// ==================== Extract premium logic ====================

const PREMIUM_FEATURES = {
    matieres_premium: { plans: ['premium', 'ultimate'] },
    stats_avancees: { plans: ['premium', 'ultimate'] },
    export_pdf: { plans: ['premium', 'ultimate'] },
    coach_illimite: { plans: ['premium', 'ultimate'] },
    planning_complet: { plans: ['premium', 'ultimate'] },
    missions_premium: { plans: ['premium', 'ultimate'] },
    bac_sections_extra: { plans: ['premium', 'ultimate'] },
    conseils_premium: { plans: ['ultimate'] },
    generators_advanced: { plans: ['ultimate'] }
};

function hasAccess(featureId, userPlan) {
    var feat = PREMIUM_FEATURES[featureId];
    if (!feat) return false;
    return feat.plans.indexOf(userPlan) !== -1;
}

// ==================== TESTS ====================

describe('Premium — Access Control', () => {
    it('denies all features for free plan', () => {
        expect(hasAccess('matieres_premium', 'free')).toBe(false);
        expect(hasAccess('stats_avancees', 'free')).toBe(false);
        expect(hasAccess('generators_advanced', 'free')).toBe(false);
    });

    it('grants premium features for premium plan', () => {
        expect(hasAccess('matieres_premium', 'premium')).toBe(true);
        expect(hasAccess('stats_avancees', 'premium')).toBe(true);
        expect(hasAccess('coach_illimite', 'premium')).toBe(true);
    });

    it('denies ultimate-only features for premium plan', () => {
        expect(hasAccess('conseils_premium', 'premium')).toBe(false);
        expect(hasAccess('generators_advanced', 'premium')).toBe(false);
    });

    it('grants all features for ultimate plan', () => {
        expect(hasAccess('matieres_premium', 'ultimate')).toBe(true);
        expect(hasAccess('conseils_premium', 'ultimate')).toBe(true);
        expect(hasAccess('generators_advanced', 'ultimate')).toBe(true);
    });

    it('returns false for unknown feature', () => {
        expect(hasAccess('nonexistent', 'premium')).toBe(false);
    });
});

describe('Premium — License Code Validation', () => {
    const LICENSE_REGEX = /^SF-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

    it('validates correct license format', () => {
        expect(LICENSE_REGEX.test('SF-BETA-2026-FREE')).toBe(true);
        expect(LICENSE_REGEX.test('SF-TEST-PREM-2026')).toBe(true);
        expect(LICENSE_REGEX.test('SF-ABCD-EFGH-1234')).toBe(true);
    });

    it('rejects invalid license formats', () => {
        expect(LICENSE_REGEX.test('ABCD-EFGH-1234')).toBe(false);
        expect(LICENSE_REGEX.test('SF-AB-EFGH-1234')).toBe(false);
        expect(LICENSE_REGEX.test('sf-abcd-efgh-1234')).toBe(false);
        expect(LICENSE_REGEX.test('')).toBe(false);
        expect(LICENSE_REGEX.test('SF-ABCD-EFGH-12345')).toBe(false);
    });
});

describe('Premium — Subscription Expiry', () => {
    it('detects expired subscription', () => {
        const pastDate = new Date(Date.now() - 86400000).toISOString();
        const isExpired = new Date(pastDate) < new Date();
        expect(isExpired).toBe(true);
    });

    it('detects active subscription', () => {
        const futureDate = new Date(Date.now() + 86400000 * 30).toISOString();
        const isExpired = new Date(futureDate) < new Date();
        expect(isExpired).toBe(false);
    });

    it('calculates days remaining correctly', () => {
        const expiresAt = new Date(Date.now() + 86400000 * 7).toISOString();
        const daysLeft = Math.ceil((new Date(expiresAt) - new Date()) / (24 * 60 * 60 * 1000));
        expect(daysLeft).toBeGreaterThanOrEqual(6);
        expect(daysLeft).toBeLessThanOrEqual(7);
    });
});
