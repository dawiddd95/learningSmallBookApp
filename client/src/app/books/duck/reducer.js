import actionTypes from './actionsTypes'; 
import produce from 'immer';

const INITIAL_STATE = {
   list: []
}

const booksReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case actionTypes.ADD_BOOK:
         return produce(state, draftState => {
            draftState.list = action.item
         })
      default:
         return state;
   }
}

export default booksReducer;