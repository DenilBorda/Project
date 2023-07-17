const express = require('express');
const{addToFavourite,getFavourite} = require('../Controller/favouriteController');
const favouriteRoutes = express.Router();
const iseVerify = require('../Middleware/auth')

favouriteRoutes.post('/add/:id',iseVerify,addToFavourite)

favouriteRoutes.get('/:id',iseVerify,getFavourite)

module.exports = favouriteRoutes;