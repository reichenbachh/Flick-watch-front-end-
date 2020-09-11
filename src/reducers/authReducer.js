import { REGISTER_SUCCESS, REGISTER_FAILED } from "../actions/types";

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
    case REGISTER_FAILED:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload.data.error,
      };
    default:
      return state;
  }
};
