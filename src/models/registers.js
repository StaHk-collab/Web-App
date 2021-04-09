const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    psw : {
        type : String,
        required : true
    },
    pswrepeat : {
        type : String,
        required : true
    }
})

// Collections

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;