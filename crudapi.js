require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let todos = [
  {id: 1, task: ' title', completed: completed},
  {id: 1, task: 'description', completed: completed},
  {id: 1, task: 'status', completed: pending},
];

app.get('/todos',  (req, res) => {
  res.status(200).json(todos);
});

app.post('/todos',  (req, res) => {
  const newTodo = {id: todos.length +1, ...req.body};
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.patch('/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({message: 'Todo not found' });
  Object.assign(todo, res.body);
  res.status(200).json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = todos.length;
  todos = todos.filter((t) => t.id !== id);
  if (todos.length === initialLength) 
    return res.status(404).json({message: 'Todo not found' });
  res.status(204).send();
});

app.use((req, res) => {
  res.status(500).json({message: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`APP is listening on port ${PORT}`);
});