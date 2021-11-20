import express from "express";

import {
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
} from "../controllers/places.js";

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

//api doc
// /**
//  * @swagger
//  * definitions:
//  *  Place:
//  *    type: object
//  *       properties:
//  *         _id:
//  *           type: string
//  *           description: The place id
//  *         Name:
//  *           type: string
//  *           description: The name of place
//  *         Type:
//  *           type: string
//  *           description: The type of place
//  *         Slogan:
//  *           type: string
//  *           description: The slogan of place
//  *         Overview:
//  *           type: string
//  *           description: The overview of place
//  *         Phone:
//  *           type: string
//  *           description: The phone of place
//  *         Email:
//  *           type: string
//  *           description: The email of place
//  *         Facebook:
//  *           type: string
//  *           description: The facebook of place
//  *         Linkweb:
//  *           type: string
//  *           description: The website of place
//  *         EvenOfPlace:
//  *           type: number
//  *           description: The event of place
//  *         likeCount:
//  *           type: number
//  *           description: The amount of like for place
//  *         attachment:
//  *           type: string
//  *           description: The image of place
//  *         createdAt:
//  *           type: string
//  *           format: date
//  *           description: Timestamps
//  *         updatedAt:
//  *           type: string
//  *           format: date
//  *           description: Timestamps
//  *         __v:
//  *           type: integer
//  *           description: Timestamps
//  *       example:
//  *         _id: 617e614158d5ae4aac34708c
//  *         Name: Bitexco
//  *         Type: Master
//  *         Slogan: oo
//  *         Overview: ""
//  *         Phone: ""
//  *         Email: ""
//  *         Facebook: ""
//  *         Linkweb: ""
//  *         EventOfPlace: 0
//  *         likeCount: 0
//  *         attachment: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/
//  *         date: 2021-09-07T09:54:36.726Z
//  *         createdAt: 2021-09-08T09:54:36.726Z
//  *         updatedAt: 2021-09-08T09:54:36.726Z
//  *         __v: 0
//  */

// /**
//  * @swagger
//  * tags:
//  *   name: Places
//  *   description: The places managing API
//  */

// /**
//  * @swagger
//  * /places:
//  *   get:
//  *     summary: Get all places log
//  *     tags: [Places]
//  *     responses:
//  *       '200':
//  *         description: A list of places log.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   _id:
//  *                     type: string
//  *                   Name:
//  *                     type: string
//  *                   Type:
//  *                     type: string
//  *                   Slogan:
//  *                     type: string
//  *                   Overview:
//  *                     type: string
//  *                   Phone:
//  *                     type: string
//  *                   Email:
//  *                     type: string
//  *                   Facebook:
//  *                     type: string
//  *                   Linkweb:
//  *                     type: string
//  *                   EvenOfPlace:
//  *                     type: number
//  *                   likeCount:
//  *                     type: number
//  *                   attachment:
//  *                     type: string 
//  *                   createdAt:
//  *                     type: string
//  *                     format: date
//  *                   updatedAt:
//  *                     type: string
//  *                     format: date
//  *                   __v:
//  *                     type: integer
//  */

 router.route("/").get((req, res) => {
  PlaceModel.find()
    .then((places) => res.json(places))
    .catch((err) => res.status(400).json("Error: " + err));
});



router.delete("/:id", deletePlace);
router.get("/:id", getPlaceById);

export default router;
