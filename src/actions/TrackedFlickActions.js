import {
  GET_TRACKED_FLICK_LIST,
  FLICK_LIST_FETCH_FAILED,
  FLICK_FETCH_LOADING,
  TRACK_FLICK,
  FLICK_ERROR,
  CLEAR_FLICK_STATE,
} from "./types";
import axios from "axios";

export const getFlickList = (user) => async (dispatch) => {
  try {
    dispatch(setLoading());
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
    dispatch({
      type: GET_TRACKED_FLICK_LIST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FLICK_LIST_FETCH_FAILED,
      payload: error.response,
    });
  }
};

export const trackFlick = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const trackFlick = await axios.post(
      "http://localhost:5000/flickApi/v1/flickList/newFlickTrack",
      data,
      config
    );

    dispatch({ type: TRACK_FLICK, payload: [trackFlick.data, data] });
    dispatch(getFlickList(localStorage.getItem("id")));
  } catch (error) {
    dispatch({ type: FLICK_ERROR, payload: error.response });
  }
};

export const clearFlickState = () => {
  return {
    type: CLEAR_FLICK_STATE,
  };
};

export const setLoading = () => {
  return {
    type: FLICK_FETCH_LOADING,
  };
};
