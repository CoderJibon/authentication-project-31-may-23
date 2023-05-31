import React, { useEffect } from "react";
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { userMe } from "./Redux/Auth/ActionReducer.js";
function App() {
  const dispatch = useDispatch();
  const token = cookie.get("Token");

  console.log(token);
  useEffect(() => {
    dispatch(userMe(token));
  }, [dispatch]);

  return <></>;
}

export default App;
