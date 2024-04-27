Classroom Assignments Micro-service
This micro-service provides authentication and CRUD operations for managing student assignments.

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your_username/classroom-assignments.git
Navigate to the project directory:
bash
Copy code
cd classroom-assignments
Install dependencies:
bash
Copy code
npm install
Create a .env file in the root directory and define the following environment variables:
plaintext
Copy code
JWT_SECRET=your_secret_key
Start the server:
bash
Copy code
npm start
The server will start running at http://localhost:3000.
API Documentation
Refer to the API documentation for details on endpoints and usage. You can find it here (attach the link once created).

Endpoints
Authentication
POST /auth/login
Description: Authenticates a user and returns a JWT token.
Request Body:
json
Copy code
{
"username": "your_username",
"password": "your_password"
}
Response:
json
Copy code
{
"jwtToken": "your_jwt_token"
}
Assignment Management
POST /assignments
Description: Creates a new assignment.
Request Body:
json
Copy code
{
"title": "Assignment Title",
"description": "Assignment Description"
}
Response:
plaintext
Copy code
"Assignment created successfully"
GET /assignments
Description: Retrieves all assignments.
Response:
json
Copy code
[
{
"id": 1,
"title": "Assignment Title",
"description": "Assignment Description"
},
{
"id": 2,
"title": "Another Assignment",
"description": "Another Description"
}
]
PUT /assignments/:id
Description: Updates an assignment by ID.
Request Parameters: id (Assignment ID)
Request Body:
json
Copy code
{
"title": "Updated Title",
"description": "Updated Description"
}
Response:
plaintext
Copy code
"Assignment updated successfully"
DELETE /assignments/:id
Description: Deletes an assignment by ID.
Request Parameters: id (Assignment ID)
Response:
plaintext
Copy code
"Assignment deleted successfully"
Docker
To run the application using Docker:

Build the Docker image:
bash
Copy code
docker build -t classroom-assignments .
Run the Docker container:
bash
Copy code
docker run -p 3000:3000 -d classroom-assignments
The server will be accessible at http://localhost:3000.
Contributing
Contributions are welcome! Please follow the guidelines in CONTRIBUTING.md.

License
This project is licensed under the MIT License.
