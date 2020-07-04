import { GET_TRENDING, SET_LOADING, GET_ERROR } from "./types";
import axios from "axios";

//Actions
export const getTrending = () => async (dispatch) => {
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

//Set loading
// export const setLoading = () => {
//   return {
//     type: SET_LOADING,
//   };
// };
