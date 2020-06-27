import { SET_FORM_TYPE } from "../actions/types";

const initialState = {
  formType: "signIn",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_TYPE:
      return {
        ...state,
        formType: action.payload,
      };
    default:
      return state;
  }
};
