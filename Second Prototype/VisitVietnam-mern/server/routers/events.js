import express from "express";
import { getEvents, createEvent, updateEvent } from "../controllers/events.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/", updateEvent);

export default router;
