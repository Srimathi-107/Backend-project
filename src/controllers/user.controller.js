let {model}=require("../model/usermodel") 
let bcrypt=require("bcrypt")

exports.posting=async (req,res)=>{
    let {Name,Email,Password}=req.body
    let hash=await bcrypt.hash(Password,10)
    let data=await model({Name,Email,Password:hash})
    await data.save()
    res.json({msg:"data Posted succesfully",data})
}
exports.getting=async (req,res)=>{
    let data=await model.find()
    res.json({msg:"data Sended succesfully",data})
}
exports.updating=async (req,res)=>{
    let id=req.params.id
    let {Name,Email,Password}=req.body
    let hash=await bcrypt.hash(Password,10)
    let data=await model.findByIdAndUpdate(id,{Name,Email,Password:hash},{newdata:true})
    res.json({msg:"Data updated successfully",data})
}
exports.checkemail=async(req,res)=>{
    let {Email,Password}=req.body
    let checkemail=await model.findOne({Email})
    if(checkemail){
        let password=await bcrypt.compare(Password,checkemail.Password)
        if(password){
            res.json({msg:"Password is correct"})
        }else{
            res.json({msg:"Pasword is incorrect"})
        }
    }else{
        res.json({msg:"User not found"})
    }

}
exports.deleting=async (req,res)=>{
    let id=req.params.id
    let data=await model.findByIdAndDelete(id)
    res.json({msg:"Data deleted successfully",data})
}