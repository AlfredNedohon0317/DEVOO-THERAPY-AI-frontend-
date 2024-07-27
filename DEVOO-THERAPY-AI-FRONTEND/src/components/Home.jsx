import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <h1 className="main-heading">Welcome to DEVOO Therapy</h1>
            <p>Your journey towards mental wellness starts here. Explore exercises, chat with DEVOO, and connect with therapists.</p>
            <div className="button-group">
                <Link to="/chat"><button>Chat with DEVOO</button></Link>
                <Link to="/therapists"><button>Find a Therapist</button></Link>
                <Link to="/exercises"><button>Explore Exercises</button></Link>
            </div>
        </div>
    );
}

export default Home;

