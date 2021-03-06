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
    Description: {
      type: String,
    },
    Details: {
      type: String,
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
    },
    attachment: String,
    LocationId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = { HolidayModel: mongoose.model("Holiday", schema) };