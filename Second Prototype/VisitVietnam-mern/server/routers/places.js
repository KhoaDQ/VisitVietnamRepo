import express from "express";
import { getPlaces, createPlace, updatePlace } from "../controllers/places.js";

const router = express.Router();

router.get("/", getPlaces);
router.post("/", createPlace);
router.put("/", updatePlace);

export default router;
