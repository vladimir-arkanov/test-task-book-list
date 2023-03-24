import { Button, CardContent, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import React, { memo } from "react"
import { Link, useParams, useNavigate, NavLink } from "react-router-dom"
import './BookSpec'

export const BookSpec = memo(({ books }) => {

  const navLinkStyle = {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
  };

  const { bookId } = useParams();

  const backHome = useNavigate()

  const book = books.find(el => el.bookId === +bookId)

  return (
    <div className="main__page">
      <Card variant="outlined" sx={{ minWidth: 345, maxWidth: 'max-content' }}>
        <div className="container">
          <CardContent>
            <Typography>{book.name}</Typography>

            <Typography>{book.year}</Typography>

            <Typography>{book.author}</Typography>
          </CardContent>
        </div>

        <div className="buttons">
          <Button
            component={NavLink}
            style={navLinkStyle}
            to='edit'
          >
            EDIT
          </Button>
          <Button onClick={() => backHome('/')}>BACK</Button>
        </div>
      </Card>
    </div>
  )
})