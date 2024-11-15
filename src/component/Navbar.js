import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme === 'true' ? true : false;
    });

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        document.body.classList.toggle('dark-theme', newDarkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
            <h1 className="logo">PRecipe🍲📜🥄</h1>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                <li><NavLink to="/mainpage" onClick={toggleMenu}>Recipes</NavLink></li>
                <li><NavLink to="/saved-recipes" onClick={toggleMenu}>Saved Recipes</NavLink></li>
            </ul>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
            
        </nav>
    );
};

export default Navbar;
