import React from "react";
import { setFormType } from "../actions/authActions";
import { connect } from "react-redux";
const Register = ({ values, inputChange, nextStep, prevStep }) => {
  const { userNameR, emailR, passwordR, passwordConR } = values;
  const toLogin = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div className='login-wrapper'>
      <div id='login'>
        <div className='login-from'>
          <div className='input-area'>
            <h4>Register</h4>
            <div className='username'>
              <input
                type='text'
                onChange={inputChange("userNameR")}
                value={userNameR}
                placeholder='Username'
                required
              />
            </div>
            <div className='email'>
              <input
                type='email'
                value={emailR}
                onChange={inputChange("emailR")}
                placeholder='email'
                required
              />
            </div>
            <div className='password'>
              <input
                type='password'
                value={passwordR}
                onChange={inputChange("passwordR")}
                placeholder='enter password'
                required
              />
            </div>
            <div className='password2'>
              <input
                type='password'
                value={passwordConR}
                onChange={inputChange("passwordConR")}
                placeholder='confirm password'
                required
              />
            </div>
          </div>
          <div className='submitBtn'>
            <button type='submit'>Register </button>
          </div>
          <div className='links'>
            <a href='#1' onClick={toLogin}>
              Log In?{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setFormType })(Register);