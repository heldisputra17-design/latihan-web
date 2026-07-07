const express = require("express")
const userRouter = express.Router()
const {login, register} = require('../controllers/userController.js')

userRouter.get('/login', login)
userRouter.get('/register', register)

module.exports = userRouter