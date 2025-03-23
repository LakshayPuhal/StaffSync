const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, enum: ["Full-Time", "Part-Time", "Contract"], required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    salaryRange: { type: String, required: true },
  },
  { collection: "JobPosting" } // 👈 This ensures the collection name is "JobPosting"
);

module.exports = mongoose.model("Job", jobSchema);
