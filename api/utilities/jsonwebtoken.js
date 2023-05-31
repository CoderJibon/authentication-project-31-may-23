const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

class JsonWebToken {
  //make token
  static createToken = (data) => {
    if (data) {
      return jwt.sign(data, process.env.ACCESS_TOKEN, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
      });
    }
  };
}

//module export
module.exports = JsonWebToken;
