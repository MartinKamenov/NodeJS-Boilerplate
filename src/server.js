const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const setupObject = require('./setup/setup');
const usersRoute = require('./routes/users/users-route');
const errorRoute = require('./routes/error/error-route');

const start = (setupConfiguration) => {
    app.use(cors());

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

    usersRoute(app);
    errorRoute(app);

    app.listen(setupConfiguration.port,
        setupConfiguration.startCallback());
}

start(setupObject);