const N="lbp-v1",F=["./","index.html","style.css","app.js","data.js","logo.svg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(N).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
