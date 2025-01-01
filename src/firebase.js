import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmpHHqujoY3dKfvGqcLO0w3H81wYSUKh0",
  authDomain: "portfolio-6891c.firebaseapp.com",
  projectId: "portfolio-6891c",
  storageBucket: "portfolio-6891c.firebasestorage.app",
  messagingSenderId: "759150311878",
  appId: "1:759150311878:web:abf7c45998ce7b6d9e5ac7",
  measurementId: "G-WPZH0CF0EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };