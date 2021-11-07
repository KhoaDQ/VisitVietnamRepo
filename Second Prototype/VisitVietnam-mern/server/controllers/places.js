import { PlaceModel } from "../models/PlaceModel.js";

export const getPlaces = async (req, res) => {
  try {
    const places = await PlaceModel.find();
    console.log(places);
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPlace = async (req, res) => {
  try {
    const newPlace = req.body;
    const place = new PlaceModel(newPlace);
    await place.save();
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePlace = async (req, res) => {
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

export const getPlaceBitexco = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Test1",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceBenThanhMarket = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Test 2",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceDamSenPark = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Test 3",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceTheLandmark81 = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Test 4",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceTheCityPostOffice = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Test 5",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceTheWalkingStreet = async (req, res) => {
  try {
    const places = await PlaceModel.findOne({
      Name: "Test 6",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deletePlace = async (req, res) => {
  try {
    await PlaceModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceById = async (req, res) => {
  try {
    const place = await PlaceModel.findById(req.params.id);
    res.status(200).json(place);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
