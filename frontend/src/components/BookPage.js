import React from "react";
import { Link, useParams } from "react-router-dom";

function BookPage() {
  const { bookId } = useParams();
  const chapters = [
    { id: 1, title: "Chapter 1" },
    { id: 2, title: "Chapter 2" },
    { id: 3, title: "Chapter 3" },
  ]; // Replace with API call to fetch chapters for this book

  return (
    <div>
      <h2>Book {bookId}</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link to={`/book/${bookId}/chapter/${chapter.id}`}>
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookPage;
