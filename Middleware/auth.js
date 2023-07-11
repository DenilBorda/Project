const User = require('../Model/userModel')
const jwt = require('jsonwebtoken');

const isVerify = async(req,res,next)=>{
    const auth = req.headers['authorization'];

    const token =  auth.split(" ")[1];
    
    const{userId} = jwt.verify(token,process.env.jwtoken);
    
    req.user = await User.findById(userId);
    next();
} 

module.exports = isVerify