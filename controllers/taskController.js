
// dummy data for tasks
let tasks = [
  { id: 1, title: "Learn Node", description: "Finish Express Project", status: "pending" },
  { id: 2, title: "Build API", description: "Create CRUD endpoints for tasks", status: "completed" },
  { id: 3, title: "Study Databases", description: "Learn MongoDB and indexing", status: "pending" },
  { id: 4, title: "Frontend Practice", description: "Build a React todo app UI", status: "completed" },
  { id: 5, title: "Deploy App", description: "Deploy project to Render or Vercel", status: "pending" }
];


// Get all tasks
function getTasks(req, res) {

  res.status(200).json(tasks);
}

// Get a single task by ID
function getTaskById(req, res) {
  // Find the task with the matching ID from the tasks array
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  // If no task is found, return 404 error
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  // If found, return the task
  res.json(task);
}

// Create a new task
function createTask(req, res) {
  
  const { title, description, status } = req.body;

  // Validate required fields (title and description must exist)
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description required' });
  }


  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status: status || 'pending'
  };

  // Add new task to the tasks array
  tasks.push(newTask);

 
  res.status(201).json(newTask);
}

// Update an existing task
function updateTask(req, res) {

  const task = tasks.find(t => t.id === parseInt(req.params.id));


  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

 

  Object.assign(task, req.body);


  res.json(task);
}

// Delete a task
function deleteTask(req, res) {

  const id = parseInt(req.params.id);

  
  const initialLength = tasks.length;

 
  tasks = tasks.filter(t => t.id !== id);


  if (tasks.length === initialLength) {
    return res.status(404).json({ message: 'Task not found' });
  }

 
  res.status(204).send();
}

// Export all controller functions for use in routes
module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
