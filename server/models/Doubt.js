// models/Doubt.js
const mongoose = require("mongoose");

const doubtSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },   // ✅ subject added
    title: { type: String, required: true },     // ✅ short title
    description: { type: String, required: true }, // ✅ detailed explanation
    studentEmail: { type: String, required: true },
    professorEmail: { type: String },
    status: {
      type: String,
      enum: ["pending", "answered"],
      default: "pending",
    },
    response: { type: String },
    file: { type: String }, // optional file path
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doubt", doubtSchema);
