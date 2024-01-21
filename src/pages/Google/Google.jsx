import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../../firebase/firebase.config';
import { getAuth } from "firebase/auth";

const Google = () => {
    const provider = new GoogleAuthProvider(app);
    const auth =getAuth();

    const googleHandle =()=>
    {
        signInWithPopup(auth, provider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (



        <div className='mt-20'>
            <h2 className='text-center text-4xl mb-5'>Please Sign In Using Google</h2>
            <div className='text-center text-5xl'>
            <button onClick={googleHandle} className="btn btn-active btn-accent">Google</button>
            </div>
        </div>
    );
};

export default Google;