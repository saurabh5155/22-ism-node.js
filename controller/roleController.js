var RoleModel = require("../model/roleModel")

function addRole(req,res){

    let role  = new RoleModel({
        roleName:req.body.roleName
    })

    role.save(function(err,data){
        if(err){
            console.log("error in addRole()"+err);
            res.json({
                status:-1,
                msg : "Role Are Not Added",
                data : req.body
            })
        }else{
            console.log("Role Added Sussessfull"+data);
            res.json({
                status:200,
                msg : "Role Are Added",
                data : data
            })
        }
    })
}

module.exports.addRole = addRole


