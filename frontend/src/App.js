// filepath: /Users/etkanzawad/Documents/GitHub/Mint-Library/frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChapterForm from "./pages/ChapterForm";
import BookPage from "./components/BookPage";
import ChapterPage from "./components/ChapterPage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:bookId" element={<BookPage />} />
        <Route
          path="/book/:bookId/chapter/:chapterId"
          element={<ChapterPage />}
        />
        <Route path="/admin/add-chapter" element={<ChapterForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
