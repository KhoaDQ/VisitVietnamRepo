import { EventModel } from "../models/EventModel.js";

export const getEvents = async (req, res) => {
  try {
    const events = await EventModel.find();
    console.log(events);
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createEvent = async (req, res) => {
  try {
    const newEvent = req.body;
    const event = new EventModel(newEvent);
    await event.save();
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateEvent = async (req, res) => {
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
