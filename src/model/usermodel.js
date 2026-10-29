let mongoose=require("mongoose")

let schema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        required:true,
        type:String
    }
})

let model=mongoose.model("UserModel",schema)

module.exports={model}