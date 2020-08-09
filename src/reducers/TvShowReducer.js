import {
  GET_TVSHOW_DATA,
  SET_ERROR,
  GET_TV_SHOW_DETAILS,
} from "../actions/types";

const initialState = {
  loading: null,
  popular: null,
  topRated: null,
  airingToday: null,
  details: null,
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
        details: action.payload,
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
