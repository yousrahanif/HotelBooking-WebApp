import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext =createContext(null);


const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }
    
    const logOut = ()=>{
        return signOut(auth)

    }
    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth);

    }

    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, currentUser =>{
            console.log(createUser), 
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
            
        }
    },[])
    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        resetPassword,
    }


   



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;