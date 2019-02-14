const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const setupObject = require('./setup/setup');

const start = (setupConfiguration) => {
    app.use(cors());

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

    app.listen(setupConfiguration.port,
        setupConfiguration.startCallback());
}

start(setupObject);