import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAR_ERROR,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from "./types";
import axios from "axios";

export const RegisterUser = (FormData) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const config = {
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

    loadUser();
  } catch (error) {
    dispatch({
      type: REGISTER_FAILED,
      payload: error.response,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.get("http://localhost:5000/flickApi/v1/auth/getMe");
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
export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
