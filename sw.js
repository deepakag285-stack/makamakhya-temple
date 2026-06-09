self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    // ब्राउज़र को तुरंत एक्टिवेट करने के लिए मजबूर करना
    self.skipWaiting(); 
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated!');
    return self.clients.claim();
});

// नेटवर्क रिक्वेस्ट को हैंडल करने के लिए (पॉप-अप ट्रिगर करने के लिए यह जरूरी है)
self.addEventListener('fetch', (event) => {
    // अभी हम सीधे इंटरनेट से फाइलें लोड होने दे रहे हैं
    event.respondWith(fetch(event.request));
});
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Naya update aaya hai!',
    icon: 'image/IMG-20260418-WA0001(1).jpg"',
    badge: 'image/IMG-20260418-WA0001(1).jpg"'
  };

  event.waitUntil(
    self.registration.showNotification('PWA Notification', options)
  );
});