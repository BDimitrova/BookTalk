const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));

function expressConfig(app) {
    app.use(express.static(path.join(__dirname, '../public')))
}

module.exports = expressConfig;