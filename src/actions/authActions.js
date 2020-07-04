import {} from "./types";

export const setFormType = (fType) => (dispatch) => {
  dispatch({
    type: "sd",
    payload: fType,
  });
};
