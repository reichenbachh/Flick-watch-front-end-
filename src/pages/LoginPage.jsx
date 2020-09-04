import React, { useState } from "react";

import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";

import { connect } from "react-redux";
import { RegisterUser } from "../actions/authActions";

const LoginPage = ({ auth, ToastsStore, RegisterUser }) => {
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
    }
    let userData = { username, email, password };
    console.log(userData);
    RegisterUser(userData);
  };

  const values = { ...formState };
  switch (values.step) {
    case 0:
      return (
        <div>
          <Register
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

export default connect(mapStateToProps, { RegisterUser })(LoginPage);
