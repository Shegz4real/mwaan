const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', (req, res)=>{
    res.send('this is the user signup page');
})
router.post('/', userController.createUser);


module.exports = router;