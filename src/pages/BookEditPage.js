import { BooksSpecEdit } from "../components/BooksSpecEdit/BooksSpecEdit"

export const BookEditPage = ({books, setBooks}) => {
  return (
    <BooksSpecEdit books={books} setBooks={setBooks} />
  )
}