const mongoose = require("mongoose");

const metricseSchema = new mongoose.Schema({
  bloodsugarLevel: { type: String, required: true },
  bloodPressure: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: Number },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "registration" },
  createdAt: { type: Date, default: new Date() },
});

const Matrices = mongoose.model("metricseSchema", metricseSchema);

module.exports = Matrices;
