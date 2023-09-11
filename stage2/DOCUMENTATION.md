# API Documentation
<div>
    <p align="center">
        This document outlines the standard formats for requests and responses for each endpoint of the Person API. It also provides sample usage and instructions for setting up and deploying the API locally or on a server.
    </p>
</div>

## API Endpoints

#### Using the API
The API provides the following endpoints for managing persons:

- POST `/api`: Create a new person.
- GET `/api/:id`: Retrieve a person by their ID.
- PUT `/api/:id`: Update a person by their ID.
- DELETE `/api/:id`: Delete a person by their ID.

#### Standard Request and Response Formats
- For the `POST` and `PUT` endpoints, send a JSON request body with the name field.
- For the `GET` endpoint, you will receive a JSON response with the person's details if found.
- For the `DELETE` endpoint, no request body is required, and a successful deletion will return a 204 status code.

#### Create a New Person
- **URL:** `/api`
- **Method:** `POST`
- **Request Format:**
```
    {
        "name": "Eddy"
    }
```
- **Response Format:**
  ```
  {
    "status": boolean,
    "message": "string",
        "data": {
            "person": {
                "id": "string",
                "name": "string"
            }
        }
    }
  ```

#### Get Person by ID
- **URL:** `/api/:id`
- **Method:** `GET`
- **Response Format:**
  ```
    {
        "status": boolean,
        "message": "string",
        "data": {
            "person": {
                "id": "string",
                "name": "string"
            }
        }
    }
  ```

#### Update Person
- **URL:** /api/user_id/:id
- **Method:** PUT
- **Request Format:**
```
{
    "name": "Updated Name"
}
```
**Response Format:**
```
{
    "status": boolean,
    "message": "string",
    "data": {
        "person": {
            "id": "string",
            "name": "string"
        }
    }
}
```

#### Delete Person
- **URL:** `/api/:id`
- **Method:** `DELETE`
- **Response Format:**
```
{
    "status": boolean,
    "message": "string"
}
```

## Sample Usage
#### Create a New Person
**Request:**
```sh
    POST /api
    Content-Type: application/json

    {
        "name": "Eddy"
    }
```
**Response:**
```sh
    HTTP/1.1 201 Created
    Content-Type: application/json

    {
        "status": true,
        "message": "Person created successfully",
        "data": {
            "person": {
                "id": "<person-id>",
                "name": "John Doe"
            }
        }
    }
```
#### Get Person by ID
**Request:**
```sh
    POST /api/<person_id>
```
**Response:**
```sh
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
        "status": true,
        "message": "Person created successfully",
        "data": {
            "person": {
                "id": "<person-id>",
                "name": "John Doe"
            }
        }
    }
```
#### Update Person
**Request:**
```sh
    PUT /api/<person-id>
    Content-Type: application/json

    {
        "name": "Updated Name"
    }
```
**Response:**
```sh
    HTTP/1.1 200 OK
    Content-Type: application/json

    {
        "status": true,
        "message": "Person created successfully",
        "data": {
            "person": {
                "id": "<person-id>",
                "name": "Updated Name"
            }
        }
    }
```
#### Delete Person
**Request:**
```sh
    DELETE /api/<person_id>
```
**Response:**
```sh
    HTTP/1.1 204 No Content
```

## Local Setup and Deployment
- Clone the repository and follow the installation steps mentioned in the `README.md`` file.
- Set up a MongoDB server and provide the connection string in the .env file.
- Start the API by running npm start.
- The API will be available at http://localhost:<PORT>.