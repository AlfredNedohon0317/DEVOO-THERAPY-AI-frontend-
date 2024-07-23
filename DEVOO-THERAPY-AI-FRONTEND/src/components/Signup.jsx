import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/signup/`, { username, password })
      .then(response => {
        console.log('User signed up:', response.data);
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
