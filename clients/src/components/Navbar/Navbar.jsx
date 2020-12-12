import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar-brand">
            <span>Todo App</span>
            </div>

        <ul className="Navbar-links">
            <li className="Navbar-link">
                <link to="/">
                    Homepage
                </link>
            </li>

            <li className="Navbar-link">
                <link to="/todos">
                    View Todos
                </link>
            </li>

            <li className="Navbar-link">
                <link to="/todo/new">
                    Add Todo
                </link>
            </li>
        </ul>
        </nav >
    )
}

export default Navbar;
