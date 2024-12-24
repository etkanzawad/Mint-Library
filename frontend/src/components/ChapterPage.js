import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Slider, Box } from "@mui/material";

function ChapterPage() {
  const { bookId, chapterId } = useParams();
  const [chapter, setChapter] = useState(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5003/api/chapters/${chapterId}`
        );
        setChapter(response.data);
      } catch (error) {
        console.error("Error fetching chapter:", error);
      }
    };

    fetchChapter();
  }, [chapterId]);

  const handleFontSizeChange = (event, newValue) => {
    setFontSize(newValue);
  };

  return (
    <Container>
      {chapter && (
        <>
          <Box mb={4}>
            <Typography variant="h4" gutterBottom>
              {chapter.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Chapter of Book ID: {bookId}
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              Adjust Font Size
            </Typography>
            <Slider
              value={fontSize}
              onChange={handleFontSizeChange}
              aria-labelledby="font-size-slider"
              min={12}
              max={36}
              valueLabelDisplay="auto"
            />
          </Box>
          <Box>
            <Typography variant="body1" style={{ fontSize: `${fontSize}px` }}>
              {chapter.content}
            </Typography>
          </Box>
        </>
      )}
    </Container>
  );
}

export default ChapterPage;
