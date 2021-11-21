const express = require("express");
const { getEvents, createEvent, updateEvent, deleteEvent, getEventById } = require("../controllers/events.js");

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/", updateEvent);

router.delete("/:id", deleteEvent);
router.get("/:id", getEventById);

module.exports = router;
