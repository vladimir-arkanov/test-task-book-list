import React, { memo, useEffect, useState } from "react";
import './BookForm.scss'
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export const BookForm = memo(({
  setBooks,
  books,
  book,
  isEdit,
}) => {
  const [inputName, setInputName] = useState(isEdit ? book.name : '');
  const [inputYear, setInputYear] = useState(isEdit ? book.year : 1900);
  const [inputAuthor, setInputAuthor] = useState(isEdit ? book.author : '');
  const [error, setError] = useState(false)
  const [inputNameError, setInputNameError] = useState(false);
  const [inputAuthorError, setInputAuthorError] = useState(false);
  const [inputYearError, setInputYearError] = useState(false);

  const isValid = (inputName.length <= 70 && inputName.length)
    && (inputYear >= 1900 && inputYear <= new Date().getFullYear())
    && (inputAuthor.length <= 120 && inputAuthor.length);

  const findBiggestIndex = () => {
    return Math.max(...books.map(el => el.bookId)) + 1
  }

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

      setError(false)
    }
  }

  return (
    <div className="form__modal">
      <form
        action=""
        method="POST"
        onSubmit={submitChange}
      >
        <div className="input__item">
        {inputNameError && (
          <span className="error__message">Max content length 70 chars</span>
        )}

        <TextField
          placeholder='Enter a book name'
          variant="outlined"
          type='text'
          value={inputName}
          required
          onChange={handleName}
          style={{ marginBottom: '20px' }}
        />
        </div>

        <div className="input__item">
        {inputYearError && (
          <span className="error__message">Publish period 1900 - current</span>
        )}

        <TextField
          variant="outlined"
          type='number'
          placeholder="Enter a publish year"
          value={inputYear}
          required
          onChange={handleYear}
          style={{ marginBottom: '20px'}}
        />
        </div>

        <div className="input__item">
        {inputAuthorError && (
          <span className="error__message">Max content length 120 chars</span>
        )}

        <TextField
          variant="outlined"
          type='text'
          placeholder="Enter an Author"
          value={inputAuthor}
          required
          onChange={handleAuthor}
          style={{ marginBottom: '20px' }}
        />
        </div>

        <Button
          color="success"
          variant="contained"
          type="submit"
          disabled={!isValid || error}
        >
          {!isEdit ? 'CREATE' : 'UPDATE'}
        </Button>
      </form>
    </div>
  )
})