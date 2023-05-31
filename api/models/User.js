const mongoose = require("mongoose");

//user Schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
    role: {
      type: String,
      enum: ["Admin", "Editor", "User"],
      default: "User",
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//export modal
module.exports = mongoose.model("User", userSchema);
