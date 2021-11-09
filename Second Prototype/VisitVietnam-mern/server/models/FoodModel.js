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
    },
    Note: {
      type: String,
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
