const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  doubt: { type: mongoose.Schema.Types.ObjectId, ref: 'Doubt' },
  responseText: { type: String, required: true },
  respondedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Response', responseSchema);
