import React from "react";
import Nav from "../components/layout/Nav";
import LoginPage from "./LoginPage";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

const LoginArea = () => {
  return (
    <div className='login-container'>
      <Nav />
      <LoginPage ToastsStore={ToastsStore} />
      <ToastsContainer
        position={ToastsContainerPosition.TOP_RIGHT}
        store={ToastsStore}
      />
    </div>
  );
};

export default LoginArea;
