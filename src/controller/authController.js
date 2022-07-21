const router = require('express').Router();
const authServices = require('../services/authServices');
const {AUTH_COOKIE_NAME} = require('../constants');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    try {
        let token = authServices.login({
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
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    console.log(req.body);
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

})

module.exports = router;