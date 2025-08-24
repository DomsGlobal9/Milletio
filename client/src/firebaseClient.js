// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWnSzzChMxlQsgZ0Pnk8Ux5QfvTLbv8Qw",
  authDomain: "otpverification-d60a2.firebaseapp.com",
  projectId: "otpverification-d60a2",
  storageBucket: "otpverification-d60a2.firebasestorage.app",
  messagingSenderId: "677569801532",
  appId: "1:677569801532:web:e517771037a8031c81c239",
  measurementId: "G-EW8NWE01L9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
