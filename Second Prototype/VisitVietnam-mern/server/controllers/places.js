const { PlaceModel } = require("../models/PlaceModel.js");

exports.getPlaces = async (req, res) => {
  try {
    const places = await PlaceModel.find();
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createPlace = async (req, res) => {
  try {
    const newPlace = req.body;
    const place = new PlaceModel(newPlace);
    await place.save();
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updatePlace = async (req, res) => {
  try {
    const updatePlace = req.body;
    const place = await PlaceModel.findOneAndUpdate(
      { _id: updatePlace._id },
      updatePlace
    );

    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPlaceBitexco = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Bitexco",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPlaceBenThanhMarket = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Ben Thanh Market",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPlaceDamSenPark = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Dam Sen Park",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPlaceTheLandmark81 = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "The Landmark 81",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPlaceTheCityPostOffice = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "The City Post Office",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPlaceTheWalkingStreet = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "The Walking Street",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllPlacesFood = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Type: "Food",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllPlacesSouvenir = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Type: "Souvenir",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllPlacesOutfit = async (req, res) => {

  try {

    const places = await PlaceModel.find({

      Type: "Outfit",

    });

    res.status(200).json(places);

  } catch (err) {

    res.status(500).json({ error: err });

  }

};

exports.deletePlace = async (req, res) => {
  try {
    await PlaceModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getPlaceById = async (req, res) => {
  try {
    const place = await PlaceModel.findById(req.params.id);
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
