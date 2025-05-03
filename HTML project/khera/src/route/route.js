const express = require('express')
const { createuser } = require('../controller/UserController')
const { ValidUser } = require('../Middleware/UserAuth')
const routes = express.Router()

routes.post('/createuser', ValidUser, createuser)

module.exports = routes


