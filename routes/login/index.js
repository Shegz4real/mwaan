const express = require(`express`);
const userController = require('../../controllers/userController');

const router = express.Router();


router.get('/', (req,res)=>{
    res.send(`login page`);
});
router.post('/', userController.loginUser);


module.exports = router;