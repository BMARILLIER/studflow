// Test setup — mock browser globals for IIFE modules
import { vi } from 'vitest';

// Mock localStorage
const store = {};
global.localStorage = {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, val) => { store[key] = String(val); }),
    removeItem: vi.fn((key) => { delete store[key]; }),
    clear: vi.fn(() => { for (const k in store) delete store[k]; }),
    get length() { return Object.keys(store).length; },
    key: vi.fn((i) => Object.keys(store)[i] || null)
};

// Mock navigator
global.navigator = { onLine: true };

// Mock StudFlow namespace
global.window = global.window || globalThis;
window.StudFlow = window.StudFlow || {};

// Minimal storage mock
window.StudFlow.storage = {
    loadData: vi.fn((key, def) => {
        const raw = localStorage.getItem('studflow_' + key);
        if (raw === null) return def;
        try { return JSON.parse(raw); } catch(e) { return def; }
    }),
    saveData: vi.fn((key, val) => {
        localStorage.setItem('studflow_' + key, JSON.stringify(val));
    }),
    getUserProfile: vi.fn(() => ({ mainProfile: 'equilibre', scores: {} })),
    isPremium: vi.fn(() => false),
    getSubscription: vi.fn(() => ({ plan: 'free' })),
    setSubscription: vi.fn(),
    setUserPlan: vi.fn()
};

// Minimal event bus mock
window.StudFlow.events = {
    emit: vi.fn(),
    on: vi.fn()
};

// Minimal gamification mock (will be overridden in gamification tests)
window.StudFlow.gamification = {
    showToast: vi.fn(),
    addXP: vi.fn(),
    getStats: vi.fn(() => ({ xp: 0, level: 1, streak: 0 }))
};

// Helper to reset storage between tests
export function resetStorage() {
    localStorage.clear();
    vi.clearAllMocks();
}

// Helper to load an IIFE module
export async function loadModule(path) {
    // Reset the module's registration before re-importing
    const module = await import(path);
    return module;
}
