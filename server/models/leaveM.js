const mongoose = require("mongoose");

const LeaveRequestSchema = new mongoose.Schema({
  employeeName: String,
  employeeId: String,
  leaveType: String, // Sick, Casual, Annual, etc.
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
  reason: String,
  appliedAt: { type: Date, default: Date.now },
} , { collection: "LeaveR" });

module.exports = mongoose.model("LeaveRequest", LeaveRequestSchema);
