import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import CheckoutPage from './pages/CheckoutPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { Fragment } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1N4BwNR4LnoE0_vy_7iFyfao0uTR1Buk',
  authDomain: 'botique-notification-6e8e6.firebaseapp.com',
  projectId: 'botique-notification-6e8e6',
  storageBucket: 'botique-notification-6e8e6.appspot.com',
  messagingSenderId: '392718687860',
  appId: '1:392718687860:web:dea764d45cbcf6585abb21',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

const getTokenFromClient = () => {
  return getToken(messaging, {
    vapidKey:
      'BA4Y4LFz0c7J0fVb77DfeSArFu7ltPUW3FhOBRjqWyeF2V1DhZJpl3FUNiZzCqsC8EfA5qA0QQmJe7-rrbEcij8',
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        );
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log(payload);
      resolve(payload);
    });
  });

function App() {
  getTokenFromClient();
  onMessageListener()
    .then((payload) => {
      console.log({ data: payload });
      toast(payload.notification.body);
    })
    .catch((err) => console.log('failed: ', err));

  return (
    <Fragment>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
