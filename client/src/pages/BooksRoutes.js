import React from 'react';
import {Switch, Route} from 'react-router-dom';

import BooksContainer from '../app/books/containers/BooksContainer/BooksContainer';
import AddBookFormContainer from '../components/AddBookFormContainer/AddBookFormContainer';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const BooksRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/books' component={BooksContainer} /> 
         <Route exact path='/books/add' component={AddBookFormContainer} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default BooksRoutes;