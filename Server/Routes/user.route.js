const express = require('express');
const userRouter = express.Router();
const userController = require('../Controller/user.controller')
userRouter.post('/upload', userController.upload)
userRouter.get('/home', userController.home)
module.exports = userRouter