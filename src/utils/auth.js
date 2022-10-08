import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "./firebase";

export const join = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
    return await signOut(auth);
};
