const express= require('express')

const {create} = require('../controller/usercontroller')

const routes= express.Router();

routes.get('/test',create)

module.exports = routes

