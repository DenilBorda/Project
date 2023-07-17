const express = require('express');
const {addRate,getRate}=require('../Controller/rateController')
const rateRoutes = express.Router();
const isVerify = require('../Middleware/auth')

rateRoutes.post('/Rating/:id',isVerify,addRate);

rateRoutes.get('/rates/:id',isVerify,getRate);

module.exports = rateRoutes;