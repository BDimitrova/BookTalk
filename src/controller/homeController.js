const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/profile', (req, res) => {
    res.render('profile', {title: 'Profile'});
});

router.get('/catalog', (req, res) => {
    res.render('catalog', {title: 'Catalog'});
});

router.get('/create-review', (req, res) => {
    res.render('create', {title: 'Create Review'});
});

module.exports = router;