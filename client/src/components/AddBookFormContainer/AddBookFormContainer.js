import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import uuid from 'uuid';
import axios from 'axios';

import AddBookForm from '../AddBookForm/AddBookForm';

const AddBookFormContainer = () => {

   const handleOnSubmit = values => {
      axios.post('/api/books', values)
   }

   return (  
      <Formik
         component={AddBookForm}
         initialValues={{
            id: uuid.v4(),
            bookName: '',
            bookAuthor: '',
            bookYear: '',
         }}
         validationSchema={Yup.object().shape({
            bookName: Yup
               .string()
               .min(3, 'Book name must contain min. 3 letters')
               .required('Book name is required'),
            bookAuthor: Yup
               .string()
               .min(3, 'Book name must contain min. 3 letters')
               .required('Book name is required'),
            bookYear: Yup
               .number('Book year must contain only numbers')
               .integer('Book year must be integer')
               .notRequired()
         })}
         onSubmit={values => handleOnSubmit(values)}
      />
   );
}
 
export default AddBookFormContainer;