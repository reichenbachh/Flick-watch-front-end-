import React from "react";
const ForgetPassword = ({ prevStep, values, inputChange, sendEmail }) => {
  const { emailForgot } = values;
  const toLogin = () => {
    prevStep();
  };
  return (
    <div className='forgetPass'>
      <div className='forgetPassCard'>
        <h4>Forget Password</h4>
        <div className='emailPass'>
          <input
            type='email'
            placeholder='Enter your email'
            value={emailForgot}
            onChange={inputChange("emailForgot")}
            required
          />
        </div>
        <div className='submitPass'>
          <button onClick={() => sendEmail()} type='submit'>
            Reset Password
          </button>
        </div>
        <div className='links'>
          <a href='#1' onClick={toLogin}>
            Log In?{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
