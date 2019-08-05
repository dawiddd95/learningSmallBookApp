import {combineReducers} from 'redux';
import booksReducer from './app/books/duck';

const rootReducer = combineReducers({
   booksReducer
});

export default rootReducer;