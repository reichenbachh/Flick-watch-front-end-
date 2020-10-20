import {
  SEARCH_FAILED,
  SEARCH_SUCESS,
  SET_SEARCH_LOADING,
  GET_MOVIE_NEXT_PAGE,
  GET_MOVIE_PREV_PAGE,
  GET_TV_NEXT_PAGE,
  GET_TV_PREV_PAGE,
} from "./types";
import axios from "axios";

export const searchFlick = (query) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const tvsearchRes = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    const moviesearchRes = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    dispatch({
      type: SEARCH_SUCESS,
      payload: [tvsearchRes.data, moviesearchRes.data, query],
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: SEARCH_FAILED,
      payload: error.response,
    });
  }
};

export const getNextPageTV = (query, nextPage) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const nextPageRequest = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${nextPage}&include_adult=false&query=${query}`
    );
    dispatch({
      type: GET_TV_NEXT_PAGE,
      payload: nextPageRequest.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getPrevPageTV = (query, prevPage) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const prevPageRequest = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${prevPage}&include_adult=false&query=${query}`
    );
    dispatch({
      type: GET_TV_PREV_PAGE,
      payload: prevPageRequest.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const getNextPageMovie = (query, nextPage) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const nextPageRequest = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${nextPage}&include_adult=false&query=${query}`
    );
    dispatch({
      type: GET_MOVIE_NEXT_PAGE,
      payload: nextPageRequest.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getPrevPageMovie = (query, prevPage) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const prevPageRequest = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${prevPage}&include_adult=false&query=${query}`
    );
    dispatch({
      type: GET_MOVIE_PREV_PAGE,
      payload: prevPageRequest.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const setLoading = () => {
  return {
    type: SET_SEARCH_LOADING,
  };
};
