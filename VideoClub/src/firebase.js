import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5UI1XVcD0Daw2czEJ2HQIx7TtWC28N_k",
  authDomain: "sveltedaw2-19eb9.firebaseapp.com",
  projectId: "sveltedaw2-19eb9",
  storageBucket: "sveltedaw2-19eb9.appspot.com",
  messagingSenderId: "217814640696",
  appId: "1:217814640696:web:16483f67b746df4ba29ecd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();