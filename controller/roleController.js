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


function getAllRoles(req,res){

    RoleModel.find(function(err,data){
        if(err){
            console.log("error in getAllRoles()"+err);
            res.json({
                status:-1,
                msg : "Role Are Not Get",
                data : req.body
            })
        }else{
            console.log("Find Role Successfully"+data);
            res.json({
                status:200,
                msg : "Find Role Successfully",
                data : data
            })
        }  
    })
}

function getRoleById(req,res){
     //console.log(req.body);
    //console.log(req.params);
    //console.log(req.query);

    RoleModel.findById({_id:req.params.roleId},function(err,data){
        if (err) {
            console.log("error in getRoleById()" + err);
            res.json({
                status: -1,
                msg: "Role could not reterived...",
                data: err
            })
        } else {
            if (data == null) {
                res.json({
                    status: 200,
                    msg: "Invalid roleId",
                    data: req.params.roleId
                })
            } else {
                res.json({
                    status: 200,
                    msg: "Role Reterived...",
                    data: data
                })
            }

        }
    })
}

module.exports.addRole = addRole
module.exports.getAllRoles = getAllRoles
module.exports.getRoleById = getRoleById

