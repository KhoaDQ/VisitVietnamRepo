import mongoose from "mongoose";

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
    MiniType: {
      type: String,
      required: true,
    },
    Price: {
      type: String,
      required: true,
    },
    Note: {
      type: String,
      required: true,
    },
    attachment: String,
    PlaceId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const FoodModel = mongoose.model("Food", schema);
