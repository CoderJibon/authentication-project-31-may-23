const asyncHandler = require("express-async-handler");
const User = require("../models/User.js");
/**
 * @desc get all user
 * @route GET /user
 * @access public
 */
const getAllUser = asyncHandler(async (req, res) => {
  // find user
  const allUser = await User.find().select("-password").lean();

  //check user
  if (!allUser?.length) {
    res.status(404).json({ message: "User Not Found" });
  }

  //response
  res.status(200).json(allUser);
});

/**
 * @desc me
 * @route get / me
 * @access public
 */
const me = (req, res) => {
  if (!req?.me) {
    return res.status(400).json({ message: "bed Request" });
  }
  return res.status(200).json(req.me);
};

/**
 * @desc Delete user
 * @route post /user
 * @access public
 */
const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "invalid id" });
  }

  // find user
  const DeleteUser = await User.findByIdAndDelete(id);

  //response
  res.status(200).json({ message: "Delete Successful" });
});
// module exports
module.exports = { getAllUser, me, deleteUser };
