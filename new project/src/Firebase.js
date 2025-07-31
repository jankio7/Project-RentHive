// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-JPqDzbloXxL1EBqXoHFGCBmEb-lkWck",
  authDomain: "rent-hive-31573.firebaseapp.com",
  projectId: "rent-hive-31573",
  storageBucket: "rent-hive-31573.firebasestorage.app",
  messagingSenderId: "646612140921",
  appId: "1:646612140921:web:464e857784fa891f7c65a8",
  measurementId: "G-F5KKN7MQ0S"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage = getStorage(app);

