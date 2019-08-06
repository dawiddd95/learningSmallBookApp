import React from 'react';
import {Link} from 'react-router-dom';

const BooksList = ({books}) => {
   return (  
      <div>
         {books.map(currentElement => {
            return <li key={currentElement.id} style={{'padding': '40px', 'border': '2px solid aqua'}}>
               <Link to={`/books/${currentElement.id}`}>{currentElement.bookName}</Link>
            </li>})}
      </div>
   );
}
 
export default BooksList;