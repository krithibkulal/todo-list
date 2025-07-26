// src/pages/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="page-overlay"></div>
      <div className="overlay">
        <h1 className="home-title">Welcome to Your To-Do App</h1>
         <p>Your personal productivity assistant. Start adding tasks, track them, and mark as complete.</p>
        <p className="home-subtitle">Organize your tasks, track your progress, and boost your productivity.</p>
        <div className="home-buttons">
          <a href="/add" className="home-btn">➕ Add Task</a>
          <a href="/view" className="home-btn">📋 View Tasks</a>
          <a href="/completed" className="home-btn">✅ Completed</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
