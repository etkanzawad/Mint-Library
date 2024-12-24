const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    coverPhoto: { type: String }, // Add this field
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
