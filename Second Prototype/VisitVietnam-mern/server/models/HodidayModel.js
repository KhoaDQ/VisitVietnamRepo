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
    Description: {
      type: String,
      required: true,
    },
    Details: {
      type: String,
      required: true,
    },
    StartDate: {
      type: Date,
      required: true,
    },
    EndDate: {
      type: Date,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
    attachment: String,
    LocationId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const HolidayModel = mongoose.model("Holiday", schema);
