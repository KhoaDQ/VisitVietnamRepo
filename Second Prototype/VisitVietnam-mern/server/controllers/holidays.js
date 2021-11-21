const { HolidayModel } = require("../models/HolidayModel.js");

exports.getHolidays = async (req, res) => {
  try {
    const holidays = await HolidayModel.find();
    res.status(200).json(holidays);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createHoliday = async (req, res) => {
  try {
    const newHoliday = req.body;
    const holiday = new HolidayModel(newHoliday);
    await holiday.save();
    res.status(200).json(holiday);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateHoliday = async (req, res) => {
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

exports.get4HolidayUpcoming = async (req, res) => {
  try {
    const holidays = await HolidayModel.find({
      StartDate: {
        $gte: Date.now(),
      },
    }).limit(4);
    res.status(200).json(holidays);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteHoliday = async (req, res) => {
  try {
    await HolidayModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getHolidayById = async (req, res) => {
  try {
    const holiday = await HolidayModel.findById(req.params.id);
    res.status(200).json(holiday);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
