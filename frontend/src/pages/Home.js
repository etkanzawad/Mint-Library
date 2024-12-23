// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { fetchChapters } from "../api";

// function Home() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const getChapters = async () => {
//       try {
//         console.log("Fetching chapters...");
//         const chapters = await fetchChapters();
//         console.log("Chapters fetched:", chapters);
//         setBooks(chapters);
//       } catch (error) {
//         console.error("Error fetching chapters:", error);
//       }
//     };

//     getChapters();
//   }, []);

//   useEffect(() => {
//     console.log("Books state updated:", books);
//   }, [books]);

//   return (
//     <div>
//       <h1>Welcome to the Mint Library</h1>
//       <ul>
//         {books.length > 0 ? (
//           books.map((book) => (
//             <li key={book.id}>
//               <Link to={`/book/${book.id}`}>{book.title}</Link>
//             </li>
//           ))
//         ) : (
//           <li>No books available</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default Home;

import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to the Mint Library</h1>
      <p>This is a test message to check if the component is rendering.</p>
    </div>
  );
}

export default Home;
