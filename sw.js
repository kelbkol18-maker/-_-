const CACHE_NAME = 'prayer-times-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت ملفات الكاش
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// جلب الملفات من الكاش عند عدم وجود إنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
