// models/SwitchState.js
const mongoose = require('mongoose');

const SwitchStateSchema = new mongoose.Schema({
  Light1: { type: Boolean, default: false },
  Light2: { type: Boolean, default: false },
  TvFan: { type: Boolean, default: false },
  SofaFan: { type: Boolean, default: false },
  SpotLight: { type: Boolean, default: false },
  RLight: { type: Boolean, default: false },
  RFan: { type: Boolean, default: false },
  RAc: { type: Boolean, default: false },
  RWifi: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SwitchState', SwitchStateSchema);
