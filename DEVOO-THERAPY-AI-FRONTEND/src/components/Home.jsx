import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to DEVOO THERAPY AI</h1>
      <button className="signup-button">
        <Link to="/signup">Sign Up</Link>
      </button>
      <button className="login-button">
        <Link to="/login">Login</Link>
      </button>
      <button className="chat-button">
        <Link to="/chat">Chat with AI</Link>
      </button>
      <nav>
        <ul>
          <li><Link to="/community-chat">Community Chat</Link></li>
          <li><Link to="/therapists">Therapists</Link></li>
          <li><Link to="/exercises">Exercises</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
