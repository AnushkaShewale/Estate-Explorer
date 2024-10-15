// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ff5c7.firebaseapp.com",
  projectId: "mern-estate-ff5c7",
  storageBucket: "mern-estate-ff5c7.appspot.com",
  messagingSenderId: "442315531319",
  appId: "1:442315531319:web:43e0fd75b25e7d8766cbb2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);