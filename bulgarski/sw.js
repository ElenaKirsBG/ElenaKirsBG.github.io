/* Старый адрес приложения «Български език». Приложение переехало на https://bg.elenakirsanova.com/
   Этот файл заменяет прежний офлайн-модуль: очищает старые файлы приложения (не данные!)
   и показывает страницу переезда. Данные пользователя не удаляются. */
const OWN = ["bg-course-"];
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (OWN.some(p => k.startsWith(p))) await caches.delete(k);
  await self.clients.claim();
  const cs = await self.clients.matchAll({ type: 'window' });
  await self.registration.unregister();
  for (const c of cs) { try { await c.navigate(c.url); } catch (x) {} }
})()));
