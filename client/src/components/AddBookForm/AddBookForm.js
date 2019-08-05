import React from 'react';
import {Form, Field, ErrorMessage} from 'formik';
import {Link} from 'react-router-dom';

const AddBookForm = () => {
   return (  
      <Form>
         <div>
            <label htmlFor="bookName">Book Name:</label>
            <Field name='bookName' type='text' />
            <ErrorMessage name='bookName' component='div' />
         </div>
         <div>
            <label htmlFor="bookAuthor">Book Author:</label>
            <Field name='bookAuthor' type='text' />
            <ErrorMessage name='bookAuthor' component='div' />
         </div>
         <div>
            <label htmlFor="bookYear">Book Year:</label>
            <Field name='bookYear' type='text' />
            <ErrorMessage name='bookYear' component='div' />
         </div>
         <div>
            <button type='submit'>Dodaj</button>
            <button type='reset'>Wyczyść</button>
         </div>
         <Link to='/books'>Wróć</Link>
      </Form>
   );
}
 
export default AddBookForm;