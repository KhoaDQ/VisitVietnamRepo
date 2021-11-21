const express = require("express");
const {
  getResidences,
  createResidence,
  updateResidence,
  deleteResidence,
  getResidenceById,
  getAllHotel,
  getAllHostel,
  getAllHomestay,
  getAllVilla,
  getAllBungalow,
  getAllResort,
} = require("../controllers/residences.js");

const router = express.Router();

router.get("/", getResidences);
router.post("/", createResidence);
router.put("/", updateResidence);

router.get("/getAllHotel", getAllHotel);
router.get("/getAllHostel", getAllHostel);
router.get("/getAllHomestay", getAllHomestay);
router.get("/getAllVilla", getAllVilla);
router.get("/getAllBungalow", getAllBungalow);
router.get("/getAllResort", getAllResort);

router.delete("/:id", deleteResidence);
router.get("/:id", getResidenceById);

module.exports = router;