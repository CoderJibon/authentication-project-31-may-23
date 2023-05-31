import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../utility/Alart.js";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Auth/ActionReducer.js";
import {} from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //handle input change
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //handle input submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      Alert("error", "All fields are required");
    }

    if (input.email) {
      if (!input.password) {
        Alert("error", "Please enter a valid password");
      }
    }
    if (input.password) {
      if (!input.email) {
        Alert("error", "Please enter a valid email");
      }
    }
    if (input.email || input.password) {
      dispatch(userLogin(input, setInput, navigate));
    }
  };

  return (
    <>
      <div className="auth-body">
        <div className="auth-wraper">
          <div className="auth-featured">
            <img src="/src/assets/images/01.jpg" alt="" />
          </div>
          <div className="auth-form">
            <h2>Sign In</h2>
            <div className="form-wraper">
              <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={input.email}
                    onChange={handleInput}
                    name="email"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={handleInput}
                    value={input.password}
                    name="password"
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Log In</button>
                </div>
              </form>
            </div>
            <div className="utility">
              <a href="#">Forgot password</a>
              <Link to="/register">Create an account</Link>
            </div>
            <div className="social-login">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-google"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
