# Asset Management System

## Overview

This is a Node.js-based Asset Management System built using Express and MongoDB. It allows users to create, update, view, and delete assets, as well as assign assets to users.

## Features

- Create new assets
- Retrieve all assets or a specific asset by ID
- Update asset details
- Delete assets
- Assign assets to users

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables. Create a `.env` file in the root directory and add your MongoDB connection string:

    ```env
    MONGODB_URI=mongodb://localhost:27017/your-database
    ```

5. Start the application:

    ```bash
    npm start
    ```

### API Endpoints

- **Create Asset**
    - `POST /assets`
    - Body: `{ "name": "string", "type": "string", "status": "string", "purchaseDate": "date", "serialNumber": "string", "location": "string", "assignedTo": "userId" }`

- **Get All Assets**
    - `GET /assets`

- **Get Asset by ID**
    - `GET /assets/:id`

- **Update Asset**
    - `PUT /assets/:id`
    - Body: `{ "name": "string", "type": "string", "status": "string", "purchaseDate": "date", "serialNumber": "string", "location": "string", "assignedTo": "userId" }`

- **Delete Asset**
    - `DELETE /assets/:id`

- **Assign Asset to User**
    - `POST /assign/:userId/:assetId`
    - Params: `userId` and `assetId`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
