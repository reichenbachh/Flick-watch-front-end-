import { SEARCH_FAILED, SEARCH_SUCESS, SET_LOADING } from "./types";
import axios from "axios";

export const searchFlick = (query) => async (dispatch) => {
  try {
    setLoading();
    const searchRes = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    dispatch({
      type: SEARCH_SUCESS,
      payload: searchRes.data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_FAILED,
      payload: error.response,
    });
  }
};

export const setLoading = () => {
  console.log("yes");
  return {
    type: SET_LOADING,
  };
};
