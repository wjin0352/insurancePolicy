const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/users', controller.getUsers)
      .post('/users', controller.createUser);

module.exports = router;