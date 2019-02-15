const { Router } = require('express');
const responceStatus = require('../../constants/responceStatus');
const controller = require('./users-controller');

const usersRoute = (app, usersRepository) => {
    const router = new Router();
    router
        .get('/', async(req, res) => {
            const allUsers = await controller.getAllUsers(usersRepository);
            res.status(responceStatus.successStatus).send(allUsers);
        });

    app.use('/users', router);
};

module.exports = usersRoute;