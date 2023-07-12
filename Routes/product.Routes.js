const express = require('express');
const{addProduct,getAllProduct,getProduct,updateProduct,deleteProduct}= require('../Controller/productController');


const productRoutes = express.Router();

productRoutes.post('Listing',addProduct);

productRoutes.get('/',getAllProduct);

productRoutes.get('/:id',getProduct);

productRoutes.put('/:id',updateProduct);

productRoutes.delete('/:id',deleteProduct);

module.exports = productRoutes