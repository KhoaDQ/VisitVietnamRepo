import express from "express";
import { getEvents, createEvent, updateEvent, deleteEvent, getEventById } from "../controllers/events.js";

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/", updateEvent);

router.delete("/:id", deleteEvent);
router.get("/:id", getEventById);

export default router;
