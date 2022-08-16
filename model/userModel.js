let mongoose = require("mongoose")

module.exports = mongoose.model("user",mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
        required:true
    }
}))