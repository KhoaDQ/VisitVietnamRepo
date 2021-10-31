import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    Description: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    AvgPrice: {
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

export const ResidenceModel = mongoose.model("Residence", schema);
