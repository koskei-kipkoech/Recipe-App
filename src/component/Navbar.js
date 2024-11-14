import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme === 'true' ? true : false;
    });
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode", newDarkMode)
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
                {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
        </nav>
    );
};

export default Navbar;
