const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    items:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        },
        Quantity:{
            type:Number
        }
    }],
    TotalAmount:{
        type:Number
    }
})

module.exports = mongoose.model('Order',orderSchema);