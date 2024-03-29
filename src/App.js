/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { BookEditPage } from './pages/BookEditPage';
import { BookPage } from './pages/BookPage';
import { MainPage } from './pages/MainPage';
import { booksFromServer } from './api/books'

export const App = () => {
  const [books, setBooks] = useState(booksFromServer)

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/');
  }, []);
  
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/books" replace />} />
      <Route path="/books" element={<MainPage books={books} setBooks={setBooks}/>}/>
      <Route path="/books/:bookId" element={<BookPage books={books}/>} />
      <Route path="/books/:bookId/edit" element={<BookEditPage books={books} setBooks={setBooks}/>} />
      <Route path="*" element={ <p>Page not found</p>} />
    </Routes>
  );
}
