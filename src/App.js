import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss';
import { BookEditPage } from './pages/BookEditPage';
import { BookPage } from './pages/BookPage';
import { MainPage } from './pages/MainPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/books" replace />} />
      <Route path="/books" element={<MainPage />}/>
      <Route path="/books/:bookId" element={<BookPage />} />
      <Route path="/books/:bookId/edit" element={<BookEditPage />} />
      <Route path="*" element={ <p>Page not found</p>} />
    </Routes>
  );
}
