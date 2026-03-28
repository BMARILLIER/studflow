import { describe, it, expect, beforeEach } from 'vitest';
import { resetStorage } from './setup.js';

// Load the IIFE module (attaches to window.StudFlow.betaGate)
await import('../js/modules/betaGate.js');

const gate = window.StudFlow.betaGate;

describe('betaGate', () => {
    beforeEach(() => {
        resetStorage();
    });

    // ---- validateEmail ----

    describe('validateEmail', () => {
        it('accepts valid emails', () => {
            expect(gate.validateEmail('user@example.com')).toBe(true);
            expect(gate.validateEmail('a.b+tag@sub.domain.co')).toBe(true);
            expect(gate.validateEmail('  test@test.fr  ')).toBe(true);
        });

        it('rejects invalid emails', () => {
            expect(gate.validateEmail('')).toBe(false);
            expect(gate.validateEmail('noatsign')).toBe(false);
            expect(gate.validateEmail('@missing.local')).toBe(false);
            expect(gate.validateEmail('missing@')).toBe(false);
            expect(gate.validateEmail('spaces in@email.com')).toBe(false);
            expect(gate.validateEmail(null)).toBe(false);
            expect(gate.validateEmail(undefined)).toBe(false);
        });
    });

    // ---- parseInviteToken ----

    describe('parseInviteToken', () => {
        it('extracts token from query string', () => {
            expect(gate.parseInviteToken('?invite=ABC123')).toBe('ABC123');
            expect(gate.parseInviteToken('?invite=tok-xyz&other=val')).toBe('tok-xyz');
        });

        it('returns null when no token', () => {
            expect(gate.parseInviteToken('')).toBeNull();
            expect(gate.parseInviteToken('?foo=bar')).toBeNull();
            expect(gate.parseInviteToken(null)).toBeNull();
            expect(gate.parseInviteToken(undefined)).toBeNull();
        });
    });

    // ---- isUnlocked ----

    describe('isUnlocked', () => {
        it('returns false when nothing stored', () => {
            expect(gate.isUnlocked()).toBe(false);
        });

        it('returns true when unlocked flag is set', () => {
            localStorage.setItem('studflow_beta_unlocked', 'true');
            expect(gate.isUnlocked()).toBe(true);
        });

        it('returns false for non-true values', () => {
            localStorage.setItem('studflow_beta_unlocked', 'false');
            expect(gate.isUnlocked()).toBe(false);

            localStorage.setItem('studflow_beta_unlocked', '1');
            expect(gate.isUnlocked()).toBe(false);
        });
    });

    // ---- unlock ----

    describe('unlock', () => {
        it('sets all three localStorage keys', () => {
            gate.unlock('test@example.com', 'TOK123');

            expect(localStorage.setItem).toHaveBeenCalledWith('studflow_beta_unlocked', 'true');
            expect(localStorage.setItem).toHaveBeenCalledWith('studflow_beta_email', 'test@example.com');
            expect(localStorage.setItem).toHaveBeenCalledWith('studflow_beta_token', 'TOK123');
        });

        it('makes isUnlocked return true', () => {
            gate.unlock('user@test.com', 'ABC');
            expect(gate.isUnlocked()).toBe(true);
        });
    });

    // ---- isWelcomeSeen / markWelcomeSeen ----

    describe('isWelcomeSeen', () => {
        it('returns false when nothing stored', () => {
            expect(gate.isWelcomeSeen()).toBe(false);
        });

        it('returns true after markWelcomeSeen', () => {
            gate.markWelcomeSeen();
            expect(gate.isWelcomeSeen()).toBe(true);
        });

        it('returns false for non-true values', () => {
            localStorage.setItem('studflow_beta_welcome_seen', 'false');
            expect(gate.isWelcomeSeen()).toBe(false);
        });
    });

    describe('markWelcomeSeen', () => {
        it('sets the localStorage flag', () => {
            gate.markWelcomeSeen();
            expect(localStorage.setItem).toHaveBeenCalledWith('studflow_beta_welcome_seen', 'true');
        });
    });

    // ---- showWaitlist ----

    describe('showWaitlist', () => {
        it('is exposed as a function', () => {
            expect(typeof gate.showWaitlist).toBe('function');
        });
    });

    // ---- buildInviteUrl ----

    describe('buildInviteUrl', () => {
        it('builds a valid invite URL from token', () => {
            var url = gate.buildInviteUrl('ref-abc123');
            expect(url).toContain('?invite=ref-abc123');
        });

        it('encodes special characters in token', () => {
            var url = gate.buildInviteUrl('tok with spaces');
            expect(url).toContain('?invite=tok%20with%20spaces');
        });

        it('uses current origin as base', () => {
            var url = gate.buildInviteUrl('TOK');
            expect(url).toMatch(/^https?:\/\//);
        });
    });
});
