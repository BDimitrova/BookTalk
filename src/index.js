const express = require('express');

const app = express();
const { PORT } = require('./constants');
const initDatabase = require('./config/mongooseConfig');

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

const routes = require('./routes');
app.use(routes);

initDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.log('Cannot connect database: ', err)
    })
