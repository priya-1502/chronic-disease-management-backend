const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    firstName: {type : String, required : true},
    middleName: {type : String, required : true},
    lastName: {type : String, required : true},
    dob: {type : String, required : true},
    gender: {type : String, required : true},
    email: {type : String, required : true},
    password: {type : String, required : true},
    mobileNumber: {type: Number, reuired : true},
    addresses: {
        address1: String,
        address2 : String,
        city: String,
        state: String,
        country: String,
        pinCode: String


    }

})

const Registration = mongoose.model('Registrations', registrationSchema);

model.exports = Registration