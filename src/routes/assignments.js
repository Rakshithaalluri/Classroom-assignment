const express = require("express");
const database = require("../models/database");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();

// Creates new assignment with data provided in the request body
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    await database.createAssignment(title, description);
    res.send("Assignment created successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Returns all assignments based on data provided in the request body
router.get("/", authenticateToken, async (req, res) => {
  try {
    const assignments = await database.getAllAssignments();
    res.json(assignments);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Updates assignment with data provided in the request body
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await database.updateAssignment(id, title, description);
    res.send("Assignment updated successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Deletes the assignment
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    await database.deleteAssignment(id);
    res.send("Assignment deleted successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
