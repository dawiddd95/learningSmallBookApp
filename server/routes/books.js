const express = require('express');
const router = express.Router();

const Books = require('../models/books');

//  router.get('/news/delete/:id', (req, res) => {
//    const {id} = req.params;
 
//    News.findByIdAndDelete(id, (err) => {
//      res.redirect('/admin');
//    })
//  });

router.get('/api/books', (req, res) => {
   Books.find({}, (err, data) => {
      res.json(data);
   })
})
 
router.post('/api/books', (req, res) => {
   const body = req.body;
   const booksData = new Books(body);

   // narazie bez waldiacji otrzymanych danych po stronie express, ale beda dodane w tym projekcie

   booksData.save(err => console.log(err)); // redirect robimy po stronie frontu

   res.json({
      isSubmit: true
   })
})

module.exports = router;