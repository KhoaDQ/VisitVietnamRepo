import express from "express";
import { getFoods, createFood, updateFood } from "../controllers/foods.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/", createFood);
router.put("/", updateFood);

export default router;
