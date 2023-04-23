const express = require("express");
const { readFile } = require("../utils/fs");
const router = express.Router();

const getImg = (_, res) => {
  const images = readFile("images.json");
  return res.status(200).json(images);
};

router.get("/partner", getImg);

module.exports = router;
