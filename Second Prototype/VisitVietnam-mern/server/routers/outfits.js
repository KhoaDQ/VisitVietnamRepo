const express = require("express");
const { getOutfits, createOutfit, updateOutfit, deleteOutfit, getOutfitById, getAllBrand, getAllOutfit } = require("../controllers/outfits.js");

const router = express.Router();

router.get("/", getOutfits);
router.post("/", createOutfit);
router.put("/", updateOutfit);

router.get("/getAllBrand", getAllBrand);
router.get("/getAllOutfit", getAllOutfit);

router.delete("/:id", deleteOutfit);
router.get("/:id", getOutfitById);

module.exports = router;
