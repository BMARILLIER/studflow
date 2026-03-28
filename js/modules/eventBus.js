// eventBus.js — Lightweight internal pub/sub for module decoupling
(function() {

    var listeners = {};

    /**
     * Subscribe to an event.
     * @param {string} event - Event name (e.g. 'xp:gained', 'focus:completed')
     * @param {function} callback - fn(data)
     */
    function on(event, callback) {
        if (typeof callback !== 'function') return;
        if (!listeners[event]) listeners[event] = [];
        listeners[event].push(callback);
    }

    /**
     * Unsubscribe from an event.
     * @param {string} event
     * @param {function} callback - Must be same reference as registered
     */
    function off(event, callback) {
        if (!listeners[event]) return;
        listeners[event] = listeners[event].filter(function(fn) {
            return fn !== callback;
        });
    }

    /**
     * Emit an event to all subscribers.
     * @param {string} event
     * @param {*} data - Payload passed to each callback
     */
    function emit(event, data) {
        if (!listeners[event]) return;
        var cbs = listeners[event].slice(); // snapshot to avoid mutation during iteration
        for (var i = 0; i < cbs.length; i++) {
            try {
                cbs[i](data);
            } catch (e) {
                console.warn('[EventBus] Error in listener for "' + event + '":', e);
            }
        }
    }

    /**
     * Subscribe once — auto-unsubscribes after first call.
     * @param {string} event
     * @param {function} callback
     */
    function once(event, callback) {
        function wrapper(data) {
            off(event, wrapper);
            callback(data);
        }
        on(event, wrapper);
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.events = {
        on: on,
        off: off,
        emit: emit,
        once: once
    };

})();
