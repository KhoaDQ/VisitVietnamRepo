const { ReviewModel } = require("../models/ReviewModel.js");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createReview = async (req, res) => {
  try {
    const newReview = req.body;
    const review = new ReviewModel(newReview);
    await review.save();
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateReview = async (req, res) => {
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

exports.deleteReview = async (req, res) => {
  try {
    await ReviewModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await ReviewModel.findById(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getByPlaceId = async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ PlaceId: req.params.id});
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};