import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCyB_3_KoXiWFZUgVWa_v5YYnfzNJ1uEAE",
  authDomain: "chat-810d7.firebaseapp.com",
  projectId: "chat-810d7",
  storageBucket: "chat-810d7.appspot.com",
  messagingSenderId: "1079120241995",
  appId: "1:1079120241995:web:f6b33b91d85b0b960b34ce",
  measurementId: "G-YNVYST3NPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);