Classroom Assignments Micro-service
This micro-service provides authentication and CRUD operations for managing student assignments.

Installation
Clone the repository:
bash

git clone https://github.com/your_username/classroom-assignments.git
Navigate to the project directory:
bash

cd classroom-assignments
Install dependencies:
bash

npm install
Create a .env file in the root directory and define the following environment variables:

JWT_SECRET=your_secret_key
Start the server:

npm start
The server will start running at http://localhost:3000.
API Documentation
Refer to the API documentation for details on endpoints and usage. You can find it here 

Endpoints
Authentication
POST /auth/login
Description: Authenticates a user and returns a JWT token.
Request Body:
json

{
"username": "your_username",
"password": "your_password"
}
Response:
json

{
"jwtToken": "your_jwt_token"
}


Assignment Management
POST /assignments
Description: Creates a new assignment.
Request Body:
json

{
"title": "Assignment Title",
"description": "Assignment Description"
}
Response:
plaintext

"Assignment created successfully"


GET /assignments
Description: Retrieves all assignments.
Response:
json

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

{
"title": "Updated Title",
"description": "Updated Description"
}

Response:
plaintext

"Assignment updated successfully"
DELETE /assignments/:id
Description: Deletes an assignment by ID.
Request Parameters: id (Assignment ID)
Response:
plaintext

"Assignment deleted successfully"
Docker
To run the application using Docker:

Build the Docker image:
bash

docker build -t classroom-assignments .
Run the Docker container:
bash

docker run -p 3000:3000 -d classroom-assignments
The server will be accessible at http://localhost:3000.

