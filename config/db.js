const mongoose = require("mongoose");
require("dotenv").config(); // Import the .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Ensure this is included
      useUnifiedTopology: true, // Ensure this is included
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
