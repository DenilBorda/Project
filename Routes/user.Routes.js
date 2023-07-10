const express = require('express');
const{createUser,loginUser,getUser,updateUser,deleteUser} = require('../Controller/userController');
const userRoutes = express.Router();

userRoutes.post('/',createUser);

userRoutes.get('/',loginUser);

userRoutes.get('/',getUser);

userRoutes.put('/:id',updateUser);

userRoutes.delete('/:id',deleteUser);

module.exports = userRoutes;