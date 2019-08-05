import React from 'react';

const BooksList = ({books}) => {
   return (  
      <div>
         {books.map(currentElement => {
            return <li key={currentElement.id} style={{'padding': '40px', 'border': '2px solid aqua'}}>
               <span>{currentElement.id}</span>
               <p>{currentElement.bookName}</p> 
               <p>{currentElement.bookAuthor}</p>
               <p>{currentElement.bookYear}</p>
            </li>})}
      </div>
   );
}
 
export default BooksList;