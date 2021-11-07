import express from "express";
import { getResidences, createResidence, updateResidence, deleteResidence, getResidenceById } from "../controllers/residences.js";

const router = express.Router();

router.get("/", getResidences);
router.post("/", createResidence);
router.put("/", updateResidence);

router.delete("/:id", deleteResidence);
router.get("/:id", getResidenceById);

export default router;
