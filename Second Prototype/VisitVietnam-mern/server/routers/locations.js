import express from "express";
import { getLocations, createLocation, updateLocation, deleteLocation, getLocationById } from "../controllers/locations.js";

const router = express.Router();

router.get("/", getLocations);
router.post("/", createLocation);
router.put("/", updateLocation);

router.delete("/:id", deleteLocation);
router.get("/:id", getLocationById);
export default router;
