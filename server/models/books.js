const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
   id: {type: String, required: true},
   bookName: {type: String, required: true, min: 3 },
   bookAuthor: {type: String, required: true, min: 3},
});

module.exports = mongoose.model('booksModel', booksSchema);