import React, { useState } from "react";
import { connect } from "react-redux";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import { resetPassword } from "../actions/authActions";
const ResetPassword = ({ resetPassword, match, loading }) => {
  const [resetFormState, setResetFormState] = useState({
    emailResetPass: "",
    emailResetPassConfirm: "",
  });
  const { emailResetPass, emailResetPassConfirm } = resetFormState;
  const handleChange = (e) => {
    setResetFormState({ ...resetFormState, [e.target.name]: e.target.value });
  };
  const handleReset = () => {
    let resetToken = match.params.resetToken;
    let password = resetFormState.emailResetPass;
    let passwordConfirm = resetFormState.emailResetPassConfirm;
    if (password !== passwordConfirm) {
      ToastsStore.error("Passwords dont match");
    } else if (password === "" || passwordConfirm === "") {
      ToastsStore.error("Please fill all fields");
    } else {
      resetPassword({ password }, resetToken);
    }
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
          {loading ? (
            <div className='submitPass'>
              <button type='submit'>...</button>
            </div>
          ) : (
            <div className='submitPass'>
              <button onClick={() => handleReset()} type='submit'>
                Reset Password
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_RIGHT}
        store={ToastsStore}
      />
    </div>
  );
};

export default connect(null, { resetPassword })(ResetPassword);
