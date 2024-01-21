import React, { useContext } from 'react';
import './Header.css'

import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Header = () => {
    const {user, logOut}=useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return (
        <div className='ml-4 mr-4 '>
           <div className='mt-4 text-right font-bold underline'>
           
           <Link to="/" className='text-black ml-4 mr-4' >Home</Link>
            
            <Link to="/register" className='text-black mr-4' >Register</Link>
            <Link to="/login" className='text-black mr-4'>Login</Link>
            <Link to="/google" className='text-black'>Google </Link>
            <Link to="/book" className='text-black ml-4 mr-4' >Book</Link>
            {
                user ? <>
                
                <span>{user.email}</span>
                <button onClick={logOut} className="btn btn-sm">Sign Out</button>
                </> : 
                <></>
            }
            

           </div>
            <h2 className='text-center mt-4 mb-4 text-6xl text-purple-800 font-extrabold'>Al Arab</h2>
            <h3 className='text-center text-4xl mb-4 text-purple-500 font-semibold'>A Global Icon of Arabian Luxury</h3>
            <Marquee>
                <div className='mb-2 text-red-800'>Indulge in opulent elegance and unparalleled luxury at Al Arab, where every moment is crafted to create an enchanting experience that transcends the ordinary.</div>
            </Marquee>
            
            
            
        </div>
    );
};

export default Header;