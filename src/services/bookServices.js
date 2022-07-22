const Book = require('../models/Book');

exports.create = (bookData) => Book.create(bookData);

// exports.getWishingBook = (userId) => Book.find(user => user.owner === userId);

exports.getAll = () => Book.find().lean();

// exports.getWishingBook = (userId) => Book.find(user => user.wishingList.include(userId));
