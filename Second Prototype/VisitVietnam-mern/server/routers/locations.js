const express = require("express");
const { getLocations, createLocation, updateLocation, deleteLocation, getLocationById } = require("../controllers/locations.js");

const router = express.Router();

router.get("/", getLocations);
router.post("/", createLocation);
router.put("/", updateLocation);

router.delete("/:id", deleteLocation);
router.get("/:id", getLocationById);

module.exports = router;