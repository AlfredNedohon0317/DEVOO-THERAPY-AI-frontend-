// Exercises.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';
import './Exercises.css';

function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/exercises`)
      .then(response => {
        setExercises(response.data);
      })
      .catch(error => console.error('Error fetching exercises:', error));
  }, []);

  return (
    <div>
      <h1>Exercises</h1>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>{exercise.title}</li>
        ))}
      </ul>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default Exercises;

