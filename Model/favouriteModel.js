const mongoose = require('mongoose')

const favouriteSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }
})

module.exports = mongoose.model('Favourite',favouriteSchema);