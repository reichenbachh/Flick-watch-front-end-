import React, { useState } from "react";

const ResetPassword = () => {
  const [resetFormState, setResetFormState] = useState({
    emailResetPass: "",
    emailResetPassConfirm: "",
  });
  const { emailResetPass, emailResetPassConfirm } = resetFormState;
  const handleChange = (e) => {
    setResetFormState({ ...resetFormState, [e.target.name]: e.target.value });
  };
  return (
    <div className='resetForm'>
      <div className='forgetPass'>
        <div className='forgetPassCard'>
          <h4>Reset Password</h4>
          <div className='emailPass'>
            <input
              name='emailResetPass'
              onChange={handleChange}
              type='password'
              value={emailResetPass}
              placeholder='Enter your new password'
              required
            />
          </div>
          <div className='emailPass'>
            <input
              name='emailResetPassConfirm'
              onChange={handleChange}
              type='password'
              value={emailResetPassConfirm}
              placeholder='confirm password'
              required
            />
          </div>
          <div className='submitPass'>
            <button
              onClick={() => {
                console.log(emailResetPassConfirm, emailResetPassConfirm);
              }}
              type='submit'
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
