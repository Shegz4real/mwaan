const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username:{type:String, requires:true},
    password:{type:String, requires:true}
})

module.exports = mongoose.model('Admin', adminSchema);