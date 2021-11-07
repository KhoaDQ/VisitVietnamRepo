import { SouvenirModel } from "../models/SouvenirModel.js";

export const getSouvenirs = async (req, res) => {
  try {
    const souvenirs = await SouvenirModel.find();
    res.status(200).json(souvenirs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createSouvenir = async (req, res) => {
  try {
    const newSouvenir = req.body;
    const souvenir = new SouvenirModel(newSouvenir);
    await souvenir.save();
    res.status(200).json(souvenir);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateSouvenir = async (req, res) => {
  try {
    const updateSouvenir = req.body;
    const souvenir = await SouvenirModel.findOneAndUpdate(
      { _id: updateSouvenir._id },
      updateSouvenir
    );

    res.status(200).json(souvenir);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteSouvenir = async (req, res) => {
  try {
    await SouvenirModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getSouvenirById = async (req, res) => {
  try {
    const souvenir = await SouvenirModel.findById(req.params.id);
    res.status(200).json(souvenir);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
