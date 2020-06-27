import React from "react";
import { connect } from "react-redux";
import { setFormType } from "../actions/authActions";

const Login = ({ setFormType }) => {
  const fStateSign = "SignUp";
  const onLogin = () => {
    setFormType(fStateSign);
  };
  return (
    <div className='login-wrapper'>
      <div id='login'>
        <div className='login-from'>
          <div className='input-area'>
            <h4>Sign In</h4>
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
            <div>
              <a onClick={onLogin} a href='#!'>
                Sign Up?
              </a>
            </div>
            <div>
              <a href='#!'>Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setFormType })(Login);
