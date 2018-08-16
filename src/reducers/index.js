import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from "./reducer_active_book";

// this is the "global" state for our app

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
