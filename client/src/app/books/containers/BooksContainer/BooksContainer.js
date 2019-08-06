import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import actions from '../../duck/actions';
import BooksList from '../../../../components/BooksList/BooksList';
import CurrentBookDetails from '../CurrentBookDetails/CurrentBookDetails';

const BooksContainer = ({showAll, match}) => {
   const dispatch = useDispatch();
   const books = useSelector(state => state.booksReducer)
   const showBooks = showAll ? (
      <BooksList books={books.list} />
   ) : ( 
      <CurrentBookDetails books={books.list} match={match.params.id} />
   )

   useEffect(() => {
      dispatch(actions.fetchBooksAction())
   }, [])

   return (  
      <div>
         <h1>Your Collection</h1>
         {showBooks}
         <Link to='/books/add'>
            Dodaj Do Kolekcji
         </Link>
      </div>
   )
}
 
export default BooksContainer;