import express from "express";
import { getHolidays, createHoliday, updateHoliday } from "../controllers/holidays.js";

const router = express.Router();

router.get("/", getHolidays);
router.post("/", createHoliday);
router.put("/", updateHoliday);

export default router;
