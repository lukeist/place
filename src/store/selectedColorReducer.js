const setColorReducer = (state = "#ffffff", action) => {
  switch (action.type) {
    case "SET_COLOR":
      return action.payload.color;
    default:
      return state;
  }
};

export default setColorReducer;
