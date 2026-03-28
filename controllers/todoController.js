

let todos = [
  { id: 1, title:"Learn Node", description:"Finish Express Project", status: "pending" },
  { id: 2, title: "description", description:"", status: true },
  { id: 3, title: "status", description:"", status: false },
];

function getTodos(req, res) {
  res.status(200).json(todos);
}

// ✅ ACTIVE FIRST added by Patrick
function getActiveTodos(req, res) {
  const active = todos.filter((t) => !t.completed);
  res.json(active);
}

function createTodo(req, res) {
  const newTodo = { id: todos.length + 1, ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
}

function updateTodo(req, res) {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  Object.assign(todo, req.body);
  res.status(200).json(todo);
}

function deleteTodo(req, res) {
  const id = parseInt(req.params.id);
  const initialLength = todos.length;
  todos = todos.filter((t) => t.id !== id);
  if (todos.length === initialLength)
    return res.status(404).json({ message: "Todo not found" });
  res.status(204).send();
}

module.exports = {
  getTodos,
  getActiveTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
