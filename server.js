require('dotenv').config();
const express  = require('express');
const server = express();
const mongoose = require('mongoose');
const userRoutes = require('./Routes/user.Routes');
const productRoutes = require('./Routes/product.Routes');
const cartRoutes = require('./Routes/cart.Routes');
const orderRoutes = require('./Routes/order.Routes');
const rateRoutes = require('./Routes/rate.Routes');
const favouriteRoutes = require('./Routes/favourite.Routes');
ports = process.env.port
mongodb = process.env.mongodbs

// server.get('/',(req,res)=>{
//     res.json('server started.....')
// })

// Mogodb Connection
mongoose.connect(mongodb).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})

// Middleware
server.use(express.json());

// Routes
server.use('/api/user',userRoutes);
server.use('/api/product',productRoutes);
server.use('/api/cart',cartRoutes);
server.use('/api/order',orderRoutes);
server.use('/api/rate',rateRoutes);
server.use('/api/favourite',favouriteRoutes);


server.listen(ports,(req,res)=>{
    console.log(`server started at ${ports} `)
})