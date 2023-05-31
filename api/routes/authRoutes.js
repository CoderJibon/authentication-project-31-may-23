const express = require("express");
const {
  authUserLogin,
  refreshToken,
  logout,
  register,
} = require("../controllers/authControllers.js");

//express init
const authRouter = express.Router();

//route
authRouter.route("/login").post(authUserLogin);
authRouter.route("/refresh").get(refreshToken);
authRouter.route("/logout").post(logout);

authRouter.route("/register").post(register);

// module export
module.exports = authRouter;
