
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
self.registration.showNotification("माँ कामाख्या!", {
  body: "अचार्य जी 18 जून से 5 जुलाई 2026 तक दिल्ली, काशी, मुंबई में उपस्थित रहेंगे। किसी भी तरह की जानकारी के लिए संपर्क: 9813132098",
  icon: "image/IMG-20260601-WA0021.jpg",
  badge: "image/IMG-20260603-WA0011.jpg"
});
