import { FoodModel } from "../models/FoodModel.js";

export const getFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();
    console.log(foods);
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createFood = async (req, res) => {
  try {
    const newFood = req.body;
    const food = new FoodModel(newFood);
    await food.save();
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateFood = async (req, res) => {
  try {
    const updateFood = req.body;
    const food = await FoodModel.findOneAndUpdate(
      { _id: updateFood._id },
      updateFood
    );

    res.status(200).json(food);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
