import { SET_FORM_TYPE } from "./types";

export const setFormType = (fType) => (dispatch) => {
  dispatch({
    type: SET_FORM_TYPE,
    payload: fType,
  });
};
