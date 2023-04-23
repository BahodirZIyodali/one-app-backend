const express = require("express");
const { readFile } = require("../utils/fs");
const router = express.Router();

const getVacancies = (_, res) => {
  const jobs = readFile("vacancies.json");
  return res.status(200).json(jobs);
};

router.get("/vacancies", getVacancies);

module.exports = router;
