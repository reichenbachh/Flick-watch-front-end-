import axios from "axios";
import { GET_TVSHOW_DATA, SET_ERROR } from "./types";

export const getTvShowData = () => async (dispatch) => {
  try {
    const airingToday = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const popularRes = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const topRatedRes = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );

    dispatch({
      type: GET_TVSHOW_DATA,
      payload: [airingToday.data, popularRes.data, topRatedRes.data],
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  }
};
