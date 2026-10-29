let mongoose =require("mongoose")
let url=process.env.URL
require("dotenv").config()

let mongodbconnection=async ()=>{
    try{
        await mongoose.connect(url).then(()=>console.log("Mongodb connected"))
    }catch(e){
        console.log(e)
    }
}

module.exports={mongodbconnection}