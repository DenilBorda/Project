const express = require('express');
const {addOrder,getOrder,cancelOrder}=require('../Controller/orderController');
const isVerify = require('../Middleware/auth');
const orderRoutes = express.Router();

orderRoutes.post('/Placeorder',isVerify,addOrder);

orderRoutes.get('/',isVerify,getOrder);

orderRoutes.delete('/',isVerify,cancelOrder);

module.exports = orderRoutes;