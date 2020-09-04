import { REGISTER_USER, SET_ERROR } from "../actions/types";

const initialState = {
  isAuthenticated: null,
  error: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isAuthenticated: action.payload.success,
        message: action.payload.data,
      };
    case SET_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
