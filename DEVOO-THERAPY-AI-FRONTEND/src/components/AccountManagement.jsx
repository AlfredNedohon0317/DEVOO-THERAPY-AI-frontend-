import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AccountManagement() {
  const [formData, setFormData] = useState({ email: '', firstName: '', lastName: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.put(`${import.meta.env.VITE_API_URL}/update_account/`, formData, {
      headers: { Authorization: `Token ${token}` }
    })
      .then(response => {
        alert('Account updated successfully');
        navigate('/'); // Redirect to home page
      })
      .catch(error => {
        console.error('Error updating account:', error);
        alert('Failed to update account');
      });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      const token = localStorage.getItem('token');
      axios.delete(`${import.meta.env.VITE_API_URL}/delete_account/`, {
        headers: { Authorization: `Token ${token}` }
      })
        .then(response => {
          alert('Account deleted successfully');
          localStorage.removeItem('token');
          navigate('/'); // Redirect to home page
        })
        .catch(error => {
          console.error('Error deleting account:', error);
          alert('Failed to delete account');
        });
    }
  };

  return (
    <div>
      <h2>Manage Account</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <button type="submit">Update Account</button>
      </form>
      <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>Delete Account</button>
    </div>
  );
}

export default AccountManagement;
