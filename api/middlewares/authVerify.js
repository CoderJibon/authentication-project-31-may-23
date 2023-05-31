const JsonWebToken = require("../utilities/jsonwebtoken.js");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const asyncHandler = require("express-async-handler");
//middleware
const authVerify = (req, res, next) => {
  const authorization =
    req?.headers?.authorization || req?.headers?.Authorization;

  if (!authorization) {
    return res.status(400).json({ message: "Invalid Token" });
  }

  const token = authorization?.split(" ")[1];
  if (token) {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN,
      asyncHandler(async (err, decoded) => {
        if (err) {
          return res.status(400).json({ message: "Invalid Token" });
        }
        const user = await User.findOne({ email: decoded.email }).select(
          "-password"
        );

        req.me = user;
        next();
      })
    );
  }
};

//export auth
module.exports = authVerify;
