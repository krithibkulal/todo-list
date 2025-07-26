import React, { useState } from 'react';
import './AddTask.css'; // Optional: for styling

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    // Add the task via parent callback
    addTask({ text: taskText });
    setTaskText('');
  };

  return (
    <div className="add-task-container">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
