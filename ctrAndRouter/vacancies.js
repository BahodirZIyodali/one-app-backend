const express = require("express");
const { readFile } = require("../utils/fs");
const router = express.Router();
const jobs = readFile("vacancies.json");

const getVacancies = (_, res) => {
  return res.status(200).json(jobs);
};
const getVacancy = (req, res) => {
  const { position } = req.params;
  const getOne = jobs.find((j) => j.position === position);
  return res.status(200).json(getOne);
};

router.get("/vacancies", getVacancies);
router.get("/vacancies/:position", getVacancy);
module.exports = router;
