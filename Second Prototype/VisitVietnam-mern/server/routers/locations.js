import express from "express";
import { getLocations, createLocation, updateLocation } from "../controllers/locations.js";

const router = express.Router();

router.get("/", getLocations);
router.post("/", createLocation);
router.put("/", updateLocation);

export default router;
