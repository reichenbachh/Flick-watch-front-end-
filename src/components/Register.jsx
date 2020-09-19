import React from "react";
const Register = ({
  values,
  inputChange,
  nextStep,
  prevStep,
  sendRegisterReq,
  handleRegisterError,
  isAuthenticated,
}) => {
  const { userNameR, emailR, passwordR, passwordConR } = values;
  const toLogin = (e) => {
    e.preventDefault();
    nextStep();
  };
  const onSubmit = async () => {
    sendRegisterReq();
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
            <button onClick={onSubmit} type='submit'>
              Register{" "}
            </button>
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

export default Register;
