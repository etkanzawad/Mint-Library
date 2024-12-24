import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";

function Home() {
  const [books, setBooks] = useState([]);

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

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to the Mint Library
      </Typography>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item key={book._id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea component={Link} to={`/book/${book._id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={
                    book.coverPhoto || "https://via.placeholder.com/300x400"
                  } // Fallback image if coverPhoto is not available
                  alt={book.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    by {book.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
