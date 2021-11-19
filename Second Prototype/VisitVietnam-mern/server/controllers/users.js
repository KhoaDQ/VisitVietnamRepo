import { UserModel } from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = new UserModel(newUser);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateUser = req.body;
    const user = await UserModel.findOneAndUpdate(
      { _id: updateUser._id },
      updateUser
    );

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
