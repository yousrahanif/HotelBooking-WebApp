import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import AuthProviders, { AuthContext } from '../AuthProviders/AuthProviders';


const Register = () => {
  const {user, createUser} =useContext(AuthContext);
  const [error, setError]=useState('');
  const [success, setSuccess]=useState('');
  
  

  const handleRegister=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email,password,confirm);
    if(password!==confirm){
      setError('Password did not match')
      return;
    }
    else if (password.length<5){
      setError('Password should be at least 5 characters long')
return;
    }
    
    createUser(email,password)
    .then(result =>{
      const loggedUser=result.user;
      console.log(loggedUser)
      
      form.reset();
      setSuccess('User Successfully Created')
      setError('')
      
    })
    .catch(error=>{
      console.log(error);
      
      setError(error)
      setSuccess('')
      
    })
    

  }
 
  


    return (
        <div className="hero mt-5 bg-base-100">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className=''>Already have an account? 
            <Link to='/login'> <span className='text-purple-600'>Login</span></Link>
        </p>
      </form>
      <p className='text-red-500'>{error}</p>
      <p className='text-green-600'>{success}</p>
    </div>
  </div>
</div>
    );
};

export default Register;