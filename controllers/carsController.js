const Cars = require('../models/cars/carsModel');

// @dest routes/cars/index.js

exports.findcars = async(req, res)=>{
    const car = await Cars.find();
    res.send({data:car});
}

//create an car
//desc @ routes/admin
exports.createCar = async(req,res)=>{
    const car = new Cars(req.body);
    console.log(req.body);
    await car.save();
    res.send({data:car});
} 

//select a car
//desc @ router/cars
exports.selectCar= async(req, res)=>{

    try{
        const car = await Cars.findById(req.params.id);
        res.send({data:getId(car)});
    }catch{

    }
}

//update avibility status of car
//desc @routes/admin