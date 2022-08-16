var express = require("express")
let mongoose = require("mongoose")

let app  = express();

// console.log(app);

app.get("/login",function(req,res){
    res.end("login");      
})

app.get("/signup",function(req,res){
    res.end("signup");
})



let post = app.listen(9898,function(){
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