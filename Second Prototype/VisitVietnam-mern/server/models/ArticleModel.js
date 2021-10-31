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
    },
    Status: {
      type: String,
    },
    attachment: String,
  },
  { timestamps: true }
);

export const ArticleModel = mongoose.model("Article", schema);
