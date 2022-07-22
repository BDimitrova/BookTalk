const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/catalog', (req, res) => {
    res.render('catalog');
});

router.get('/create-review', (req, res) => {
    res.render('create');
});

module.exports = router;