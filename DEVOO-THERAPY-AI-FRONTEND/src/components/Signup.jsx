import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/signup/`, formData)
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
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          autoComplete="username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          autoComplete="given-name"
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          autoComplete="family-name"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

