const express = require("express");
const { getJobs, createJob } = require("../controller/jobPostingC");

const router = express.Router();

router.get("/", getJobs);    // Fetch jobs
router.post("/", createJob); // Post a job

module.exports = router;
