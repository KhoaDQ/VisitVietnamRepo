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

export const PlaceModel = mongoose.model("Place", schema);
