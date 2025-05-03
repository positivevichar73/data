const express = require("express");
const route = express.Router();
const multer = require('multer');
const { createuser } = require("../controller/usercontroller.js");

const storage = multer.memoryStorage();
const upload = multer({ storage });

route.post('/createuser', upload.single('profileImg'), createuser);

module.exports = route;
 