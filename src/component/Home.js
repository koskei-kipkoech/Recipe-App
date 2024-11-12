// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/mainpage');
    };

    return (
        <div className="home-container">
            <h1>Welcome to My Recipe App</h1>
            <p>Find and explore delicious recipes from around the world.</p>
            <button onClick={handleNavigate}>Go to Main Page</button>
        </div>
    );
};

export default Home;
