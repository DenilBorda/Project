const mongoose = require('mongoose');

const rateSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    Rates:{
        type:Number,
        min:1,
        max:5,
    },
    Description:{
        type:String
    }
})

module.exports = mongoose.model('Rate',rateSchema);