// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import CommunityChat from './components/CommunityChat';
import Exercises from './components/Exercises';
import Therapists from './components/Therapists';
import ChatInterface from './components/ChatInterface'; 
import AccountManagement from './components/AccountManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community-chat" element={<CommunityChat />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/chat" element={<ChatInterface />} /> {/* Chat route */}
        <Route path="/account" element={<AccountManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
