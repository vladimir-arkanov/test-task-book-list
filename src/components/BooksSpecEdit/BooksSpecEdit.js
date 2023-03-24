import React, { memo } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { BookForm } from "../BookForm/BookForm";
import { Button, CardContent, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import './BooksSpecEdit.scss'

export const BooksSpecEdit = memo(({ books, setBooks }) => {
  const { bookId } = useParams();

  const book = books.find(el => el.bookId === +bookId)

  const backHome = useNavigate()

  return (
    <div className="edit__page">
      <div className="wrapper">
        <Card variant="outlined" sx={{ minWidth: 345, maxWidth: 'max-content' }} className="card">
        <CardContent>
            <Typography>{book.name}</Typography>

            <Typography>{book.year}</Typography>

            <Typography>{book.author}</Typography>

          </CardContent>

          <Button onClick={() => backHome('/')}>BACK</Button>
        </Card>

        <BookForm
          books={books}
          setBooks={setBooks}
          book={book}
          isEdit={true}
        />

      </div>
    </div>
  )
})