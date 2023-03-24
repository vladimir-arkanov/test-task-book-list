import React from "react"
import { Link } from "react-router-dom"

export const BooksList = ({ books, setBooks }) => {
  const tableHeader = [{
    name: 'Name',
    year: 'Published',
    author: 'Author'
  }]

  const findBiggestIndex = () => {
    return Math.max(...books.map(el => el.bookId)) + 1
  }

  const deleteBook = (id) => {
    setBooks((oldBooks) => oldBooks.filter((book) => book.bookId !== id));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    setBooks(oldBooks => {
      const newBook = {
        bookId: findBiggestIndex(oldBooks),
        name: 'Kobzar',
        year: 1840,
        author: 'Taras Shevchenko',
      }

      return [...books, newBook]
    })
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

      <div>
        <div>
          <form
            action=""
            method="POST"
            onSubmit={handleSubmit}
          >
            <input 
              type='text'
              placeholder='Enter a book name'
            />
            <input 
              type='number'
              placeholder="Enter a publish year"
            />
            <input 
              type='text'
              placeholder="Enter an Author"
            />
            <button>X</button>
          </form>
        </div>
      </div>
    </div>
  )
}