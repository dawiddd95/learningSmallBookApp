import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from '../components/Home/Home';
import BooksRoutes from './BooksRoutes';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/books' component={BooksRoutes} /> 
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;