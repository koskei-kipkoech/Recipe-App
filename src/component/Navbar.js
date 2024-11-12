import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-theme', !darkMode);
    };

    return (
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
            <h1 className="logo">PRecipe🍲📜🥄</h1>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/mainpage">Recipes</NavLink></li>
                <li><NavLink to="/saved-recipes">Saved Recipes</NavLink></li>
            </ul>
            <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? '🌞 Light' : '🌙 Dark'}
            </button>
        </nav>
    );
};

export default Navbar;
