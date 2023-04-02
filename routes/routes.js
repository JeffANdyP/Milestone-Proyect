const express = require ('express');
const router = express.Router()
// import { createUserController, loginUserController } from '../src/login/longincontroller';


const userController = require('./src/login/loginControlle')

router.route('./user/login').post(userController, loginUserController)
router.route('./user/create').post(userController, createUserController)


module.exports = router;
