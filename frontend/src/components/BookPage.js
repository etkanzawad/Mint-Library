import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

function BookPage() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        console.log("Fetching book details for book:", bookId);
        const bookResponse = await axios.get(
          `http://localhost:5003/api/books/${bookId}`
        );
        console.log("Book details fetched:", bookResponse.data);
        setBook(bookResponse.data);

        const chaptersResponse = await axios.get(
          `http://localhost:5003/api/books/${bookId}/chapters`
        );
        console.log("Chapters fetched:", chaptersResponse.data);
        setChapters(chaptersResponse.data);
      } catch (error) {
        console.error("Error fetching book details or chapters:", error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  return (
    <Container>
      {book && (
        <Box mb={4}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={book.coverPhoto}
              alt={book.title}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                by {book.author}
              </Typography>
              <Typography variant="body1">{book.description}</Typography>
            </CardContent>
          </Card>
        </Box>
      )}
      <Typography variant="h4" gutterBottom>
        Chapters
      </Typography>
      <Paper elevation={3}>
        <List>
          {chapters.map((chapter) => (
            <ListItem
              button
              component={Link}
              to={`/book/${bookId}/chapter/${chapter._id}`}
              key={chapter._id}
            >
              <ListItemText primary={chapter.title} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default BookPage;
