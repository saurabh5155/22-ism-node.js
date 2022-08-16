var express = require("express")
let mongoose = require("mongoose")

let app  = express();

// console.log(app);


// middle war
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.end("----Welcome----");
})

// app.get("/login",function(req,res){
//     res.end("login");      
// })

// app.get("/signup",function(req,res){
//     res.end("signup");
// })

var sessionController = require("./controller/sessionController")
var roleController = require("./controller/roleController")
var userController = require("./controller/userController")


app.post("/login",sessionController.login)
app.post("/signup",sessionController.signup)


// Roles
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.get("/roles/:roleId",roleController.getRoleById)
app.delete("/roles/:roleId",roleController.deleteRoleById)
app.put("/roles",roleController.updateRole)

// Users
app.post("/users",userController.addUsers)

//sync 
//simple 
//js -> sync , callback 
let port = app.listen(9898,function(){
    console.log("....server is started on port number 9898....");
})

let databaseConnectivityUrl = "mongodb://localhost:27017/ism-22-node-demo";

mongoose.connect(databaseConnectivityUrl,function(err){
    if(err){
        console.log("----db not connected----");
    }else{
        console.log("----db connected----");
    }
})