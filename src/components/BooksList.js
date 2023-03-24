import React from "react"
import { Link } from "react-router-dom"
import { BookForm } from "./BookForm"

export const BooksList = ({ books, setBooks }) => {
  const tableHeader = [{
    name: 'Name',
    year: 'Published',
    author: 'Author'
  }]

  const deleteBook = (id) => {
    setBooks((oldBooks) => oldBooks.filter((book) => book.bookId !== id));
  }

  return (
    <div>
      <div>
        <table>
          <thead>

            {tableHeader.map(el => {
              return (
                <tr key={el.bookId}>
                  <th>{el.name}</th>
                  <th>{el.year}</th>
                  <th>{el.author}</th>
                </tr>
              )
            })}
          </thead>

          <tbody>
            {books.map(book => {
              return (
                <tr key={book.bookId}>
                  <td>
                    <Link to={`${book.bookId}`}>{book.name}</Link>
                  </td>
                  <td>{book.year}</td>
                  <td>{book.author}</td>
                  <td>
                    <Link to={`${book.bookId}/edit`}>EDIT</Link>
                    <button onClick={() => deleteBook(book.bookId)}>DELET</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
          <BookForm isEdit={false} books={books} setBooks={setBooks}/>
      <div>
        <div>
        </div>
      </div>
    </div>
  )
}