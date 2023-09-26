const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({

email:String,
psw:String,

})
const EmployeeModel  = mongoose.model ("register" ,EmployeeSchema)

module.exports = EmployeeModel


