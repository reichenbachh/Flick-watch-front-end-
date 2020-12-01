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
  loading: null,
  error: null,
  message: null,
  success: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKED_FLICK_LIST:
      console.log(action.payload);
      return {
        ...state,
        flickListData: action.payload.userflickList,
        loading: false,
        message: action.payload.message,
      };
    case FLICK_LIST_FETCH_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case FLICK_FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TRACK_FLICK:
      return {
        ...state,
        loading: false,
        success: true,
        message: action.payload[0].message,
      };
    case FLICK_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload.data.error,
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
