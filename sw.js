const VERSION='cartify-live-20260822-1600';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim());});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match(req)));
});
