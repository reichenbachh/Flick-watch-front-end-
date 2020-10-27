import {
  FLICK_LIST_FETCH_FAILED,
  GET_TRACKED_FLICK_LIST,
} from "../actions/types";
const initialState = {
  flickList: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRACKED_FLICK_LIST:
      return {
        ...state,
        flickList: action.payload,
      };
    case FLICK_LIST_FETCH_FAILED:
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
