import { SEARCH_FAILED, SEARCH_SUCESS, SET_LOADING } from "../actions/types";
const initialState = {
  loading: null,
  searchData: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCESS:
      return {
        ...state,
        loading: false,
        searchData: action.payload,
      };
    case SEARCH_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
