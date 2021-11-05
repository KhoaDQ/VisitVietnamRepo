import express from "express";
import { getArticles, createArticle, updateArticle } from "../controllers/articles.js";

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.put("/", updateArticle);

export default router;
