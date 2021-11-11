import express from "express";
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getAllArticleTopPickMaster,
  getAllArticleEvent,
} from "../controllers/articles.js";

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.put("/", updateArticle);

router.get("/getAllArticleTopPickMaster", getAllArticleTopPickMaster);
router.get("/getAllArticleEvent", getAllArticleEvent);

router.delete("/:id", deleteArticle);
router.get("/:id", getArticleById);

export default router;
