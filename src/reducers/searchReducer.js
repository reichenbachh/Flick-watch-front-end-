import {
  SEARCH_FAILED,
  SEARCH_SUCESS,
  SET_SEARCH_LOADING,
  GET_MOVIE_NEXT_PAGE,
  GET_MOVIE_PREV_PAGE,
  GET_TV_NEXT_PAGE,
  GET_TV_PREV_PAGE,
} from "../actions/types";
const initialState = {
  loading: false,
  tvSearchData: null,
  movieSearchData: null,
  totalPages: null,
  error: null,
  query: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCESS:
      return {
        ...state,
        loading: false,
        tvSearchData: action.payload[0],
        movieSearchData: action.payload[1],
        query: action.payload[2],
      };
    case GET_MOVIE_NEXT_PAGE:
    case GET_MOVIE_PREV_PAGE:
      return {
        ...state,
        loading: false,
        movieSearchData: action.payload,
      };
    case GET_TV_NEXT_PAGE:
    case GET_TV_PREV_PAGE:
      return {
        ...state,
        loading: false,
        tvSearchData: action.payload,
      };
    case SEARCH_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case SET_SEARCH_LOADING:
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
