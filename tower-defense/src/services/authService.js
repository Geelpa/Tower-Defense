import { auth } from "../firebase-config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

// Criar conta
export const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

// Login
export const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

// Logout
export const logoutUser = () => signOut(auth);
