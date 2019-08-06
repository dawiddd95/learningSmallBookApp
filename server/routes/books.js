const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const Books = require('../models/books');

router.get('/api/books', (req, res) => {
   Books.find({}, (err, data) => {
      res.json(data);
   })
})
 
router.post('/api/books',  [
      check('bookName')
         .not().isEmpty()
         .isLength({min: 3})
         .withMessage('Book Name must contain min. 3 letters')
         .escape(),
      check('bookAuthor')
         .not().isEmpty()
         .isLength({min: 3})
         .withMessage('Book Author must contain min. 3 letters')
         .escape(),
      check('bookYear')
         .optional()
         .escape(),
      check('password', 'Must contain min. 6 letters')
         .not().isEmpty()
         .isLength({min: 6})
         .escape(),
      check('confirmPassword', 'Must match password')
         .escape()
         .custom((value, {req}) => (value === req.body.password)),
      check('email', 'Must be correct email format')
         .isEmail().normalizeEmail()
         .escape()
   ], (req, res) => {
      const errors = validationResult(req);
      const body = req.body;
      const booksData = new Books(body);

      if(errors.isEmpty()) {
         booksData.save(err => console.log(err)); // redirect robimy po stronie frontu
         res.end();
      } else {
         return res.status(422).jsonp(errors.array());
      }
   }
)

module.exports = router;