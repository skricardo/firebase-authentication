import React, {createContext, useState, useEffect, useContext} from "react";
import {
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    function logOut() {
        return signOut (auth);
    }

    function SignUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password);
}

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email);
    }

    function updateEmailAddress (newEmail){
        return updateEmail(currentUser, newEmail);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return (
    <AuthContext.Provider 
    value={{
        resetPassword: resetPassword,
        SignUp: SignUp,
        signIn: signIn,
        logOut: logOut,
        currentUser: currentUser,
        updateEmailAddress: updateEmailAddress,
}} 
> 
    {children}
    </AuthContext.Provider>
    );
}
