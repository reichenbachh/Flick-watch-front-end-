import { REGISTER_USER, SET_ERROR } from "./types";
import axios from "axios";

export const RegisterUser = (FormData) => async (dispatch) => {
  try {
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
    console.log("YEs");
    console.log(res.data);
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  }
};
