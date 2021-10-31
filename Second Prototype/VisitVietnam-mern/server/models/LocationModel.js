import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    Details: {
      type: String,
    },
    Street: {
      type: String,
    },
    Ward: {
      type: String,
    },
    District: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    PlaceId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const LocationModel = mongoose.model("Location", schema);
