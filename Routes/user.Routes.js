const express = require('express');
const{createUser,loginUser,getUser,changePassword,updateUser} = require('../Controller/userController');
const userRoutes = express.Router();
const isVerify  = require('../Middleware/auth');
userRoutes.post('/Register',createUser);

userRoutes.post('/Login',loginUser);

userRoutes.get('/verify',isVerify,getUser);

userRoutes.post('/Changepassword',isVerify,changePassword);

userRoutes.put('/update',isVerify,updateUser);


module.exports = userRoutes;