const router = require('express').Router();

const bookServices = require('../services/bookServices');

router.get('/catalog', async (req, res) => {
    let book = await bookServices.getAll();
    res.render('books/catalog', {title: 'Book Catalog', book });
});

router.get('/create-review', (req, res) => {
    res.render('books/create', {title: 'Create Review'});
});

router.post('/create-review', async (req, res) => {
    await bookServices.create({...req.body, owner: req.user._id});
    res.redirect('/books/catalog');
})

module.exports = router;