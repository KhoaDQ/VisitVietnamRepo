import { ReviewModel } from "../models/ReviewModel.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createReview = async (req, res) => {
  try {
    const newReview = req.body;
    const review = new ReviewModel(newReview);
    await review.save();
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateReview = async (req, res) => {
  try {
    const updateReview = req.body;
    const review = await ReviewModel.findOneAndUpdate(
      { _id: updateReview._id },
      updateReview
    );

    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteReview = async (req, res) => {
  try {
    await ReviewModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getReviewById = async (req, res) => {
  try {
    const review = await ReviewModel.findById(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
