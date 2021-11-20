import mongoose from "mongoose";

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
      default: "Anonymous",
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

export const ReviewModel = mongoose.model("Review", schema);
