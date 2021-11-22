const express = require("express");
const { getReviews, createReview, updateReview, deleteReview, getReviewById, getByPlaceId } = require("../controllers/reviews.js");

const router = express.Router();

router.get("/", getReviews);
router.post("/", createReview);
router.put("/", updateReview);

router.get("/getByPlaceId/:id", getByPlaceId);
router.delete("/:id", deleteReview);
router.get("/:id", getReviewById);

module.exports = router;