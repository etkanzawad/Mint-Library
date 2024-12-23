import React, { useState } from "react";

function ChapterForm() {
  const [chapterData, setChapterData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChapterData({ ...chapterData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API request to backend to add chapter
    console.log("Chapter submitted:", chapterData);
  };

  return (
    <div>
      <h2>Add Chapter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Chapter Title</label>
          <input
            type="text"
            name="title"
            value={chapterData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Chapter Content</label>
          <textarea
            name="content"
            value={chapterData.content}
            onChange={handleChange}
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit">Add Chapter</button>
      </form>
    </div>
  );
}

export default ChapterForm;
