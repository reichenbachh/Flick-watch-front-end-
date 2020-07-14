import {
  GET_TRENDING,
  SET_LOADING,
  GET_ERROR,
  GET_NEXT_PAGE,
  GET_PREV_PAGE,
} from "./types";
import axios from "axios";

//Actions
export const getTrending = () => async (dispatch) => {
  //Fetch Trending List from server
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    dispatch({
      type: GET_TRENDING,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};

export const getNextPage = (nextPage) => async (dispatch) => {
  //Fetch Trending List from server
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${nextPage}`
    );
    dispatch({
      type: GET_NEXT_PAGE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};

export const getPrevPage = (prevPage) => async (dispatch) => {
  //Fetch Trending List from server
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${prevPage}`
    );
    dispatch({
      type: GET_PREV_PAGE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error,
    });
  }
};
