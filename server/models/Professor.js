const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String},
  department: String,
  subjects: [String], // Array like ['Maths', 'DSA']
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Professor', professorSchema);
