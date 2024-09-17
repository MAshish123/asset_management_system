# Asset Management System

## Overview

This is a Node.js-based Asset Management System built using Express and MongoDB. It is designed to manage assets, users, and their assignments. The system allows for the creation, retrieval, updating, and deletion of assets and users.

## Features

- **Asset Management:**
  - Create new assets
  - Retrieve all assets or a specific asset by ID
  - Update asset details
  - Delete assets
  - Assign assets to users

- **User Management:**
  - Create new users
  - Retrieve all users or a specific user by ID
  - Update user details
  - Delete users

## Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/MAshish123/asset_management_system.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd asset_management_system
    ```

3. **Install Dependencies:**

    ```bash
    npm install
    ```

4. **Set Up Environment Variables:**

    Create a `.env` file in the root directory with the following content:

    ```env
    MONGODB_URI=mongodb://localhost:27017/asset_management
    ```

    Replace the MongoDB URI with your own if needed.

5. **Start the Application:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000` by default.

## API Endpoints

### Asset Endpoints

- **Create Asset**
  - `POST /assets`
  - **Body:**
    ```json
    {
      "name": "Asset Name",
      "type": "Asset Type",
      "status": "available",
      "purchaseDate": "YYYY-MM-DD",
      "serialNumber": "Asset Serial Number",
      "location": "Asset Location"
    }
    ```

- **Get All Assets**
  - `GET /assets`

- **Get Asset by ID**
  - `GET /assets/:id`

- **Update Asset**
  - `PUT /assets/:id`
  - **Body:**
    ```json
    {
      "name": "Updated Asset Name",
      "type": "Updated Asset Type",
      "status": "in use",
      "purchaseDate": "YYYY-MM-DD",
      "serialNumber": "Updated Serial Number",
      "location": "Updated Location"
    }
    ```

- **Delete Asset**
  - `DELETE /assets/:id`

- **Assign Asset to User**
  - `POST /assign/:userId/:assetId`
  - **Params:**
    - `userId`: ID of the user
    - `assetId`: ID of the asset

### User Endpoints

- **Create User**
  - `POST /users`
  - **Body:**
    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "role": "employee"
    }
    ```

- **Get All Users**
  - `GET /users`

- **Get User by ID**
  - `GET /users/:id`

- **Update User**
  - `PUT /users/:id`
  - **Body:**
    ```json
    {
      "name": "Updated User Name",
      "email": "updated@example.com",
      "role": "admin"
    }
    ```

- **Delete User**
  - `DELETE /users/:id`

## Contributing

Since this project was created for interview purposes, contributions are not currently accepted. However, if you have suggestions or improvements, feel free to fork the repository and make changes on your own.

 

## Contact

For any questions or further information, please contact me at [ashish.mishra.dev000@gmail.com](mailto:ashish.mishra.dev000@gmail.com).
