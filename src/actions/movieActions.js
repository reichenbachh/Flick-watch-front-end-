import { SET_ERROR, GET_MOVIE_DATA, GET_DETAILS } from "./types";
import axios from "axios";

//Actions
//Fetch movie data from API
export const getMovieData = () => async (dispatch) => {
  try {
    const Upcomingres = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const TopPopulares = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const TopRatedres = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );

    dispatch({
      type: GET_MOVIE_DATA,
      payload: [Upcomingres.data, TopPopulares.data, TopRatedres.data],
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  }
};

//Fetch Movie Details Page
export const fetchDetails = (movie_id) => async (dispatch) => {
  try {
    const detailsRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );

    dispatch({
      type: GET_DETAILS,
      payload: detailsRes.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
    });
  }
};
