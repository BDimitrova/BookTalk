const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));

function expressConfig(app) {
    app.use('/static', express.static(path.join(__dirname, '../public')))
}

module.exports = expressConfig;