import { BooksSpecEdit } from "../components/BooksSpecEdit"

export const BookEditPage = ({books, setBooks}) => {
  return (
    <BooksSpecEdit books={books} setBooks={setBooks} />
  )
}