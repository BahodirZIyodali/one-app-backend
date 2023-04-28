const express = require("express");
const { readFile } = require("../utils/fs");
const router = express.Router();

const getArticle = (_, res) => {
  const article = readFile("article.json");
  return res.status(200).json(article);
};

router.get("/article", getArticle);

module.exports = router;
