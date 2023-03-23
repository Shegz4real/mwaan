const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./models/dbConnect');
const bodyParser = require('body-parser');
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routes
const users = require('./routes/users');
const signup = require('./routes/signup');
const admin = require('./routes/admin/adminRoute');
const login = require('./routes/login');
const cars = require('./routes/cars');

//middlewares 
app.use('/users', users);
app.use('/admin', admin);
app.use('/signup', signup);
app.use('/login', login );
app.use('/cars', cars);

//LOADING VIEW ENGINE
app.set('view engine', 'pug');
app.set('./views', path.join(__dirname), 'views' )
 
//LOADING STATIC FILES
//YOU CAN ADD A VIRTUAL PREFIX
//------------app.use('/static ',express.static('./public'));---------
//ABSOLUTE PATH TO THE PUBLIC FOLDER
//------------ app.use(express.static(path.join(__dirname, 'public')));----------

// relative path to public folder link
app.use(express.static(path.join(__dirname, 'public')));

//connect to mongoDB
connectDB();

app.get('/', (req, res)=>{
    res.send('hello world');
    console.log('Database Connected');

});

mongoose.connection.once('open', ()=>{
    console.log('connected to database');
    app.listen(port, ()=>{
        console.log(`server is listening on port ${port}`);
    });
})


