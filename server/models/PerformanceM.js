const mongoose = require("mongoose");

const PerformanceSchema = new mongoose.Schema({
  employeeName: String,
  employeeId: String,
  tasksCompleted: Number,
  hoursWorked: Number,
  performanceScore: Number,
  date: Date,
});

// Ensure Mongoose uses the correct collection name
module.exports = mongoose.model("Performance", PerformanceSchema, "ProductivityMetrics");
