// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCtTD_bDXGT3GHUigPDXHVYHSzLzS-MGpM",
  authDomain: "namibianrecipebook.firebaseapp.com",
  projectId: "namibianrecipebook",
  storageBucket: "namibianrecipebook.firebasestorage.app",
  messagingSenderId: "63075933605",
  appId: "1:63075933605:web:21ae86845b28f79839dc4c",
  measurementId: "G-0PTG9XG64Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { db, collection, addDoc, getDocs };
