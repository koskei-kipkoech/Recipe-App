// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <a><NavLink to="/">Home</NavLink></a>
                <a><NavLink to="/mainpage">Recipes</NavLink></a>
            </ul>
        </nav>
    );
};

export default Navbar;
