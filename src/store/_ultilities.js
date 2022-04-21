import { combineReducers } from "redux";
import setColorReducer from "./setColorReducer";

const utilitiesReducer = combineReducers({
  activeColor: setColorReducer,
});

export default utilitiesReducer;
