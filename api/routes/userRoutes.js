const express = require("express");
const {
  getAllUser,
  me,
  deleteUser,
} = require("../controllers/userControllers.js");
const authVerify = require("../middlewares/authVerify.js");

// express init
const router = express.Router();

//create route
router.route("/").get(authVerify, getAllUser);
router.route("/me").get(authVerify, me);
router.route("/:id").post(authVerify, deleteUser);

//exports module
module.exports = router;
