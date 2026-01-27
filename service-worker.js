// service-worker.js
const CACHE_NAME = 'drone-advisor-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './airports.dat',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;600;700&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Устанавливаем сервис-воркер и кэшируем все необходимые ресурсы
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Стратегия: сначала кэш, потом сеть (с обновлением кэша)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Если ресурс есть в кэше, возвращаем его
        if (response) {
          return response;
        }

        // Если нет, делаем сетевой запрос
        return fetch(event.request).then(
          function(response) {
            // Проверяем, валидный ли ответ
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Клонируем ответ, потому что он может понадобиться несколько раз
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // В случае ошибки (офлайн режим) можно вернуть заглушку
        // Для API-запросов можно вернуть кастомный ответ
        if (event.request.url.includes('openweathermap') || event.request.url.includes('metar.vatsim')) {
          return new Response(JSON.stringify({
            error: 'Вы в офлайне. Данные недоступны.'
          }), {
            headers: { 'Content-Type': 'application/json' }
          });
        }
      })
  );
});

// Активация: удаляем старые кэши
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
