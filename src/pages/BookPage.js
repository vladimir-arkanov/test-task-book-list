import { BookSpec } from "../components/BookSpec/BookSpec"

export const BookPage = ({books}) => {
  return (
    <BookSpec books={books} />
  )
}