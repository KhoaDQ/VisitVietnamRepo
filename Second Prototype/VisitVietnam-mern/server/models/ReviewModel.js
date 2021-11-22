const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    StarRating: {
      type: Number,
      default: 0,
    },
    Pros: {
      type: String,
    },
    Cons: {
      type: String,
    },
    Username: {
      type: String,
      default: "anonymous",
    },
    UserId:{
      type: String,
    },
    PlaceId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { ReviewModel: mongoose.model("Review", schema) };