// server.js or routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Mongoose model

// POST /api/tasks
router.post('/', async (req, res) => {
  try {
    const newTask = new Task({
      task: req.body.task,
    });

    await newTask.save();
    res.status(201).json({ message: 'Task added' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding task' });
  }
});

module.exports = router;
