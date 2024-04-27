// import sqlite3 module
const sqlite3 = require("sqlite3");

// open a connection to the SQLite database
const db = new sqlite3.Database("./db/sqlite.db");

// SQL statements to insert data into users table
const insertUsersSQL = `
    INSERT INTO users (username, password) 
    VALUES 
    ('hari', 'hari123'),
    ('neha', 'neha123'),
    ('arun', 'arun123'),
    ('sathish', 'sathish123'),
    ('sonu', 'sonu123'),
    ('emma_watson', 'harrypotter'),
    ('leonardo_dicaprio', 'inception123'),
    ('scarlett_johansson', 'blackwidow'),
    ('tom_hanks', 'forestgump')
`;

// SQL statements to insert data into assignments table
const insertAssignmentsSQL = `
    INSERT INTO assignments (title, description, submission, marks) 
    VALUES 
    ('Chemistry Lab Report', 'Perform titration experiment and write a report', 24/11, 90),
    ('Literature Analysis', 'Analyze the themes in "To Kill a Mockingbird"', 15/11, 80),
    ('Physics Problem Set', 'Solve problems on Newtonian mechanics', 23/11, 90),
    ('Geography Project', 'Create a presentation on climate change', 12/11, 95),
    ('Music Composition', 'Compose a piece of music for piano', 5/11, 70),
    ('Science Project', 'Create a model of the solar system', 0, NULL),
('History Essay', 'Write a paper on the causes of World War II', 0, NULL),
 ('Artwork Portfolio', 'Submit a portfolio of your artwork', 0, NULL),
 ('Computer Programming Assignment', 'Write a program to calculate Fibonacci sequence', 0, NULL);
`;

// Execute SQL statements to insert data
db.serialize(() => {
  db.run(insertUsersSQL, (err) => {
    if (err) {
      console.error("Error inserting data into users table:", err);
    } else {
      console.log("Data inserted into users table successfully");
    }
  });

  db.run(insertAssignmentsSQL, (err) => {
    if (err) {
      console.error("Error inserting data into assignments table:", err);
    } else {
      console.log("Data inserted into assignments table successfully");
    }
  });
});

// Close the database connection
db.close();
