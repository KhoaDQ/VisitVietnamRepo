import express from "express";
import { getSouvenirs, createSouvenir, updateSouvenir, deleteSouvenir, getSouvenirById } from "../controllers/souvenirs.js";

const router = express.Router();

router.get("/", getSouvenirs);
router.post("/", createSouvenir);
router.put("/", updateSouvenir);

router.delete("/:id", deleteSouvenir);
router.get("/:id", getSouvenirById);

export default router;
