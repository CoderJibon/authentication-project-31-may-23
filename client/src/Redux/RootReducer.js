import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer.js";

//make combine Reducers
const RootReducer = combineReducers({
  auth: AuthReducer,
});

//export combineReducers
export default RootReducer;
