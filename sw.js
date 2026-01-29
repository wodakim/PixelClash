const CACHE_NAME = 'pixel-clash-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './js/main.js',
  './js/core/state.js',
  './js/core/storage.js',
  './js/core/utils.js',
  './js/data/cards.js',
  './js/data/config.js',
  './js/data/modules.js',
  './js/data/skins.js',
  './js/data/sprites_data.js',
  './js/data/texts.js',
  './js/engine/audio.js',
  './js/engine/sprites.js',
  './js/game/battle.js',
  './js/game/brain.js',
  './js/game/kingdom.js',
  './js/system/background.js',
  './js/system/leaderboard.js',
  './js/system/main.js',
  './js/system/time.js',
  './js/ui/collection.js',
  './js/ui/deck.js',
  './js/ui/leaderboard_ui.js',
  './js/ui/meta.js',
  './js/ui/navigation.js',
  './js/ui/notifications.js',
  './js/ui/roulette.js',
  './js/ui/settings.js',
  './js/ui/shop.js',
  './js/ui/skins.js',
  './js/window_expose.js',
  './fonts/PressStart2P.ttf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});
