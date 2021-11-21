const  express = require("express");

const {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
  getPlaceBitexco,
  getPlaceBenThanhMarket,
  getPlaceDamSenPark,
  getPlaceTheLandmark81,
  getPlaceTheCityPostOffice,
  getPlaceTheWalkingStreet,
  getAllPlacesFood,
  getAllPlacesSouvenir,
  getAllPlacesOutfit,
} = require("../controllers/places.js");

const router = express.Router();

router.get("/", getPlaces);
router.post("/", createPlace);
router.put("/", updatePlace);

router.get("/getPlaceBitexco", getPlaceBitexco);
router.get("/getPlaceBenThanhMarket", getPlaceBenThanhMarket);
router.get("/getPlaceDamSenPark", getPlaceDamSenPark);
router.get("/getPlaceTheLandmark81", getPlaceTheLandmark81);
router.get("/getPlaceTheCityPostOffice", getPlaceTheCityPostOffice);
router.get("/getPlaceTheWalkingStreet", getPlaceTheWalkingStreet);
router.get("/getAllPlacesFood", getAllPlacesFood);
router.get("/getAllPlacesSouvenir",getAllPlacesSouvenir);
router.get("/getAllPlacesOutfit", getAllPlacesOutfit);

router.delete("/:id", deletePlace);
router.get("/:id", getPlaceById);

module.exports = router;
