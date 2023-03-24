import React from "react";

export const ModalConfirm = ({setIsConfirm, bookToDelete, setBooks}) => {
  const handleNo = () => {
    setIsConfirm(false)
  }

  console.log(bookToDelete)

  const handleYes = () => {
    setBooks((oldBooks) => oldBooks.filter(book => book.bookId !== bookToDelete.bookId))
    setIsConfirm(false)
  }

  return (
    <div>
      <div>
        <h3>{`Aye you sure for deleting ${bookToDelete.name}`}</h3>

        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </div>
    </div>
  )
}