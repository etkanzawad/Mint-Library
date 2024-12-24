const express = require("express");
const Book = require("../models/Book");
const Chapter = require("../models/Chapter");

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
});

// Create a new book
router.post("/", async (req, res) => {
  const { title, author, description, coverPhoto } = req.body;
  try {
    const newBook = new Book({ title, author, description, coverPhoto });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
});

// Get chapters for a specific book
router.get("/:bookId/chapters", async (req, res) => {
  try {
    const chapters = await Chapter.find({ bookId: req.params.bookId });
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching chapters", error });
  }
});

// Get a specific book
router.get("/:bookId", async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
});

module.exports = router;
