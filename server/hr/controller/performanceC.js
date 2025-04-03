const Performance = require("../models/Performance");

// Fetch all performance data
exports.getPerformanceMetrics = async (req, res) => {
  try {
    const metrics = await Performance.find();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching performance data", error });
  }
};

// Add new performance data (for testing)
exports.addPerformanceMetric = async (req, res) => {
  try {
    const newMetric = new Performance(req.body);
    await newMetric.save();
    res.status(201).json({ message: "Performance data added", data: newMetric });
  } catch (error) {
    res.status(500).json({ message: "Error saving performance data", error });
  }
};
