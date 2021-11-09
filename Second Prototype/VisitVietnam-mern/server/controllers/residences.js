import { ResidenceModel } from "../models/ResidenceModel.js";
import { PlaceModel } from "../models/PlaceModel.js";

export const getResidences = async (req, res) => {
  try {
    const residences = await ResidenceModel.find();
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

export const getAllHotel = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Hotel",
    });
    const residencePlaces = [];

    residences.forEach(async (x) => {
      var place = await PlaceModel.findById(x.PlaceId);

      var residencePlace = {
        _id: place._id,
        Name: place.Name,
        Slogan: place.Slogan,
        Overview: place.Overview,
        Phone: place.Phone,
        Email: place.Email,
        Facebook: place.Facebook,
        LinkWeb: place.LinkWeb,
        PlaceAttachment: place.attachment,
        ResidenceAttachment: x.attachment,
        Description: x.Description,
        AvgPrice: x.AvgPrice,
      };
      residencePlaces.push(residencePlace);
    });

    setTimeout(() => {
      res.status(200).json(residencePlaces);
    }, 1000);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllHostel = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Hostel",
    });
    const residencePlaces = [];

    residences.forEach(async (x) => {
      const place = await PlaceModel.find({
        _id: x.PlaceId,
      });

      const residencePlace = {
        _id: place._id,
        Name: place.Name,
        Slogan: place.Slogan,
        Overview: place.Overview,
        Phone: place.Phone,
        Email: place.Email,
        Facebook: place.Facebook,
        LinkWeb: place.LinkWeb,
        PlaceAttachment: place.attachment,
        ResidenceAttachment: x.attachment,
        Description: x.Description,
        AvgPrice: x.AvgPrice,
      };
      residencePlaces.push(residencePlace);
    });

    setTimeout(() => {
      res.status(200).json(residencePlaces);
    }, 1000);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllHomestay = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Homestay",
    });
    const residencePlaces = [];

    residences.forEach(async (x) => {
      const place = await PlaceModel.find({
        _id: x.PlaceId,
      });

      const residencePlace = {
        _id: place._id,
        Name: place.Name,
        Slogan: place.Slogan,
        Overview: place.Overview,
        Phone: place.Phone,
        Email: place.Email,
        Facebook: place.Facebook,
        LinkWeb: place.LinkWeb,
        PlaceAttachment: place.attachment,
        ResidenceAttachment: x.attachment,
        Description: x.Description,
        AvgPrice: x.AvgPrice,
      };
      residencePlaces.push(residencePlace);
    });

    setTimeout(() => {
      res.status(200).json(residencePlaces);
    }, 1000);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllVilla = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Villa",
    });
    const residencePlaces = [];

    residences.forEach(async (x) => {
      const place = await PlaceModel.find({
        _id: x.PlaceId,
      });

      const residencePlace = {
        _id: place._id,
        Name: place.Name,
        Slogan: place.Slogan,
        Overview: place.Overview,
        Phone: place.Phone,
        Email: place.Email,
        Facebook: place.Facebook,
        LinkWeb: place.LinkWeb,
        PlaceAttachment: place.attachment,
        ResidenceAttachment: x.attachment,
        Description: x.Description,
        AvgPrice: x.AvgPrice,
      };
      residencePlaces.push(residencePlace);
    });

    setTimeout(() => {
      res.status(200).json(residencePlaces);
    }, 1000);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllBungalow = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Bungalow",
    });
    const residencePlaces = [];

    residences.forEach(async (x) => {
      const place = await PlaceModel.find({
        _id: x.PlaceId,
      });

      const residencePlace = {
        _id: place._id,
        Name: place.Name,
        Slogan: place.Slogan,
        Overview: place.Overview,
        Phone: place.Phone,
        Email: place.Email,
        Facebook: place.Facebook,
        LinkWeb: place.LinkWeb,
        PlaceAttachment: place.attachment,
        ResidenceAttachment: x.attachment,
        Description: x.Description,
        AvgPrice: x.AvgPrice,
      };
      residencePlaces.push(residencePlace);
    });

    setTimeout(() => {
      res.status(200).json(residencePlaces);
    }, 1000);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllResort = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Resort",
    });
    const residencePlaces = [];

    residences.forEach(async (x) => {
      const place = await PlaceModel.find({
        _id: x.PlaceId,
      });

      const residencePlace = {
        _id: place._id,
        Name: place.Name,
        Slogan: place.Slogan,
        Overview: place.Overview,
        Phone: place.Phone,
        Email: place.Email,
        Facebook: place.Facebook,
        LinkWeb: place.LinkWeb,
        PlaceAttachment: place.attachment,
        ResidenceAttachment: x.attachment,
        Description: x.Description,
        AvgPrice: x.AvgPrice,
      };
      residencePlaces.push(residencePlace);
    });

    setTimeout(() => {
      res.status(200).json(residencePlaces);
    }, 1000);
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

export const deleteResidence = async (req, res) => {
  try {
    await ResidenceModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getResidenceById = async (req, res) => {
  try {
    const residence = await ResidenceModel.findById(req.params.id);
    res.status(200).json(residence);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
