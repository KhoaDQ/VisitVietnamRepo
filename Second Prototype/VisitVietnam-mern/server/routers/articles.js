const  express = require("express");

const  {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getAllArticleTopPickMaster,
  getAllArticleEvent,
} = require("../controllers/articles.js");

const router = express.Router();

router.get("/", getArticles);
router.post("/", createArticle);
router.put("/", updateArticle);

router.get("/getAllArticleTopPickMaster", getAllArticleTopPickMaster);
router.get("/getAllArticleEvent", getAllArticleEvent);

router.delete("/:id", deleteArticle);
router.get("/:id", getArticleById);

module.exports = router;
