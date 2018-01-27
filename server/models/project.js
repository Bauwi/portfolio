const mongoose = require("mongoose");

const Project = mongoose.model("Project", {
  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  createdAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = { Project };
