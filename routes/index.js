const express = require('express');
const userRouter = require('./user/user');


const router = express
    .Router()
    // .merge('/test', [helloRouter, byeRouter]);

router.use('/test', userRouter);



module.exports = router;
