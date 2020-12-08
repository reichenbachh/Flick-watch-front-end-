import {
  AUTH_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAR_ERROR,
  AUTH_FAILED,
  AUTH_SUCCESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  RESET_FAILED,
  RESET_SUCESS,
  RESET_PASS_FAILED,
  RESET_PASS_SUCESS,
} from "./types";
import axios from "axios";

export const RegisterUser = (FormData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `https://flickwatch.herokuapp.com/auth/register`,
      FormData,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload: error.response,
    });
  }
};

export const loginUser = (FormData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "https://flickwatch.herokuapp.com/auth/login",
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
    await axios.get("https://flickwatch.herokuapp.com/auth/logout", {
      withCredentials: true,
    });

    dispatch({
      type: LOG_OUT,
    });
  } catch (error) {}
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get("https://flickwatch.herokuapp.com/auth/getMe", {
      withCredentials: true,
    });

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILED,
      payload: error.response,
    });
  }
};
export const sendResetEmail = (FormData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://flickwatch.herokuapp.com/auth/sendResetMail",
      FormData,
      config
    );
    dispatch({
      type: RESET_SUCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: RESET_FAILED,
      payload: error.response,
    });
  }
};

export const resetPassword = (FormData, resetToken) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const config = {
      headers: {
        withCredentials: true,
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      `https://flickwatch.herokuapp.com/auth/resetPassword/${resetToken}`,
      FormData,
      config
    );
    dispatch({
      type: RESET_PASS_SUCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASS_FAILED,
      payload: error.response,
    });
  }
};

export const setLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
