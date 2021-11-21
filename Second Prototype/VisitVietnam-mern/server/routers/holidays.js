const express = require("express");
const {
  getHolidays,
  createHoliday,
  updateHoliday,
  deleteHoliday,
  getHolidayById,
  get4HolidayUpcoming,
} = require("../controllers/holidays.js");

const router = express.Router();

router.get("/", getHolidays);
router.post("/", createHoliday);
router.put("/", updateHoliday);

router.get("/get4HolidayUpcoming", get4HolidayUpcoming);

router.delete("/:id", deleteHoliday);
router.get("/:id", getHolidayById);

module.exports = router;