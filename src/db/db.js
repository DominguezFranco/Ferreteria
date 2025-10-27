
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT7pNsI-8jPwrgZXYXCeU8pw-Sfz2NESI",
  authDomain: "ferreteria-bac32.firebaseapp.com",
  projectId: "ferreteria-bac32",
  storageBucket: "ferreteria-bac32.firebasestorage.app",
  messagingSenderId: "672449651911",
  appId: "1:672449651911:web:c96fe4a25bc29ff134cae2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
export default db

