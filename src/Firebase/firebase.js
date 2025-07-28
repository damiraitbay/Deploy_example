// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMdwjlzLZckEsZQvNVqkfg4zOn3JhbPzo",
  authDomain: "faceid-46c8d.firebaseapp.com",
  projectId: "faceid-46c8d",
  storageBucket: "faceid-46c8d.appspot.com",
  messagingSenderId: "664839128666",
  appId: "1:664839128666:web:f327b4eec3999b5920ba63",
  measurementId: "G-F4GHK7SRTW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
