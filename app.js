const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookRoutes = require("./route/bookRoute");

dotenv.config(); // Load environment variables

// Initialize express app
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api/books", bookRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Book CRUD API");
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
