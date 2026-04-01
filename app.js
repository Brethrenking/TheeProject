const express = require('express');
const app = express();
const taskRoutes = require('./routes/routes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use task routes
app.use('/tasks', taskRoutes);


// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;