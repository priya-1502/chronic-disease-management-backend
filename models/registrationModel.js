const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    firstName: {type : String, required : true},
    lastName: {type : String, required : true},
    dob: {type : String},
    gender: {type : String},
    email: {type : String},
    password: {type : String, required : true},
    mobileNumber: {type: Number},
    address: {type : String},
    role:{type : String}
})

const Registration = mongoose.model('Registrations', registrationSchema);

module.exports = Registration