const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/test1";

mongoose.set('strictQuery', true);
const connectDB = async () => {
    try{
        await mongoose.connect(url, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB;

