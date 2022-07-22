const router = require('express').Router();

router.get('/catalog', (req, res) => {
    res.render('books/catalog', {title: 'Catalog'});
});

router.get('/create-review', (req, res) => {
    res.render('books/create', {title: 'Create Review'});
});

module.exports = router;