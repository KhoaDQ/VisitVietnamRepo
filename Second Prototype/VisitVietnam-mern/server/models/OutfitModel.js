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
    Gender: {
      type: String,
    },
    RangeAge: {
      type: String,
    },
    Price: {
      type: String,
    },
    Note: {
      type: String,
    },
    attachment: String,
    PlaceId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = { OutfitModel: mongoose.model("Outfit", schema) };