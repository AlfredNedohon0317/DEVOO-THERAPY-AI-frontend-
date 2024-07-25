// Therapists.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import './Therapists.css';

function Therapists() {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/therapists`)
      .then(response => {
        setTherapists(response.data);
      })
      .catch(error => console.error('Error fetching therapists:', error));
  }, []);

  return (
    <div>
      <h1>Therapists</h1>
      <ul>
        {therapists.map(therapist => (
          <li key={therapist.id}>{therapist.name} - {therapist.specialty}</li>
        ))}
      </ul>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default Therapists;

