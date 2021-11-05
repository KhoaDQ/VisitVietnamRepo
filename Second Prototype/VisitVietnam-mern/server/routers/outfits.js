import express from "express";
import { getOutfits, createOutfit, updateOutfit } from "../controllers/outfits.js";

const router = express.Router();

router.get("/", getOutfits);
router.post("/", createOutfit);
router.put("/", updateOutfit);

export default router;
