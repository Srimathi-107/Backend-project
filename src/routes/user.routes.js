let express=require("express")
let routes=express.Router()
let {posting,getting,updating,deleting}=require("../controllers/user.controller")

routes.get("/get",getting)
routes.post("/post",posting)
routes.put("/put/:id",updating)
routes.delete("/del/:id",deleting)

module.exports={routes}