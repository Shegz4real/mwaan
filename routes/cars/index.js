const express = require('express');
const router = express.Router();
const carController = require('../../controllers/carsController');

//locate available cars
// for users
router.get('/', carController.findcars);





//
module.exports = router;