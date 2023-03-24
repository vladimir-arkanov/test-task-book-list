import { BooksList } from '../components/BooksList';

export const MainPage = ({books, setBooks}) => {
  return (
   <BooksList books={books} setBooks={setBooks}/>
  )
};