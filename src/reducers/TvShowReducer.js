import {
  GET_TVSHOW_DATA,
  SET_ERROR,
  GET_TV_SHOW_DETAILS,
  GET_TV_SHOW_TRAILER,
  CLEAR_STATE,
} from "../actions/types";

const initialState = {
  loading: null,
  popular: null,
  topRated: null,
  airingToday: null,
  details: null,
  similar: null,
  trailer: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TVSHOW_DATA:
      return {
        ...state,
        loading: false,
        popular: action.payload[1],
        topRated: action.payload[2],
        airingToday: action.payload[0],
      };
    case GET_TV_SHOW_DETAILS:
      return {
        ...state,
        loading: false,
        details: action.payload[0],
        trailer: action.payload[1],
        similar: action.payload[2],
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
