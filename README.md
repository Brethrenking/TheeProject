# TheeProject

A simple Express.js task management API with in-memory CRUD operations for tasks.

## Features

- GET `/tasks` - List all tasks
- GET `/tasks/:id` - Retrieve a task by ID
- POST `/tasks` - Create a new task
- PATCH `/tasks/:id` - Update an existing task
- DELETE `/tasks/:id` - Remove a task

## Project Structure

- `server.js` - Starts the Express application
- `app.js` - Configures Express and routes
- `routes/routes.js` - Defines task-related API routes
- `controllers/taskController.js` - Implements route handlers and task logic



## Installation

1. Clone or copy the repository
2. Install dependencies:

```bash
npm install
```

## Running the App

Start the server:

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

The server listens on `http://localhost:3000` by default. Set the `PORT` environment variable to override the port.


## Notes

- Data is stored in memory and resets when the server restarts.
- The API uses CommonJS modules and Express 5.
