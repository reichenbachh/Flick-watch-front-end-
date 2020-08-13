import {
  SET_ERROR,
  GET_MOVIE_DATA,
  GET_DETAILS,
  CLEAR_STATE,
} from "../actions/types";

const initialState = {
  loading: null,
  topRated: null,
  popular: null,
  upcoming: null,
  details: null,
  trailer: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DATA:
      return {
        ...state,
        loading: false,
        upcoming: action.payload[0],
        popular: action.payload[1],
        topRated: action.payload[2],
      };
    case GET_DETAILS:
      return {
        ...state,
        loading: false,
        details: action.payload[0],
        trailer: action.payload[1],
      };
    case CLEAR_STATE:
      return {
        ...state,
        details: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
