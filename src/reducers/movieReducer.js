import { SET_ERROR, GET_MOVIE_DATA, GET_DETAILS } from "../actions/types";

const initialState = {
  loading: null,
  topRated: null,
  popular: null,
  upcoming: null,
  details: null,
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
    case GET_DETAILS:
      return {
        loading: false,
        details: action.payload,
      };
    case SET_ERROR:
      return {
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
