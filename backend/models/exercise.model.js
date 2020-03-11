const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new mongoose.Schema(
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

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
