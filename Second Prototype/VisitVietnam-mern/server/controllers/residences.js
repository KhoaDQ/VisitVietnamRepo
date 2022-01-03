const { ResidenceModel } = require("../models/ResidenceModel.js");
const { PlaceModel } = require("../models/PlaceModel.js");

exports.getResidences = async (req, res) => {
  try {
    const residences = await ResidenceModel.find();
    res.status(200).json(residences);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createResidence = async (req, res) => {
  try {
    const newResidence = req.body;
    const residence = new ResidenceModel(newResidence);
    await residence.save();
    res.status(200).json(residence);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllHotel = async (req, res) => {
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

exports.getAllHostel = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Hostel",
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

exports.getAllHomestay = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Homestay",
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

exports.getAllVilla = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Villa",
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

exports.getAllBungalow = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Bungalow",
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

exports.getAllResort = async (req, res) => {
  try {
    const residences = await ResidenceModel.find({
      Type: "Resort",
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

exports.updateResidence = async (req, res) => {
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

exports.deleteResidence = async (req, res) => {
  try {
    await ResidenceModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getResidenceById = async (req, res) => {
  try {
    const residence = await ResidenceModel.findById(req.params.id);
    res.status(200).json(residence);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
