const mongoose = require("mongoose");

const PayrollSchema = new mongoose.Schema({
  employeeId: String,
  employeeName: String,
  basicSalary: Number,
  bonuses: Number,
  deductions: Number,
  netSalary: Number,
  paymentDate: Date,
  status: { type: String, enum: ["Paid", "Pending"], default: "Pending" }
});

module.exports = mongoose.model("Payroll", PayrollSchema);
