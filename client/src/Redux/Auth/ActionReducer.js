import axios from "axios";
import {
  ADD_NEW_USER,
  FAILED_USER_ME,
  GET_USER_LOGIN,
  SUCCESS_USER_ME,
  USER_lOGOUT,
} from "./ActionTypes.js";
import Alert from "../../utility/Alart.js";
//user Registration
export const Registration = (input, setInput) => async (dispatch) => {
  try {
    await axios
      .post(`http://localhost:5050/api/v1/user/register`, input)
      .then((res) => {
        if (res.status == 200) {
          Alert("error", `${res.data.message}`);
        }
        if (res.status == 201) {
          //reset form fields
          setInput({
            name: "",
            email: "",
            password: "",
          });
          dispatch({
            type: ADD_NEW_USER,
            payload: res.data.message,
          });
          Alert("success", `${res.data.message}`);
        }
      })
      .catch((err) => {
        Alert("error", `${err.response.data.message}`);
      });
  } catch (error) {
    console.error(error.message);
  }
};

//user Login
export const userLogin = (input, setInput, navigate) => async (dispatch) => {
  try {
    await axios
      .post(`http://localhost:5050/api/v1/user/login`, input, {
        withCredentials: true,
      })
      .then((res) => {
        //reset form fields
        setInput({
          email: "",
          password: "",
        });
        console.log(res.data);
        dispatch({
          type: GET_USER_LOGIN,
          payload: res.data.user,
        });
        Alert("success", `Login successful`);
        navigate("/");
      })
      .catch((err) => {
        Alert("error", `${err.response.data.message}`);
      });
  } catch (error) {
    console.error(error.message);
  }
};

//user logout
export const userLogout = (token, navigate) => async (dispatch) => {
  try {
    await axios
      .post(
        `http://localhost:5050/api/v1/user/logout`,
        { token },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status == 200) {
          Alert("success", `LogOut successful`);
          navigate("/login");
          dispatch({
            type: USER_lOGOUT,
          });
        }
      })
      .catch((err) => {
        Alert("error", `${err.response.data.message}`);
      });
  } catch (error) {
    console.error(error.message);
  }
};

//user  me
export const userMe = (token) => async (dispatch) => {
  try {
    await axios
      .get(`http://localhost:5050/api/v1/user/me`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        dispatch({
          type: SUCCESS_USER_ME,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FAILED_USER_ME,
        });
      });
  } catch (error) {
    console.error(error.message);
  }
};
