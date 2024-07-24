import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/Routes'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/therapists">Therapists</Link></li>
            <li><Link to="/exercises">Exercises</Link></li>
            <li><Link to="/community-chat">Community Chat</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
