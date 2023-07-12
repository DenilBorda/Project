const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Decription:{
        type:String
    },
    Image:{
        type:String
    },
    Price:{
        type:Number
    }

})






module.exports = ('Product',productSchema);