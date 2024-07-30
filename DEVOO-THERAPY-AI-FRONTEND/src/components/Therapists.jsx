// Therapists.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Therapists.css';

function Therapists() {
  const [therapists, setTherapists] = useState([]);
  const [newTherapist, setNewTherapist] = useState({ name: '', specialty: '', phone_number: '', location: '', website: '' });
  const [editingTherapist, setEditingTherapist] = useState(null);

  useEffect(() => {
    fetchTherapists();
  }, []);

  const fetchTherapists = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/therapists/`)
      .then(response => {
        setTherapists(response.data);
      })
      .catch(error => console.error('Error fetching therapists:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingTherapist) {
      setEditingTherapist({ ...editingTherapist, [name]: value });
    } else {
      setNewTherapist({ ...newTherapist, [name]: value });
    }
  };

  const handleCreateTherapist = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/therapists/`, newTherapist)
      .then(response => {
        setTherapists([...therapists, response.data]);
        setNewTherapist({ name: '', specialty: '', phone_number: '', location: '', website: '' });
      })
      .catch(error => console.error('Error creating therapist:', error));
  };

  const handleEditClick = (therapist) => {
    setEditingTherapist(therapist);
  };

  const handleUpdateTherapist = (e) => {
    e.preventDefault();
    axios.put(`${import.meta.env.VITE_API_URL}/therapists/${editingTherapist.id}/`, editingTherapist)
      .then(response => {
        setTherapists(therapists.map(t => t.id === response.data.id ? response.data : t));
        setEditingTherapist(null);
      })
      .catch(error => console.error('Error updating therapist:', error));
  };

  const handleDeleteTherapist = (id) => {
    axios.delete(`${import.meta.env.VITE_API_URL}/therapists/${id}/`)
      .then(() => {
        setTherapists(therapists.filter(therapist => therapist.id !== id));
      })
      .catch(error => console.error('Error deleting therapist:', error));
  };

  return (
    <div>
      <h1>Therapists</h1>
      // Therapists.jsx
<ul>
  {therapists.map(therapist => (
    <li key={therapist.id}>
      <h3>{therapist.name}</h3>
      <p>Specialty: {therapist.specialty}</p>
      <p>Phone Number: {therapist.phone_number}</p>
      <p>Location: {therapist.location}</p>
      <p>
        Website: 
        <a href={therapist.website} target="_blank" rel="noopener noreferrer">
          {therapist.website}
        </a>
      </p>
      <button onClick={() => handleEditClick(therapist)}>Edit</button>
      <button onClick={() => handleDeleteTherapist(therapist.id)}>Delete</button>
    </li>
  ))}
</ul>


      <h2>{editingTherapist ? 'Edit Therapist' : 'Create Therapist'}</h2>
      <form onSubmit={editingTherapist ? handleUpdateTherapist : handleCreateTherapist}>
        <input
          type="text"
          name="name"
          value={editingTherapist ? editingTherapist.name : newTherapist.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="specialty"
          value={editingTherapist ? editingTherapist.specialty : newTherapist.specialty}
          onChange={handleInputChange}
          placeholder="Specialty"
          required
        />
        <input
          type="text"
          name="phone_number"
          value={editingTherapist ? editingTherapist.phone_number : newTherapist.phone_number}
          onChange={handleInputChange}
          placeholder="Phone Number"
        />
        <input
          type="text"
          name="location"
          value={editingTherapist ? editingTherapist.location : newTherapist.location}
          onChange={handleInputChange}
          placeholder="Location"
        />
        <input
          type="url"
          name="website"
          value={editingTherapist ? editingTherapist.website : newTherapist.website}
          onChange={handleInputChange}
          placeholder="Website"
        />
        <button type="submit">{editingTherapist ? 'Update' : 'Create'}</button>
      </form>

      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default Therapists;
