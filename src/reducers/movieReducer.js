import { GET_UPCOMING_MOVIES, SET_ERROR } from "../actions/types";

const initialState = {
  loading: null,
  latest: null,
  trending: null,
  upcoming: null,
  nowPLaying: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_MOVIES:
      return {
        loading: false,
        latest: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
