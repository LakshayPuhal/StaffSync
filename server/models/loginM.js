const mongoose = require("mongoose");
require("./user"); // Ensures the MongoDB connection is established

// Retrieve the existing Authentication model (if already registered)
const Authentication = mongoose.models.Authentication || mongoose.model("Authentication");

function getUserCollection() {
    return Authentication;
}

module.exports = { Authentication, getUserCollection };
