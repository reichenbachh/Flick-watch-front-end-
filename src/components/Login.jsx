import React from "react";
import LOGOw from "../assets/LOGOw.png";

const Login = () => {
  return (
    <div className='login-container'>
      <div className='logo-login'>
        <img src={LOGOw} alt='' srcset='' />
      </div>
      <div id='login'>
        <div className='login-from'>
          <div className='input-area'>
            <h1>Sign In</h1>
            <div className='username'>
              <input type='text' placeholder='Username' required />
            </div>
            <div className='password'>
              <input type='password' placeholder='password' required />
            </div>
          </div>
          <div className='submitBtn'>
            <button type='submit'>login </button>
          </div>
          <div className='check'>
            <input type='checkbox' />
            <span>Remember me</span>
          </div>
          <div className='links'>
            <a href=''>Sign Up?</a>
            <a href=''>Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
