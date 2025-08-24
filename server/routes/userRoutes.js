const express = require("express");
const router = express.Router();
const Professor = require("../models/Professor");
const Student = require("../models/Student");

// Get all professors
router.get("/professors", async (req, res) => {
  try {
    const professors = await Professor.find();
    res.json(professors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching professors" });
  }
});

// Add a professor
router.post("/professors", async (req, res) => {
  try {
    const { name, email, department } = req.body;
    const professor = new Professor({ name, email, department });
    await professor.save();
    res.status(201).json(professor);
  } catch (error) {
    res.status(500).json({ message: "Error adding professor" });
  }
});

// Get all students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
});

module.exports = router;
