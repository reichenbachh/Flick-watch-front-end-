import { SET_ERROR, GET_MOVIE_DATA } from "./types";
import axios from "axios";

//Actions
export const getMovieData = () => async (dispatch) => {
  //Fetch Upcoming movie List from server
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
