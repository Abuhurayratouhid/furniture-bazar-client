import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // Create new user
    const userCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user Sign up with email & password
    const userLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const userLogOut = ()=>{
        return signOut(auth)
    }

    // observer
    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('observing')
            setUser(currentUser)
            setLoading(false)
        });
        return ()=> unSubscribe;
    },[])

    const authInfo = {
        userCreate,
        userLogin,
        loading,
        user,
        userLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;