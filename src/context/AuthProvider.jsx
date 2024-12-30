import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);
    const [loading, setLoading] = useState(true);

    // Creat a new user or Registration
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Login with Google
    const provider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // Log Out User
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // Update Profile Information
    const updateProfileInfo = (updatedName, updatedPhotoURL) => {
        if (!auth.currentUser) return;
        return updateProfile(auth.currentUser, {
            displayName: updatedName,
            photoURL: updatedPhotoURL,
        }).then(() => {
            // Update context user state
            setUser({ ...auth.currentUser });
        });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                // console.log(user);
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log("Login Token", res.data);
                        setLoading(false);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log("Logout Token", res.data);
                        setLoading(false);
                    })
            }
        })
        return () => {
            unSubscribe()
        }

    }, [])


    const authInfo = {
        creatUser,
        loginUser,
        loginWithGoogle,
        updateProfileInfo,
        userLogOut,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;