import { GET_TRENDING, SET_LOADING } from "../actions/types";

const initialState = {
  loading: null,
  trending: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return {
        ...state,
        trending: action.payload.results,
        loading: false,
      };
    default:
      return state;
  }
};
