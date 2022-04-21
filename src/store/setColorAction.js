export const setColorAction = (color) => (dispatch) => {
  dispatch({
    type: "SET_COLOR",
    payload: {
      color,
    },
  });
};
