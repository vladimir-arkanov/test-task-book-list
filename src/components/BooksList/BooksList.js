import React, { memo, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { BookForm } from "../BookForm/BookForm"
import { ModalConfirm } from "../ModalConfirm/ModalConfirm"
import './BooksList.scss'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export const BooksList = memo(({ books, setBooks }) => {
  const [isConfirm, setIsConfirm] = useState(false)
  const [bookToDelete, setBookToDelete] = useState(null)

  const tableHeader = [{
    name: 'Name',
    year: 'Published',
    author: 'Author'
  }]

  const navLinkStyle = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000000'
  };


  return (
    <div className="main__page">
      <div className="container">
        <div>

        {isConfirm && <ModalConfirm setIsConfirm={setIsConfirm} bookToDelete={bookToDelete} setBooks={setBooks} />}
        
          <Paper sx={{ minWidth: '800px', maxWidth: 'max-content' }}>
            <TableContainer>
              <Table aria-label="simple table" className="main__table">
                <TableHead>
                  {tableHeader.map(el => {
                    return (
                      <TableRow key={el.bookId}>
                        <TableCell>{el.name}</TableCell>
                        <TableCell>{el.year}</TableCell>
                        <TableCell>{el.author}</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    )
                  })}
                </TableHead>

                <TableBody>
                  {books.map(book => {
                    return (
                      <TableRow key={book.bookId}>
                        <TableCell >
                          <Link style={linkStyle} to={`${book.bookId}`}>{book.name}</Link>
                        </TableCell >
                        <TableCell >{book.year}</TableCell >
                        <TableCell >{book.author}</TableCell >
                        <TableCell >
                          <Button
                            component={NavLink}
                            style={navLinkStyle}
                            to={`${book.bookId}/edit`}
                          >
                            EDIT
                          </Button>

                          <Button
                            color="error"
                            variant="text"
                            onClick={() => { setIsConfirm(true); setBookToDelete(book) }}
                          >
                            DELETE
                          </Button>
                        </TableCell >
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>


        <div className="form__wrapper">
        <BookForm isEdit={false} books={books} setBooks={setBooks} />
        </div>

      </div>
    </div>
  )
})