
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
  // service-worker.js file mein
self.registration.showNotification("Welcome!", {
  body: "Humara PWA khul gaya hai!",
  icon: "/icon-192.png",
  badge: "/badge.png"
});
