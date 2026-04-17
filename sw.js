const CACHE_NAME = 'sd-app-cache-v1';

// รายชื่อไฟล์ทั้งหมดที่ต้องการให้ทำงานออฟไลน์ได้
const urlsToCache = [
  './',
  './index.html',
  './math.js',
  './chart.js',
  './manifest.json',
  // './sd.png', // เอาคอมเมนต์ออกถ้ามีรูปไอคอนแล้ว
  // './sd.png'
];

// ติดตั้ง Service Worker และโหลดไฟล์เก็บลง Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// เมื่อผู้ใช้ร้องขอไฟล์ (เปิดหน้าเว็บ) ให้เช็คว่ามีใน Cache ไหม
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // ถ้าเจอใน Cache ให้ส่งกลับไปเลย (ทำงานออฟไลน์ได้)
        if (response) {
          return response;
        }
        // ถ้าไม่เจอ ให้ไปดึงจากอินเทอร์เน็ตปกติ
        return fetch(event.request);
      })
  );
});