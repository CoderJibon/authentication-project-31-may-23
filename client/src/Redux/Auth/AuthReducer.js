import {
  ADD_NEW_USER,
  FAILED_USER_ME,
  GET_USER_LOGIN,
  SUCCESS_USER_ME,
  USER_lOGOUT,
} from "./ActionTypes.js";
import initialState from "./initialState.js";

// auth Reducer
const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_USER:
      return {
        ...state,
        message: payload,
      };
    case GET_USER_LOGIN:
      return {
        ...state,
        user: payload,
        loginStatus: true,
      };
    case USER_lOGOUT:
      return {
        ...state,
        user: null,
        loginStatus: false,
      };

    case SUCCESS_USER_ME:
      return {
        ...state,
        user: payload,
        loginStatus: true,
      };

    case FAILED_USER_ME:
      return {
        ...state,
        user: null,
        loginStatus: false,
      };
    default:
      return state;
  }
};

//export default AuthReducer
export default AuthReducer;
