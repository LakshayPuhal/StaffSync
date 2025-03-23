const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/Staff"; // Replace with your DB name

const MongoConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process on failure
  }
};

module.exports = { MongoConnect };
