import { FoodModel } from "../models/FoodModel.js";

export const getFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();
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

export const getAllFood = async (req, res) => {
  try {
    const foods = await FoodModel.find({
      Type: { $nin: ["Cake", "Drink"] },
      MiniType: { $nin: ["Cake", "Drink"] },
    });
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllCake = async (req, res) => {
  try {
    const foods = await FoodModel.find({
      $or: [{ Type: "Cake" }, { MiniType: "Cake" }],
    });
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllDrink = async (req, res) => {
  try {
    const foods = await FoodModel.find({
      $or: [{ Type: "Drink" }, { MiniType: "Drink" }],
    });
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteFood = async (req, res) => {
  try {
    await FoodModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getFoodById = async (req, res) => {
  try {
    const food = await FoodModel.findById(req.params.id);
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
