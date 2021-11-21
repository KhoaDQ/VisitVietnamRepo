const mongoose = require("mongoose");

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

module.exports = { ResidenceModel: mongoose.model("Residence", schema) };