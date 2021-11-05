import express from "express";
import { getReviews, createReview, updateReview } from "../controllers/reviews.js";

const router = express.Router();

router.get("/", getReviews);
router.post("/", createReview);
router.put("/", updateReview);

export default router;
