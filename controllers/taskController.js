

let tasks = [
  { id: 1, title: "Learn Node", description: "Finish Express Project", status: "pending" },
  { id: 2, title: "Build API", description: "Create CRUD endpoints for tasks", status: "completed" },
  { id: 3, title: "Study Databases", description: "Learn MongoDB and indexing", status: "pending" },
  { id: 4, title: "Frontend Practice", description: "Build a React todo app UI", status: "completed" },
  { id: 5, title: "Deploy App", description: "Deploy project to Render or Vercel", status: "pending" }
];





function getTasks(req, res) {
  res.status(200).json(tasks);
}

function getTaskById(req, res) {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
}

function createTask(req, res) {
  const { title, description, status } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description required' });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status: status || 'pending'
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
}

function updateTask(req, res) {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  Object.assign(task, req.body);
  res.json(task);
}

function deleteTask(req, res) {
  const id = parseInt(req.params.id);
  const initialLength = tasks.length;

  tasks = tasks.filter(t => t.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.status(204).send();
}

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
