const staticDevitem = "halo-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/item1.jpg",
  "/images/item2.jpg",
  "/images/item3.jpg",
  "/images/item4.jpg",
  "/images/item5.jpg",
  "/images/item6.jpg",
  "/images/item7.jpg",
  "/images/item8.jpg",
  "/images/item9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevitem).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})