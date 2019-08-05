import actionTypes from './actionsTypes';

const addBookAction = item => ({
   type: actionTypes.ADD_BOOK, item
})


// Akcja thunk
const fetchBooksAction = () => (dispatch) => {
   fetch('/api/books')
      .then(res => res.json())
      .then(data => dispatch(addBookAction(data)))
}

export default {
   addBookAction,
   fetchBooksAction
}