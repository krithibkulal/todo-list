import React from 'react';
import './CompletedTasks.css';

function CompletedTasks({ completedTasks, deleteCompletedTask }) {
  return (
    <div className="page-overlay">
      <div className="completed-tasks-container">
        <h2>🎉 Completed Tasks</h2>
        {completedTasks.length === 0 ? (
          <p>No tasks completed yet.</p>
        ) : (
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index} className="completed-task-item">
                <span>{task.text}</span>
                <button onClick={() => deleteCompletedTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CompletedTasks;
