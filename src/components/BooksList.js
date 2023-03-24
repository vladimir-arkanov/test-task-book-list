import React, { useState } from "react"
import { Link } from "react-router-dom"
import { BookForm } from "./BookForm"
import { ModalConfirm } from "./ModalConfirm"

export const BooksList = ({ books, setBooks }) => {
  const [isConfirm, setIsConfirm] = useState(false)
  const [bookToDelete, setBookToDelete] = useState(null)
  console.log(isConfirm)

  const tableHeader = [{
    name: 'Name',
    year: 'Published',
    author: 'Author'
  }]

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
                    <button onClick={() =>{ setIsConfirm(true); setBookToDelete(book)}} >DELET</button>
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

      {isConfirm && <ModalConfirm setIsConfirm={setIsConfirm} bookToDelete={bookToDelete} setBooks={setBooks}/>}
    </div>
  )
}