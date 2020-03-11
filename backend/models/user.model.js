const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UsersSchema);
module.exports = User;
