import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    const location = useLocation();


    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/skills', label: 'Skills' },
        { path: '/resume', label: 'Resume' },
        { path: '/contact', label: 'Contact' }
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar">
            <ul>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className={isActive(item.path) ? 'active' : ''}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;