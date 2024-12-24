const express = require("express");
const Chapter = require("../models/Chapter");

const router = express.Router();

// Get a specific chapter
router.get("/:chapterId", async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.chapterId);
    if (!chapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }
    res.json(chapter);
  } catch (error) {
    res.status(500).json({ message: "Error fetching chapter", error });
  }
});

module.exports = router;
