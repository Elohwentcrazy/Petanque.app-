const CACHE_NAME = 'pfp-petanque-v5';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/index.css',
  '/app.js',
  '/data.js',
  '/swiss.js',
  '/manifest.json'
];

// Install: cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Force fetch fresh files during install
      return Promise.all(
        STATIC_ASSETS.map(url => 
          fetch(url, { cache: 'no-cache' })
            .then(res => {
              if (res.ok) return cache.put(url, res);
              throw new Error(`Failed to fetch ${url}`);
            })
            .catch(() => {}) // Ignore fetch failures for non-existent files during startup
        )
      );
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) {
            return caches.delete(k);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch: Network-first for development to avoid caching issues, falling back to cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET and WebSocket
  if (event.request.method !== 'GET' || url.protocol === 'ws:' || url.protocol === 'wss:') {
    return;
  }

  // Network-first for everything to make sure updates are instant
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        if (res.ok) {
          const cloned = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, cloned));
        }
        return res;
      })
      .catch(() => {
        // Fallback to cache if offline
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (url.pathname === '/' || url.pathname === '/index.html') {
            return caches.match('/index.html');
          }
        });
      })
  );
});
