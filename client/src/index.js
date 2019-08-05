// small app for learning purpose. Stack: 
// Front: react, react router, redux, formik 
// Back: express, mongoDB

import React from 'react';
import ReactDOM from 'react-dom';
import RootRoutes from './pages/RootRoutes';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
   <Provider store={store}>
      <RootRoutes />
   </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
