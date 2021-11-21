const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Slogan: {
      type: String,
    },
    Overview: {
      type: String,
    },
    Phone: {
      type: String,
    },
    Email: {
      type: String,
    },
    Facebook: {
      type: String,
    },
    LinkWeb: {
      type: String,
    },
    EventOfPlace: {
      type: Number,
      default: 0,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    attachment: String,
  },
  { timestamps: true }
);

module.exports = { PlaceModel: mongoose.model("Place", schema) };