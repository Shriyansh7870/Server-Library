const mongoose = require("mongoose");

// Define the schema for the book
const bookSchema = new mongoose.Schema(
  {
    title: { type: String },
    author: { type: String },
    year: { type: Number },
    language: { type: String },
    pages: { type: Number },
    country: { type: String },
    imageLink: { type: String },
    link: { type: String },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

// Create a model from the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
