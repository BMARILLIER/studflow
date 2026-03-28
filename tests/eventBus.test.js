// Tests for eventBus.js — pub/sub, once, error isolation
import { describe, it, expect, vi, beforeEach } from 'vitest';

// ==================== Extracted pure logic ====================
function createEventBus() {
    var listeners = {};

    function on(event, callback) {
        if (typeof callback !== 'function') return;
        if (!listeners[event]) listeners[event] = [];
        listeners[event].push(callback);
    }

    function off(event, callback) {
        if (!listeners[event]) return;
        listeners[event] = listeners[event].filter(fn => fn !== callback);
    }

    function emit(event, data) {
        if (!listeners[event]) return;
        var cbs = listeners[event].slice();
        for (var i = 0; i < cbs.length; i++) {
            try {
                cbs[i](data);
            } catch (e) {
                // Error isolated — other listeners still fire
            }
        }
    }

    function once(event, callback) {
        function wrapper(data) {
            off(event, wrapper);
            callback(data);
        }
        on(event, wrapper);
    }

    return { on, off, emit, once };
}

// ==================== TESTS ====================

describe('eventBus.js — subscribe and emit', () => {
    let bus;
    beforeEach(() => { bus = createEventBus(); });

    it('calls listener when event is emitted', () => {
        const spy = vi.fn();
        bus.on('test', spy);
        bus.emit('test', { value: 42 });
        expect(spy).toHaveBeenCalledWith({ value: 42 });
    });

    it('calls multiple listeners', () => {
        const spy1 = vi.fn();
        const spy2 = vi.fn();
        bus.on('test', spy1);
        bus.on('test', spy2);
        bus.emit('test', 'data');
        expect(spy1).toHaveBeenCalledWith('data');
        expect(spy2).toHaveBeenCalledWith('data');
    });

    it('does not call listeners for different events', () => {
        const spy = vi.fn();
        bus.on('event-a', spy);
        bus.emit('event-b', 'data');
        expect(spy).not.toHaveBeenCalled();
    });

    it('emitting unsubscribed event does not throw', () => {
        expect(() => bus.emit('nonexistent', 'data')).not.toThrow();
    });

    it('ignores non-function callbacks', () => {
        bus.on('test', null);
        bus.on('test', 'not a function');
        bus.on('test', 42);
        expect(() => bus.emit('test', 'data')).not.toThrow();
    });
});

describe('eventBus.js — unsubscribe', () => {
    let bus;
    beforeEach(() => { bus = createEventBus(); });

    it('removes listener with off()', () => {
        const spy = vi.fn();
        bus.on('test', spy);
        bus.off('test', spy);
        bus.emit('test', 'data');
        expect(spy).not.toHaveBeenCalled();
    });

    it('only removes the specific listener', () => {
        const spy1 = vi.fn();
        const spy2 = vi.fn();
        bus.on('test', spy1);
        bus.on('test', spy2);
        bus.off('test', spy1);
        bus.emit('test', 'data');
        expect(spy1).not.toHaveBeenCalled();
        expect(spy2).toHaveBeenCalledWith('data');
    });

    it('off() for non-existent event does not throw', () => {
        expect(() => bus.off('nonexistent', vi.fn())).not.toThrow();
    });

    it('off() with wrong reference does not remove others', () => {
        const spy = vi.fn();
        bus.on('test', spy);
        bus.off('test', vi.fn()); // different reference
        bus.emit('test', 'data');
        expect(spy).toHaveBeenCalled();
    });
});

describe('eventBus.js — once', () => {
    let bus;
    beforeEach(() => { bus = createEventBus(); });

    it('fires callback only once', () => {
        const spy = vi.fn();
        bus.once('test', spy);
        bus.emit('test', 'first');
        bus.emit('test', 'second');
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith('first');
    });
});

describe('eventBus.js — error isolation', () => {
    let bus;
    beforeEach(() => { bus = createEventBus(); });

    it('one listener throwing does not block others', () => {
        const badListener = vi.fn(() => { throw new Error('Boom!'); });
        const goodListener = vi.fn();
        bus.on('test', badListener);
        bus.on('test', goodListener);
        bus.emit('test', 'data');
        expect(badListener).toHaveBeenCalled();
        expect(goodListener).toHaveBeenCalledWith('data');
    });

    it('emit does not throw when listener throws', () => {
        bus.on('test', () => { throw new Error('Boom!'); });
        expect(() => bus.emit('test', 'data')).not.toThrow();
    });
});

describe('eventBus.js — mutation safety during emit', () => {
    let bus;
    beforeEach(() => { bus = createEventBus(); });

    it('adding listener during emit does not fire new listener', () => {
        const lateSpy = vi.fn();
        bus.on('test', () => {
            bus.on('test', lateSpy); // added during iteration
        });
        bus.emit('test', 'data');
        expect(lateSpy).not.toHaveBeenCalled();
    });

    it('removing listener during emit still fires already-queued listeners', () => {
        const spy2 = vi.fn();
        const spy1 = vi.fn(() => {
            bus.off('test', spy2);
        });
        bus.on('test', spy1);
        bus.on('test', spy2);
        bus.emit('test', 'data');
        // spy2 was in the snapshot, so it should still fire
        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });
});
