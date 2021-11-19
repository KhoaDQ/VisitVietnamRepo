import express from "express";
import { getUsers, createUser, updateUser, deleteUser, getUserById } from "../controllers/Users.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, getUsers);
router.post("/", createUser);
router.put("/", updateUser);

router.delete("/:id", deleteUser);
router.get("/:id", getUserById);

export default router;
