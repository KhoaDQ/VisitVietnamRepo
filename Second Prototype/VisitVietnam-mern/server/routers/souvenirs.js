import express from "express";
import { getSouvenirs, createSouvenir, updateSouvenir } from "../controllers/souvenirs.js";

const router = express.Router();

router.get("/", getSouvenirs);
router.post("/", createSouvenir);
router.put("/", updateSouvenir);

export default router;
