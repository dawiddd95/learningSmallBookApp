import React from 'react';
import {Link} from 'react-router-dom';

const CurrentBookDetails = ({books, match}) => {
   return (  
      <div>
         {books.map(currentElement => {
            if(currentElement.id === match) {
               return <div>
                  <p>{currentElement.id}</p>
                  <p>{currentElement.bookName}</p>
                  <p>{currentElement.bookAuthor}</p>
               </div>
            }
         })}
         <Link to='/books'>Wróć</Link>
      </div>
   );
}
 
export default CurrentBookDetails;