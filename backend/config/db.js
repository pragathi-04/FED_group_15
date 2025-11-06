const mongoose = require("mongoose");

const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
      // options are default for mongoose v7
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
