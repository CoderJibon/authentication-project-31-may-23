import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer.js";

const middleware = [thunk];

//create store
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

//export store
export default store;
