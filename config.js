
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";





const firebaseConfig = {
  apiKey: "AIzaSyBAA4LIq9cHQ_AzdFJi43vL3ogyC52wvUU",
  authDomain: "firestore-10656.firebaseapp.com",
  projectId: "firestore-10656",
  storageBucket: "firestore-10656.firebasestorage.app",
  messagingSenderId: "620465735627",
  appId: "1:620465735627:web:a5a48f8459b9fe9fb2d84e",
  measurementId: "G-XCDWNQJKJH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

