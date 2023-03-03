// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage, ref } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpXiPnWdUwMsWaxEb-9-L8jI6nIsywk6I',
  authDomain: 'portfolioangular-eeh.firebaseapp.com',
  projectId: 'portfolioangular-eeh',
  storageBucket: 'portfolioangular-eeh.appspot.com',
  messagingSenderId: '529996034143',
  appId: '1:529996034143:web:4ae42d70e11a8aaeeaebea',
  measurementId: 'G-ZJZPZ6KEEN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Storage = getStorage(app);
