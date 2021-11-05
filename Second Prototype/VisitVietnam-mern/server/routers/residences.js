import express from "express";
import { getResidences, createResidence, updateResidence } from "../controllers/residences.js";

const router = express.Router();

router.get("/", getResidences);
router.post("/", createResidence);
router.put("/", updateResidence);

export default router;
