import React from 'react'
import cntower from '../assets/cntower.jpeg';
import './Login.css';

const Register = () => {
  return (
    <div className='loginContainer'>
        <div className="cnImage">
            <img src={cntower} alt="cntower"/>
        </div>
        <div className="loginDiv">
            <h1>Register</h1>
            <div className="loginDivInside">
            <div className="formDiv">

            <form action="#">
                <label className='formLabel' htmlFor="firstName">First Name</label>
                <input className='formInput' type="text" name="firstName" id="firstName" placeholder='Enter your first name...' required />
                <label className='formLabel' htmlFor="lastName">Last Name</label>
                <input className='formInput' type="text" name="lastName" id="lastName" placeholder='Enter your first name...' required />
                <label className='formLabel' htmlFor="email">Email</label>
                <input className='formInput' type="email" name="email" id="email" placeholder='Enter your email adress...' required />
                <label className='formLabel' htmlFor="password">Password</label>
                <input className='formInput' type="password" name="password" id="password" placeholder='Enter your password...' required />
                <button className='forgotPasswordButton'>Forgot password?</button>
                <button className='loginButton'>Login</button>
                <button className='loginButton'>Continue with Google</button>
            </form>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Register