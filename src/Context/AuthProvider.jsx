import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    const handleGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    };

    const handleSignUpEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleUpdate = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {})
            .catch((error) => {});
    };
    const handleVerify = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    };

    const signInEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.uid) {
                setLoading(false);
                setUser(currentUser);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const AuthInfo = {
        handleGoogle,
        user,
        signInEmail,
        handleSignUpEmail,
        handleUpdate,
        logout,
        handleGitHub,
        handleReset,
        loading,
        handleVerify,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
