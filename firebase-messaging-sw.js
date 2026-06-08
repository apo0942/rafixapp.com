// ============================================================
//  Rafix Web Push — Service Worker
//  Bu dosya web sitesinin KÖKÜNE konmalı: https://rafixapp.com/firebase-messaging-sw.js
//  (GitHub Pages için: rafix-landing veya app reposunun kök dizini)
// ============================================================

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBWWnLvf-GshOiPXRmrWCrud1mrRanL4f4",
  authDomain: "rafix-8cf71.firebaseapp.com",
  projectId: "rafix-8cf71",
  storageBucket: "rafix-8cf71.firebasestorage.app",
  messagingSenderId: "286296256399",
  appId: "1:286296256399:web:6a258c91a055f5a964a5fa",
});

const messaging = firebase.messaging();

// Uygulama kapalı/arka plandayken gelen bildirimler
messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'Rafix', {
    body: n.body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
  });
});
