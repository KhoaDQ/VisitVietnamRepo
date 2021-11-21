const { OutfitModel } = require("../models/OutfitModel.js");

exports.getOutfits = async (req, res) => {
  try {
    const outfits = await OutfitModel.find();
    res.status(200).json(outfits);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createOutfit = async (req, res) => {
  try {
    const newOutfit = req.body;
    const outfit = new OutfitModel(newOutfit);
    await outfit.save();
    res.status(200).json(outfit);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateOutfit = async (req, res) => {
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


exports.getAllBrand = async (req, res) => {
  try {
    const brands = await OutfitModel.find({
      Type: "Brand",
    });
    res.status(200).json(brands);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
exports.getAllOutfit = async (req, res) => { 
  try { const brands = await OutfitModel.find({ 
    Type: { $nin: ["Brand"] }, 
  }); 
  res.status(200).json(brands); 
} catch (err) { res.status(500).json({ error: err }); 
} 
};

exports.deleteOutfit = async (req, res) => {
  try {
    await OutfitModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getOutfitById = async (req, res) => {
  try {
    const outfit = await OutfitModel.findById(req.params.id);
    res.status(200).json(outfit);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
