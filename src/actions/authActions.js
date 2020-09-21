import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAR_ERROR,
  AUTH_FAILED,
  AUTH_SUCCESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "./types";
import axios from "axios";

export const RegisterUser = (FormData) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `http://localhost:5000/flickApi/v1/auth/register`,
      FormData,
      config
    );
    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: REGISTER_FAILED,
      payload: error.response,
    });
  }
};

export const loginUser = (FormData) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "http://localhost:5000/flickApi/v1/auth/login",
      FormData,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/flickApi/v1/auth/logout",
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {
    console.log(error.respon);
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/flickApi/v1/auth/getMe",
      { withCredentials: true }
    );
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_FAILED,
      payload: error.response,
    });
  }
};
export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
