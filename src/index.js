const express = require('express');

const app = express();
const { PORT } = require('./constants');

require('./config/hbsConfig')(app);
require('./config/expressConfig')(app);

const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}`));