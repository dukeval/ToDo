const express = require('express');
const routes = express.Router();
const user = require('../Controllers/User');

routes.get('/:userId', user.getUserByUserID);

routes.post('/create', user.newUser);

module.exports = routes;
