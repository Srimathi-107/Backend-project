let mongoose =require("mongoose")
let url=process.env.URL

let mongodbconnection=async ()=>{
    try{
        await mongoose.connect(url).then(()=>console.log("Mongodb connected"))
    }catch(e){
        console.log(e)
    }
}

module.exports={mongodbconnection}