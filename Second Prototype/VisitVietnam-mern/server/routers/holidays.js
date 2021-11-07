import express from "express";
import { getHolidays, createHoliday, updateHoliday, deleteHoliday, getHolidayById } from "../controllers/holidays.js";

const router = express.Router();

router.get("/", getHolidays);
router.post("/", createHoliday);
router.put("/", updateHoliday);

router.delete("/:id", deleteHoliday);
router.get("/:id", getHolidayById);
export default router;
