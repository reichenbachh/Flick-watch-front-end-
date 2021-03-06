import React from "react";
import { connect } from "react-redux";

const Login = ({
  values,
  inputChange,
  nextStep,
  prevStep,
  sendLoginReq,
  loading,
}) => {
  const { userNameL, passwordL } = values;
  const toPassword = (e) => {
    nextStep();
  };
  const toRegister = () => {
    prevStep();
  };

  const handleLogin = () => {
    sendLoginReq();
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
                placeholder='enter username or email'
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
          {loading ? (
            <div className='submitBtn'>
              <button type='submit'>...</button>
            </div>
          ) : (
            <div className='submitBtn'>
              <button onClick={handleLogin} type='submit'>
                login{" "}
              </button>
            </div>
          )}

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
