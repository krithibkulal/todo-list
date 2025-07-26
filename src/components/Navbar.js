// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">📝 ToDo App</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add Task</Link>
        <Link to="/completed">Completed Tasks</Link>
        <Link to="/view">View Tasks</Link>

      </div>
    </nav>
  );
};

export default Navbar;
