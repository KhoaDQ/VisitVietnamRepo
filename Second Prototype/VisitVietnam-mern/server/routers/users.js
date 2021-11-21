const express = require("express");
const { getUsers, createUser, updateUser, deleteUser, getUserById } = require("../controllers/users.js");
const { verifyToken } = require("../middlewares/verifyToken.js");

const router = express.Router();

router.get("/", verifyToken, getUsers);
router.post("/", createUser);
router.put("/", updateUser);

router.delete("/:id", deleteUser);
router.get("/:id", getUserById);

module.exports = router;
