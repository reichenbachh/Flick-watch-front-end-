import { SET_ERROR, GET_MOVIE_DATA } from "../actions/types";

const initialState = {
  loading: null,
  topRated: null,
  popular: null,
  upcoming: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DATA:
      return {
        loading: false,
        upcoming: action.payload[0],
        popular: action.payload[1],
        topRated: action.payload[2],
      };
    default:
      return {
        ...state,
      };
  }
};
