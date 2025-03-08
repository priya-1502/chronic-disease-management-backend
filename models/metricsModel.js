const mongoose = require("mongoose");

const metricsSchema = new mongoose.Schema({
  heartBeatRate:{ type: String},
  temperature:{ type: String},
  bloodsugarLevel: { type: String, required: true },
  bloodPressure: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: Number },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Registrations" },
  createdAt: { type: Date, default: new Date() },
});

const Matrics = mongoose.model("metricsSchema", metricsSchema);

module.exports = Matrics;
