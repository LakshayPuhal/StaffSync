const express = require("express");
const Performance = require("../../models/PerformanceM");
const router = express.Router();

// Fetch performance data
router.get("/", async (req, res) => {
  const performance = await Performance.find();
  res.json(performance);
});

// Add performance data (manual for now)
router.post("/", async (req, res) => {
  const newPerformance = new Performance(req.body);
  await newPerformance.save();
  res.json({ message: "Performance data added" });
});

module.exports = router;
