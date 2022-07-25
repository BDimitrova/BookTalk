const router = require('express').Router();

const bookServices = require('../services/bookServices');

router.get('/catalog', async (req, res) => {
    let book = await bookServices.getAll();
    res.render('books/catalog', { title: 'Book Catalog', book });
});

router.get('/create-review', (req, res) => {
    res.render('books/create', { title: 'Create Review' });
});

router.post('/create-review', async (req, res) => {
    await bookServices.create({ ...req.body, owner: req.user._id });
    res.redirect('/books/catalog');
});

router.get('/:bookId/details', async (req, res) => {
    let book = await bookServices.getOne(req.params.bookId);
    let bookData = book.toObject();
    let isOwner = bookData.owner == req.user?._id;

    let wished = book.getWished();

    console.log(wished);

    let isWished = req.user && wished.some(c => c._id == req.user?._id);

    res.render('books/details', { ...bookData, isOwner, isWished });
});

router.get('/:bookId/wish', async (req, res) => {
    const bookId = req.params.bookId
    let book = await bookServices.getOne(bookId);

    book.wishingList.push(req.user._id);
    await book.save();
    console.log(book)

    res.redirect(`/books/${req.params.bookId}/details`);
});

router.get('/:bookId/edit', async (req, res) => {
    const bookId = req.params.bookId
    let book = await bookServices.getOne(bookId);
    console.log(book);
    res.render('books/edit', { ...book.toObject() })
});

router.post('/:bookId/edit', async (req, res) => {
    const bookId = req.params.bookId;
    const bookData = req.body;
    await bookServices.update(bookId, bookData);
    res.redirect(`/books/${bookId}/details`);
});

router.get('/:bookId/delete', async (req, res) => {
    const bookId = req.params.bookId;
    await bookServices.delete(bookId);
    res.redirect('/books/catalog');
})

module.exports = router;