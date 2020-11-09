import {
  TRACK_FLICK,
  FLICK_ERROR,
  FLICK_LIST_FETCH_FAILED,
  GET_TRACKED_FLICK_LIST,
  FLICK_FETCH_LOADING,
  CLEAR_STATE,
  CLEAR_FLICK_STATE,
} from "../actions/types";
const initialState = {
  flickListData: null,
  loading: false,
  error: null,
  message: null,
  success: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKED_FLICK_LIST:
      return {
        ...state,
        flickListData: action.payload,
        loading: false,
      };
    case FLICK_LIST_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case FLICK_FETCH_LOADING:
      return {
        loading: true,
      };
    case TRACK_FLICK:
      return {
        ...state,
        success: true,
        message: action.payload[0].message,
        flickListData: { ...state.flickListData, ...action.payload[1] },
      };
    case FLICK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_FLICK_STATE:
      return {
        ...state,
        message: null,
        error: null,
        success: null,
      };
    default:
      return {
        ...state,
      };
  }
};
