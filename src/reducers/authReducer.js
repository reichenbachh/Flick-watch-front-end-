import {} from "../actions/types";

const initialState = {
  formType: "signIn",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 3:
      return {
        ...state,
        formType: action.payload,
      };
    default:
      return state;
  }
};
