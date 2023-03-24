import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

export const BookSpec = ({books}) => {

  const { bookId } = useParams();

  const backHome = useNavigate()

  const book = books.find(el => el.bookId === +bookId)

  return (
    <div>
      <div>
        <p>{book.name}</p>
        <p>{book.year}</p>
        <p>{book.author}</p>
      </div>


      <Link to='edit'>EDIT</Link>
      <button onClick={() => backHome('/')}>back</button>
    </div>
  )
}