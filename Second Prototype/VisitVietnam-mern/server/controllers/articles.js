import { ArticleModel } from "../models/ArticleModel.js";

export const getArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find();
    console.log(articles);
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
    const articles = await ArticleModel.findOne({
      Type: "Top pick master",
    });
    console.log(articles);
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
