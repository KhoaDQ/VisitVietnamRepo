import express from "express";
import { getReviews, createReview, updateReview, deleteReview, getReviewById, getByPlaceId} from "../controllers/reviews.js";

const router = express.Router();

router.get("/", getReviews);
router.post("/", createReview);
router.put("/", updateReview);

router.get("/getByPlaceId/:id", getByPlaceId);
router.delete("/:id", deleteReview);
router.get("/:id", getReviewById);

export default router;
