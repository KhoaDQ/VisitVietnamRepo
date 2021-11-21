const { ArticleModel } = require("../models/ArticleModel.js");

exports.getArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const newArticle = req.body;
    const article = new ArticleModel(newArticle);
    await article.save();
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.updateArticle = async (req, res) => {
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

exports.getAllArticleTopPickMaster = async (req, res) => {
  try {
    const articles = await ArticleModel.find({
      Type: "Master",
    });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getAllArticleEvent = async (req, res) => {
  try {
    const articles = await ArticleModel.find({
      Type: "Event",
    });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    await ArticleModel.findByIdAndRemove(req.params.id);
    res.status(200).json("Deleted");
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const article = await ArticleModel.findById(req.params.id);
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
