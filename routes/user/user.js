const express = require('express');
const { userHandlers } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .post(userHandlers.createUser);

module.exports = router;
