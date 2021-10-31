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
