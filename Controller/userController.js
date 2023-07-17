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
    }
    else{
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
        const Exist = await User.findOne({Email});
        if(!Exist){
            return res.json({msg:'User not Found'});
        }
        const Match = await bcrypt.compare(Password,Exist.Password);
        if(!Match){
            return res.json({msg:'User Password Incorrect'});
        }
        const token = jwt.sign({userId:Exist._id},process.env.jwtoken,{expiresIn:'7d'});
        res.json({msg:'User is Login',token});
        
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
}

exports.getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.user._id).select('-Password')
        res.json(user) 
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
}

exports.changePassword = async(req,res)=>{
    try {
        const {Password,Confrim_Password} = req.body
        if(Password === Confrim_Password){
            const user = await User.findById(req.user._id);
                if(!user){
                    return res.json({msg:'User not found'});
                }
                const salt = await bcrypt.genSalt(10);
                const hashpassword = await bcrypt.hash(Password,salt);
                await User.findByIdAndUpdate(user._id,{$set:{Password:hashpassword}});
                res.json({msg:'Password Is Changed....'});
        }
        else{
            return res.json({msg:'Password And Confrim_Password Is not Match '})
        }
        
    } catch (error) {
        console.log(error);
        res.json({msg:'server error'});
    }
}

exports.updateUser = async(req,res)=>{
    try {
        const user = await User.findById(req.user._id);
        if(!user){
            return res.json({msg:'User not found'});
        }
        const updatedUser = await User.findByIdAndUpdate(user._id,{$set:req.body},{new:true});
        updatedUser.save();
        res.json(updatedUser);
        
    } catch (error) {
        console.log(error)
        res.json({msg:'server error'});
    }
}
