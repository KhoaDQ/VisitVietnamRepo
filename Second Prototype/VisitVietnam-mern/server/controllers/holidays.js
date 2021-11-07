import { HolidayModel } from "../models/HolidayModel.js";

export const getHolidays = async (req, res) => {
  try {
    const holidays = await HolidayModel.find();
    res.status(200).json(holidays);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createHoliday = async (req, res) => {
  try {
    const newHoliday = req.body;
    const holiday = new HolidayModel(newHoliday);
    await holiday.save();
    res.status(200).json(holiday);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateHoliday = async (req, res) => {
  try {
    const updateHoliday = req.body;
    const holiday = await HolidayModel.findOneAndUpdate(
      { _id: updateHoliday._id },
      updateHoliday
    );

    res.status(200).json(holiday);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
