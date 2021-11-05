import { ResidenceModel } from "../models/ResidenceModel.js";

export const getResidences = async (req, res) => {
  try {
    const residences = await ResidenceModel.find();
    console.log(residences);
    res.status(200).json(residences);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createResidence = async (req, res) => {
  try {
    const newResidence = req.body;
    const residence = new ResidenceModel(newResidence);
    await residence.save();
    res.status(200).json(residence);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateResidence = async (req, res) => {
  try {
    const updateResidence = req.body;
    const residence = await ResidenceModel.findOneAndUpdate(
      { _id: updateResidence._id },
      updateResidence
    );

    res.status(200).json(residence);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
