const express = require("express");
const router = express.Router();
const Doubt = require("../models/Doubt"); // adjust path if needed

// GET all doubts for a professor
router.get("/professor/:email", async (req, res) => {
  try {
    const professorEmail = req.params.email;
    const doubts = await Doubt.find({ professorEmail });
    res.json(doubts);
  } catch (err) {
    res.status(500).json({ error: "Error fetching doubts" });
  }
});

module.exports = router;
