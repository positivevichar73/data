const express = require ('express')
const {Create} = require('../controller/usercontroller');

const routes = express.Router();


routes.post('/Create',Create)

module.exports = routes;
 