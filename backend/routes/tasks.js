const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Mongoose model

// POST /api/tasks
router.post('/', async (req, res) => {
  try {
    const newTask = new Task({
      text: req.body.text,  // ✅ This matches frontend
    });

    await newTask.save();
    res.status(201).json({ message: 'Task added', task: newTask });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding task' });
  }
});
// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});


module.exports = router;
