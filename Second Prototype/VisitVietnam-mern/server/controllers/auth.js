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
    if (req.user) {
      const user = await UserModel.findById(req.user.userId);
      if (user) {
        res.status(200).json({
          name: user.Name,
          isAdmin: true,
        });
      }
    } else res.status(200).json({ isAdmin: false});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};