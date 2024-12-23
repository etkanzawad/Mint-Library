// import React, { useState } from "react";
// import "./ChapterPage.css";

// function ChapterPage() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <div className={`chapter-page ${theme}`}>
//       <button onClick={toggleTheme}>
//         Switch to {theme === "light" ? "Dark" : "Light"} Mode
//       </button>
//       <h1>Chapter Title</h1>
//       <p>
//         This is the chapter content. It will be fetched dynamically from the
//         backend.
//       </p>
//       <div>
//         <h3>Comments</h3>
//         {/* Add a comments component */}
//       </div>
//       <div>
//         <h3>Reactions</h3>
//         {/* Add reactions component */}
//       </div>
//     </div>
//   );
// }

// export default ChapterPage;

import React from "react";
import "./ChapterPage.css"; // Ensure this file exists

function ChapterPage() {
  return (
    <div>
      <h1>Chapter Page</h1>
    </div>
  );
}

export default ChapterPage;
