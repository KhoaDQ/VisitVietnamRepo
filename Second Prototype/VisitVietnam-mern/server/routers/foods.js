import express from "express";
import { getFoods, createFood, updateFood, deleteFood, getFoodById } from "../controllers/foods.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/", createFood);
router.put("/", updateFood);

router.delete("/:id", deleteFood);
router.get("/:id", getFoodById);

export default router;
