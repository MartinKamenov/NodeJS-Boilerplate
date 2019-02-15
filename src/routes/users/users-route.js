const { Router } = require('express');
const responceStatus = require('../../constants/responceStatus');

const usersRoute = (app, usersRepository) => {
    const router = new Router();
    router
        .get('/', (req, res) => {
            res.status(responceStatus.successStatus).send('users');
        });

    app.use('/users', router);
};

module.exports = usersRoute;