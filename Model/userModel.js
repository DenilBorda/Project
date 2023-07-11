const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    FirstName:{
        type:String,
    },
    LastName:{
        type:String,
    },
    Age:{
        type:Number
    },
    Address:{
        type:String
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User',userSchema);