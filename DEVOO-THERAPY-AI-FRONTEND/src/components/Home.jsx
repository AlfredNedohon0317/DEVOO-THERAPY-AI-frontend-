import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../assets/image-1.png'; // Adjust the path to your logo

function Home() {
    return (
        <div className="container">
            <div className="top-buttons">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/signup">
                    <button>Sign up</button>
                </Link>
            </div>
            <img src={logo} alt="DEVOO Therapy Logo" className="logo" width={400} />
            <h1 className="main-heading">Welcome to DEVOO Therapy</h1>
            <p>Your journey towards mental wellness starts here. Explore exercises, chat with DEVOO, and connect with therapists.</p>
            <div className="button-row">
                <Link to="/chat">
                    <button>Chat with DEVOO</button>
                </Link>
                <Link to="/therapists">
                    <button>Find a Therapist</button>
                </Link>
                <Link to="/exercises">
                    <button>Explore Exercises</button>
                </Link>
                <Link to="/communitychat">
                    <button>Community Chat</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;



