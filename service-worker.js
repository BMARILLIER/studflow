// service-worker.js — StudFlow PWA offline cache + push notifications
var CACHE_VERSION = 'studflow-v42';

// Critical assets: install FAILS if any of these 404
var CRITICAL_ASSETS = [
    '/',
    '/index.html',
    '/assets/main.js',
    '/assets/index.css'
];

// Non-critical assets: cached individually, skipped on error
var NON_CRITICAL_ASSETS = [
    '/lib/pdf.min.js',
    '/lib/pdf.worker.min.js',
    '/manifest.json',
    '/icons/icon-180.png',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
    '/icons/icon.svg'
];

// ==================== INSTALL ====================
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function(cache) {
            // Critical: must all succeed
            return cache.addAll(CRITICAL_ASSETS).then(function() {
                // Non-critical: best-effort, log failures
                var promises = NON_CRITICAL_ASSETS.map(function(url) {
                    return cache.add(url).catch(function(err) {
                        console.warn('SW: skipped non-critical asset:', url, err.message);
                    });
                });
                return Promise.all(promises);
            });
        }).then(function() {
            return self.skipWaiting();
        })
    );
});

// ==================== ACTIVATE ====================
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(name) {
                    return name !== CACHE_VERSION;
                }).map(function(name) {
                    return caches.delete(name);
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

// ==================== FETCH ====================
self.addEventListener('fetch', function(event) {
    var url = new URL(event.request.url);

    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Google Fonts: network-first, cache fallback
    if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
        event.respondWith(
            fetch(event.request).then(function(response) {
                var clone = response.clone();
                caches.open(CACHE_VERSION).then(function(cache) {
                    cache.put(event.request, clone);
                });
                return response;
            }).catch(function() {
                return caches.match(event.request);
            })
        );
        return;
    }

    // External API calls (Groq, Supabase, Stripe): network only, no cache
    if (url.hostname !== self.location.hostname && url.hostname !== 'localhost') {
        return;
    }

    // SPA navigation: network-first, fallback to cached /index.html
    if (event.request.mode === 'navigate' || url.pathname === '/' || url.pathname === '/index.html') {
        event.respondWith(
            fetch(event.request).then(function(response) {
                if (response.ok) {
                    var clone = response.clone();
                    caches.open(CACHE_VERSION).then(function(cache) {
                        cache.put(event.request, clone);
                    });
                }
                return response;
            }).catch(function() {
                return caches.match(event.request) || caches.match('/index.html');
            })
        );
        return;
    }

    // JS/CSS/assets: stale-while-revalidate (serve cache, update in background)
    event.respondWith(
        caches.match(event.request).then(function(cached) {
            var fetchPromise = fetch(event.request).then(function(response) {
                if (response.ok) {
                    var clone = response.clone();
                    caches.open(CACHE_VERSION).then(function(cache) {
                        cache.put(event.request, clone);
                    });
                }
                return response;
            }).catch(function() { return cached; });
            return cached || fetchPromise;
        }).catch(function() {
            if (event.request.mode === 'navigate') {
                return caches.match('/index.html');
            }
        })
    );
});

// ==================== PUSH NOTIFICATIONS ====================
self.addEventListener('push', function(event) {
    var data = { title: 'StudFlow', body: 'C\'est l\'heure de r\u00e9viser !' };
    if (event.data) {
        try { data = event.data.json(); } catch(e) {
            data.body = event.data.text() || data.body;
        }
    }
    event.waitUntil(
        self.registration.showNotification(data.title || 'StudFlow', {
            body: data.body || 'Lance ta session du jour !',
            icon: '/icons/icon-192.png',
            badge: '/icons/icon-192.png',
            tag: 'studflow-reminder',
            renotify: true,
            data: { url: '/#dashboard' }
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    var url = (event.notification.data && event.notification.data.url) || '/';
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(function(windowClients) {
            for (var i = 0; i < windowClients.length; i++) {
                if (windowClients[i].url.indexOf('studflow') !== -1) {
                    return windowClients[i].focus();
                }
            }
            return clients.openWindow(url);
        })
    );
});
