import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export const BookForm = memo(({ 
  setBooks,
  books,
  book,
  isEdit,
}) => {
  const [inputName, setInputName] = useState(isEdit ? book.name : '');
  const [inputYear, setInputYear] = useState(isEdit ? book.year: 1900);
  const [inputAuthor, setInputAuthor] = useState(isEdit ? book.author : '');
  const [error, setError] = useState(false)
  const [inputNameError, setInputNameError] = useState(false);
  const [inputAuthorError, setInputAuthorError] = useState(false);
  const [inputYearError, setInputYearError] = useState(false);

  const isValid = inputName.length <= 70 
  && (inputYear >= 1900 && inputYear <= new Date().getFullYear()) 
  && inputAuthor.length <= 120;

  const findBiggestIndex = () => {
    return Math.max(...books.map(el => el.bookId)) + 1
  }

  const backHome = useNavigate()

  useEffect(() => {
    if (inputName.length > 70) {
      setInputNameError(true)
    }

    if (inputAuthor.length > 120) {
      setInputAuthorError(true)
    }

    if (inputYear < 1900 || inputYear > new Date().getFullYear()) {
      setInputYearError(true)
    }

  }, [inputName, inputAuthor, error, inputYear])


  const handleName = (event) => {
    setInputName(event.target.value)
    setInputNameError(false)
  }

  const handleYear = (event) => {
    setInputYear(+event.target.value)
    setInputYearError(false)
  }

  const handleAuthor = (event) => {
    setInputAuthor(event.target.value)
    setInputAuthorError(false)
  }

  const submitChange = (event) => {
    event.preventDefault();

    if (!isEdit) {
      setBooks(oldBooks => {
        const newBook = {
          bookId: findBiggestIndex(oldBooks),
          name: inputName,
          year: inputYear,
          author: inputAuthor,
        }
  
        return [...books, newBook]
    })
    } else {
      const newBook = {
        bookId: book.bookId,
        name: inputName,
        year: inputYear,
        author: inputAuthor,
      };
  
      setBooks(books.map((book) => book.bookId === newBook.bookId ? newBook : book));
      
  
      backHome('/')
  
      setError(false)
    }
  }

  return (
    <form
      action=""
      method="POST"
      onSubmit={submitChange}
    >
      <input
        type='text'
        placeholder='Enter a book name'
        value={inputName}
        required
        onChange={handleName}
      />

      {inputNameError && (
        <span>Max content length 70 chars</span>
      )}

      <input
        type='number'
        placeholder="Enter a publish year"
        value={inputYear}
        required
        onChange={handleYear}
      />

      {inputYearError && (
        <span>Publish period 1900 - current</span>
      )}

      <input
        type='text'
        placeholder="Enter an Author"
        value={inputAuthor}
        required
        onChange={handleAuthor}
      />

      {inputAuthorError && (
        <span>Max content length 120 chars</span>
      )}

      <button type="submit" disabled={!isValid || error}>safe</button>
    </form>
  )
})