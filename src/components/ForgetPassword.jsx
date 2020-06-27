import React from "react";
const ForgetPassword = () => {
  return (
    <div className='forgetPass'>
      <div className='forgetPassCard'>
        <h4>Forget Password</h4>
        <div className='emailPass'>
          <input type='email' placeholder='Enter your email' required />
        </div>
        <div className='submitPass'>
          <button type='submit'>Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
