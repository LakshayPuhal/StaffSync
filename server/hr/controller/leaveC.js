const LeaveRequest = require("../../models/leaveM");

// Fetch all leave requests
const getAllLeaves = async (req, res) => {
  try {
    const leaves = await LeaveRequest.find();
    res.json(leaves);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leaves", error });
  }
};

// Create a new leave request
const createLeave = async (req, res) => {
  try {
    const newLeave = new LeaveRequest(req.body);
    await newLeave.save();
    res.status(201).json(newLeave);
  } catch (error) {
    res.status(400).json({ message: "Error creating leave request", error });
  }
};

// Update leave status
const updateLeaveStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const updatedLeave = await LeaveRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedLeave) {
      return res.status(404).json({ message: "Leave request not found" });
    }

    res.json(updatedLeave);
  } catch (error) {
    res.status(500).json({ message: "Error updating leave status", error });
  }
};

// Export the functions
module.exports = {
  getAllLeaves,
  createLeave,
  updateLeaveStatus,
};
