import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BookForm } from "./BookForm";

export const BooksSpecEdit = ({ books, setBooks }) => {
  const { bookId } = useParams();

  const book = books.find(el => el.bookId === +bookId)


  const [inputName, setInputName] = useState(book.name);
  const [inputYear, setInputYear] = useState(book.year);
  const [inputAuthor, setInputAuthor] = useState(book.author);
  const [error, setError] = useState(false)

  const isValid = inputName && inputYear && inputAuthor;

  const backHome = useNavigate()



  const submitChange = (event) => {
    event.preventDefault();

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

  return (
    <div>
      <div>
        <p>{book.name}</p>
        <p>{book.year}</p>
        <p>{book.author}</p>
      </div>

      <div>
        <BookForm 
        inputName={inputName} 
        setInputName={setInputName}
        inputYear={inputYear} 
        setInputYear={setInputYear} 
        inputAuthor={inputAuthor} 
        setInputAuthor={setInputAuthor}
        submitChange={submitChange}
        error={error}
        setError={setError}
        isValid={isValid}
      />
        {/* <form
          action=""
          method="POST"
          onSubmit={submitChange}
        >
          <input
            type='text'
            placeholder='Enter a book name'
            value={inputName}
            required
            onChange={(e) => setInputName(e.target.value)}
          />
          <input
            type='number'
            placeholder="Enter a publish year"
            value={inputYear}
            required
            onChange={(e) => setInputYear(e.target.value)}
          />
          <input
            type='text'
            placeholder="Enter an Author"
            value={inputAuthor}
            required
            onChange={(e) => setInputAuthor(e.target.value)}
          />
          <button type="submit" disabled={!isValid || error}>safe</button>
        </form> */}
      </div>

      <button onClick={() => backHome('/')}>back</button>
    </div >
  )
}