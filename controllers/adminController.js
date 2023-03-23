const Admin = require('../models/users/adminModel');

const getId=(id)=>{
    return id;
}

exports.loginAdmin = async(req,res)=>{
    const {username, password}= req.body;
    try{
        const admin = await Admin.findOne({username});
        if(!admin){
            return res.status(404).send('user not found');
        }
        if(password != admin.password){
            return res.status(401).send('incorrect password');
        }
       const id = getId(admin.id);
       res.send(id);
       return id;
    }catch(err){
        console.error(err);
    }

}

exports.createAdmin= async(req, res)=>{
    const admin = new Admin(req.body);
    await admin.save();
    res.send({data:admin});
}
