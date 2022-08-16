var mongoose = require("mongoose")

var roleSchema = new mongoose.Schema({
    roleName:String
})

// name as a database
module.exports = mongoose.model("Role",roleSchema)
