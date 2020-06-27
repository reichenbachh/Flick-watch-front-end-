import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";

import { connect } from "react-redux";

const LoginPage = ({ auth }) => {
  const [formState, setFormState] = useState({
    step: 0,
    userNameL: "",
    passwordL: "",
    usernameR: "",
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

  const values = { ...formState };
  switch (values.step) {
    case 0:
      return (
        <Register
          inputChange={inputChange}
          values={values}
          nextStep={nextStep}
        />
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

export default connect(mapStateToProps)(LoginPage);
