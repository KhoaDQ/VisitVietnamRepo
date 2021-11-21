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
    Status: {
      type: String,
    },
    attachment: String,
  },
  { timestamps: true }
);

module.exports = { ArticleModel: mongoose.model("Article", schema) };