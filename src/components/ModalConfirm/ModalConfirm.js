import { Button } from "@mui/material";
import React, { memo } from "react";
import './ModalConfirm.scss'

export const ModalConfirm = memo(({ setIsConfirm, bookToDelete, setBooks }) => {
  const handleNo = () => {
    setIsConfirm(false)
  }

  console.log(bookToDelete)

  const handleYes = () => {
    setBooks((oldBooks) => oldBooks.filter(book => book.bookId !== bookToDelete.bookId))
    setIsConfirm(false)
  }

  return (
    <div className="confirm">
      <div className="confirm__content">
        <h3 className="confirm__title">{`Aye you sure for deleting ${bookToDelete.name}`}</h3>

        <div className="button__container">
        <div className="buttons">
          <Button onClick={handleYes}>Yes</Button>
          <Button onClick={handleNo}>No</Button>
        </div>
        </div>
      </div>
    </div>
  )
})