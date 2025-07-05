import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB1WyPj1YluJvc8gAU86BmLgUjC1vMatBs",
  authDomain: "vpr-karate-classes.firebaseapp.com",
  projectId: "vpr-karate-classes",
  storageBucket: "vpr-karate-classes.firebasestorage.app",
  messagingSenderId: "310648531483",
  appId: "1:310648531483:web:91eccd47aa8f1ab82226be"
};

// Initialize Firebase - check if app already exists to prevent duplicate app error during HMR
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;