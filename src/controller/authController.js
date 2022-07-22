const router = require('express').Router();
const authServices = require('../services/authServices');
const { AUTH_COOKIE_NAME } = require('../constants');

router.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login Page' });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let token = await authServices.login({
            email,
            password
        });

        res.cookie(AUTH_COOKIE_NAME, token);
        res.redirect('/');
    } catch (err) {
        // TODO: return error message
        res.end();
    }

})

router.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

router.post('/register', (req, res) => {
    const { username, email, password, confPass } = req.body;

    if (password !== confPass) {
        res.locals.error = 'Passwords do not match!'
        return res.render('auth/register')
    };

    try {
        authServices.register({
            username,
            email,
            password
        });

        res.redirect('/')
    } catch (err) {
        //todo: return error message
    }

});

router.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;