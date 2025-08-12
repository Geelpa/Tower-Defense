import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTIOUghOCBenRvsoRtiQ8oVywozPJBVaY",
    authDomain: "tower-defense-a7739.firebaseapp.com",
    projectId: "tower-defense-a7739",
    storageBucket: "tower-defense-a7739.firebasestorage.app",
    messagingSenderId: "713000331208",
    appId: "1:713000331208:web:f777393a127dcd7c8382fd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);