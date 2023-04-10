// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API ,
  authDomain: "stackoverflow-43c1b.firebaseapp.com",
  projectId: "stackoverflow-43c1b",
  storageBucket: "stackoverflow-43c1b.appspot.com",
  messagingSenderId: "144693709022",
  appId: "1:144693709022:web:e1e33aa93ab2fbe7b75a4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();