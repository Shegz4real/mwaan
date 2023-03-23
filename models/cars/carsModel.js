const mongoose = require('mongoose');
const { stringify } = require('querystring');

// @desc localhost/cars
// @controller controllers/cars
const carSchema = new mongoose.Schema({
    name: String,
    seatNumber: String,
    available: Boolean
});

module.exports = mongoose.model('Car', carSchema);