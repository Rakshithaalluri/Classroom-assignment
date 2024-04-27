const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const app = express();

let db = null;
const dbPath = path.join(__dirname, "../../db/sqlite.db");

const dbInitializerAndConnection = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("server running at http://localhost:3000/");
    });
    console.log("Database connection established successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

const getUserByUsername = async (username) => {
  const query = "SELECT * FROM users WHERE username = ?";
  return await db.get(query, [username]);
};

const createAssignment = async (title, description) => {
  const query =
    "INSERT INTO assignments (title, description, date, marks) VALUES (?, ?. ?, ?)";
  await db.run(query, [title, description, date, marks]);
};

const getAllAssignments = async () => {
  return await db.all("SELECT * FROM assignments");
};

const updateAssignment = async (id, title, description) => {
  const query =
    "UPDATE assignments SET title = ?, description = ? WHERE id = ?";
  await db.run(query, [title, description, id]);
};

const deleteAssignment = async (id) => {
  await db.run("DELETE FROM assignments WHERE id = ?", [id]);
};

module.exports = {
  dbInitializerAndConnection,
  getUserByUsername,
  createAssignment,
  getAllAssignments,
  updateAssignment,
  deleteAssignment,
};
