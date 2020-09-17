import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAR_ERROR,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  error: null,
  message: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        message: action.payload.data,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isAuthenticated: null,
        error: action.payload,
      };
    case REGISTER_FAILED:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload.data.error,
      };
    case CLEAR_ERROR:
      console.log(true);
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
