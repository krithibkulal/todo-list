import React from 'react';
import './ViewTasks.css';

function ViewTasks({ tasks, markTaskDone, deleteTask }) {
  return (
    <div className="page-overlay">
      <div className="view-tasks-container">
        <h2>Your Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks available. Add some!</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li className="task-item" key={index}>
                <span className="task-text">{task.text}</span>
                <div className="task-buttons">
                  <button className="done-btn" onClick={() => markTaskDone(index)}>Done</button>
                  <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ViewTasks;
