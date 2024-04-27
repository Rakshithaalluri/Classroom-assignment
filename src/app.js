const express = require("express");
const authRouter = require("./routes/auth");
const assignmentRouter = require("./routes/assignments");
const database = require("./models/database");
require("dotenv").config();

const app = express();
app.use(express.json());

// Initialize database connection
database.dbInitializerAndConnection();

// Routes
app.use("/auth", authRouter);
app.use("/assignments", assignmentRouter);

module.exports = app;
