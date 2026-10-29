let express=require("express")
let app=express()
require("dotenv").config()
let body=require("body-parser")
app.use(body.json())

let cors = require("cors")

app.use(cors())

const dns = require("dns")

dns.setServers(["8.8.8.8", "8.8.4.4"])

let {mongodbconnection}=require("./src/config/db")
mongodbconnection()

let {routes}=require("./src/routes/user.routes")
app.use("/user",routes)

let port=process.env.PORT
app.listen(port,()=>{
    console.log("Port is running on ",port)
})

