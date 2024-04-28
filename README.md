Project Structure

The project structure is organized as follows:

project-root/
│
├── models/
│ └── database.js # Database initialization and CRUD operations
│
├── routes/
│ ├── auth.js # Authentication routes (signup and login)
│ └── assignments.js # Assignment management routes
│
├── middleware/
│ └── authenticateToken.js # Middleware to authenticate JWT token
│
├── .env # Environment variables configuration
├── app.js # Main entry point of the application
└── package.json # Project dependencies and scripts

Setup Instructions

To run the application locally, follow these steps:
1.Clone the Repository:
git clone <repository-url>
cd classroom-assignment

2. Install Dependencies:
   npm install

3.Set Environment Variables:
Create a .env file in the root directory.
Add the following environment variables
JWT_SECRET= mysecretkey12345
PORT=3000

4.Initialize the Database:
Ensure that SQLite is installed on your system.
Run the database initialization script
npm run init-db

5.Start the Server:
npm start

6.Access APIs:
The server will start running at http://localhost:3000.
You can use tools like Postman to send requests to the available endpoints.

Available Endpoints

Authentication
Register: POST /auth/register
*Create a new user account.
*Request Body: { "username": "example", "password": "password123" }
\*Response: { "message": "User created successfully", "jwtToken": "generated-jwt-token" }

Login: POST /auth/login
*Authenticate user credentials and generate a JWT token.
*Request Body: { "username": "example", "password": "password123" }
\*Response: { "jwtToken": "generated-jwt-token" }

Assignment Management
*Create Assignment: POST /assignments
*Create a new assignment.
*Request Body: { "title": "Assignment Title", "description": "Assignment Description" }
*Authentication Required: Yes

Get All Assignments: GET /assignments
*Retrieve all assignments.
*Authentication Required: Yes

Update Assignment: PUT /assignments/:id
*Update an existing assignment.
*Request Body: { "title": "New Title", "description": "New Description" }
\*Authentication Required: Yes

Delete Assignment: DELETE /assignments/:id
*Delete an assignment by ID.
*Authentication Required: Yes
