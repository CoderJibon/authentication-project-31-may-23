const asyncHandler = require("express-async-handler");
const User = require("../models/User.js");
const bcrypt = require("../utilities/bcrypt.js");
const JsonWebToken = require("../utilities/jsonwebtoken.js");
const jwt = require("jsonwebtoken");
const { makeHash } = require("../utilities/bcrypt.js");

/**
 * @desc login user
 * @route post / login
 * @access public
 */
const authUserLogin = asyncHandler(async (req, res) => {
  //login info
  const { email, password } = req.body;

  //check auth
  if (!email || !password) {
    return res.status(400).json({ message: "All Fields Are Required !" });
  }

  //check email
  const user = await User.findOne({ email }).lean();

  //email validated
  if (!user) {
    return res.status(404).json({ message: "Invalid Email Address !" });
  }

  //password validated
  const isPassword = bcrypt.compareHash(password, user.password);

  if (isPassword === false) {
    return res.status(400).json({ message: "Password does not match !" });
  }

  //access token
  const createAccessToken = JsonWebToken.createToken({
    email: user.email,
  });

  //REFRESH TOKEN
  // const createRefreshToken = JsonWebToken.createToken({
  //   email: isEmail.email,
  // });

  //refreshToken
  res.cookie("Token", createAccessToken);

  //user response
  return res
    .status(200)
    .json({ message: "Login successfully", Token: createAccessToken, user });
});

/**
 * @desc refreshToken
 * @route get / token
 * @access public
 */
const refreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies) {
    return res.status(400).json({ message: "bed Request" });
  }
  const Token = cookies?.Token;
  if (!Token) {
    return res.status(400).json({ message: "bed Request" });
  }

  jwt.verify(
    Token,
    process.env.ACCESS_TOKEN,
    asyncHandler(async (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Token" });
      }
      const user = await User.findOne({ email: decoded.email }).select(
        "-password"
      );

      if (!user) {
        return res.status(400).json({ message: "User Not Found" });
      }

      //access token
      const createAccessToken = JsonWebToken.createToken({
        email: user.email,
      });

      return res.status(200).json({ accessToken: createAccessToken });
    })
  );
};

/**
 * @desc user Logout
 * @route post / logout
 * @access public
 */
const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.Token) {
    return res.status(400).json({ message: "bed Request" });
  }
  res
    .clearCookie("Token", {
      httpOnly: true,
      secure: false,
    })
    .json({ message: "logout success" });
};

/**
 * @desc register user
 * @route post / register
 * @access public
 */

const register = asyncHandler(async (req, res) => {
  //get body data
  const { name, email, password } = req.body;

  //check validation
  if (!email || !password || !name) {
    //response
    return res.status(200).json({ message: "All Fields Are Required" });
  }

  //check E mail
  if (email) {
    const getUserMail = await User.findOne({ email: email });

    if (getUserMail?.email === email) {
      //response
      return res.status(200).json({ message: "Email Already exist" });
    } else {
      //create user
      const user = await User.create({
        name,
        email,
        password: makeHash(password),
      });

      //response

      return res.status(201).json({ message: "User created successful" });
    }
  }
});

// module export
module.exports = { authUserLogin, refreshToken, logout, register };
