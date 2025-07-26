import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AddTask from './pages/AddTask';
import ViewTasks from './pages/ViewTasks';
import CompletedTasks from './pages/CompletedTasks';

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [completedTasks, setCompletedTasks] = useState(() => {
    const stored = localStorage.getItem('completedTasks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskDone = (index) => {
    const taskToMove = tasks[index];
    setCompletedTasks([...completedTasks, taskToMove]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div style={{ textAlign: 'center', marginTop: '50px' }}><h1>Welcome to To-Do Master 📝</h1></div>} />
        <Route path="/add" element={<AddTask addTask={addTask} />} />
        <Route path="/view" element={<ViewTasks tasks={tasks} markTaskDone={markTaskDone} deleteTask={deleteTask} setTasks={setTasks}/>} />
        <Route path="/completed" element={<CompletedTasks completedTasks={completedTasks} />} />
      </Routes>
    </Router>
  );
}

export default App;
