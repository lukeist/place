import { combineReducers } from "redux";
import selectedColorReducer from "./selectedColorReducer";

const utilitiesReducer = combineReducers({
  selectedColor: selectedColorReducer,
});

export default utilitiesReducer;
