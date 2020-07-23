import { SET_ERROR, GET_UPCOMING_MOVIES } from "./types";
import axios from "axios";

//Actions
export const getUpcomingMovies = () => async (dispatch) => {
  //Fetch Upcoming movie List from server
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    dispatch({
      type: GET_UPCOMING_MOVIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  }
};
