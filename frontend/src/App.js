import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChapterForm from "./pages/ChapterForm";
import BookForm from "./pages/BookForm";
import BookPage from "./components/BookPage";
import ChapterPage from "./components/ChapterPage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

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
        <Route
          path="/admin/add-book"
          element={
            <ProtectedRoute>
              <BookForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-chapter"
          element={
            <ProtectedRoute>
              <ChapterForm />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
