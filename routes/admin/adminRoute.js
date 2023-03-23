const express = require('express');
const router =  express.Router();
const userController = require('../../controllers/userController');
const carController = require('../../controllers/carsController');
const adminController = require('../../controllers/adminController')

router.get('/', (req, res)=>{
    res.send('this is the admin login page')
});
router.post('/' , adminController.loginAdmin); 

router.get('/:id', (req, res)=>{

});


// to get list of all users
router.get('/users', userController.findUser);
module.exports = router;

//create a car
//for admin only
router.post('/', carController.createCar);