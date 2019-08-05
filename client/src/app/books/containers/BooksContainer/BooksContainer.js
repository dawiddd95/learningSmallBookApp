import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import actions from '../../duck/actions';
import BooksList from '../../../../components/BooksList/BooksList';

const BooksContainer = () => {
   // Pobieranie ksiazek z API i wrzucanie do reduxowego stnau
   const dispatch = useDispatch();
   const books = useSelector(state => state.booksReducer)

   // Fetchowanie funka
   useEffect(() => {
      dispatch(actions.fetchBooksAction())
   }, [])

   return (  
      <div>
         <h1>Your Collection</h1>
         <BooksList 
            books={books.list} 
         />
         <Link to='/books/add'>
            Dodaj Do Kolekcji
         </Link>
      </div>
   )
}
 
export default BooksContainer;