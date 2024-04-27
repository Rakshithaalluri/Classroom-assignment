// createTables.js

const sqlite3 = require("sqlite3").verbose();

// Open SQLite database
const db = new sqlite3.Database("sqlite.db");

// SQL script to create tables
const createTablesSQL = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS assignments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        submission INT,
        marks INT
    );
`;

// Execute SQL script
db.serialize(() => {
  db.run(createTablesSQL, (err) => {
    if (err) {
      console.error("Error creating tables:", err.message);
    } else {
      console.log("Tables created successfully");
    }
  });
});

// Close database connection
db.close();
