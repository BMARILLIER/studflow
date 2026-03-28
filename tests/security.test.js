// Tests for security — input sanitization, XSS prevention
import { describe, it, expect } from 'vitest';

// ==================== Extract from app.js ====================

function escapeText(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// ==================== TESTS ====================

describe('Security — escapeText', () => {
    it('escapes HTML tags', () => {
        expect(escapeText('<script>alert("xss")</script>')).toBe(
            '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
        );
    });

    it('escapes ampersands', () => {
        expect(escapeText('A & B')).toBe('A &amp; B');
    });

    it('escapes quotes', () => {
        expect(escapeText('He said "hello"')).toBe('He said &quot;hello&quot;');
        expect(escapeText("It's")).toBe('It&#039;s');
    });

    it('handles empty and null input', () => {
        expect(escapeText('')).toBe('');
        expect(escapeText(null)).toBe('');
        expect(escapeText(undefined)).toBe('');
    });

    it('preserves safe text', () => {
        expect(escapeText('Hello World 123')).toBe('Hello World 123');
        expect(escapeText('Derivee de x^n')).toBe('Derivee de x^n');
    });

    it('prevents event handler injection via attribute breakout', () => {
        const input = '" onmouseover="alert(1)" data-x="';
        const escaped = escapeText(input);
        // The quotes are escaped, so attribute breakout is impossible
        expect(escaped).not.toContain('"');
        expect(escaped).toContain('&quot;');
        // The text "onmouseover" remains but is harmless since quotes are escaped
        expect(escaped).toBe('&quot; onmouseover=&quot;alert(1)&quot; data-x=&quot;');
    });
});

describe('Security — XSS vectors', () => {
    const xssVectors = [
        '<img src=x onerror=alert(1)>',
        '<svg onload=alert(1)>',
        'javascript:alert(1)',
        '<iframe src="data:text/html,<script>alert(1)</script>">',
        '"><script>alert(document.cookie)</script>',
        "'-alert(1)-'",
        '<a href="javascript:void(0)" onclick="alert(1)">click</a>'
    ];

    xssVectors.forEach((vector, i) => {
        it(`neutralizes XSS vector #${i + 1}`, () => {
            const escaped = escapeText(vector);
            expect(escaped).not.toContain('<script');
            expect(escaped).not.toContain('<img');
            expect(escaped).not.toContain('<svg');
            expect(escaped).not.toContain('<iframe');
            expect(escaped).not.toContain('<a ');
        });
    });
});

describe('Security — License code validation', () => {
    const LICENSE_REGEX = /^SF-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

    it('rejects SQL injection in license code', () => {
        expect(LICENSE_REGEX.test("SF-'; DROP TABLE--")).toBe(false);
    });

    it('rejects XSS in license code', () => {
        expect(LICENSE_REGEX.test('<script>alert(1)</script>')).toBe(false);
    });

    it('rejects overly long input', () => {
        expect(LICENSE_REGEX.test('SF-' + 'A'.repeat(100))).toBe(false);
    });
});
