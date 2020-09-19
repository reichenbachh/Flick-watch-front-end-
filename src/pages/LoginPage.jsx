import React, { useState, useEffect } from "react";

import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RegisterUser, clearError, loadUser } from "../actions/authActions";

const LoginPage = ({
  history,
  auth: { isAuthenticated, error, message },
  ToastsStore,
  RegisterUser,
  clearError,
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
  }, [error, isAuthenticated]);
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
    } else if (password !== passwordConfirm) {
      ToastsStore.error("Passwords do not match");
      return;
    } else {
      let userData = { username, email, password };

      console.log(userData);
      RegisterUser(userData);
    }
  };

  //Handles Login
  const sendLoginReq = () => {
    let username = formState.userNameL;
    let password = formState.passwordL;

    if (username === "" || password === "") {
      ToastsStore.error("Please fill all fields");
    } else {
      let userData = { username, password };
      console.table(userData);
    }
  };

  //hanldes register form execptions
  const handleRegisterError = () => {
    if (error) {
      let errorMessage = error.split(":");
      ToastsStore.error(errorMessage[2]);
      console.log(errorMessage);
    }
  };

  const values = { ...formState };
  switch (values.step) {
    case 0:
      return (
        <div>
          <Register
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
          inputChange={inputChange}
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

export default connect(mapStateToProps, { RegisterUser, clearError, loadUser })(
  withRouter(LoginPage)
);
