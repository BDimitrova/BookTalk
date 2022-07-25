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
    genre: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    review: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    wishingList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

bookSchema.method('getWished', function () {
    return this.wishingList.map(x => x._id);
})


let Book = mongoose.model('Book', bookSchema);

module.exports = Book;