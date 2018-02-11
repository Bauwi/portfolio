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
  type: {
    type: String,
    required: true,
    minLength: 1
  },
  options: {
    type: Array,
    required: true
  },
  createdAt: {
    type: Number,
    required: true
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  url: {
    type: String,
    minLength: 1
  },
  github: {
    type: String,
    required: true,
    minLength: 1
  },
  stats: {
    numOfComponents: {
      type: Number,
      required: true
    },
    clientjs: {
      type: Number,
      required: true
    },
    serverjs: {
      type: Number,
      required: true
    },
    css: {
      type: Number,
      required: true
    },
    html: {
      type: Number,
      required: true
    }
  }
});

module.exports = { Project };
