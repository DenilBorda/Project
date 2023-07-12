require('dotenv').config();
const express  = require('express');
const server = express();
const mongoose = require('mongoose');
const userRoutes = require('./Routes/user.Routes');
const productRoutes = require('./Routes/product.Routes');
ports = process.env.port
mongodb = process.env.mongodbs

// server.get('/',(req,res)=>{
//     res.json('server started.....')
// })

mongoose.connect(mongodb).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})

server.use(express.json());

server.use('/api/user',userRoutes);
server.use('/api/product',productRoutes);

server.listen(ports,(req,res)=>{
    console.log(`server started at ${ports} `)
})