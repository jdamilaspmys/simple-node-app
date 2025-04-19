# Simple Node App

This is a simple Node.js application that demonstrates basic CRUD operations using Express.js.

## Features

- **Express.js**: A minimal and flexible Node.js web application framework.
- **Modularized Routes**: User routes are separated into a dedicated module for better organization.
- **CRUD Operations**: Create, Read, Update, and Delete operations for managing users.
- **Nodemon**: Automatically restarts the server during development when file changes are detected.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd simple-node-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Mode

Start the application in development mode with Nodemon:
```bash
npm run dev
```

### Production Mode

Start the application in production mode:
```bash
npm start
```

## API Endpoints

### User Routes

- **GET /users**: Retrieve a list of all users.
- **POST /users**: Create a new user.
- **GET /users/:id**: Retrieve a user by ID.
- **PUT /users/:id**: Update a user by ID.
- **DELETE /users/:id**: Delete a user by ID.

## License

This project is licensed under the MIT License.