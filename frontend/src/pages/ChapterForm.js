import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

function ChapterForm() {
  const [books, setBooks] = useState([]);
  const [chapterData, setChapterData] = useState({
    title: "",
    content: "",
    bookId: "",
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5003/api/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChapterData({ ...chapterData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5003/api/chapters", chapterData);
      console.log("Chapter submitted:", chapterData);
    } catch (error) {
      console.error("Error submitting chapter:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Chapter
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="book-select-label">Select Book</InputLabel>
          <Select
            labelId="book-select-label"
            name="bookId"
            value={chapterData.bookId}
            onChange={handleChange}
            required
          >
            {books.map((book) => (
              <MenuItem key={book._id} value={book._id}>
                {book.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Chapter Title"
          name="title"
          value={chapterData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Chapter Content"
          name="content"
          value={chapterData.content}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={10}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default ChapterForm;
