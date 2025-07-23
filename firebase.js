// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0NE3myj7KOuXC1g6eiP9oj0YYTnWqhXU",
  authDomain: "testing-hehe1.firebaseapp.com",
  projectId: "testing-hehe1",
  storageBucket: "testing-hehe1.firebasestorage.app",
  messagingSenderId: "726243036353",
  appId: "1:726243036353:web:0ab34db58dab0f96705840"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);