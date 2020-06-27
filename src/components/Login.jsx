import React from "react";
import { connect } from "react-redux";

const Login = ({ values, inputChange, nextStep, prevStep }) => {
  const { userNameL, passwordL } = values;
  const toPassword = (e) => {
    nextStep();
  };
  const toRegister = () => {
    prevStep();
  };

  return (
    <div className='login-wrapper'>
      <div id='login'>
        <div className='login-from'>
          <div className='input-area'>
            <h4>Sign In</h4>
            <div className='username'>
              <input
                type='text'
                value={userNameL}
                onChange={inputChange("userNameL")}
                placeholder='Username'
                required
              />
            </div>
            <div className='password'>
              <input
                type='password'
                value={passwordL}
                onChange={inputChange("passwordL")}
                placeholder='password'
                required
              />
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
              <a href='#!' onClick={toPassword}>
                Forgot Password?
              </a>
              <a href='#!' onClick={toRegister}>
                Sign Up?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {})(Login);
