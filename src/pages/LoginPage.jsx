import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import LOGOw from "../assets/LOGOw.png";
import { connect } from "react-redux";

const LoginPage = ({ auth }) => {
  console.log(auth.formType);
  if (auth.formType === "loginState") {
    console.log(true);
    return (
      <div className='login-container'>
        <div className='logo-login'>
          <img src={LOGOw} alt='' srcset='' />
        </div>
        <Login />
      </div>
    );
  } else if (auth.formType === "signIn") {
    return (
      <div className='login-container'>
        <div className='logo-login'>
          <img src={LOGOw} alt='' srcset='' />
        </div>
        <Register />
      </div>
    );
  }
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LoginPage);
