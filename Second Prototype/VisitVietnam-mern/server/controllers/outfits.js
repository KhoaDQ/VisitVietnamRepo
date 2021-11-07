import { OutfitModel } from "../models/OutfitModel.js";

export const getOutfits = async (req, res) => {
  try {
    const outfits = await OutfitModel.find();
    res.status(200).json(outfits);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createOutfit = async (req, res) => {
  try {
    const newOutfit = req.body;
    const outfit = new OutfitModel(newOutfit);
    await outfit.save();
    res.status(200).json(outfit);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateOutfit = async (req, res) => {
  try {
    const updateOutfit = req.body;
    const outfit = await OutfitModel.findOneAndUpdate(
      { _id: updateOutfit._id },
      updateOutfit
    );

    res.status(200).json(outfit);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteOutfit = async (req, res) => {
  try {
    await OutfitModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getOutfitById = async (req, res) => {
  try {
    const outfit = await OutfitModel.findById(req.params.id);
    res.status(200).json(outfit);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
