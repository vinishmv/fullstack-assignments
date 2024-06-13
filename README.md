# MEAN Assignment

This repository contains a MEAN (MongoDB, Express, Angular, Node.js) application fulfilling the given assignment requirements.

## Project Structure

mean-assignment
│
├── mean-angular
│ ├── node_modules
│ ├── src
│ │ ├── app
│ │ │ ├── transaction-details
│ │ │ │ ├── transaction-details.component.html
│ │ │ │ ├── transaction-details.component.scss
│ │ │ │ ├── transaction-details.component.spec.ts
│ │ │ │ ├── transaction-details.component.ts
│ │ │ ├── transaction-list
│ │ │ │ ├── transaction-list.component.html
│ │ │ │ ├── transaction-list.component.scss
│ │ │ │ ├── transaction-list.component.spec.ts
│ │ │ │ ├── transaction-list.component.ts
│ │ │ ├── transaction.service.ts
│ │ │ ├── app-routing.module.ts
│ │ │ ├── app.component.html
│ │ │ ├── app.component.scss
│ │ │ ├── app.component.spec.ts
│ │ │ ├── app.component.ts
│ │ │ ├── app.module.ts
│ │ ├── assets
│ │ ├── environments
│ │ ├── styles.scss
│ ├── angular.json
│ ├── package.json
│ ├── README.md
│ ├── tsconfig.json
│ └── tslint.json
│
├── mean-node
│ ├── node_modules
│ ├── app.js
│ ├── package.json
│ ├── README.md
│ ├── transactions.json
│ └── .gitignore
│
├── transactions.json
└── README.md


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
