import { REGISTER_SUCCESS, REGISTER_FAILED } from "./types";
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
    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data.error);
    dispatch({
      type: REGISTER_FAILED,
      payload: error.response,
    });
  }
};
