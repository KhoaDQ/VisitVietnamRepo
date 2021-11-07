import { LocationModel } from "../models/LocationModel.js";

export const getLocations = async (req, res) => {
  try {
    const locations = await LocationModel.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createLocation = async (req, res) => {
  try {
    const newLocation = req.body;
    const location = new LocationModel(newLocation);
    await location.save();
    res.status(200).json(location);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateLocation = async (req, res) => {
  try {
    const updateLocation = req.body;
    const location = await LocationModel.findOneAndUpdate(
      { _id: updateLocation._id },
      updateLocation
    );

    res.status(200).json(location);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteLocation = async (req, res) => {
  try {
    await LocationModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getLocationById = async (req, res) => {
  try {
    const location = await LocationModel.findById(req.params.id);
    res.status(200).json(location);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
