const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    pages: Number,
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

// model named "author"
// creates collection called "author"
module.exports = Author = mongoose.model('author', AuthorSchema);