import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    StarRating: {
      type: Number,
      default: 0,
    },
    Pros: {
      type: String,
      required: true,
    },
    Cons: {
      type: String,
      required: true,
    },
    Username: {
      type: String,
      default: "anonymous",
    },
    PlaceId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ReviewModel = mongoose.model("Review", schema);
