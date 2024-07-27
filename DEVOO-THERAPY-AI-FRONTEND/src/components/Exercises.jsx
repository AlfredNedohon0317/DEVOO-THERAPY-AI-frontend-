import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Exercises.css';

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({ title: '', description: '', video_url: '', website: '' });
  const [editingExercise, setEditingExercise] = useState(null);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/exercises/`)
      .then(response => {
        setExercises(response.data);
      })
      .catch(error => console.error('Error fetching exercises:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingExercise) {
      setEditingExercise({ ...editingExercise, [name]: value });
    } else {
      setNewExercise({ ...newExercise, [name]: value });
    }
  };

  const handleCreateExercise = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/exercises/`, newExercise)
      .then(response => {
        setExercises([...exercises, response.data]);
        setNewExercise({ title: '', description: '', video_url: '', website: '' });
      })
      .catch(error => console.error('Error creating exercise:', error));
  };

  const handleEditClick = (exercise) => {
    setEditingExercise(exercise);
  };

  const handleUpdateExercise = (e) => {
    e.preventDefault();
    axios.put(`${import.meta.env.VITE_API_URL}/exercises/${editingExercise.id}/`, editingExercise)
      .then(response => {
        setExercises(exercises.map(e => e.id === response.data.id ? response.data : e));
        setEditingExercise(null);
      })
      .catch(error => console.error('Error updating exercise:', error));
  };

  const handleDeleteExercise = (id) => {
    axios.delete(`${import.meta.env.VITE_API_URL}/exercises/${id}/`)
      .then(() => {
        setExercises(exercises.filter(exercise => exercise.id !== id));
      })
      .catch(error => console.error('Error deleting exercise:', error));
  };

  return (
    <div>
      <h1>Exercises</h1>
      <ul>
      {exercises.map(exercise => (
    <li key={exercise.id}>
        <h3>{exercise.title}</h3>
        <p>Description: {exercise.description}</p>
        <p>
            Video URL: 
            <a href={exercise.video_url} target="_blank" rel="noopener noreferrer">
                {exercise.video_url}
            </a>
        </p>
        <p>
            Website: 
            <a href={exercise.website_url} target="_blank" rel="noopener noreferrer">
                {exercise.website_url}
            </a>
        </p>
        <button onClick={() => handleEditClick(exercise)}>Edit</button>
        <button onClick={() => handleDeleteExercise(exercise.id)}>Delete</button>
    </li>
))}
      </ul>

      <h2>{editingExercise ? 'Edit Exercise' : 'Create Exercise'}</h2>
      <form onSubmit={editingExercise ? handleUpdateExercise : handleCreateExercise}>
        <input
          type="text"
          name="title"
          value={editingExercise ? editingExercise.title : newExercise.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={editingExercise ? editingExercise.description : newExercise.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          type="url"
          name="video_url"
          value={editingExercise ? editingExercise.video_url : newExercise.video_url}
          onChange={handleInputChange}
          placeholder="Video URL"
        />
        <input
          type="url"
          name="website"
          value={editingExercise ? editingExercise.website : newExercise.website}
          onChange={handleInputChange}
          placeholder="Website"
        />
        <button type="submit">{editingExercise ? 'Update' : 'Create'}</button>
      </form>

      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default Exercises;
