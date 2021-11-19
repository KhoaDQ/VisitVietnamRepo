import { UserModel } from "../models/UserModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const newUser = req.body;
    const user = new UserModel(newUser);
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.SECRET);
    res.status(200).json({ user: user, token: token });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      Email: req.body.Email
    })
    
    if (!user) {
      res.status(203).json({ error: "Email is invalid!" });
    }
    else {
      if (bcrypt.compareSync(req.body.Password, user.Password)) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET);
        res.status(200).json({ user: user, token: token });
      } else {
        res.status(203).json({ error: "Password is wrong!" });
      };
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getCurrentUser = async (req, res, next) => {
  try {
    let userName = null;
    if (req.user) {
      const user = await UserModel.findById(req.user.userId);
      userName = user.Name;
      if (user.Role == "Admin")
        res.status(200).json(true)
      else res.status(200).json(false);
    } else res.status(200).json(false);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};