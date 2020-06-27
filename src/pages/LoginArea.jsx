import React from "react";
import LoginPage from "./LoginPage";
import LOGOw from "../assets/LOGOw.png";

const LoginArea = () => {
  return (
    <div className='login-container'>
      <div className='logo-login'>
        <img src={LOGOw} alt='' srcset='' />
      </div>
      <LoginPage />
    </div>
  );
};

export default LoginArea;
