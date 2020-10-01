import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAR_ERROR,
  AUTH_FAILED,
  AUTH_SUCCESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  RESET_FAILED,
  RESET_SUCESS,
  RESET_PASS_FAILED,
  RESET_PASS_SUCESS,
} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  token: null,
  error: null,
  message: null,
  loading: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        message: action.payload.token,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isAuthenticated: null,
      };
    case REGISTER_FAILED:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload.data.error,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        message: action.payload.data,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: null,
        loading: false,
        error: action.payload.data.error,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: null,
        user: null,
        error: null,
      };
    case RESET_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
      };
    case RESET_FAILED:
      console.log(action.payload.data.error);
      return {
        ...state,
        error: action.payload.data.error,
      };
    case RESET_PASS_SUCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
