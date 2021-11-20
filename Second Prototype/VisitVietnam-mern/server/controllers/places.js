import { PlaceModel } from "../models/PlaceModel.js";

export const getPlaces = async (req, res) => {
  try {
    const places = await PlaceModel.find().limit(10);
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
      Name: "Bitexco",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceBenThanhMarket = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Ben Thanh Market",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceDamSenPark = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "Dam Sen Park",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceTheLandmark81 = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "The Landmark 81",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceTheCityPostOffice = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "The City Post Office",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getPlaceTheWalkingStreet = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Name: "The Walking Street",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllPlacesFood = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Type: "Food",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllPlacesSouvenir = async (req, res) => {
  try {
    const places = await PlaceModel.find({
      Type: "Souvenir",
    });
    res.status(200).json(places);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllPlacesOutfit = async (req, res) => {

  try {

    const places = await PlaceModel.find({

      Type: "Outfit",

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
