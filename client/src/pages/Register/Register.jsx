import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Registration } from "../../Redux/Auth/ActionReducer.js";

const Register = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  // Handle input change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // register a new submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Registration(input, setInput));
  };

  return (
    <>
      <div className="auth-body">
        <div className="auth-wraper">
          <div className="auth-featured">
            <img src="/src/assets/images/02.jpg" alt="" />
          </div>
          <div className="auth-form">
            <h2>Sign Up</h2>
            <div className="form-wraper">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={input.name}
                    onChange={handleInputChange}
                    name="name"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    onChange={handleInputChange}
                    value={input.email}
                    name="email"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={handleInputChange}
                    value={input.password}
                    name="password"
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Register In</button>
                </div>
              </form>
            </div>
            <div className="utility">
              <a href="#">Forgot password</a>
              <Link to="/login">Log In now</Link>
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

export default Register;
