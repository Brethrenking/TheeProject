const express = require('express');
const app = express();

const taskRoutes = require('./routes/routes');

app.use(express.json());

app.use('/tasks', taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;