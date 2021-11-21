const { EventModel } = require("../models/EventModel.js");

exports.getEvents = async (req, res) => {
  try {
    const events = await EventModel.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = req.body;
    const event = new EventModel(newEvent);
    await event.save();
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const updateEvent = req.body;
    const event = await EventModel.findOneAndUpdate(
      { _id: updateEvent._id },
      updateEvent
    );

    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await EventModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await EventModel.findById(req.params.id);
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
