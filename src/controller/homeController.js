const router = require('express').Router();

const User = require('../models/User');
const bookServices = require('../services/bookServices');

router.get('/', (req, res) => {
    res.render('home/home');
});

router.get('/profile', async (req, res) => {
    const userId = req.user._id;
    let wished = await bookServices.getMyWishBook(userId);
    console.log(wished);

    res.render('profile', { title: 'Profile', wished });
});

module.exports = router;