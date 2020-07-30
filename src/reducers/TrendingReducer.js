import { GET_TRENDING, GET_NEXT_PAGE, GET_PREV_PAGE } from "../actions/types";

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
        trending: action.payload,
        loading: false,
      };
    case GET_NEXT_PAGE:
      return {
        ...state,
        trending: action.payload,
        loading: false,
      };
    case GET_PREV_PAGE:
      return {
        ...state,
        trending: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
