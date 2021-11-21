const express = require("express");
const { getSouvenirs, createSouvenir, updateSouvenir, deleteSouvenir, getSouvenirById } = require("../controllers/souvenirs.js");

const router = express.Router();

router.get("/", getSouvenirs);
router.post("/", createSouvenir);
router.put("/", updateSouvenir);

router.delete("/:id", deleteSouvenir);
router.get("/:id", getSouvenirById);

module.exports = router;