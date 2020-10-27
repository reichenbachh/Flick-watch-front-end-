import { GET_TRACKED_FLICK_LIST, FLICK_LIST_FETCH_FAILED } from "./types";
import axios from "axios";

export const getFlickList = (user) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(
      `http://localhost:5000/flickApi/v1/flickList/getMyFlickList/${user}`,
      config
    );
    console.log(res.data);
    dispatch({
      type: GET_TRACKED_FLICK_LIST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: FLICK_LIST_FETCH_FAILED,
      payload: error.response,
    });
  }
};
