let http = require("http")

http.createServer(function(req,res){
    console.log("..getting Request..."+req)
    console.log("..getting Request...URL ->"+req.url)

    if(req.url == "/login"){
        console.log("..Login..."+req.url)
        res.write("LOGIN")
    }else if(req.url == "/home"){
        console.log("..Home..."+req.url)
        res.write("HOME")
    }

    res.write("Response")
    res.end();
}).listen(9898)