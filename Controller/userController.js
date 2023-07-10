const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async(req,res)=>{
    try {
        const {FirstName,LastName,Age,Address,Email,Password,Confrim_Password} = req.body;
        if(Password === Confrim_Password){
            const user = User.findOne({Email});
                if(!user){
                    return res.json({msg:'User Already Exist...'});
                }
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(Password,salt);
            const newUser = await User.create({
                FirstName,
                LastName,
                Age,
                Address,
                Email,
                Password:hashpassword,
                Confrim_Password
            })
       
        newUser.save();
        res.status(201).json({newUser,msg:'User created....'})
    }else{
           return res.json({msg:'Password and Confrim_Password not match '})
        } 
    }catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
}

exports.loginUser = async(req,res)=>{
    try {
        const {Email,Password} = req.body;
        if(!user){
            return res.json({msg:'User not Found'});
        }
        const Match = await bcrypt.compare(Password,user.Password);
        if(!Match){
            return res.json({msg:'User Password Incorrect'});
        }
        
        
    } catch (error) {
        console.log(err);
        res.json({msg:'server error'});
    }
}

exports.getUser = async(req,res)=>{

}

exports.updateUser = async(req,res)=>{

}

exports.deleteUser = async(req,res)=>{

}
