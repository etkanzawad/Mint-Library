const express = require("express");
const {
  authenticateToken,
  verifyAdmin,
} = require("../middleware/authMiddleware");
const Chapter = require("../models/Chapter");

const router = express.Router();

// Add a chapter
router.post("/", authenticateToken, verifyAdmin, async (req, res) => {
  const { title, content, isPaid, bookId } = req.body;
  try {
    const chapter = new Chapter({ title, content, isPaid, bookId });
    await chapter.save();
    res.status(201).json(chapter);
  } catch (error) {
    res.status(500).json({ message: "Error adding chapter", error });
  }
});

module.exports = router;
