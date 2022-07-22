const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    }
});

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;