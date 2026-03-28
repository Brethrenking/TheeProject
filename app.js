require('dotenv').config();
const express = require('express');
const app = express();

const todoRoutes = require('./routes/routes');

app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;