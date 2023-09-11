# Person API

<div>
    <p align="center">
The Person API is a simple service for managing person data. It allows you to create, retrieve, update, and delete persons. This README guide will walk you through setting up, running, and using the API

</p>
</div>

## Prerequisites
<p>Before you begin, ensure you have the following software and resources installed on your system:</p>

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)


## Installation
- Clone the repository to your local machine:
  ```sh
    git clone https://github.com/eddy1759/HNG.git
  ```
- Change to the project directory:
    ```sh 
    cd stage2 
    ```
- Install the dependencies:
    ```sh
    npm install
    ```
    or

    ```sh
    yarn install
    ```
- Create a `.env file in the project root directory and set the following environment variables:
  ```sh
  PORT=<desired-port-number>
  MONGODB_URI=<your-mongodb-connection-string>
  ```
## Running the API
- To start the API server, run the following command:
  ```sh
    npm run dev
  ```
    or

    ```sh
    yarn run dev
    ```
The API will be available at `http://localhost:<PORT>`

## API Endpoints

#### Create a New Person
- **URL:** `/api`
- **Method:** `POST`
- **Request Body:**
```
    {
        "name": "Eddy"
    }
```
- **Response:**
  ```
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
- **URL:** `/api/:id`
- **Method:** `GET`
- **Response:**
  ```
    {
        "status": true,
        "message": "Person found",
        "data": {
            "person": {
                "id": "<person-id>",
                "name": "John Doe"
            }
        }
    }
  ```

#### Update Person
- **URL:** /api/user_id/:id

- **Method:** PUT
- **Request Body:**
```
{
    "name": "Updated Name"
}
```
**Response:**
```
{
    "status": true,
    "message": "Person updated successfully",
    "data": {
        "person": {
            "id": "<person-id>",
            "name": "Updated Name"
        }
    }
}
```

#### Delete Person
- **URL:** `/api/:id`
- **Method:** `DELETE`
- **Response:**
```
{
    "status": true,
    "message": "Person deleted successfully"
}
```