const mongoose = require("mongoose");

const doubtSchema = new mongoose.Schema({
  title: String,
  description: String,
  studentEmail: String,
  professorEmail: String,
  status: {
    type: String,
    enum: ["pending", "answered"],
    default: "pending"
  },
  response: String,
}, { timestamps: true });

module.exports = mongoose.model("Doubt", doubtSchema);

