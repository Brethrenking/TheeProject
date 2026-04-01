
const express = require('express');


const router = express.Router();

// Import Controller Functions from taskController

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController.js');

//  ROUTES 


// Fetch all tasks
router.get('/', getTasks);


// Fetch a single task by ID (e.g., /tasks/1)
router.get('/:id', getTaskById);


// Create a new task
router.post('/', createTask);


// Update part of a task (e.g., change status or title)
router.patch('/:id', updateTask);


// Delete a task by ID
router.delete('/:id', deleteTask);


module.exports = router;