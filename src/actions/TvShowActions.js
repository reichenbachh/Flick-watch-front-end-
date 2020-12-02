import axios from "axios";
import {
  GET_TVSHOW_DATA,
  SET_ERROR,
  GET_TV_SHOW_DETAILS,
  CLEAR_STATE,
  GET_EPISODE_DETAILS,
} from "./types";
import { clearFlickState } from "./TrackedFlickActions";

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

//fetch Tv show  details
export const getShowDetails = (id) => async (dispatch) => {
  try {
    //fetch details
    const showDetails = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    //fetch trailer
    const showTrailer = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const showSimilar = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    dispatch({
      type: GET_TV_SHOW_DETAILS,
      payload: [showDetails.data, showTrailer.data, showSimilar.data],
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  }
};

export const getShowEpisode = (seasonNum, id) => async (dispatch) => {
  try {
    //fetch details
    dispatch(clearState());
    const episodeDetails = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );

    dispatch({
      type: GET_EPISODE_DETAILS,
      payload: episodeDetails.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response,
    });
  }
};

export const clearState = () => (dispatch) => {
  dispatch({
    type: CLEAR_STATE,
  });
};
