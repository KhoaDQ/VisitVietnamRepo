import { ArticleModel } from "../models/ArticleModel.js";

export const getArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createArticle = async (req, res) => {
  try {
    const newArticle = req.body;
    const article = new ArticleModel(newArticle);
    await article.save();
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const updateArticle = req.body;
    const article = await ArticleModel.findOneAndUpdate(
      { _id: updateArticle._id },
      updateArticle
    );

    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllArticleTopPickMaster = async (req, res) => {
  try {
    const articles = await ArticleModel.find({
      Type: "Master",
    });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getAllArticleEvent = async (req, res) => {
  try {
    const articles = await ArticleModel.find({
      Type: "Event",
    });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    await ArticleModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
