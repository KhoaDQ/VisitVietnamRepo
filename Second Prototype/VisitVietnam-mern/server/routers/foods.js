const express = require("express");
const {
  getFoods,
  createFood,
  updateFood,
  deleteFood,
  getFoodById,
  getAllFood,
  getAllCake,
  getAllDrink,
} = require("../controllers/foods.js");

const router = express.Router();

router.get("/", getFoods);
router.post("/", createFood);
router.put("/", updateFood);

router.get("/getAllFood", getAllFood);
router.get("/getAllCake", getAllCake);
router.get("/getAllDrink", getAllDrink);

router.delete("/:id", deleteFood);
router.get("/:id", getFoodById);

module.exports = router;
