const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("./models/Book");

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const books = [
  {
    title: "Book One",
    author: "Author One",
    description: "Description for Book One",
  },
  {
    title: "Book Two",
    author: "Author Two",
    description: "Description for Book Two",
  },
  {
    title: "Book Three",
    author: "Author Three",
    description: "Description for Book Three",
  },
];

const seedBooks = async () => {
  try {
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log("Books seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding books:", error);
    process.exit(1);
  }
};

seedBooks();
