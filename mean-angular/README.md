
# MEAN Assignment

This repository contains a MEAN (MongoDB, Express, Angular, Node.js) application fulfilling the given assignment requirements.

## Project Structure

mean-assignment
│
├── mean-angular
│ ├── ...
│
├── mean-node
│ ├── ...



## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Setup Instructions

### Backend (Node.js + Express + MongoDB)

1. Navigate to the `mean-node` directory:

    ```bash
    cd mean-node
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start MongoDB (if not already running):

    ```bash
    mongod
    ```

4. Start the server:

    ```bash
    node app.js
    ```

    The server will be running at `http://localhost:3000`.

### Frontend (Angular)

1. Navigate to the `mean-angular` directory:

    ```bash
    cd mean-angular
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the Angular application:

    ```bash
    ng serve --open
    ```

    The application will be running at `http://localhost:4200`.

## Notes

- Ensure that MongoDB is running before starting the Node.js server.
- Make sure to run both the backend and frontend simultaneously.
- Update the MongoDB connection string in `app.js` if necessary.


