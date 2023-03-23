const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', userController.findUser);

router.get('/:id', userController.userProfile);
    
module.exports = router;