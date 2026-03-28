const express = require('express');
const router = express.Router();

const {
  getTodos,
  getActiveTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

router.get('/', getTodos);
router.get('/active', getActiveTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;