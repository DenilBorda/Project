const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    Quantity:{
        type:Number,
        default:1
    }
});

module.exports = mongoose.model('Cart',cartSchema);