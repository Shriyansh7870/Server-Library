const mongoose = require("mongoose");

// Define the schema for the book
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    language: { type: String, required: true },
    pages: { type: Number, required: true },
    country: { type: String, required: true },
    imageLink: { type: String },
    link: { type: String },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

// Create a model from the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
