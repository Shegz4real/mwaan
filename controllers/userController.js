const User = require("../models/users/userModel");

const getId =(id)=>{
    return id;
};

//desc @admin/search 

exports.findUser = async(req,res)=>{
    const user = await User.find();
    res.send({data: user});
    console.log(user);
}

// desc@  routes/login
//for user login 

exports.loginUser= async(req, res)=>{

    const {username, password} = req.body;

    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).send('user not found');
        }
        if(password != user.password){
            return res.status(401).send('incorrect password');
        }
       const id = getId(user.id);
       return id;
    }catch(err){
        console.error(err);
    }

};

//desc @ routes/signup
//to open a new acct
exports.createUser = async(req, res)=>{
    const user = new User(req.body);
    console.log(req.body);
    await user.save();
 
    res.send({data:user});     
}

//desc @ routes/users
//to pull up a user profile
exports.userProfile = async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.send({data:getId(user)});
    }catch(err){
        res.status(404).send('user dosent exist')
        console.log('missing user')
    }
}

exports.signOut=()=>{
    getId(null);
}