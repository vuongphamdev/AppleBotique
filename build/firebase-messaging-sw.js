// Scripts for firebase and firebase messaging
importScripts(
  'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyB1N4BwNR4LnoE0_vy_7iFyfao0uTR1Buk',
  authDomain: 'botique-notification-6e8e6.firebaseapp.com',
  projectId: 'botique-notification-6e8e6',
  storageBucket: 'botique-notification-6e8e6.appspot.com',
  messagingSenderId: '392718687860',
  appId: '1:392718687860:web:dea764d45cbcf6585abb21',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
