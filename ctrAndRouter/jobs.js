const express = require("express");
const { readFile } = require("../utils/fs");
const router = express.Router();

const getJobs = (_, res) => {
  const jobs = readFile("jobs.json");
  return res.status(200).json(jobs);
};

router.get("/jobs", getJobs);

module.exports = router;
