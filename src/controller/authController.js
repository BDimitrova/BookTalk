const router = require('express').Router();
const authServices = require('../services/authServices');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/register', (req, res) => {
    const { username, email, password, confPass } = req.body;

    if (password !== confPass) {
        res.locals.error = 'Passwords do not match!'
        return res.render('auth/register')
    };

    authServices.register({
        username,
        email,
        password
    });

    res.redirect('/')
})

module.exports = router;