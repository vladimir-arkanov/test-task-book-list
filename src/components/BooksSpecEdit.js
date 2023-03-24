import React from "react";
import { useParams, useNavigate } from "react-router-dom"
import { BookForm } from "./BookForm";

export const BooksSpecEdit = ({ books, setBooks }) => {
  const { bookId } = useParams();

  const book = books.find(el => el.bookId === +bookId)

  const backHome = useNavigate()

  return (
    <div>
      <div>
        <p>{book.name}</p>
        <p>{book.year}</p>
        <p>{book.author}</p>
      </div>

      <div>
        <BookForm 
        books={books}
        setBooks={setBooks}
        book={book}
        isEdit={true}
      />
      </div>

      <button onClick={() => backHome('/')}>back</button>
    </div >
  )
}