const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  corporation: String,
  credits: Number,
  production: {
    megacredits: { type: Number, default: 0 },
    steel: { type: Number, default: 0 },
    titanium: { type: Number, default: 0 },
    plants: { type: Number, default: 0 },
    energy: { type: Number, default: 0 },
    heat: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('Player', playerSchema);
