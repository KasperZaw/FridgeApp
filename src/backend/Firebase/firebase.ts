// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSBMYFxtuMrqUzOTqW55nII2mR79Gr4zY",
  authDomain: "fresh-fridge-21ccf.firebaseapp.com",
  projectId: "fresh-fridge-21ccf",
  storageBucket: "fresh-fridge-21ccf.firebasestorage.app",
  messagingSenderId: "56937910467",
  appId: "1:56937910467:web:031479f10deb12a046d276",
  measurementId: "G-CPVX0C46GE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
