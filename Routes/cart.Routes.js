const express = require('express');
const{addToCart,getCart,updateCart,deleteCart}=require('../Controller/cartController');
const isVerify = require('../Middleware/auth');
const cartRoutes = express.Router();

cartRoutes.post('/addToCart',isVerify,addToCart);

cartRoutes.get('/check',isVerify,getCart);

cartRoutes.put('/UpdateCart/:id',isVerify,updateCart);

cartRoutes.delete('/DeleteCart/:id',isVerify,deleteCart);

module.exports = cartRoutes;