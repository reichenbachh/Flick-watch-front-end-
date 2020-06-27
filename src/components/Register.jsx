import React from "react";
import { setFormType } from "../actions/authActions";
import { connect } from "react-redux";
const Register = ({ setFormType }) => {
  const fTypeSignIn = "signIn";
  return (
    <div className='login-wrapper'>
      <div id='login'>
        <div className='login-from'>
          <div className='input-area'>
            <h4>Register</h4>
            <div className='username'>
              <input type='text' placeholder='Username' required />
            </div>
            <div className='email'>
              <input type='email' placeholder='email' required />
            </div>
            <div className='password'>
              <input type='password' placeholder='enter password' required />
            </div>
            <div className='password2'>
              <input type='password' placeholder='confirm password' required />
            </div>
          </div>
          <div className='submitBtn'>
            <button type='submit'>Register </button>
          </div>
          <div className='links'>
            <a href='#1' onClick={setFormType(fTypeSignIn)}>
              Log In?
            </a>
            <a href='#!'>Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setFormType })(Register);
