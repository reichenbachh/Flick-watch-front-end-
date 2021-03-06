import React, { useState, useEffect } from "react";

import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  RegisterUser,
  clearError,
  loadUser,
  loginUser,
  sendResetEmail,
} from "../actions/authActions";

const LoginPage = ({
  history,
  auth: { isAuthenticated, error, message, loading },
  ToastsStore,
  loginUser,
  RegisterUser,
  sendResetEmail,
  clearError,
  user,
}) => {
  useEffect(() => {
    //called when isAuthenticated state changes to true when login in authorised
    if (isAuthenticated) {
      history.push("/trending");
    }
    if (error) {
      ToastsStore.error(error);
      clearError();
    }

    if (message) {
      ToastsStore.success(message);
    }
  }, [error, isAuthenticated, message]);
  const [formState, setFormState] = useState({
    step: 0,
    userNameL: "",
    passwordL: "",
    userNameR: "",
    emailR: "",
    passwordR: "",
    passwordConR: "",
    emailForgot: "",
  });

  // Handles form change based on link clicked,
  const inputChange = (input) => (e) => {
    setFormState({ ...formState, [input]: e.target.value });
  };
  const nextStep = () => {
    const { step } = formState;
    setFormState({ ...formState, step: step + 1 });
  };
  const prevStep = () => {
    const { step } = formState;
    setFormState({ ...formState, step: step - 1 });
  };

  const validateUsername = (username) => {
    const userNameRegex = /[a-z0-9_-]/;
    return userNameRegex.test(username);
  };

  const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };
  //Handles registration
  const sendRegisterReq = () => {
    let username = formState.userNameR;
    let email = formState.emailR;
    let password = formState.passwordR;
    let passwordConfirm = formState.passwordConR;
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      ToastsStore.error("Please fill all the fields");
    } else if (!validateUsername(username)) {
      ToastsStore.error(
        "usernames cannot have special characters except hyphens and underscores"
      );
    } else if (password !== passwordConfirm) {
      ToastsStore.error("Passwords do not match");
      return;
    } else {
      let userData = { username, email, password };
      RegisterUser(userData);
    }
  };

  //Handles Login
  const sendLoginReq = () => {
    let loginInput = formState.userNameL;
    let password = formState.passwordL;

    if (loginInput === "" || password === "") {
      ToastsStore.error("Please fill all fields");
    } else {
      const userNameRegex = /^[a-z0-9_-]{3,15}$/;
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //test input string with regex to check if its an email or username
      //@todo
      //find more suitable approcah
      const isEmail = emailRegex.exec(loginInput);
      const isUserName = userNameRegex.exec(loginInput);

      if (isEmail) {
        let userData = { email: loginInput, password };
        loginUser(userData);
      } else {
        let userData = { username: loginInput, password };
        loginUser(userData);
      }
    }
  };

  //send email to server for password reset
  const sendEmail = () => {
    let email = formState.emailForgot;
    if (email === "") {
      ToastsStore.error("Please enter your email");
    }
    sendResetEmail({ email });
  };

  //hanldes register form execptions
  const handleRegisterError = () => {
    if (error) {
      let errorMessage = error.split(":");
      ToastsStore.error(errorMessage[2]);
    }
  };

  const values = { ...formState };
  switch (values.step) {
    case 0:
      return (
        <div>
          <Register
            loading={loading}
            handleRegisterError={handleRegisterError}
            isAuthenticated={isAuthenticated}
            sendRegisterReq={sendRegisterReq}
            inputChange={inputChange}
            values={values}
            nextStep={nextStep}
          />
        </div>
      );
    case 1:
      return (
        <Login
          loading={loading}
          sendLoginReq={sendLoginReq}
          inputChange={inputChange}
          prevStep={prevStep}
          values={values}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <ForgetPassword
          loading={loading}
          sendEmail={sendEmail}
          inputChange={inputChange}
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );
    default:
      return <p>Lets goooo</p>;
  }
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  RegisterUser,
  clearError,
  loadUser,
  loginUser,
  sendResetEmail,
})(withRouter(LoginPage));
