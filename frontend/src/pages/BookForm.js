import React, { useState } from "react";
import axios from "axios";
import { Container, Typography, TextField, Button } from "@mui/material";

function BookForm() {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    coverPhoto: "", // Add this field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5003/api/books",
        bookData
      );
      console.log("Book submitted:", response.data);
    } catch (error) {
      console.error("Error submitting book:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Book
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Book Title"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Author"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          name="description"
          value={bookData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          label="Cover Photo URL"
          name="coverPhoto"
          value={bookData.coverPhoto}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default BookForm;
