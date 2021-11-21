const { SouvenirModel } = require("../models/SouvenirModel.js");

exports.getSouvenirs = async (req, res) => {
  try {
    const souvenirs = await SouvenirModel.find();
    res.status(200).json(souvenirs);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createSouvenir = async (req, res) => {
  try {
    const newSouvenir = req.body;
    const souvenir = new SouvenirModel(newSouvenir);
    await souvenir.save();
    res.status(200).json(souvenir);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateSouvenir = async (req, res) => {
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

exports.deleteSouvenir = async (req, res) => {
  try {
    await SouvenirModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getSouvenirById = async (req, res) => {
  try {
    const souvenir = await SouvenirModel.findById(req.params.id);
    res.status(200).json(souvenir);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
