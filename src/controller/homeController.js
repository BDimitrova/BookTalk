const router = require('express').Router();

const User = require('../models/User');
const bookServices = require('../services/bookServices');

router.get('/', (req, res) => {
    res.render('home/home');
});

router.get('/profile', async (req, res) => {
    // let book = await bookServices.getWishingBook(req.user._id);

    res.render('profile', { title: 'Profile' });
});

module.exports = router;