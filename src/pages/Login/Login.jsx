import React, { useRef, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'; 
import { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Login = () => {
  const [show, setShow]=useState(false);
  const navigate =useNavigate();
  const {signIn, resetPassword}=useContext(AuthContext);
  const emailRef =useRef();
  const handleLogin=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result =>{
      const loggedUser=result.user;
      console.log(loggedUser)
     
    
      form.reset()
      navigate('/');
    
    })
    .catch(error=>{
      console.log(error)
    })
    

  }
  const handleResetPassword =()=>{
    const email = emailRef.current.value;
    if(!email){
      alert('Please provide email to reset email')
    }
    else{
      resetPassword(email)
      .then(()=>{
        alert('Please Check email')
      })
      .catch(error=>{
        console.log(error)
      })
    }

  }
    return (
        <div className="hero mt-5 bg-base-100">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show ? "text" :"password"} name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <p onClick={()=>setShow(!show)}>

            <small>
              {
                show? <span>Hide Password</span> :<span>Show Password</span>
              }
            </small>
          </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className=''>New to here? 
            <Link to='/register'> <span className='text-purple-600'>Register</span></Link>
        </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;