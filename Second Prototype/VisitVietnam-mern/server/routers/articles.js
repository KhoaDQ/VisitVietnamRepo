import express from "express";
import {
  getArticles,
  createArticle,
  updateArticle,
  getAllArticleTopPickMaster,
} from "../controllers/articles.js";

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.put("/", updateArticle);

router.get("/getAllArticleTopPickMaster", getAllArticleTopPickMaster);

export default router;
