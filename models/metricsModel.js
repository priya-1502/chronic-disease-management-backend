const mongoose = require('mongoose');

const metricseSchema = new mongoose.Schema({
    bloodsugarLevel: {type : String, required : true},
    bloodPressure: {type : String, required : true},
    weight: {type : String, required : true},
    height: {type : Number},
    userId: mongoose.Types.ObjectId(),
    createdAt: Date

})

const Matrices = mongoose.model('metricseSchema', metricseSchema);

module.exports = Matrices;