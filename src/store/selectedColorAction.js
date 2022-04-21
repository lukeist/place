export const selectedColorAction = (color) => (dispatch) => {
  dispatch({
    type: "SET_COLOR",
    payload: {
      color,
    },
  });
};
