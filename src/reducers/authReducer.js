import {
  AUTH_LOADING,
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
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        message: action.payload.token,
        loading: false,
      };
    case AUTH_SUCCESS:
      if (!localStorage.getItem("id")) {
        localStorage.setItem("id", action.payload.user._id);
      }
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
        loading: false,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: null,
        loading: false,
        error: action.payload.data.error,
      };
    case LOG_OUT:
      localStorage.removeItem("id");
      return {
        ...state,
        isAuthenticated: false,
        loading: null,
        user: null,
        error: null,
      };
    case RESET_SUCESS:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };
    case RESET_FAILED:
      return {
        ...state,
        error: action.payload.data.error,
        loading: false,
      };
    case RESET_PASS_SUCESS:
      return {
        ...state,
        loading: false,
        // isAuthenticated: true,
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
