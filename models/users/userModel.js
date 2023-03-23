const mongoose = require('mongoose');
const { stringify } = require('querystring');

// @desc localhost/users
const userSchema =  new mongoose.Schema({ 
    username: {type: String, required: true},
    email:{type: String, required: true},
    phone:{type:String, required:true},
    password:{type:String, required:true}  
});

module.exports = mongoose.model('User', userSchema);

