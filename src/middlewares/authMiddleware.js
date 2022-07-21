const jwt = require('../utils/jwt');

const {AUTH_COOKIE_NAME} = require('../constants');

exports.auth = function (req, res, next) {
    let token = req.cookies[AUTH_COOKIE_NAME];

    if(token) {
        jwt.verify(token)
        .then(decodedToken => {
            req.user = decodedToken;
        })
        .catch(err => {
            re.clearCookie(AUTH_COOKIE_NAME);
            res.status(401).render('404');
        })
    } else {
        next();
    }
}