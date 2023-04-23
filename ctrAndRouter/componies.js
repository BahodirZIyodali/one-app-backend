const express = require("express");
const { readFile } = require("../utils/fs");
const router = express.Router();

const get_componies = (_, res) => {
  const jobs = readFile("componies.json");
  return res.status(200).json(jobs);
};

router.get("/componies", get_componies);

module.exports = router;
