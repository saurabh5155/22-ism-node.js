function login(req,res){
    console.log("Body Of Request ->"+req.body);
    res.json({msg:"Now You are Logged In ->",data:req.body})
}

function signup(req,res){
    res.end("Signup done")
}

module.exports.login = login
module.exports.signup = signup