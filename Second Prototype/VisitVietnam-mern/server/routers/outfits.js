import express from "express";
import { getOutfits, createOutfit, updateOutfit, deleteOutfit, getOutfitById, getAllBrand, getAllOutfit } from "../controllers/outfits.js";

const router = express.Router();

router.get("/", getOutfits);
router.post("/", createOutfit);
router.put("/", updateOutfit);

router.get("/getAllBrand", getAllBrand);
router.get("/getAllOutfit", getAllOutfit);

router.delete("/:id", deleteOutfit);
router.get("/:id", getOutfitById);

export default router;
