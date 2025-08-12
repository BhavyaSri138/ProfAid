const express = require("express");
const router = express.Router();
const Doubt = require("../models/Doubt");

// Create new doubt
router.post("/", async (req, res) => {
  try {
    const { title, description, studentEmail } = req.body;

    if (!title || !description || !studentEmail) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const doubt = new Doubt({
      title,
      description,
      studentEmail,
      status: "pending",
      response: ""
    });

    await doubt.save();
    res.status(201).json(doubt);
  } catch (error) {
    console.error("Error creating doubt:", error);
    res.status(400).json({ error: error.message });
  }
});

// Get all doubts for a student
router.get("/student/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const doubts = await Doubt.find({ studentEmail: email }).sort({ createdAt: -1 });
    res.json(doubts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
