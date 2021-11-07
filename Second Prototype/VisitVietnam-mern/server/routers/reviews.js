import express from "express";
import { getReviews, createReview, updateReview, deleteReview, getReviewById } from "../controllers/reviews.js";

const router = express.Router();

router.get("/", getReviews);
router.post("/", createReview);
router.put("/", updateReview);

router.delete("/:id", deleteReview);
router.get("/:id", getReviewById);

export default router;
