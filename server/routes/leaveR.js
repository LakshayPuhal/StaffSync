const express = require("express");
const { getAllLeaves, createLeave, updateLeaveStatus } = require("../controller/leaveC");
const router = express.Router();

// Fetch all leave requests
router.get("/", getAllLeaves);

// Create a leave request (if you want frontend users to submit leaves)
router.post("/", createLeave);

// Update leave status
router.put("/:id", updateLeaveStatus);

module.exports = router;
