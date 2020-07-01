import React from "react";
import Nav from "../components/layout/Nav";
import LoginPage from "./LoginPage";
import LOGOw from "../assets/LOGOw.png";

const LoginArea = () => {
  return (
    <div className='login-container'>
      <Nav />
      <LoginPage />
    </div>
  );
};

export default LoginArea;
