import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
   return (  
      <div>
         <h1>Strona Główna</h1>
         <Link to='/books' >
            Show Collection Of Books
         </Link>
      </div>
   );
}
 
export default Home;