import {
  GET_TRACKED_FLICK_LIST,
  FLICK_LIST_FETCH_FAILED,
  FLICK_FETCH_LOADING,
  TRACK_FLICK,
  REMOVE_FLICK,
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
      `https://flickwatch.herokuapp.com/flickList/getMyFlickList/${user}`,
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
      "https://flickwatch.herokuapp.com/flickList/newFlickTrack",
      data,
      config
    );

    dispatch({ type: TRACK_FLICK, payload: [trackFlick.data, data] });
    dispatch(getFlickList(localStorage.getItem("id")));
  } catch (error) {
    dispatch({ type: FLICK_ERROR, payload: error.response });
  }
};

export const removeFlick = (flick_id, type, user_id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const removeFlick = await axios.delete(
      `https://flickwatch.herokuapp.com/flickList/removefromFlickList/${user_id}/${flick_id}/${type}`,
      config
    );

    dispatch({ type: REMOVE_FLICK, payload: removeFlick.data });
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
